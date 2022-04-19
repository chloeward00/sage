(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{26447:function(e,t,n){"use strict";var r=n(63366),o=n(87462),a=n(67294),i=n(95408),u=n(98700),l=n(39707),s=n(59766),c=n(11496),d=n(33616),f=n(85893);const p=["component","direction","spacing","divider","children"];function v(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,o)=>(e.push(r),o<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${o}`})),e)),[])}const y=(0,c.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,u.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),a=(0,i.P$)({values:e.direction,base:o}),l=(0,i.P$)({values:e.spacing,base:o}),c=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,u.NA)(r,t)}};var o};n=(0,s.Z)(n,(0,i.k9)({theme:t},l,c))}return n})),h=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStack"}),a=(0,l.Z)(n),{component:i="div",direction:u="column",spacing:s=0,divider:c,children:h}=a,m=(0,r.Z)(a,p),b={direction:u,spacing:s};return(0,f.jsx)(y,(0,o.Z)({as:i,ownerState:b,ref:t},m,{children:c?v(h,c):h}))}));t.Z=h},82969:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map/[index]",function(){return n(98245)}])},90638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,l;var s=r=o({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(67294));var a=i(n(14302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},14302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(67294))&&i.__esModule?i:{default:i},l=n(67161),s=n(16319);var c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function y(e){return function(e,t){var n=function(){if(!o){var t=new v(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(s.LoadableContext),i=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};h(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var m=y;t.default=m},98245:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(85893),o=n(67294),a=n(5152),i=(n(70853),n(15503)),u=n(61214),l=n(26447),s=n(15861),c=n(83321),d=n(11163),f=(0,a.default)((function(){return Promise.all([n.e(9269),n.e(1778)]).then(n.bind(n,91778))}),{loadableGenerated:{webpack:function(){return[91778]}},ssr:!1}),p=(0,u.Z)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#A9B5DD",minHeight:"100vh"}}}));function v(){var e=p(),t=(0,d.useRouter)(),n=t.query.index,a=n.split("&")[0],u=n.split("&")[1],v=i.Z.auth().currentUser.uid,y=(0,o.useState)({lng:53.38332887514035,lat:-6.255555152893067}),h=y[0],m=y[1],b=(0,o.useState)([]),g=b[0],_=b[1],w=function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=g[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value;i.Z.firestore().collection("users").doc(u).update({userEvents:i.Z.firestore.FieldValue.arrayUnion(e)}).catch((function(e){alert(e),console.log(e)}))}}catch(l){n=!0,r=l}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}};return(0,o.useEffect)((function(){var e=!1;return e||(i.Z.firestore().collection("LocationChoice").doc(v).set({lat:h.lat,long:h.lng}),i.Z.firestore().collection("groups").doc(u).onSnapshot((function(e){_(e.data().groupMembers.map((function(e){return e})))}))),function(){e=!0}}),[h]),console.log(h),(0,r.jsx)("div",{className:e.root,children:(0,r.jsxs)(l.Z,{direction:"column",spacing:2,children:[(0,r.jsx)(s.Z,{align:"center",children:"activity"==a?"Pick a location for your activity":"Pick a location for a place to eat"}),(0,r.jsx)(f,{center:h,location:h,draggable:!0,title:"sample text",onDragMarker:function(e){console.log("e",e);var t={lat:e.lng,lng:e.lat};m(t)}}),(0,r.jsx)(c.Z,{size:"large",onClick:function(){!function(){var e=i.Z.firestore().collection("groupsCategory").doc(u).collection("events").doc();e.set({groupEvent:"",eventImage:"",eventCategory:a,eventDate:"",eventTime:"",eventLocation:"",eventName:e.id,eventID:e.id,adminPicks:[],eventAdmin:v,createdAt:new Date,calendarDate:"",groupID:u,longitude:h.lng,latitude:h.lat}).catch((function(e){alert(e),console.log(e)})),w(e.id),"activity"==a?t.push("/categories/activity/"+u+"&"+e.id):t.push("/categories/food/"+u+"&"+e.id)}()},children:"Submit Location"})]})})}},5152:function(e,t,n){e.exports=n(90638)},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[9774,1214,400,8112,2888,179],(function(){return t=82969,e(e.s=t);var t}));var t=e.O();_N_E=t}]);