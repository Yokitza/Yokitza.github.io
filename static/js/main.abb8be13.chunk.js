(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{148:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(57),r=n.n(i),l=(n(148),n(60)),c=n(86),s=n(37),d=n(36),u=n(7),g=Object(d.withScriptjs)(Object(d.withGoogleMap)((function(t){var e=t.markers,n=t.setMarkers,a=t.addMarker,o=["red","green","blue"],i={path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",fillColor:"transparent",fillOpacity:.5,strokeWeight:0,rotation:0,scale:2};return Object(u.jsx)(d.GoogleMap,{defaultZoom:8,defaultCenter:{lat:40.5,lng:-74},onClick:function(t){a(t.latLng.lat(),t.latLng.lng())},children:e.map((function(t){return Object(u.jsx)(d.Marker,{position:{lat:t.lat,lng:t.lng},icon:Object(s.a)(Object(s.a)({},i),{},{fillColor:t.color}),clickable:!0,onClick:function(a){!function(t){var a=(1+(0|(null===o||void 0===o?void 0:o.indexOf(t.color))))%o.length,i=e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{color:o[a]}):e}));n(i)}(t)},onRightClick:function(){!function(t){var a=e.filter((function(e){return e.id!==t}));n(a)}(t.id)}},t.id)}))})}))),j=function(){var t,e={height:"100vh",width:"100%",backgroundColor:"#aeaeae"},n="markers",a=JSON.parse(null===(t=window.localStorage)||void 0===t?void 0:t.getItem(n))||[],i=o.a.useState(a),r=Object(c.a)(i,2),s=r[0],d=r[1],j=function(t){d(t),window.localStorage.setItem(n,JSON.stringify(t))},p=o.a.useState(null),b=Object(c.a)(p,2),f=b[0],h=b[1];return Object(u.jsxs)("div",{style:e,children:[Object(u.jsx)(g,{addMarker:function(t,e){var n={id:1e3*Math.random(),lat:t,lng:e,color:"red"},a=[].concat(Object(l.a)(s),[n]);j(Object(l.a)(a))},markers:s,setMarkers:j,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBUjTS_5RvEUsxU3Pq6lya1WHJngcFnieY&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(u.jsx)("div",{style:e}),containerElement:Object(u.jsx)("div",{style:e}),mapElement:Object(u.jsx)("div",{style:e})}),Object(u.jsxs)("div",{style:{backgroundColor:"white",width:"10vw",minWidth:"15rem",position:"absolute",bottom:"0",margin:"10px",left:"0",display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",padding:"1rem",borderRadius:"3px",boxShadow:"rgb(0 0 0 / 30%) 0px 1px 4px -1px;"},children:[Object(u.jsx)("h2",{style:{marginTop:0},children:"Batch Add"}),Object(u.jsx)("textarea",{rows:"4",style:{height:"10rem",resize:"none",marginBottom:"1rem"},value:f,onChange:function(t){h(t.target.value)}}),Object(u.jsx)("button",{className:"google",onClick:function(){return function(t){if(t){var e=t.split("\n"),n=[];e.forEach((function(t){var e=t.split(",");n.push({id:1e3*Math.random(),lat:parseFloat(e[0]),lng:parseFloat(e[1]),color:e[2]?e[2]:"red"})})),j([].concat(Object(l.a)(s),n))}}(f)},children:"Add"})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,350)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),p()}},[[349,1,2]]]);
//# sourceMappingURL=main.abb8be13.chunk.js.map