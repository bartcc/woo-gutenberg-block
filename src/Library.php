<?php
/**
 * Initializes blocks in WordPress.
 *
 * @package WooCommerce/Blocks
 */

namespace Automattic\WooCommerce\Blocks;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Blocks\Payments\PaymentMethodRegistry;

/**
 * Library class.
 */
class Library {

	/**
	 * Initialize block library features.
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_blocks' ) );
		add_action( 'init', array( __CLASS__, 'register_payment_methods' ) );
		add_action( 'init', array( __CLASS__, 'define_tables' ) );
		add_action( 'init', array( __CLASS__, 'maybe_create_tables' ) );
		add_action( 'init', array( __CLASS__, 'maybe_create_cronjobs' ) );
		add_filter( 'wc_order_statuses', array( __CLASS__, 'register_draft_order_status' ) );
		add_filter( 'woocommerce_register_shop_order_post_statuses', array( __CLASS__, 'register_draft_order_post_status' ) );
		add_filter( 'woocommerce_valid_order_statuses_for_payment', array( __CLASS__, 'append_draft_order_post_status' ) );
		add_action( 'woocommerce_cleanup_draft_orders', array( __CLASS__, 'delete_expired_draft_orders' ) );
	}

	/**
	 * Register custom tables within $wpdb object.
	 */
	public static function define_tables() {
		global $wpdb;

		// List of tables without prefixes.
		$tables = array(
			'wc_reserved_stock' => 'wc_reserved_stock',
		);

		foreach ( $tables as $name => $table ) {
			$wpdb->$name    = $wpdb->prefix . $table;
			$wpdb->tables[] = $table;
		}
	}

	/**
	 * Set up the database tables which the plugin needs to function.
	 */
	public static function maybe_create_tables() {
		$db_version = get_option( 'wc_blocks_db_version', 0 );

		if ( version_compare( $db_version, \Automattic\WooCommerce\Blocks\Package::get_version(), '>=' ) ) {
			return;
		}

		global $wpdb;

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		$wpdb->hide_errors();
		$collate = '';

		if ( $wpdb->has_cap( 'collation' ) ) {
			$collate = $wpdb->get_charset_collate();
		}

		dbDelta(
			"
			CREATE TABLE {$wpdb->prefix}wc_reserved_stock (
				`order_id` bigint(20) NOT NULL,
				`product_id` bigint(20) NOT NULL,
				`stock_quantity` double NOT NULL DEFAULT 0,
				`timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
				`expires` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
				PRIMARY KEY  (`order_id`, `product_id`)
			) $collate;
			"
		);

		update_option( 'wc_blocks_db_version', \Automattic\WooCommerce\Blocks\Package::get_version() );
	}

	/**
	 * Maybe create cron events.
	 */
	public static function maybe_create_cronjobs() {
		if ( function_exists( 'as_next_scheduled_action' ) && false === as_next_scheduled_action( 'woocommerce_cleanup_draft_orders' ) ) {
			as_schedule_recurring_action( strtotime( 'midnight tonight' ), DAY_IN_SECONDS, 'woocommerce_cleanup_draft_orders' );
		}
	}

	/**
	 * Register blocks, hooking up assets and render functions as needed.
	 */
	public static function register_blocks() {
		global $wp_version;
		$blocks = [
			'AllReviews',
			'FeaturedCategory',
			'FeaturedProduct',
			'HandpickedProducts',
			'ProductBestSellers',
			'ProductCategories',
			'ProductCategory',
			'ProductNew',
			'ProductOnSale',
			'ProductsByAttribute',
			'ProductTopRated',
			'ReviewsByProduct',
			'ReviewsByCategory',
			'ProductSearch',
			'ProductTag',
			'ProductMeta',
		];
		// @todo after refactoring dynamic block registration, this will be moved
		// to block level config.
		if ( version_compare( $wp_version, '5.2', '>' ) ) {
			$blocks[] = 'AllProducts';
			$blocks[] = 'PriceFilter';
			$blocks[] = 'AttributeFilter';
			$blocks[] = 'ActiveFilters';
			$blocks[] = 'Checkout';
			$blocks[] = 'Cart';
		}
		foreach ( $blocks as $class ) {
			$class    = __NAMESPACE__ . '\\BlockTypes\\' . $class;
			$instance = new $class();
			$instance->register_block_type();
		}
	}

	/**
	 * Register payment methods.
	 */
	public static function register_payment_methods() {
		Package::container()->get( PaymentMethodRegistry::class )->initialize();
	}

	/**
	 * Register custom order status for orders created via the API during checkout.
	 *
	 * Draft order status is used before payment is attempted, during checkout, when a cart is converted to an order.
	 *
	 * @param array $statuses Array of statuses.
	 * @return array
	 */
	public static function register_draft_order_status( array $statuses ) {
		$statuses['wc-checkout-draft'] = _x( 'Draft', 'Order status', 'woo-gutenberg-products-block' );
		return $statuses;
	}

	/**
	 * Register custom order post status for orders created via the API during checkout.
	 *
	 * @param array $statuses Array of statuses.
	 * @return array
	 */
	public static function register_draft_order_post_status( array $statuses ) {
		$statuses['wc-checkout-draft'] = [
			'label'                     => _x( 'Draft', 'Order status', 'woo-gutenberg-products-block' ),
			'public'                    => false,
			'exclude_from_search'       => false,
			'show_in_admin_all_list'    => false,
			'show_in_admin_status_list' => true,
			/* translators: %s: number of orders */
			'label_count'               => _n_noop( 'Drafts <span class="count">(%s)</span>', 'Drafts <span class="count">(%s)</span>', 'woo-gutenberg-products-block' ),
		];
		return $statuses;
	}

	/**
	 * Append draft status to a list of statuses.
	 *
	 * @param array $statuses Array of statuses.
	 * @return array
	 */
	public static function append_draft_order_post_status( $statuses ) {
		$statuses[] = 'checkout-draft';
		return $statuses;
	}

	/**
	 * Delete draft orders older than a day.
	 *
	 * Ran on a daily cron schedule.
	 */
	public static function delete_expired_draft_orders() {
		global $wpdb;

		$wpdb->query(
			"
			DELETE posts, term_relationships, postmeta
			FROM $wpdb->posts posts
			LEFT JOIN $wpdb->term_relationships term_relationships ON ( posts.ID = term_relationships.object_id )
			LEFT JOIN $wpdb->postmeta postmeta ON ( posts.ID = postmeta.post_id )
			WHERE posts.post_status = 'wc-checkout-draft'
			AND posts.post_modified <= ( NOW() - INTERVAL 1 DAY )
			"
		);
	}
}
