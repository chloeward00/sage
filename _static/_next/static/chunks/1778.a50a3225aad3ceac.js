(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1778],{91778:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r=t(85893),o=t(67294),u=t(45243),c=t.n(u);const i=(0,o.createContext)(null),l=i.Provider;function a(){const n=(0,o.useContext)(i);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function f(n){let{children:e,className:t,id:r,placeholder:c,style:i,whenCreated:a,...f}=n;const p=(0,o.useRef)(null),d=function(n,e){const[t,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===t){const t=new u.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(p,f),v=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=d&&!1===v.current&&null!=a&&(v.current=!0,a(d))}),[d,a]),(0,o.useEffect)((()=>()=>{null==d||d.remove()}),[d]);const[m]=(0,o.useState)({className:t,id:r,style:i}),g=(0,o.useMemo)((()=>d?{__version:1,map:d}:null),[d]),y=g?o.createElement(l,{value:g},e):c??null;return o.createElement("div",s({},m,{ref:p}),y)}var p=t(73935);function d(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){const u=(0,o.useRef)(n(t,r)),c=(0,o.useRef)(t),{instance:i}=u.current;return(0,o.useEffect)((function(){c.current!==t&&(e(i,t,c.current),c.current=t)}),[i,t,r]),u}}function v(n,e){const t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function m(n,e){const t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function g(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function y(n){return function(e){const t=a(),r=n(g(e,t),t);return v(t.map,e.attribution),m(r.current,e.eventHandlers),function(n,e){(0,o.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}(r.current,t),r}}const h=function(n){function e(e,t){const{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null}return(0,o.forwardRef)(e)}(y(d((function(n,e){let{url:t,...r}=n;return{instance:new u.TileLayer(t,g(r,e)),context:e}}),(function(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}))));const b=function(n,e){return function(n){function e(e,t){const{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null==e.children?null:o.createElement(l,{value:u},e.children)}return(0,o.forwardRef)(e)}(y(d(n,e)))}((function(n,e){let{position:t,...r}=n;const o=new u.Marker(t,r);return{instance:o,context:{...e,overlayContainer:o}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),x=function(n,e){return function(n){function e(e,t){const[r,u]=(0,o.useState)(!1),{instance:c}=n(e,u).current;(0,o.useImperativeHandle)(t,(()=>c)),(0,o.useEffect)((function(){r&&c.update()}),[c,r,e.children]);const i=c._contentNode;return i?(0,p.createPortal)(e.children,i):null}return(0,o.forwardRef)(e)}(function(n,e){return function(t,r){const o=a(),u=n(g(t,o),o);return v(o.map,t.attribution),m(u.current,t.eventHandlers),e(u.current,o,t,r),u}}(d(n),e))}((function(n,e){return{instance:new u.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:u,onOpen:c,position:i}=t;(0,o.useEffect)((function(){const{instance:t}=n;function o(n){n.popup===t&&(t.update(),r(!0),null==c||c())}function l(n){n.popup===t&&(r(!1),null==u||u())}return e.map.on({popupopen:o,popupclose:l}),null==e.overlayContainer?(null!=i&&t.setLatLng(i),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:o,popupclose:l}),null==(n=e.overlayContainer)||n.unbindPopup(),e.map.removeLayer(t)}}),[n,e,r,u,c,i])}));t(65729),t(26467);var w=function(n){n.center;var e=n.draggable,t=n.onDragMarker,u=n.location,i=(0,o.useRef)(null),l=(0,o.useRef)();(0,o.useEffect)((function(){var n=l.current;(void 0===n?{}:n).leafletElement}),[]);var a=(0,o.useMemo)((function(){return{dragend:function(){var n=i.current;null!=n&&t(n.getLatLng())}}}),[t]);return(0,r.jsxs)(f,{center:[53.38481,-6.26319],zoom:15,scrollWheelZoom:!0,style:{height:"75vh",width:"75vw"},children:[(0,r.jsx)(h,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(b,{icon:c().divIcon({iconSize:[60,60],iconAnchor:[60,60],className:"mymarker",html:"\ud83d\udd34"}),position:[u&&u.lng?u.lng:"",u&&u.lat?u.lat:""],draggable:e,eventHandlers:a,ref:i,children:(0,r.jsx)(x,{children:"Chosen Location"})})]})}},26467:function(){},65729:function(){}}]);