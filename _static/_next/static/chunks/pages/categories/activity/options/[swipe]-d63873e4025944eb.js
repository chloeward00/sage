(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5588],{68153:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/activity/options/[swipe]",function(){return n(90032)}])},90032:function(e,t,n){"use strict";n.r(t);var r=n(34051),o=n.n(r),u=n(85893),a=(n(55062),n(67294)),c=n(50177),s=n(13448),l=n(11382),f=(n(60808),n(92929)),p=n(82972),y=n(96941),d=n(11163),h=n(15503),v=(n(70853),n(72211),n(61214));function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){g(i,r,o,u,a,"next",e)}function a(e){g(i,r,o,u,a,"throw",e)}u(void 0)}))}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}function O(e){return function(e){if(Array.isArray(e))return e}(e)||j(e)||_(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return m(e)}(e)||j(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}c.Z.Footer;var x=c.Z.Content,A=(0,v.Z)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#A9B5DD",minHeight:"100vh"}}}));t.default=function(){var e=(0,d.useRouter)(),t=A(),n=e.query.swipe.split("&")[0],r=e.query.swipe.split("&")[1],i=e.query.swipe.split("&")[2],c=e.query.swipe.split("&")[3],v=e.query.swipe.split("&")[4],m=c.split("=")[1],g=v.split("=")[1];console.log(g),console.log("swipe page params here  "+i,g,m),console.log("categories admin picksss hereeeee  "+i),console.log(e.query.swipe);var b=(0,a.useState)([]),j=b[0],_=b[1],E=(0,a.useState)([]),P=E[0],Z=E[1],C=(0,a.useState)([]);C[0],C[1];(0,a.useEffect)((function(){!function(){var t=w(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.E)({categoriesAdmin:i,longitudeValue:g,latitudeValue:m});case 2:r=t.sent,_(S(r)),0==r.length&&(s.Z.error({message:"No Data for this activity available!",duration:5}),e.push("/groups/".concat(n)));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var q=(0,f.Ds)((function(e){var t=O(j),i=t[0],u=t.slice(1);function a(){return(a=w(o().mark((function t(){var u,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u=S(P).concat([k({},i,{liked:"like"===e})]),a=P.filter((function(e){var t=e.liked;return t})),Z(u),(0,f.qj)(u),c=h.Z.auth().currentUser.uid,h.Z.firestore().collection("groupsCategory").doc(n).collection("events").doc(r).collection("memberPicks").doc(c).set({userLikes:a}).catch((function(e){alert(e),console.log(e)}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),0==u.length?(d.default.push("/groups/".concat(n)),s.Z.success({message:"End of survey!",duration:1}),function(){var e=w(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_([]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()):_(S(u))}),300);return(0,u.jsx)("div",{className:t.root,children:(0,u.jsx)(x,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,u.jsx)(l.Z,{spinning:!j.length,children:(0,u.jsx)(p.Z,{profiles:j,handleSwipe:q})})})})}}},function(e){e.O(0,[3925,1214,2805,5926,4216,6948,9774,2888,179],(function(){return t=68153,e(e.s=t);var t}));var t=e.O();_N_E=t}]);