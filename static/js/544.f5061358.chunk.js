"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1236:function(n,t,e){e.d(t,{Bt:function(){return c},Dt:function(){return s},Pv:function(){return o},y:function(){return a}});var r=e(1243),i="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(n){return r.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},a=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"))},s=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},4672:function(n,t,e){e.d(t,{O:function(){return b}});e(2791);var r,i,o,a,c,s=e(7689),u=e(1236),p=e(168),l=e(6444),d=e(1087),g=l.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),x=l.ZP.li(i||(i=(0,p.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),f=l.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),h=l.ZP.p(a||(a=(0,p.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),m=(0,l.ZP)(d.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n"]))),v=e(184),b=function(n){var t=n.movies,e=(0,s.TH)();return console.log(t),(0,v.jsx)(g,{children:t.results.map((function(n){var t=n.id,r=n.title,i=n.original_name,o=n.poster_path;return(0,v.jsx)(x,{children:(0,v.jsxs)(m,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(f,{src:(0,u.Dt)(o),alt:i})," ",(0,v.jsx)(h,{children:null!==r&&void 0!==r?r:i})]})},t)}))})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(4672),i=e(4585),o=e(7398),a=e(3337),c=e(184);function s(){var n=(0,a.eg)(),t=n.data,e=n.isLoading,s=n.isFetching,u=n.isSuccess;return console.log(t),console.log(u),(0,c.jsxs)(o.o,{children:[(0,c.jsx)(o.D,{children:"Trending Movies Today"}),e||s?(0,c.jsx)(i.a,{}):u||t?(0,c.jsx)(r.O,{movies:t}):(0,c.jsx)("p",{children:"No trending movies available."})]})}},7398:function(n,t,e){e.d(t,{D:function(){return s},o:function(){return c}});var r,i,o=e(168),a=e(6444),c=a.ZP.div(r||(r=(0,o.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=a.ZP.h2(i||(i=(0,o.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))}}]);
//# sourceMappingURL=544.f5061358.chunk.js.map