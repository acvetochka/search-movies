"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[829],{829:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,u,c,i=e(433),o=e(439),s=e(791),p=e(689),f=e(436),l=e(168),h=e(686),d=h.Z.ul(r||(r=(0,l.Z)(["\n  padding: 20px;\n  list-style: none;\n"]))),x=h.Z.li(a||(a=(0,l.Z)(["\n  background-color: #f2eee6;\n  padding: 20px;\n  font-size: 14px;\n  text-align: justify;\n  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */\n  margin-bottom: 20px;\n"]))),g=h.Z.p(u||(u=(0,l.Z)(["\n  font-weight: bold;\n"]))),Z=h.Z.p(c||(c=(0,l.Z)(["\n  font-style: italic;\n"]))),v=e(184);var m=function(){var n=(0,p.UO)().movieId,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){n&&(0,f.oO)(n).then((function(n){return a((0,i.Z)(n))})).catch((function(n){return console.log(n)}))}),[n]),(0,v.jsx)("div",{children:(0,v.jsx)(d,{children:r&&r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,v.jsxs)(x,{children:[(0,v.jsxs)(g,{children:["Author: ",e]}),(0,v.jsx)(Z,{children:r})]},t)}))})})}},436:function(n,t,e){e.d(t,{WK:function(){return p},Y5:function(){return l},oO:function(){return g},wr:function(){return o},y:function(){return d}});var r=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg"}};function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day?language=en-US",i);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&language=en-US"),i);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US"),i);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?language=en-US"),i);case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?language=en-US"),i);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=829.763cc7bf.chunk.js.map