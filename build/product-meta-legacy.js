this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-meta"]=function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={16:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;return c.push([581,2,0,1]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.React}()},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},13:function(e,t){!function(){e.exports=this.moment}()},14:function(e,t){!function(){e.exports=this.wp.editor}()},205:function(e,t){!function(){e.exports=this.wp.blockEditor}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(12),o=n.n(r),c=n(22),a=n.n(c),i=function(){var e=a()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},26:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},28:function(e,t,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(26));t.a=function(e){var t,n,a,i=e.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(t=i).message,a=t.type,n?"general"===a?Object(r.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):"api"===a?Object(r.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):n:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(e,t){!function(){e.exports=this.wp.components}()},34:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t,n){"use strict";n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return f})),n.d(t,"i",(function(){return h})),n.d(t,"k",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return w})),n.d(t,"m",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"l",(function(){return _})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return E})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return x})),n.d(t,"p",(function(){return C})),n.d(t,"d",(function(){return I}));var r=n(6),o=n.n(r),c=n(7),a=n.n(c),i=n(37);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},p=u({},s,{},"object"===("undefined"==typeof wcSettings?"undefined":n.n(i)()(wcSettings))?wcSettings:{});function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=p.hasOwnProperty(e)?p[e]:t;return n(r,t)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}p.currency=u({},s.currency,{},p.currency),p.locale=u({},s.locale,{},p.locale);var g=d("storeApiNonce");a.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var n=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{"X-WC-Store-API-Nonce":g})}return t(e,t)})),a.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(g=t)};d("currentUserIsAdmin",!1);var m=d("reviewRatingsEnabled",!0),f=d("showAvatars",!0),h=d("max_columns",6),O=d("min_columns",1),j=d("default_columns",3),w=d("max_rows",6),y=d("min_rows",1),v=d("default_rows",3),_=d("min_height",500),k=d("default_height",500),P=(d("placeholderImgSrc",""),d("thumbnail_size",300),d("isLargeCatalog")),E=d("limitTags"),S=(d("hasProducts",!0),d("hasTags",!0)),x=d("homeUrl",""),C=(d("couponsEnabled",!0),d("shippingEnabled",!0),d("taxesEnabled",!0),d("displayShopPricesIncludingTax",!1),d("displayCartPricesIncludingTax",!1),d("productCount",0),d("attributes",[]),d("isShippingCalculatorEnabled",!0),d("isShippingCostHidden",!1),d("wcBlocksAssetUrl","")),N=(d("shippingCountries",{}),d("allowedCountries",{}),d("shippingStates",{}),d("allowedStates",{}),d("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),D=d("storePages",{shop:N,cart:N,checkout:N,privacy:N,terms:N}),I=(D.shop.permalink,D.checkout.id,D.checkout.permalink,D.privacy.permalink,D.privacy.title,D.terms.permalink,D.terms.title,D.cart.id,D.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories"),metaProducts:"".concat("/wc/blocks","/product-meta"),metas:"".concat("/wc/blocks","/metas")})},42:function(e,t){!function(){e.exports=this.wc.wcSettings}()},48:function(e,t){!function(){e.exports=this.ReactDOM}()},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t){!function(){e.exports=this.wp.viewport}()},53:function(e,t,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(64)),a=n(610),i=Object(r.createElement)(a.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})),l=n(8),u=n.n(l),s=n(3),p=n(28);n(82),t.a=function(e){var t=e.className,n=e.error,a=e.isLoading,l=e.onRetry;return Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(c.a,{srcElement:i}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",t)},Object(r.createElement)(p.a,{error:n}),l&&Object(r.createElement)(r.Fragment,null,a?Object(r.createElement)(s.Spinner,null):Object(r.createElement)(s.Button,{isDefault:!0,onClick:l},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},57:function(e,t){!function(){e.exports=this.wp.hooks}()},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),o=n(4),c=Object(r.__)("Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!","woo-gutenberg-products-block"),a=[{id:1,name:"WordPress Pennant",variation:"",permalink:"https://example.org",sku:"wp-pennant",summary:c,short_description:c,description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",price:"7.99",price_html:'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',images:[{id:1,src:o.p+"img/pennant.jpg",thumbnail:o.p+"img/pennant.jpg",name:"pennant-1.jpg",alt:"WordPress Pennant",srcset:"",sizes:""}],average_rating:5,review_count:1,prices:{currency_code:"GBP",decimal_separator:".",thousand_separator:",",decimals:2,price_prefix:"£",price_suffix:"",price:"7.99",regular_price:"9.99",sale_price:"7.99",price_range:null},add_to_cart:{text:Object(r.__)("Add to cart","woo-gutenberg-products-block"),description:Object(r.__)("Add to cart","woo-gutenberg-products-block")},has_options:!1,is_purchasable:!0,is_in_stock:!0,on_sale:!0}]},575:function(e,t,n){},581:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n(14),a=n(23),i=n(42),l=Object(i.getSetting)("wcBlocksAssetUrl","");Object(i.setSetting)("min_height",150),Object(i.setSetting)("default_height",222),Object(i.setSetting)("image_placeholder","".concat(l,"img/placeholder.svg"));var u=Object(i.getSetting)("min_height"),s=Object(i.getSetting)("max_height"),p=Object(i.getSetting)("default_height"),d=Object(i.getSetting)("image_placeholder"),b=(n(574),n(575),n(4)),g=n(572),m={attributes:{contentAlign:"center",dimRatio:50,editMode:!1,height:b.b,mediaSrc:"",showDesc:!0,productId:"preview",previewProduct:g.a[0]}},f=n(3),h=n(8),O=n.n(h),j=n(21),w=n(5),y=(n(2),n(53)),v=n(15),_=n.n(v),k=n(12),P=n.n(k),E=n(22),S=n.n(E),x=n(17),C=n.n(x),N=n(18),D=n.n(N),I=n(16),M=n.n(I),T=n(19),B=n.n(T),R=n(20),A=n.n(R),F=n(10),L=n.n(F),H=n(6),U=n.n(H),z=n(9),W=n(7),q=n.n(W);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){U()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=n(24);function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var X=Object(j.createHigherOrderComponent)((function(e){return function(t){B()(c,t);var n,o=(n=c,function(){var e,t=L()(n);if(G()){var r=L()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return A()(this,e)});function c(){var e;return C()(this,c),(e=o.apply(this,arguments)).state={error:null,loading:!1,product:null},e.loadProduct=e.loadProduct.bind(M()(e)),e}return D()(c,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){JSON.stringify(e.attributes.metas)!==JSON.stringify(this.props.attributes.metas)&&this.loadProduct()}},{key:"loadProduct",value:function(){var e,t=this,n=this.props.attributes.metas;n.length?(this.setState({loading:!0}),(e=n[0],q()({path:"".concat(b.d.metaProducts,"/").concat(e)})).then((function(e){var n=e.length?e[0]:null;t.setState({product:n,loading:!1,error:null})})).catch(function(){var e=S()(P.a.mark((function e(n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)(n);case 2:r=e.sent,t.setState({product:null,loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):this.setState({product:null,loading:!1,error:null})}},{key:"render",value:function(){var t=this.state,n=t.error,o=t.loading,c=t.product;return Object(r.createElement)(e,_()({},this.props,{error:n,isLoading:o,product:c}))}}]),c}(r.Component)}),"withProductMetas"),Q=n(29);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var K=Object(j.createHigherOrderComponent)((function(e){return function(t){B()(c,t);var n,o=(n=c,function(){var e,t=L()(n);if(Z()){var r=L()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return A()(this,e)});function c(){var e;return C()(this,c),(e=o.apply(this,arguments)).state={error:null,loading:!1,metas:[],product:null},e.loadMetas=e.loadMetas.bind(M()(e)),e}return D()(c,[{key:"componentDidMount",value:function(){this.loadMetas()}},{key:"loadMetas",value:function(){var e,t=this;this.setState({loading:!0}),(e={},q()({path:Object(z.addQueryArgs)("".concat(b.d.metas),V({},e))})).then((function(e){t.setState({metas:e.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){U()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t},e)})),loading:!1,error:null})})).catch(function(){var e=S()(P.a.mark((function e(n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)(n);case 2:r=e.sent,t.setState({metas:null,loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,n=t.error,o=t.loading,c=t.metas;return Object(r.createElement)(e,_()({},this.props,{error:n,isLoading:o,metas:c}))}}]),c}(r.Component)}),"withMetas"),ee=n(28),te=(n(576),function(e){var t=e.metas,n=e.error,c=e.isLoading,a=e.onChange,i=e.onOperatorChange,l=e.operator,u=e.selected,s=e.isSingle,p={clear:Object(o.__)("Clear all product metas","woo-gutenberg-products-block"),list:Object(o.__)("Product Metas","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product metas.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product metas","woo-gutenberg-products-block"),selected:function(e){return Object(o.sprintf)(Object(o._n)("%d meta selected","%d metas selected",e,"woo-gutenberg-products-block"),e)},updated:Object(o.__)("Meta search results updated.","woo-gutenberg-products-block")};return n?Object(r.createElement)(ee.a,{error:n}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Q.a,{className:"woocommerce-product-metas",list:t,isLoading:c,selected:u.map((function(e){return Object(w.find)(t,{id:e})})).filter(Boolean),onChange:a,renderItem:function(e){var t=e.item,n=e.search,o=e.depth,c=void 0===o?0:o,a=["woocommerce-product-categories__item"];return n.length&&a.push("is-searching"),0===c&&0!==t.parent&&a.push("is-skip-level"),t.breadcrumbs=[],Object(r.createElement)(Q.b,_()({className:a.join(" ")},e,{"aria-label":t.name}))},messages:p,isHierarchical:!0,isSingle:s}),!!i&&Object(r.createElement)("div",{className:u.length<2?"screen-reader-text":""},Object(r.createElement)(f.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two metas to use this setting.","woo-gutenberg-products-block"),value:l,onChange:i,options:[{label:Object(o.__)("Any selected metas","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected metas","woo-gutenberg-products-block"),value:"all"}]})))});te.defaultProps={operator:"any",isSingle:!1};var ne=K(te),re=n(205),oe=n(86);var ce=Object(j.compose)(Object(c.withColors)({overlayColor:"background-color"}),f.withSpokenMessages,X)((function(e){var t,n,a,i,l,p,d=e.attributes,b=e.debouncedSpeak,g=e.error,m=e.getProduct,h=e.isLoading,j=e.isSelected,v=e.overlayColor,_=e.product,k=e.setAttributes,P=e.setOverlayColor,E=function(){var e=d.contentAlign,t=d.editMode,n=d.iconId;return Object(r.createElement)(c.BlockControls,null,Object(r.createElement)(c.AlignmentToolbar,{value:e,onChange:function(e){k({contentAlign:e})}}),Object(r.createElement)(c.MediaUploadCheck,null,Object(r.createElement)(f.Toolbar,null,Object(r.createElement)(c.MediaUpload,{onSelect:function(e){k({iconId:e.id,iconSrc:e.url})},allowedTypes:["image"],value:n,render:function(e){var t=e.open;return Object(r.createElement)(f.IconButton,{className:"components-toolbar__control",label:Object(o.__)("Edit icon"),icon:"format-image",onClick:t,disabled:!1})}}))),Object(r.createElement)(f.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return k({editMode:!t})},isActive:t}]}))},S=function(){var e=O()("wp-block-button__link","is-style-fill");return"preview"===d.productId?Object(r.createElement)("div",{className:"wp-block-button aligncenter",style:{width:"100%"}},Object(r.createElement)(c.RichText.Content,{tagName:"a",className:e,href:_.url,title:d.linkText,style:{backgroundColor:"vivid-green-cyan",borderRadius:"5px"},value:d.linkText,target:_.url})):Object(r.createElement)(c.InnerBlocks,{template:[["core/button",{text:Object(o.__)("Shop now","woo-gutenberg-products-block"),url:_.permalink,align:"center"}]],templateLock:"all"})},x=function(){return Object(r.createElement)("div",{className:"icon-text-inner"},Object(r.createElement)(re.PlainText,{tagName:d.tagName,value:d.heading,onChange:function(e){return k({heading:e})},style:{backgroundColor:"transparent",color:"#e5e5e5"}}))},C=function(){var e=O()();return Object(r.createElement)("div",{className:"wp-block-footer aligncenter"},Object(r.createElement)(re.PlainText,{className:e,tagName:d.tagName,value:d.note,onChange:function(e){return k({note:e})},style:{backgroundColor:"transparent",color:"#ffffff",textAlign:"center"}}))},N=d.editMode;return g?Object(r.createElement)(y.a,{className:"wc-block-product-meta-error",error:g,isLoading:h,onRetry:m}):N?Object(r.createElement)(r.Fragment,null,E(),Object(r.createElement)(f.Placeholder,{icon:"buddicons-groups",label:Object(o.__)("Special Product","woo-gutenberg-products-block"),className:"wc-block-product-meta"},Object(o.__)("Visually highlight a Special Product","woo-gutenberg-products-block"),Object(r.createElement)("div",{className:"wc-block-product-meta__selection"},Object(r.createElement)(f.Button,{isDefault:!0,onClick:function(){k({editMode:!1}),b(Object(o.__)("Showing Specials Product block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))):Object(r.createElement)(r.Fragment,null,E(),(t=d.metas,n=d.catOperator,a=d.mediaSrc||Object(oe.b)(_),i=d.focalPoint,l=void 0===i?{x:.5,y:.5}:i,p="function"==typeof f.FocalPointPicker,Object(r.createElement)(c.InspectorControls,{key:"inspector"},Object(r.createElement)(f.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block")},Object(r.createElement)(f.ToggleControl,{label:Object(o.__)("Show description","woo-gutenberg-products-block"),checked:d.showDesc,onChange:function(){return k({showDesc:!d.showDesc})}}),Object(r.createElement)(f.ToggleControl,{label:Object(o.__)("Show price","woo-gutenberg-products-block"),checked:d.showPrice,onChange:function(){return k({showPrice:!d.showPrice})}}),Object(r.createElement)(f.ToggleControl,{label:Object(o.__)("Show icon","woo-gutenberg-products-block"),checked:d.showIcon,onChange:function(){return k({showIcon:!d.showIcon})}}),Object(r.createElement)(f.ToggleControl,{label:Object(o.__)("Geneigte Fußzeile","woo-gutenberg-products-block"),checked:d.hasInclineFooter,onChange:function(){return k({hasInclineFooter:!d.hasInclineFooter})}}),Object(r.createElement)(f.ToggleControl,{label:Object(o.__)("Button hat Rand","woo-gutenberg-products-block"),checked:d.hasButtonBorder,onChange:function(){return k({hasButtonBorder:!d.hasButtonBorder})}})),Object(r.createElement)(f.PanelBody,{title:Object(o.__)("Filter by Custom Meta","woo-gutenberg-products-block")},Object(r.createElement)(ne,{selected:t,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id})),n=e.map((function(e){return e.slug})),r=e.map((function(e){return e.products}));k({productId:r.length?r[0]:null,metas:t,slug:n.length?n[0]:null})},operator:n,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return k({catOperator:e})},isSingle:!0,setAttributes:k})),Object(r.createElement)(c.PanelColorSettings,{title:Object(o.__)("Overlay","woo-gutenberg-products-block"),colorSettings:[{value:v.color,onChange:P,label:Object(o.__)("Overlay Color","woo-gutenberg-products-block")}],initialOpen:!1},!!a&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(f.RangeControl,{label:Object(o.__)("Background Opacity","woo-gutenberg-products-block"),value:d.dimRatio,onChange:function(e){return k({dimRatio:e})},min:0,max:100,step:10}),p&&Object(r.createElement)(f.FocalPointPicker,{label:Object(o.__)("Focal Point Picker"),url:a,value:l,onChange:function(e){return k({focalPoint:e})}}))))),_?function(){var e,t,n=d.className,o=d.contentAlign,c=d.dimRatio,a=d.focalPoint,i=d.height,l=d.showDesc,p=d.showPrice,b=d.showIcon,g=d.iconSrc,m=O()("wc-block-product-meta",{"is-selected":j&&"preview"!==d.productId,"is-loading":!_&&h,"has-incline-footer":d.hasInclineFooter,"has-button-border":d.hasButtonBorder,"is-not-found":!_&&!h,"has-icon":d.showIcon,"has-background-dim":0!==c},0===(e=c)||50===e?null:"has-background-dim-".concat(10*Math.round(e/10)),"center"!==o&&"has-".concat(o,"-content"),n),y=(t=d.mediaSrc||_,Object(w.isObject)(t)&&(t=Object(oe.b)(t)),t?{backgroundImage:"url(".concat(t,")")}:{});if(v.color&&(y.backgroundColor=v.color),a){var P=100*a.x,E=100*a.y;y.backgroundPosition="".concat(P,"% ").concat(E,"%")}var N,D,I,M,T,B;return D=_.permalink,I=_.meta_data,M=d.slug,T=(N=I,N.filter((function(e){return e.key==="_hal_footer_".concat(M)})))[0].value||d.note,B=function(e){return e.filter((function(e){return e.key==="_hal_header_".concat(M)}))}(I)[0].value||d.heading,k({heading:B,note:T,permalink:D,productId:_.id}),Object(r.createElement)("div",{className:"block-wrapper"},b&&Object(r.createElement)("div",{className:"wc-block-product-meta__icon-wrapper"},Object(r.createElement)("div",{className:"wc-block-product-meta__icon"},Object(r.createElement)("div",{className:"icon-text"},x()),Object(r.createElement)("div",{className:"icon-img"},Object(r.createElement)("img",{src:g,alt:"icon",rel:"icon"})))),Object(r.createElement)(f.ResizableBox,{className:m,height:i,minHeight:u,maxHeight:s,enable:{bottom:!0},onResizeStop:function(e,t,n){k({height:parseInt(n.style.height,10)})},style:y},Object(r.createElement)("div",{className:"wc-block-product-meta__wrapper"},Object(r.createElement)("h2",{className:"wc-block-product-meta__title",dangerouslySetInnerHTML:{__html:_.name}}),!Object(w.isEmpty)(_.variation)&&Object(r.createElement)("h3",{className:"wc-block-product-meta__variation",dangerouslySetInnerHTML:{__html:_.variation}}),l&&Object(r.createElement)("div",{className:"wc-block-product-meta__description",dangerouslySetInnerHTML:{__html:_.description}}),p&&Object(r.createElement)("div",{className:"wc-block-product-meta__price",dangerouslySetInnerHTML:{__html:_.price_html}}),Object(r.createElement)("div",{className:"wc-block-product-meta__link"},S())),Object(r.createElement)("div",{className:"wc-block-product-meta__footer"},C())))}():Object(r.createElement)(f.Placeholder,{className:"wc-block-product-meta",icon:"buddicons-groups",label:Object(o.__)("Specials Product","woo-gutenberg-products-block")},h?Object(r.createElement)(f.Spinner,null):Object(o.__)("No Specials Product found.","woo-gutenberg-products-block")))}));Object(a.registerBlockType)("woocommerce/product-meta",{title:Object(o.__)("Special Product","woo-gutenberg-products-block"),icon:{src:"buddicons-groups",foreground:"#e30006"},category:"halehmann",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Zeige Special Actionen an.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:m,attributes:{hasInclineFooter:{type:"boolean",default:!1},hasButtonBorder:{type:"boolean",default:!1},permalink:{type:"string"},tagName:{type:"string",default:"div"},heading:{type:"string",default:"Lehmann Aktion"},note:{type:"string",default:"Wir lieben Shopping"},contentAlign:{type:"string",default:"center"},dimRatio:{type:"number",default:70},editMode:{type:"boolean",default:!0},focalPoint:{type:"object"},height:{type:"number",default:p},mediaId:{type:"number",default:0},mediaSrc:{type:"string",default:""},overlayColor:{type:"string",default:"#000000"},customOverlayColor:{type:"string"},linkText:{type:"string",default:Object(o.__)("Shop now","woo-gutenberg-products-block")},productId:{type:"number"},slug:{type:"string"},showDesc:{type:"boolean",default:!1},showPrice:{type:"boolean",default:!0},previewProduct:{type:"object",default:null},showIcon:{type:"boolean",default:!0},iconSrc:{type:"string",default:d},iconId:{type:"number",default:0},metas:{type:"array",default:[]},catOperator:{type:"string",default:"any"}},edit:function(e){return Object(r.createElement)(ce,e)},save:function(){return Object(r.createElement)(c.InnerBlocks.Content,null)}})},59:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},60:function(e,t){!function(){e.exports=this.wp.date}()},64:function(e,t,n){"use strict";var r=n(6),o=n.n(r),c=n(35),a=n.n(c),i=n(11);n(2);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,c=a()(e,["srcElement","size"]);return Object(i.isValidElement)(t)&&Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},c))}},66:function(e,t){!function(){e.exports=this.wp.dom}()},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},82:function(e,t,n){},86:function(e,t,n){"use strict";function r(e){return e&&e.images&&e.images.length&&e.images[0].src||""}function o(e){return e&&e.images&&e.images.length&&e.images[0].id||0}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},9:function(e,t){!function(){e.exports=this.wp.url}()}});