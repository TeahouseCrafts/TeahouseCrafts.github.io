(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4533)}])},4533:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(1799),i=n(5893),o=n(7294),s=n(6687),c=n(8195),u="dev-pwd",a=function(t){var e,n=t.password,r=(0,o.useContext)(s.Z),i=(0,c.a2)();if("website"!==r.type)return null;if((null===(e=i.hostname)||void 0===e?void 0:e.toLowerCase())!=="online-dev.littleislandfur.com".toLowerCase())return null;var a=new URLSearchParams(i.search).get("pwd");if(a&&window.localStorage.setItem(u,a),window.localStorage.getItem(u)!==n){var f="".concat(i.protocol,"//").concat("online.littleislandfur.com").concat(i.pathname).concat(i.search).concat(i.hash);window.location.assign(f)}return null},f=n(9846),h=(n(4297),n(4155).env.NEXT_PUBLIC_NODE_ENV),d=function(t){var e=t.Component,n=t.pageProps;return(0,i.jsxs)(s.P,{value:{type:"website",mode:h},children:[(0,i.jsx)(a,{password:f.ld}),(0,i.jsx)(e,(0,r.Z)({},n))]})}},9846:function(t,e,n){"use strict";n.d(e,{$2:function(){return u},AP:function(){return f},Tu:function(){return r},WR:function(){return i},Wz:function(){return s},eH:function(){return c},hO:function(){return v},hR:function(){return p},iq:function(){return a},ld:function(){return _},pv:function(){return o},sf:function(){return d},sk:function(){return m},yN:function(){return l},yU:function(){return w},z5:function(){return h}});var r="https://online-dev.littleislandfur.com",i="Teahouse Crafts",o="@LittleIslandFC",s="teahousecrafts.com",c="Teahouse Crafts",u=" - Teahouse Crafts",a="Socials",f="\xa9 2018-2022 Teahouse Crafts",h=[{href:"/images/favicon.webp"}],d={src:"".concat(r,"/images/site-preview.png"),type:"image/png",width:1200,height:675},l="".concat(r,"/images/site-preview.png"),p="Little Island Furcon (LIFC) is a casual convention for furries and fans of anthropomorphic characters located in sunny little Singapore.",v={OVERVIEW:{title:"Overview",description:"Description"},PRODUCT:{title:"Product",description:"Description"},ORDER:{title:"Order",description:"Description"},ABOUT:{title:"About",description:"Description"}},w=[{type:"twitter",href:"https://twitter.com/littleislandfc"},{type:"instagram",href:"https://www.instagram.com/littleislandfc/"},{type:"facebook",href:"https://www.facebook.com/profile.php?id=100077428595939"},{type:"telegram",href:"https://t.me/joinchat/TVIKTHBQ9Szc42gL"},{type:"email",href:"mailto:admin@littleislandfur.com"}],m=void 0,_="who-dunnit"},6687:function(t,e,n){"use strict";n.d(e,{P:function(){return i}});var r=(0,n(7294).createContext)({type:"unknown",mode:"unknown"}),i=r.Provider;e.Z=r},8195:function(t,e,n){"use strict";n.d(e,{M_:function(){return A},F3:function(){return C},Hr:function(){return k},a2:function(){return x},Lm:function(){return R}});var r=n(7294),i=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,s="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),c="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],a="undefined"!==typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function s(){c(o)}function u(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},l=b(0,0,0,0);function p(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function w(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),u=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=v(r,"left","right")+o),Math.round(u+s)!==n&&(u-=v(r,"top","bottom")+s)),!function(t){return t===d(t).document.documentElement}(t)){var a=Math.round(c+o)-e,f=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(f)&&(u-=f)}return b(i.left,i.top,c,u)}var m="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"===typeof t.getBBox};function _(t){return o?m(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):w(t):l}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return h(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);h(this,{target:t,contentRect:n})},E=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!==typeof WeakMap?new WeakMap:new i,T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new E(e,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){T.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));var L="undefined"!==typeof s.ResizeObserver?s.ResizeObserver:T,M=n(6687);function R(){var t=(0,r.useState)(void 0),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t=function(){window.innerWidth!==e&&n(window.innerWidth)};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e}function A(t){var e=(0,r.useState)(void 0),n=e[0],i=e[1];return(0,r.useEffect)((function(){var e=function(){if("undefined"!=typeof t.current&&null!==t.current){var e=DOMRectReadOnly.fromRect(t.current.getBoundingClientRect());void 0!=n&&e.left===n.left&&e.right===n.right&&e.width===n.width&&e.x===n.x||i(e)}};if("undefined"!=typeof t.current&&null!==t.current){window.addEventListener("resize",e),window.addEventListener("scroll",e);var r=new L(e);return r.observe(t.current),function(){r&&r.disconnect(),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}})),n}function C(t){var e=(0,r.useState)(void 0),n=e[0],i=e[1];return(0,r.useEffect)((function(){var e=function(){if("undefined"!=typeof t.current&&null!==t.current){var e=DOMRectReadOnly.fromRect(t.current.getBoundingClientRect());n!==e.height&&i(e.height)}};if("undefined"!=typeof t.current&&null!==t.current){window.addEventListener("resize",e);var r=new L(e);return r.observe(t.current),function(){r.disconnect(),window.removeEventListener("resize",e)}}})),n}function x(){var t=(0,r.useState)({href:void 0,origin:void 0,protocol:void 0,host:void 0,hostname:void 0,port:void 0,pathname:void 0,search:void 0,hash:void 0}),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t=function(){n({href:window.location.href,origin:window.location.origin,protocol:window.location.protocol,host:window.location.host,hostname:window.location.hostname,port:window.location.port,pathname:window.location.pathname,search:window.location.search,hash:window.location.hash})};return window.addEventListener("popstate",t),t(),function(){return window.removeEventListener("popstate",t)}}),[]),e}function k(){var t=(0,r.useContext)(M.Z),e=x();if("undefined"!==typeof e.pathname){if("local"===t.type){var n=document.querySelector("base").href,i=(e.href||"").substring(n.length);return i.toLowerCase().endsWith(".html")&&(i=i.substring(0,i.length-5)),i.toLocaleLowerCase().endsWith("index")&&(i=i.substring(0,i.length-5)),i.endsWith("/")&&(i=i.substring(0,i.length-1)),"/"+i}return"website"===t.type?e.pathname:void 0}}},4297:function(){},4155:function(t){var e,n,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var c,u=[],a=!1,f=-1;function h(){a&&c&&(a=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!a){var t=s(h);a=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function p(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new l(t,e)),1!==u.length||a||s(d)},l.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},1799:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}n.d(e,{Z:function(){return i}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6840),e(387)}));var n=t.O();_N_E=n}]);