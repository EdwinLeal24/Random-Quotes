(this.webpackJsonpcitas_front=this.webpackJsonpcitas_front||[]).push([[0],{18:function(n,e,t){},21:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t(0),i=t.n(r),s=t(8),a=t.n(s),o=(t(18),t(12)),u=t(2),d=t(3);function j(){var n=Object(u.a)(["\n    margin: 20px\n"]);return j=function(){return n},n}function l(){var n=Object(u.a)(["\n    width: 100%;\n    min-height: 100%\n"]);return l=function(){return n},n}function h(){var n=Object(u.a)(["\n    margin: 150px 50px 50px 50px;\n   \n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n    width: 400px;\n    height: 400px;\n    border: 3px solid black;\n    border-radius: 20px;\n    background-size: cover;\n    overflow: hidden;\n"]);return b=function(){return n},n}var f=d.a.div(b()),x=d.a.div(h()),p=d.a.img(l()),O=d.a.h1(j()),g=function(){var n=Object(r.useState)([]),e=Object(o.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){fetch("https://edwin-citas-app.herokuapp.com/citas").then((function(n){return n.json()})).then((function(n){return i(n)})).catch((function(n){return console.log("Se ha producido un error",n)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{children:"Citas Celebres"}),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1"}),Object(c.jsx)("div",{className:"sm-12 order-sm-2 lg-5 order-lg-1",children:Object(c.jsx)(f,{children:Object(c.jsx)(p,{src:t.img,alt:""})})}),Object(c.jsx)("div",{className:"sm-12 order-sm-1 lg-6 order-lg-2",children:Object(c.jsxs)(x,{children:[Object(c.jsx)("h4",{children:t.cita}),Object(c.jsxs)("p",{className:"text-right",children:["-",t.autor,"-"]})]})})]})})]})};t(21);var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(g,{})})},v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;t(n),c(n),r(n),i(n),s(n)}))};t(22);a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.ef74c31c.chunk.js.map