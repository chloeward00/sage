"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3065],{37063:function(e,r,n){n.d(r,{Z:function(){return Ce}});var t=n(34051),o=n.n(t),i=n(85893),a=n(27948),c=n(86886),l=n(15861),u=n(61214),s=n(27547),f=n(67294),d=n(45697),p=n.n(d),h=n(83321),m=n(64666),g=n(37645),b=n(6514),y=n(93946),v=n(50594),x=n(31425),j=n(58951),w=n(98396),Z=n(2734),O=n(63205),S=n(67473),C=(n(70853),n(72211),n(15503));function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function A(e,r,n,t,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?r(l):Promise.resolve(l).then(t,o)}function P(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){A(i,t,o,a,c,"next",e)}function c(e){A(i,t,o,a,c,"throw",e)}a(void 0)}))}}function I(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return k(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var r=e.groupName,n=I(f.useState(!1),2),t=n[0],a=n[1],c=(0,Z.Z)(),l=(0,w.Z)(c.breakpoints.down("md")),u=function(){a(!1)},s=(0,f.useState)(""),d=s[0],p=s[1],y=(0,f.useState)(""),v=y[0],k=y[1],A=(0,f.useState)(""),N=A[0],E=A[1],D=(0,f.useState)("");D[0],D[1];return(0,f.useEffect)((function(){function e(){return(e=P(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.firestore().collection("groups").where("groupName","==",r).get().then((function(e){e.forEach((function(e){p(e.id)}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),(0,f.useEffect)((function(){function e(){return(e=P(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.firestore().collection("users").where("userEmail","==",v).get().then((function(e){e.forEach((function(e){E(e.id)}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{variant:"outlined",onClick:function(){a(!0)},startIcon:(0,i.jsx)(O.Z,{}),children:"Add a member"}),(0,i.jsxs)(m.Z,{fullScreen:l,open:t,onClose:u,"aria-labelledby":"responsive-dialog-title",children:[(0,i.jsx)(g.Z,{id:"responsive-dialog-title",children:"Add a member"}),(0,i.jsxs)(b.Z,{children:[(0,i.jsx)(j.Z,{children:"Add a member to your group by adding their email address below."}),(0,i.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"group-name",label:"Email",type:"email",fullWidth:!0,variant:"standard",onChange:function(e){return k(e.target.value)}})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(h.Z,{autoFocus:!0,onClick:u,children:"Cancel"}),(0,i.jsx)(h.Z,{autoFocus:!0,onClick:function(){C.Z.firestore().collection("groups").doc(d).update({groupMembers:C.Z.firestore.FieldValue.arrayUnion(N)}).catch((function(e){alert(e),console.log(e)})),C.Z.firestore().collection("users").doc(N).update({userGroups:C.Z.firestore.FieldValue.arrayUnion(d)}).catch((function(e){alert(e),console.log(e)})),u()},children:"Add"})]})]})]})},E=n(11163),D=n(78462),T=n(97212),F=n(79953),M=n(18987),U=n(69661);function B(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function R(e,r,n,t,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?r(l):Promise.resolve(l).then(t,o)}function L(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){R(i,t,o,a,c,"next",e)}function c(e){R(i,t,o,a,c,"throw",e)}a(void 0)}))}}function G(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function H(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function q(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,r)||z(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,r){if(e){if("string"===typeof e)return B(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,r):void 0}}var W=(0,u.Z)((function(e){return{dialogCont:{padding:"50px"},membersList:{marginTop:e.spacing(-2),marginBottom:e.spacing(4)},avatarBgColor:{backgroundImage:"linear-gradient(".concat("rgba(134,168,231,1)",", ").concat("rgba(127,127,213,0.5)",")")}}})),$=function(e){var r=e.children,n=e.onClose,t=H(e,["children","onClose"]);return(0,i.jsxs)(g.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){G(e,r,n[r])}))}return e}({sx:{m:0,p:2}},t,{children:[r,n?(0,i.jsx)(y.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,i.jsx)(v.Z,{})}):null]}))};$.propTypes={children:p().node,onClose:p().func.isRequired};var _=function(e){var r=e.buttonTitle,n=e.groupName,t=(0,E.useRouter)(),c=(0,Z.Z)(),u=W(),s=(0,w.Z)(c.breakpoints.down("md")),d=q(f.useState(!1),2),p=d[0],g=d[1],y=function(){g(!1)},v=t.query.group,x=(0,f.useState)([]),j=x[0],O=x[1],S=(0,f.useState)([]),k=S[0],A=S[1];(0,f.useEffect)((function(){var e=!0;function r(){return(r=L(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.Z.firestore().collection("groups").where("groupID","==",v).onSnapshot((function(r){e&&O(r.docs.map((function(e){return e.data().groupMembers})))}));case 2:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e=!1}}),[]);var P=function(){var e=L(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=j[0],n=0;case 2:if(!(n<r.length)){e.next=8;break}return e.next=5,C.Z.firestore().collection("users").where("userUID","==",r[n]).get().then((function(e){e.forEach((function(e){k.includes(e.data().userName)||A((function(r){return V(r).concat([e.data().userName])}))}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 5:n++,e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log("usernamessss    "+k),console.log("groupslist   "+j),(0,i.jsx)("div",{children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(h.Z,{variant:"outlined",onClick:function(){g(!0),P()},children:r}),(0,i.jsxs)(m.Z,{onClose:y,"aria-labelledby":"customized-dialog-title",open:p,fullScreen:s,children:[(0,i.jsx)($,{id:"customized-dialog-title",onClose:y,children:"Members"}),(0,i.jsxs)(b.Z,{dividers:!0,className:u.dialogCont,children:[0==k.length?(0,i.jsx)(l.Z,{gutterBottom:!0,align:"center",sx:{marginBottom:"20px"},children:"No current members"}):(0,i.jsx)(D.Z,{className:u.membersList,children:k.map((function(e){return(0,i.jsxs)(T.ZP,{children:[(0,i.jsx)(M.Z,{children:(0,i.jsx)(U.Z,{className:u.avatarBgColor,children:e.charAt(0).toLocaleUpperCase()})}),(0,i.jsx)(F.Z,{primary:e})]})}))}),(0,i.jsx)(N,{groupName:n})]})]})]})})};function Y(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function J(e,r,n,t,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?r(l):Promise.resolve(l).then(t,o)}function K(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){J(i,t,o,a,c,"next",e)}function c(e){J(i,t,o,a,c,"throw",e)}a(void 0)}))}}function Q(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function X(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ee(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return Y(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var re=(0,u.Z)((function(e){return{textField:{margin:"10px auto"}}})),ne=function(e){var r=e.children,n=e.onClose,t=X(e,["children","onClose"]);return(0,i.jsxs)(g.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){Q(e,r,n[r])}))}return e}({sx:{m:0,p:2}},t,{children:[r,n?(0,i.jsx)(y.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,i.jsx)(v.Z,{})}):null]}))};ne.propTypes={children:p().node,onClose:p().func.isRequired};var te=function(e){var r=e.buttonTitle,n=re(),t=(0,f.useState)(!1),a=t[0],c=t[1],l=(0,Z.Z)(),u=(0,w.Z)(l.breakpoints.down("md")),s=function(){c(!1)},d=(0,f.useState)(""),p=d[0],g=d[1],y=(0,f.useState)(""),v=y[0],k=y[1],A=(0,f.useState)([C.Z.auth().currentUser.uid]),P=A[0],I=(A[1],(0,f.useState)([])),N=I[0],E=I[1];return(0,f.useEffect)((function(){function e(){return(e=K(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,C.Z.firestore().collection("users").doc(C.Z.auth().currentUser.uid).update({userGroups:(r=C.Z.firestore.FieldValue).arrayUnion.apply(r,ee(N))}).catch((function(e){alert(e),console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[N]),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{variant:"outlined",onClick:function(){c(!0)},startIcon:(0,i.jsx)(O.Z,{}),children:r}),(0,i.jsxs)(m.Z,{fullScreen:u,open:a,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[(0,i.jsx)(ne,{id:"customized-dialog-title",onClose:s,children:"Create a new group"}),(0,i.jsxs)(b.Z,{children:[(0,i.jsx)(j.Z,{children:"To create a group, add a group name and description. (description is completely optional)"}),(0,i.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"group-name",label:"Group Name",fullWidth:!0,variant:"standard",className:n.textField,onChange:function(e){return g(e.target.value)}}),(0,i.jsx)(S.Z,{autoFocus:!0,margin:"dense",id:"group-description",label:"Group Description",fullWidth:!0,variant:"standard",className:n.textField,onChange:function(e){return k(e.target.value)}})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(h.Z,{autoFocus:!0,onClick:s,children:"Cancel"}),(0,i.jsx)(h.Z,{autoFocus:!0,onClick:function(){!function(){var e=C.Z.auth().currentUser.uid,r=C.Z.firestore().collection("groups").doc();r.set({groupName:p,groupDescription:v,groupMembers:P,groupID:r.id,createdAt:new Date,groupAdmin:e}).catch((function(e){alert(e),console.log(e)})),E(ee(N).concat([r.id]))}(),s()},children:"Save"})]})]})]})},oe=n(66242),ie=n(44267),ae=n(83965),ce=n(63399),le=(0,u.Z)((function(e){return{card:{backgroundColor:"#86A5D1",height:150},media:{height:100},title:{fontWeight:600,color:"#FFF"},content:{height:150}}}));function ue(e){var r=le(),n=e.imageURL,t=e.title,o=e.alt,a=e.link;return(0,i.jsx)(ce.C,{href:a,underline:"none",children:(0,i.jsxs)(oe.Z,{className:r.card,children:[(0,i.jsx)(ae.Z,{component:"img",height:"140",image:n,alt:o,className:r.media}),(0,i.jsx)(ie.Z,{className:r.content,children:(0,i.jsx)(l.Z,{component:"div",align:"center",className:r.title,children:t})})]})})}var se=function(e){var r="/map/activity&"+e.groupID;return(0,i.jsx)(ue,{imageURL:"https://images.unsplash.com/photo-1573811363987-13f5bb00dec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",title:"ACTIVITIES",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sollicitudin auctor. Praesent faucibus venenatis dictum.",alt:"rock climbing",link:r,category:"activity"})},fe=function(e){var r="/categories/movie/"+e.groupID;return(0,i.jsx)(ue,{imageURL:"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",title:"MOVIES",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sollicitudin auctor. Praesent faucibus venenatis dictum.",alt:"movie setting",link:r})},de="food",pe=function(e){var r=e.groupID,n="/map/".concat(de)+"&"+r;return(0,i.jsx)(ue,{imageURL:"https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",title:"FOOD",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sollicitudin auctor. Praesent faucibus venenatis dictum.",alt:"burger fries",link:n,category:de})},he=(0,u.Z)((function(e){return{featureContainer:{paddingTop:e.spacing(4)}}})),me=function(e){var r=e.groupID,n=he();return(0,i.jsx)(a.Z,{className:n.featureContainer,children:(0,i.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,i.jsx)(se,{groupID:r})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,i.jsx)(pe,{groupID:r})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,i.jsx)(fe,{groupID:r})})]})})};function ge(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function be(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ye(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ve(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return ge(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,u.Z)((function(e){return{textField:{margin:"10px auto"}}}));var xe=function(e){var r=e.children,n=e.onClose,t=ye(e,["children","onClose"]);return(0,i.jsxs)(g.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){be(e,r,n[r])}))}return e}({sx:{m:0,p:2}},t,{children:[r,n?(0,i.jsx)(y.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,i.jsx)(v.Z,{})}):null]}))};xe.propTypes={children:p().node,onClose:p().func.isRequired};var je=function(e){var r=e.groupID,n=ve(f.useState(!1),2),t=n[0],o=n[1],a=(0,Z.Z)(),c=(0,w.Z)(a.breakpoints.down("md")),l=function(){o(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{variant:"outlined",onClick:function(){o(!0)},startIcon:(0,i.jsx)(O.Z,{}),children:"Create event"}),(0,i.jsxs)(m.Z,{fullScreen:c,open:t,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[(0,i.jsx)(xe,{id:"customized-dialog-title",onClose:l,children:"Pick a category"}),(0,i.jsxs)(b.Z,{children:[(0,i.jsx)(j.Z,{children:"Start creating an event and choose one of the categories below."}),(0,i.jsx)(me,{groupID:r})]}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(h.Z,{autoFocus:!0,onClick:l,children:"Cancel"})})]})]})},we=n(78298);function Ze(e,r,n,t,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?r(l):Promise.resolve(l).then(t,o)}function Oe(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){Ze(i,t,o,a,c,"next",e)}function c(e){Ze(i,t,o,a,c,"throw",e)}a(void 0)}))}}var Se=(0,u.Z)((function(e){return{page:{padding:"50px"},groupTitle:{marginRight:e.spacing(2),color:e.colours.gradient1},groupLine:{flexGrow:1},backArrow:{marginRight:e.spacing(8)}}})),Ce=function(e){var r=e.groupName,n=e.buttonTitle,t=e.groupID,u=Se(),d=(0,E.useRouter)(),p=C.Z.auth().currentUser.uid,h=(0,f.useState)(""),m=h[0],g=h[1];(0,f.useEffect)((function(){function e(){return(e=Oe(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.firestore().collection("groups").where("groupID","==",t).get().then((function(e){e.forEach((function(e){console.log("printing admin deeeets here  "+e.data().groupAdmin),g(e.data().groupAdmin)}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var b="Create a new group"!=n&&p==m;return(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{className:u.page,children:(0,i.jsxs)(c.ZP,{container:!0,direction:"row",alignItems:"center",children:["/groups"==d.pathname?null:(0,i.jsx)("div",{className:u.backArrow,children:(0,i.jsx)(y.Z,{size:"medium",onClick:function(){d.push("/groups")},children:(0,i.jsx)(we.Z,{fontSize:"inherit"})})}),(0,i.jsx)(s.Z,{fontSize:"large",className:u.groupTitle}),(0,i.jsx)(l.Z,{variant:"h5",className:u.groupLine,children:r}),1==b?(0,i.jsx)(je,{groupID:t}):null,"Create a new group"==n?(0,i.jsx)(te,{buttonTitle:n}):(0,i.jsx)(_,{buttonTitle:n,groupName:r})]})})})}},12905:function(e,r,n){n(85893),n(11075);var t=n(61214);n(72211),n(15503),n(11163),(0,t.Z)((function(e){return{root:{display:"flex"},page:{backgroundColor:"#F9FAFA",width:"100%"},avatar:{marginRight:e.spacing(2)},appBar:{width:"calc(100% - ".concat(240,"px)"),backgroundColor:"#556cd6"},toolbar:e.mixins.toolbar,welcomeSign:{flexGrow:1}}}))},42373:function(e,r,n){var t=n(85893),o=(n(11075),n(61214)),i=n(86886),a=(n(72211),n(15503),n(11163),n(17320)),c=(n(20698),n(52168));n(89826);var l=(0,o.Z)((function(e){return{root:{display:"flex",backgroundColor:"#F9FAFA",minHeight:"100vh"},feed:{width:"100%"},rightBar:(r={backgroundColor:"white"},n=e.breakpoints.down("lg"),t={display:"none"},n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r),leftBar:{backgroundColor:"white"}};var r,n,t}));r.Z=function(e){var r=e.children,n=l();return(0,t.jsx)("div",{className:n.root,children:(0,t.jsxs)(i.ZP,{container:!0,children:[(0,t.jsx)(i.ZP,{item:!0,sm:2,className:n.leftBar,children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)(i.ZP,{item:!0,sm:8,className:n.feed,children:r}),(0,t.jsx)(i.ZP,{item:!0,sm:2,className:n.rightBar,children:(0,t.jsx)(a.Z,{})})]})})}},63399:function(e,r,n){var t=n(85893),o=n(67294),i=n(45697),a=n.n(i),c=n(86010),l=n(11163),u=n(41664),s=n(50122);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=(0,n(11496).ZP)("a")({}),m=o.forwardRef((function(e,r){var n=e.to,o=e.linkAs,i=(e.href,e.replace),a=e.scroll,c=e.shallow,l=e.prefetch,s=e.locale,f=p(e,["to","linkAs","href","replace","scroll","shallow","prefetch","locale"]);return(0,t.jsx)(u.default,{href:n,prefetch:l,as:o,replace:i,scroll:a,shallow:c,passHref:!0,locale:s,children:(0,t.jsx)(h,d({ref:r},f))})}));m.propTypes={href:a().any,linkAs:a().oneOfType([a().object,a().string]),locale:a().string,passHref:a().bool,prefetch:a().bool,replace:a().bool,scroll:a().bool,shallow:a().bool,to:a().oneOfType([a().object,a().string]).isRequired};var g=o.forwardRef((function(e,r){var n=e.activeClassName,o=void 0===n?"active":n,i=e.as,a=e.className,u=e.href,g=e.noLinkStyle,b=(e.role,p(e,["activeClassName","as","className","href","noLinkStyle","role"])),y=(0,l.useRouter)(),v="string"===typeof u?u:u.pathname,x=(0,c.Z)(a,f({},o,y.pathname===v&&o));return"string"===typeof u&&(0===u.indexOf("http")||0===u.indexOf("mailto:"))?g?(0,t.jsx)(h,d({className:x,href:u,ref:r},b)):(0,t.jsx)(s.Z,d({className:x,href:u,ref:r},b)):g?(0,t.jsx)(m,d({className:x,ref:r,to:u},b)):(0,t.jsx)(s.Z,d({component:m,linkAs:i,className:x,ref:r,to:u},b))}));g.propTypes={activeClassName:a().string,as:a().oneOfType([a().object,a().string]),className:a().string,href:a().any,linkAs:a().oneOfType([a().object,a().string]),noLinkStyle:a().bool,role:a().string},r.C=g}}]);