(this.webpackJsonpbx_cloud=this.webpackJsonpbx_cloud||[]).push([[0],{14:function(e,n,o){e.exports=o(38)},36:function(e,n,o){},38:function(e,n,o){"use strict";o.r(n);var t=o(1),c=o.n(t),a=o(11),s=o.n(a),r=o(13),i=new WebSocket("ws://64.227.107.166/wb"),l=o(12),u=o.n(l);var d=function(){console.log("test");var e=Object(t.useState)({Message:"hi there"}),n=Object(r.a)(e,1)[0];return Object(t.useEffect)((function(){return i.onopen=function(){console.log("connected")},i.onmessage=function(e){i.send({Message:"hi there"}),i.send(JSON.stringify(n))},i.onerror=function(e){console.log(e)},u.a.get("http://64.227.107.166/api").then((function(e){var n=e.data;console.log(n),console.log(e)})),function(){i.onclose=function(){console.log("disconnected")}}}),[n]),c.a.createElement("div",null)};o(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(37);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.94afbd68.chunk.js.map