"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1236:function(n,t,e){e.d(t,{Bt:function(){return c},Dt:function(){return u},Pv:function(){return a},y:function(){return o}});var r=e(1243),i="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(n){return r.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},o=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"))},u=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},6368:function(n,t,e){e.d(t,{O:function(){return c}});e(2791);var r=e(7689),i=e(1236),a=e(1544),o=e(184),c=function(n){var t=n.movies,e=(0,r.TH)();return console.log(t),t&&Array.isArray(t)?(0,o.jsx)(a.aV,{children:t.map((function(n){var t=n.id,r=n.title,c=n.original_name,u=n.poster_path;return(0,o.jsx)(a.ck,{children:(0,o.jsxs)(a.FB,{to:"/movies/".concat(t),state:{from:e},children:[(0,o.jsx)(a.Ee,{src:(0,i.Dt)(u),alt:c})," ",(0,o.jsx)(a.Dx,{children:null!==r&&void 0!==r?r:c},t)]})},t)}))}):(0,o.jsx)("p",{children:"No movies available."})}},1544:function(n,t,e){e.d(t,{Dx:function(){return x},Ee:function(){return f},FB:function(){return g},aV:function(){return l},ck:function(){return d}});var r,i,a,o,c,u=e(168),s=e(6444),p=e(1087),l=s.ZP.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),d=s.ZP.li(i||(i=(0,u.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),f=s.ZP.img(a||(a=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),x=s.ZP.p(o||(o=(0,u.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),g=(0,s.ZP)(p.rU)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n"])))},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(6368),i=e(4585),a=e(7398),o=e(3337),c=e(184);function u(){var n=(0,o.eg)(),t=n.data,e=n.isLoading,u=n.isFetching,s=n.isSuccess,p=t?t.results:[];return(0,c.jsxs)(a.o,{children:[(0,c.jsx)(a.D,{children:"Trending Movies Today"}),e||u?(0,c.jsx)(i.a,{}):s?(0,c.jsx)(r.O,{movies:p}):(0,c.jsx)("p",{children:"No trending movies available."})]})}},7398:function(n,t,e){e.d(t,{D:function(){return u},o:function(){return c}});var r,i,a=e(168),o=e(6444),c=o.ZP.div(r||(r=(0,a.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.h2(i||(i=(0,a.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))}}]);
//# sourceMappingURL=544.bdccf080.chunk.js.map