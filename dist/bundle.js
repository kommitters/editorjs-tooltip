!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tooltip=e():t.Tooltip=e()}(self,(function(){return(()=>{var t={424:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([t.id,".tooltip-tool__input{\n  border: 0;\n  border-radius: 0 0 4px 4px;\n  border-top: 1px solid rgba(201,201,204,.48);\n}\n",""]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(s[u]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);o&&s[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},s=[],a=0;a<t.length;a++){var u=t[a],c=o.base?u[0]+o.base:u[0],p=r[c]||0,l="".concat(c," ").concat(p);r[c]=p+1;var d=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var f=i(h,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=n(r[s]);e[a].references--}for(var u=o(t,i),c=0;c<r.length;c++){var p=n(r[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},980:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="14" viewBox="0 0 21 21"><path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z"></path></svg>'}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};return(()=>{"use strict";n.d(o,{default:()=>g});var t=n(379),e=n.n(t),i=n(795),r=n.n(i),s=n(569),a=n.n(s),u=n(565),c=n.n(u),p=n(216),l=n.n(p),d=n(589),h=n.n(d),f=n(424),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var y=n(980),m=n.n(y);function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var g=function(){function t(e){var n=e.api,o=e.config,i=void 0===o?{}:o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this._state=!1,this.spanTooltip=null;var r=i.location,s=void 0===r?"bottom":r;this.tooltipLocation=s,this.tag="SPAN",this.CSS={input:"tooltip-tool__input"}}var e,n,o;return e=t,o=[{key:"isInline",get:function(){return!0}},{key:"CSS",get:function(){return"cdx-tooltip"}},{key:"sanitize",get:function(){return{span:{class:t.CSS}}}}],(n=[{key:"state",get:function(){return this._state},set:function(t){this._state=t;var e=this.button,n=this.api.styles.inlineToolButtonActive;e.classList.toggle(n,t)}},{key:"render",value:function(){this.button=document.createElement("button"),this.button.type="button",this.button.innerHTML=m();var t=this.api.styles.inlineToolButton;return this.button.classList.add(t),this.button}},{key:"surround",value:function(t){this.state?this.unwrap(t):this.wrap(t)}},{key:"wrap",value:function(e){var n=e.extractContents();this.spanTooltip=document.createElement(this.tag),this.spanTooltip.classList.add(t.CSS),this.spanTooltip.appendChild(n),e.insertNode(this.spanTooltip),this.api.selection.expandToTag(this.spanTooltip)}},{key:"unwrap",value:function(e){this.spanTooltip=this.api.selection.findParentTag(this.tag,t.CSS);var n=e.extractContents();this.spanTooltip.remove(),e.insertNode(n)}},{key:"checkState",value:function(){this.spanTooltip=this.api.selection.findParentTag(this.tag),this.state=!!this.spanTooltip,this.state?this.showActions():this.hideActions()}},{key:"renderActions",value:function(){if(this.spanTooltip=this.api.selection.findParentTag(this.tag),this.tooltipInput=document.createElement("input"),this.tooltipInput.placeholder="Add a tooltip",this.tooltipInput.classList.add(this.api.styles.input),this.tooltipInput.classList.add(this.CSS.input),this.spanTooltip){var t=this.spanTooltip.dataset.tooltip;this.tooltipInput.value=t}return this.tooltipInput.hidden=!0,this.tooltipInput}},{key:"showActions",value:function(){var t=this;this.tooltipInput.hidden=!1,this.api.listeners.on(this.tooltipInput,"keydown",(function(e){if("Enter"===e.key){var n=t.tooltipInput.value;t.spanTooltip.dataset.tooltip=n;var o=t.tooltipLocation;t.api.tooltip.onHover(t.spanTooltip,n,{placement:o}),t.closeToolbar()}}),!1)}},{key:"hideActions",value:function(){this.tooltipInput.hidden=!0}},{key:"closeToolbar",value:function(){document.querySelector(".ce-inline-toolbar--showed").classList.remove("ce-inline-toolbar--showed")}}])&&b(e.prototype,n),o&&b(e,o),t}()})(),o.default})()}));