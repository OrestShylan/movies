"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1236:function(n,t,e){e.d(t,{BG:function(){return c},Bt:function(){return s},Dt:function(){return p},Pv:function(){return o},wr:function(){return i},y:function(){return u}});var r=e(1243),a="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("/trending/all/day?api_key=".concat(a))},o=function(n){return r.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},c=function(n){return r.Z.get("/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))},u=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))},p=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},4672:function(n,t,e){e.d(t,{O:function(){return Z}});var r,a,i,o,c,u=e(7689),s=e(1236),p=e(168),f=e(6444),l=e(1087),d=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),g=f.ZP.li(a||(a=(0,p.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),x=f.ZP.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),h=f.ZP.p(o||(o=(0,p.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),m=(0,f.ZP)(l.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n"]))),v=e(184),Z=function(n){var t=n.movies,e=(0,u.TH)();return(0,v.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_name,i=n.poster_path;return(0,v.jsx)(g,{children:(0,v.jsxs)(m,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(x,{src:(0,s.Dt)(i),alt:a})," ",(0,v.jsx)(h,{children:null!==r&&void 0!==r?r:a})]})},t)}))})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(9439),a=e(1236),i=e(2791),o=e(4672),c=e(4585),u=e(7398),s=e(184);function p(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,i.useState)(!1),l=(0,r.Z)(f,2),d=l[0],g=l[1];return(0,i.useEffect)((function(){g(!0),a.wr().then((function(n){var t=n.data;p(t.results)})).catch((function(n){console.log(n)})).finally((function(){g(!1)}))}),[]),(0,s.jsxs)(u.o,{children:[(0,s.jsx)(u.D,{children:"Trending Movies Today"}),d&&(0,s.jsx)(c.a,{}),(0,s.jsx)(o.O,{movies:e})]})}},7398:function(n,t,e){e.d(t,{D:function(){return u},o:function(){return c}});var r,a,i=e(168),o=e(6444),c=o.ZP.div(r||(r=(0,i.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.h2(a||(a=(0,i.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))}}]);
//# sourceMappingURL=544.7c32f5c0.chunk.js.map