(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7657],{55113:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(63366),r=n(87462),a=n(67294),i=n(86010),l=n(27192),s=n(41796),c=n(11496),u=n(33616),d=n(28979);function v(e){return(0,d.Z)("MuiPaper",e)}(0,n(76087).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(85893);const f=["className","component","elevation","square","variant"],h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},m=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",h(t.elevation))}, ${(0,s.Fq)("#fff",h(t.elevation))})`}))));var g=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiPaper"}),{className:a,component:s="div",elevation:c=1,square:d=!1,variant:h="elevation"}=n,g=(0,o.Z)(n,f),b=(0,r.Z)({},n,{component:s,elevation:c,square:d,variant:h}),x=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,a={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,l.Z)(a,v,r)})(b);return(0,p.jsx)(m,(0,r.Z)({as:s,ownerState:b,className:(0,i.Z)(x.root,a),ref:t},g))}))},26447:function(e,t,n){"use strict";var o=n(63366),r=n(87462),a=n(67294),i=n(95408),l=n(98700),s=n(39707),c=n(59766),u=n(11496),d=n(33616),v=n(85893);const p=["component","direction","spacing","divider","children"];function f(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${r}`})),e)),[])}const h=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,l.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),a=(0,i.P$)({values:e.direction,base:r}),s=(0,i.P$)({values:e.spacing,base:r}),u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,l.NA)(o,t)}};var r};n=(0,c.Z)(n,(0,i.k9)({theme:t},s,u))}return n})),m=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStack"}),a=(0,s.Z)(n),{component:i="div",direction:l="column",spacing:c=0,divider:u,children:m}=a,g=(0,o.Z)(a,p),b={direction:l,spacing:c};return(0,v.jsx)(h,(0,r.Z)({as:i,ownerState:b,ref:t},g,{children:u?f(m,u):m}))}));t.Z=m},49361:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/deleteaccount/[account]",function(){return n(73171)}])},73171:function(e,t,n){"use strict";n.r(t);var o=n(34051),r=n.n(o),a=n(85893),i=n(61214),l=n(55113),s=n(15861),c=n(83321),u=n(45608),d=n(11163),v=n(15503),p=(n(70853),n(72211),n(26447));function f(e,t,n,o,r,a,i){try{var l=e[a](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,r)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){f(a,o,r,i,l,"next",e)}function l(e){f(a,o,r,i,l,"throw",e)}i(void 0)}))}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=(0,i.Z)((function(e){var t;return{textField:(t={},m(t,"& fieldset",{borderRadius:10}),m(t,"margin","10px auto"),t),formStyle:m({padding:"30px 30px",width:500},e.breakpoints.down("sm"),{width:300}),buttonStyle:{backgroundColor:"#5082B3","&:hover":{backgroundColor:"#6392C0"},borderRadius:20},button:{justifyContent:"center",margin:"10px auto"},login:{fontWeight:600,color:"#5082B3"},signUpStyle:{margin:"auto 5px"},divider:{margin:"20px auto"},root:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#A9B5DD",minHeight:"100vh"},buttonDiv:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:e.spacing(6)},textContainer:{marginTop:e.spacing(4)}}}));t.default=function(){var e=g(),t=(0,d.useRouter)(),n=v.Z.auth().currentUser.uid;function o(){return(o=h(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,u.Z.deleteAccount();case 3:t.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("user email hereee   "+n);var i=function(){v.Z.firestore().collection("users").doc(n).delete().then((function(){console.log("account has been deleted in the database")})).catch((function(e){alert(e),console.log(e)}))};return(0,a.jsx)("div",{className:e.root,children:(0,a.jsxs)(l.Z,{elevation:10,className:e.formStyle,children:[(0,a.jsx)(s.Z,{variant:"h4",gutterBottom:!0,className:e.login,children:"Delete Account"}),(0,a.jsx)("div",{className:e.textContainer,children:(0,a.jsx)(s.Z,{gutterBottom:!0,children:"Are you sure you want to delete your account?"})}),(0,a.jsx)("div",{className:e.buttonDiv,children:(0,a.jsxs)(p.Z,{direction:"row",spacing:2,children:[(0,a.jsx)(c.Z,{variant:"contained",className:e.buttonStyle,size:"large",onClick:function(){return o.apply(this,arguments)},children:"Confirm"}),(0,a.jsx)(c.Z,{variant:"contained",className:e.buttonStyle,size:"large",onClick:function(){t.push("/home")},children:"Cancel"})]})})]})})}},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[1214,400,8112,9774,2888,179],(function(){return t=49361,e(e.s=t);var t}));var t=e.O();_N_E=t}]);