this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-tag"]=function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={25:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([690,2,0,1]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.wp.apiFetch}()},12:function(t,e){!function(){t.exports=this.wp.url}()},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),o=n(9),c=Object(r.createElement)("img",{src:o.y+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),metaProducts:"".concat("/wc/blocks","/product-meta"),metas:"".concat("/wc/blocks","/metas"),categories:"".concat("/wc/blocks","/products/categories")}},23:function(t,e){!function(){t.exports=this.wp.compose}()},27:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},31:function(t,e){!function(){t.exports=this.wp.editor}()},32:function(t,e){!function(){t.exports=this.wp.blocks}()},39:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},4:function(t,e){!function(){t.exports=this.wp.components}()},41:function(t,e,n){"use strict";n.d(e,"g",(function(){return g})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return h})),n.d(e,"f",(function(){return j})),n.d(e,"a",(function(){return m})),n.d(e,"h",(function(){return w}));var r=n(7),o=n.n(r),c=n(12),i=n(10),u=n.n(i),s=n(5),a=n(9),l=n(14);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,b=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.k?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},b=[Object(c.addQueryArgs)(l.a.products,d({},s,{},u))];return a.k&&n.length&&b.push(Object(c.addQueryArgs)(l.a.products,{catalog_visibility:"any",status:"publish",include:n})),b}({selected:n,search:o,queryArgs:void 0===i?[]:i});return Promise.all(b.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return d({},t,{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return u()({path:"".concat(l.a.products,"/").concat(t)})},f=function(t){var e=t.selected,n=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=[Object(c.addQueryArgs)("".concat(l.a.products,"/tags"),{per_page:a.l?100:-1,orderby:a.l?"count":"name",order:a.l?"desc":"asc",search:r})];return a.l&&n.length&&o.push(Object(c.addQueryArgs)("".concat(l.a.products,"/tags"),{include:n})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(n.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},O=function(t){return u()({path:"".concat(l.a.categories,"/").concat(t)})},h=function(t){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/categories"),d({per_page:-1},t))})},j=function(t){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/").concat(t,"/variations"),{per_page:-1})})},m=function(){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/attributes"),{per_page:-1})})},w=function(t){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/attributes/").concat(t,"/terms"),{per_page:-1})})}},5:function(t,e){!function(){t.exports=this.lodash}()},50:function(t,e){!function(){t.exports=this.wp.keycodes}()},63:function(t,e,n){"use strict";var r=n(7),o=n.n(r),c=n(0),i=n(1),u=(n(2),n(4));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.onChange,n=t.settings,r=n.button,o=n.price,s=n.rating,l=n.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a({},n,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a({},n,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a({},n,{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return e(a({},n,{button:!r}))}}))}},64:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(5),i=(n(2),n(4)),u=n(9);e.a=function(t){var e=t.columns,n=t.rows,s=t.setAttributes,a=t.alignButtons;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.o,u.m);s({columns:Object(c.isNaN)(e)?"":e})},min:u.o,max:u.m}),Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:n,onChange:function(t){var e=Object(c.clamp)(t,u.q,u.n);s({rows:Object(c.isNaN)(e)?"":e})},min:u.q,max:u.n}),Object(r.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:a?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return s({alignButtons:!a})}}))}},641:function(t,e,n){},67:function(t,e){!function(){t.exports=this.ReactDOM}()},690:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),c=n(32),i=n(9),u=n(71),s=n(4),a=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z"}),Object(r.createElement)("circle",{cx:"9",cy:"12",r:"1.5"}),Object(r.createElement)("circle",{cx:"14",cy:"12",r:"1.5"}),Object(r.createElement)("circle",{cx:"19",cy:"12",r:"1.5"})),l=(n(641),n(7)),b=n.n(l),d=n(16),g=n.n(d),p=n(21),f=n.n(p),O=n(17),h=n.n(O),j=n(18),m=n.n(j),w=n(15),y=n.n(w),v=n(19),_=n.n(v),k=n(31),E=(n(2),n(63)),P=n(64),S=n(11),C=n.n(S),A=n(5),x=n(44),T=n(41),D=(n(642),function(t){function e(){var t;return g()(this,e),(t=h()(this,m()(e).apply(this,arguments))).state={list:[],loading:!0},t.renderItem=t.renderItem.bind(y()(t)),t.debouncedOnSearch=Object(A.debounce)(t.onSearch.bind(y()(t)),400),t}return _()(e,t),f()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(T.e)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch((function(){t.setState({list:[],loading:!1})}))}},{key:"onSearch",value:function(t){var e=this,n=this.props.selected;this.setState({loading:!0}),Object(T.e)({selected:n,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch((function(){e.setState({list:[],loading:!1})}))}},{key:"renderItem",value:function(t){var e=t.item,n=t.search,c=t.depth,i=void 0===c?0:c,u=["woocommerce-product-tags__item"];n.length&&u.push("is-searching"),0===i&&0!==e.parent&&u.push("is-skip-level");var s=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name;return Object(r.createElement)(x.b,C()({className:u.join(" ")},t,{showCount:!0,"aria-label":Object(o.sprintf)(Object(o._n)("%d product tagged as %s","%d products tagged as %s",e.count,"woo-gutenberg-products-block"),e.count,s)}))}},{key:"render",value:function(){var t=this.state,e=t.list,n=t.loading,c=this.props,u=c.onChange,a=c.onOperatorChange,l=c.operator,b=c.selected,d={clear:Object(o.__)("Clear all product tags","woo-gutenberg-products-block"),list:Object(o.__)("Product Tags","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product tags.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product tags","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d tag selected","%d tags selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Tag search results updated.","woo-gutenberg-products-block")};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(x.a,{className:"woocommerce-product-tags",list:e,isLoading:n,selected:b.map((function(t){return Object(A.find)(e,{id:t})})).filter(Boolean),onChange:u,onSearch:i.l?this.debouncedOnSearch:null,renderItem:this.renderItem,messages:d,isHierarchical:!0}),!!a&&Object(r.createElement)("div",{className:b.length<2?"screen-reader-text":""},Object(r.createElement)(s.SelectControl,{className:"woocommerce-product-tags__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two tags to use this setting.","woo-gutenberg-products-block"),value:l,onChange:a,options:[{label:Object(o.__)("Any selected tags","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected tags","woo-gutenberg-products-block"),value:"all"}]})))}}]),e}(r.Component));D.defaultProps={operator:"any"};var B=D,N=n(96),M=n(121);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q=function(t){function e(){var t;return g()(this,e),(t=h()(this,m()(e).apply(this,arguments))).state={changedAttributes:{},isEditing:!1},t.startEditing=t.startEditing.bind(y()(t)),t.stopEditing=t.stopEditing.bind(y()(t)),t.setChangedAttributes=t.setChangedAttributes.bind(y()(t)),t.save=t.save.bind(y()(t)),t}return _()(e,t),f()(e,[{key:"componentDidMount",value:function(){this.props.attributes.tags.length||this.setState({isEditing:!0})}},{key:"startEditing",value:function(){this.setState({isEditing:!0,changedAttributes:{}})}},{key:"stopEditing",value:function(){this.setState({isEditing:!1,changedAttributes:{}})}},{key:"setChangedAttributes",value:function(t){this.setState((function(e){return{changedAttributes:V({},e.changedAttributes,{},t)}}))}},{key:"save",value:function(){var t=this.state.changedAttributes;(0,this.props.setAttributes)(t),this.stopEditing()}},{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,n=t.setAttributes,c=this.state.isEditing,i=e.columns,u=e.tagOperator,a=e.contentVisibility,l=e.orderby,b=e.rows,d=e.alignButtons;return Object(r.createElement)(k.InspectorControls,{key:"inspector"},Object(r.createElement)(s.PanelBody,{title:Object(o.__)("Product Tag","woo-gutenberg-products-block"),initialOpen:!e.tags.length&&!c},Object(r.createElement)(B,{selected:e.tags,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));n({tags:e})},operator:u,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return n({tagOperator:t})}})),Object(r.createElement)(s.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(P.a,{columns:i,rows:b,alignButtons:d,setAttributes:n})),Object(r.createElement)(s.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(E.a,{settings:a,onChange:function(t){return n({contentVisibility:t})}})),Object(r.createElement)(s.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(N.a,{setAttributes:n,value:l})))}},{key:"renderEditMode",value:function(){var t=this,e=this.props,n=e.attributes,c=e.debouncedSpeak,i=V({},n,{},this.state.changedAttributes);return Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(u.a,{srcElement:a,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("Display a grid of products from your selected tags.","woo-gutenberg-products-block"),Object(r.createElement)("div",{className:"wc-block-product-tag__selection"},Object(r.createElement)(B,{selected:i.tags,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.map((function(t){return t.id}));t.setChangedAttributes({tags:n})},operator:i.tagOperator,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t.setChangedAttributes({tagOperator:e})}}),Object(r.createElement)(s.Button,{isDefault:!0,onClick:function(){t.save(),c(Object(o.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block")),Object(r.createElement)(s.Button,{className:"wc-block-product-tag__cancel-button",isTertiary:!0,onClick:function(){t.stopEditing(),c(Object(o.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var t=this.props,e=t.attributes,n=t.name,c=e.tags.length;return Object(r.createElement)(s.Disabled,null,c?Object(r.createElement)(k.ServerSideRender,{block:n,attributes:e}):Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(u.a,{icon:a,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("This block displays products from selected tags. Select at least one tag to display its products.","woo-gutenberg-products-block")))}},{key:"render",value:function(){var t=this,e=this.state.isEditing;return this.props.attributes.isPreview?M.a:Object(r.createElement)(r.Fragment,null,i.i?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(k.BlockControls,null,Object(r.createElement)(s.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return e?t.stopEditing():t.startEditing()},isActive:e}]})),this.getInspectorControls(),e?this.renderEditMode():this.renderViewMode()):Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(u.a,{icon:a,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("This block displays products from selected tags. In order to preview this you'll first need to create a product and assign it some tags.","woo-gutenberg-products-block")))}}]),e}(r.Component),Q=Object(s.withSpokenMessages)(q);Object(c.registerBlockType)("woocommerce/product-tag",{title:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(u.a,{srcElement:a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a grid of products with selected tags.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{columns:{type:"number",default:i.d},rows:{type:"number",default:i.f},alignButtons:{type:"boolean",default:!1},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},tags:{type:"array",default:[]},tagOperator:{type:"string",default:"any"},orderby:{type:"string",default:"date"},isPreview:{type:"boolean",default:!1}},edit:function(t){return Object(r.createElement)(Q,t)},save:function(){return null}})},71:function(t,e,n){"use strict";var r=n(7),o=n.n(r),c=n(36),i=n.n(c),u=n(0);n(2);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.srcElement,n=t.size,r=void 0===n?24:n,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:r,height:r},c))}},73:function(t,e){!function(){t.exports=this.wp.viewport}()},8:function(t,e){!function(){t.exports=this.React}()},81:function(t,e){!function(){t.exports=this.wp.hooks}()},84:function(t,e){!function(){t.exports=this.wp.date}()},88:function(t,e){!function(){t.exports=this.wp.dom}()},9:function(t,e,n){"use strict";n.d(e,"t",(function(){return o})),n.d(e,"x",(function(){return c})),n.d(e,"m",(function(){return i})),n.d(e,"o",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"n",(function(){return a})),n.d(e,"q",(function(){return l})),n.d(e,"f",(function(){return b})),n.d(e,"p",(function(){return d})),n.d(e,"e",(function(){return g})),n.d(e,"r",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return O})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return m})),n.d(e,"w",(function(){return w})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return v})),n.d(e,"g",(function(){return _})),n.d(e,"s",(function(){return k})),n.d(e,"a",(function(){return E})),n.d(e,"y",(function(){return P})),n.d(e,"v",(function(){return S})),n.d(e,"u",(function(){return C}));var r=n(3),o=Object(r.getSetting)("reviewRatingsEnabled",!0),c=Object(r.getSetting)("showAvatars",!0),i=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),s=Object(r.getSetting)("default_columns",3),a=Object(r.getSetting)("max_rows",6),l=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",3),d=Object(r.getSetting)("min_height",500),g=Object(r.getSetting)("default_height",500),p=Object(r.getSetting)("placeholderImgSrc",""),f=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),O=Object(r.getSetting)("limitTags"),h=Object(r.getSetting)("hasProducts",!0),j=Object(r.getSetting)("hasTags",!0),m=Object(r.getSetting)("homeUrl",""),w=Object(r.getSetting)("shopUrl",""),y=Object(r.getSetting)("checkoutUrl",""),v=Object(r.getSetting)("couponsEnabled",!0),_=Object(r.getSetting)("displayPricesIncludingTaxes",!1),k=Object(r.getSetting)("productCount",0),E=Object(r.getSetting)("attributes",[]),P=Object(r.getSetting)("wcBlocksAssetUrl",""),S=Object(r.getSetting)("shippingCountries",{}),C=(Object(r.getSetting)("allowedCountries",{}),Object(r.getSetting)("shippingCounties",{}));Object(r.getSetting)("allowedCounties",{})},90:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(4);n(2);e.a=function(t){var e=t.value,n=t.setAttributes;return Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return n({orderby:t})}})}}});