"use strict";(self.webpackChunksearch_movies=self.webpackChunksearch_movies||[]).push([[350],{68:function(n,t,e){e.r(t),e.d(t,{Bg:function(){return s},Wrapper:function(){return c}});var r,a,i=e(168),o=e(686),c=o.Z.div(r||(r=(0,i.Z)([""]))),s=o.Z.div(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  min-height: 100vh;\n  z-index: -1;\n  opacity: 0.2;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  /* filter: blur(5px); */\n  backdrop-filter: blur(200px);\n  backdrop-filter: opacity(20%);\n"])),(function(n){return n.bg}))},545:function(n,t,e){e.d(t,{Z:function(){return w}});var r,a,i,o,c,s=e(689),u=e(168),p=e(686),l=e(87),d=p.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  flex-wrap: wrap;\n  gap: 10px;\n  list-style: none;\n  padding: 0;\n  justify-content: center;\n"]))),f=p.Z.li(a||(a=(0,u.Z)(["\n  position: relative;\n  width: 150px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 2px 7px #332f2f;\n"]))),h=(0,p.Z)(l.rU)(i||(i=(0,u.Z)(["\n  font-size: 18px;\n  text-decoration: none;\n  width: 150px;\n  color: var(--primary-bg);\n  &:hover,\n  &:focus {\n    /* font-size: 20px; */\n    color: var(--accent);\n    color: var(--primary-bg);\n    /* letter-spacing: 0.5px; */\n  }\n\n  &:hover div,\n  &:focus div {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),g=p.Z.div(o||(o=(0,u.Z)(["\n  /* word-wrap: break-word; */\n  /* text-overflow: ellipsis; */\n  /* white-space: nowrap; */\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--accent);\n  padding: 5px;\n  height: 40%;\n  transform: translateY(30%);\n  opacity: 0;\n  /* background-color: $primary-accent-color; */\n  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;\n  text-align: center;\n  /* padding: 26px 0; */\n  /* text-transform: uppercase; */\n"]))),v=p.Z.p(c||(c=(0,u.Z)(["\n  display: inline-block;\n  /* height: 50px; */\n  /* white-space: nowrap; */\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  /* height: 100%; */\n  max-height: 3em; /* \u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454\u043c\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0443 \u0432\u0438\u0441\u043e\u0442\u0443 \u043d\u0430 \u0442\u0440\u0438 \u0440\u044f\u0434\u043a\u0438 */\n  line-height: 1em;\n  /* \u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454\u043c\u043e \u0432\u0438\u0441\u043e\u0442\u0443 \u043b\u0456\u043d\u0456\u0457 \u0442\u0435\u043a\u0441\u0442\u0443 \u043d\u0430 \u043e\u0434\u0438\u043d \u0440\u044f\u0434\u043e\u043a */\n  overflow: hidden;\n"]))),x=e(159),m=e(184);var w=function(n){var t=n.movies,e=(0,s.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d,{children:t.map((function(n){var t,r=n.id,a=n.title,i=n.poster_path,o=n.release_date;return a&&(0,m.jsx)(f,{children:(0,m.jsxs)(h,{to:"/movies/".concat(r),state:{from:e},children:[(0,m.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300"+i:x,alt:a,width:150,height:225}),(0,m.jsxs)(g,{children:[(0,m.jsx)(v,{children:a}),o&&(0,m.jsx)("p",{children:(t=o,new Date(t).getFullYear())})]})]},r)},r)}))})})}},436:function(n,t,e){e.d(t,{WK:function(){return p},Y5:function(){return d},nA:function(){return h},wr:function(){return s}});var r=e(861),a=e(687),i=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg"}};function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?language=en-US",c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(t,"&language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/").concat(e,"?language=en-US"),c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},350:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(439),a=e(545),i=e(791),o=e(436),c=e(184),s=e(68).Bg;var u,p=function(n){var t=n.movie;return t&&(0,c.jsx)(s,{bg:"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path),alt:t.title})},l=e(168),d=e(686).Z.h1(u||(u=(0,l.Z)(["\n  text-align: center;\n"])));var f=function(n){var t=n.children;return(0,c.jsx)(d,{children:t})};var h=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],u=(0,i.useState)({}),l=(0,r.Z)(u,2),d=l[0],h=l[1];return(0,i.useEffect)((function(){(0,o.wr)().then((function(n){var t=n.filter((function(n){return n.title}));s(t),h(t[0])}))}),[]),(0,i.useEffect)((function(){s(e)}),[e]),(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)(p,{movie:d}),(0,c.jsx)(f,{children:"Trending today"}),(0,c.jsx)(a.Z,{movies:e})]})}},159:function(n,t,e){n.exports=e.p+"static/media/what.47b950d4f6a1dd386722.jpg"}}]);
//# sourceMappingURL=350.bb747a7e.chunk.js.map