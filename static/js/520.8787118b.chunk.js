"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{1236:function(n,e,t){t.d(e,{Bt:function(){return c},Dt:function(){return s},Pv:function(){return a},y:function(){return i}});var r=t(1243),o="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(n){return r.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},i=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"))},s=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},4672:function(n,e,t){t.d(e,{O:function(){return b}});t(2791);var r,o,a,i,c,s=t(7689),u=t(1236),p=t(168),l=t(6444),f=t(1087),d=l.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),x=l.ZP.li(o||(o=(0,p.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),h=l.ZP.img(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),g=l.ZP.p(i||(i=(0,p.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),m=(0,l.ZP)(f.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n"]))),v=t(184),b=function(n){var e=n.movies,t=(0,s.TH)();return console.log(e),e&&Array.isArray(e)?(0,v.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,o=n.original_name,a=n.poster_path;return(0,v.jsx)(x,{children:(0,v.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,v.jsx)(h,{src:(0,u.Dt)(a),alt:o})," ",(0,v.jsx)(g,{children:null!==r&&void 0!==r?r:o})]})},e)}))}):(0,v.jsx)("p",{children:"No movies available."})}},7398:function(n,e,t){t.d(e,{D:function(){return s},o:function(){return c}});var r,o,a=t(168),i=t(6444),c=i.ZP.div(r||(r=(0,a.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=i.ZP.h2(o||(o=(0,a.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))},9520:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,a,i=t(9439),c=t(2791),s=t(1087),u=t(8174),p=t(1236),l=t(5861),f=t(7757),d=t.n(f),x=t(8494),h=t(168),g=t(6444),m=g.ZP.form(r||(r=(0,h.Z)(["\n  position: relative;\n  width: 380px;\n  margin: 30px auto;\n"]))),v=g.ZP.input(o||(o=(0,h.Z)(["\n  padding: 0 14px 4px 0;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.14;\n  display: flex;\n  align-items: center;\n  width: 380px;\n  height: 30px;\n  background-color: transparent;\n  outline-color: transparent;\n  border: none;\n  border-bottom: 1px solid #000;\n  color: #000;\n  outline: 0 none;\n  outline-offset: 0;\n  &:focus,\n  &:hover {\n    border: transparent;\n    border-bottom: 1px solid #ff6b08;\n  }\n  &::placeholder {\n    opacity: 1;\n  }\n"]))),b=g.ZP.button(a||(a=(0,h.Z)(["\n  position: absolute;\n  justify-content: end;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  right: -8px;\n  bottom: -4px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    color: #000;\n    opacity: 1;\n  }\n"]))),Z=t(184),w=function(n){var e=n.onSubmit,t=(0,c.useState)(""),r=(0,i.Z)(t,2),o=r[0],a=r[1],s=function(){var n=(0,l.Z)(d().mark((function n(t){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==o.trim()){n.next=4;break}return u.Am.warn("Sorry, you need to enter a movie title."),n.abrupt("return");case 4:return console.log(o),n.prev=5,n.next=8,(0,p.Pv)(o);case 8:r=n.sent,0===r.data.results.length?u.Am.error("No results found."):(e(o),a("")),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(5),console.error("Error during search:",n.t0),u.Am.error("An error occurred while searching. Please try again later.");case 17:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)(m,{onSubmit:s,children:[(0,Z.jsx)(v,{type:"text",placeholder:"Search movie",value:o,onChange:function(n){a(n.currentTarget.value)}}),(0,Z.jsx)(b,{type:"submit",children:(0,Z.jsx)(x.Yfv,{})})]})},y=t(4585),j=t(4672),k=t(7398);function P(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,s.lr)(),a=(0,i.Z)(o,2),l=a[0],f=a[1],d=(0,c.useState)(!1),x=(0,i.Z)(d,2),h=x[0],g=x[1];return(0,c.useEffect)((function(){var n=l.get("query");n?h||(g(!0),p.Pv(n).then((function(n){var e=n.data;e&&e.results?r(e.results):r([]),g(!1)})).catch((function(n){g(!1),u.Am.error(n.message)}))):r([])}),[l,h]),(0,Z.jsxs)(k.o,{children:[(0,Z.jsx)(w,{onSubmit:function(n){f({query:n})}}),h&&(0,Z.jsx)(y.a,{}),t&&t.length>0?(0,Z.jsx)(j.O,{movies:t}):(0,Z.jsx)("p",{children:"No movies found."})]})}}}]);
//# sourceMappingURL=520.8787118b.chunk.js.map