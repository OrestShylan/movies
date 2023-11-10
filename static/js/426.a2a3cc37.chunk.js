"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{1236:function(n,e,t){t.d(e,{Bt:function(){return s},Dt:function(){return c},Pv:function(){return o},y:function(){return a}});var r=t(1243),i="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(n){return r.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},a=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"))},s=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"))},c=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},1426:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,a,s,c,d,l,u,f,v=t(7689),p=t(4585),x=t(168),h=t(6444),g=h.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n"]))),m=h.ZP.img(i||(i=(0,x.Z)(["\n  width: 360px;\n  margin-right: 20px;\n"]))),b=h.ZP.h2(o||(o=(0,x.Z)(["\n  font-size: 42px;\n  margin: 0;\n"]))),j=h.ZP.span(a||(a=(0,x.Z)(["\n  font-weight: 500;\n"]))),Z=h.ZP.p(s||(s=(0,x.Z)(["\n  font-size: 24px;\n  line-height: 2;\n"]))),k=t(1236),w=t(3433),y=(t(2791),t(5048)),_=t(3337),P=t(8174),A=h.ZP.button(c||(c=(0,x.Z)(["\n  background-color: #3f51b5;\n  color: #fff;\n  font-weight: bold;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #5c6bc0;\n  }\n\n  &.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background-color: red;\n  }\n"]))),U=t(184),S=function(n){var e=n.movie,t=(0,y.I0)(),r=(0,y.v9)((function(n){return n.movies.favorites})),i=r.some((function(n){return n.id===e.id}));return(0,U.jsx)(A,{onClick:function(){t((0,_._p)(e)),(0,P.Am)("Added to favorites",{type:"success"});var n=[].concat((0,w.Z)(r),[e]);localStorage.setItem("favoriteMovies",JSON.stringify(n))},disabled:i,children:i?"Addet to Favorites\u2705":"Add to Favorites "})},C=function(n){var e=n.movieDetails,t=e.poster_path,r=e.original_title,i=e.overview,o=e.genres,a=e.vote_average;return(0,U.jsxs)(g,{children:[(0,U.jsx)(m,{src:(0,k.Dt)(t),alt:r}),(0,U.jsxs)("div",{children:[(0,U.jsx)(b,{children:r}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(j,{children:"User Score "}),Math.round(100*a/10),"%"]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(j,{children:"Overview: "}),i]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(j,{children:"Genres: "}),o?o.map((function(n){return n.name})).join(", "):"genres are not defined."]}),(0,U.jsx)(S,{movie:e})]})]})},O=h.ZP.h3(d||(d=(0,x.Z)(["\n  font-size: 38px;\n  text-align: center;\n"]))),q=h.ZP.ul(l||(l=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n"]))),z=t(8940),D=function(){var n,e,t=(0,v.TH)();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(O,{children:"Additional information"}),(0,U.jsxs)(q,{children:[(0,U.jsx)("li",{children:(0,U.jsx)(z.rU,{to:"cast",state:{from:null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(z.rU,{to:"reviews",state:{from:null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from},children:"Reviews"})})]})]})},F=t(1087),G=h.ZP.div(u||(u=(0,x.Z)(["\n  margin: 20px 30px;\n"]))),I=(0,h.ZP)(F.rU)(f||(f=(0,x.Z)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 4px 12px;\n  background-color: inherit;\n  border: 1px solid #000;\n  border-radius: 5px;\n  color: #000;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  &:hover {\n    background-color: #ff6b01;\n    border: 1px solid #ff6b01;\n    color: #fff;\n  }\n"])));function N(){var n,e,t=(0,v.UO)().movieId,r=(0,_.QC)(t),i=r.data,o=r.isLoading,a=r.isFetching,s=r.isSuccess,c=(0,v.TH)(),d=null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,U.jsxs)(G,{children:[(0,U.jsx)(I,{to:d,children:"Go Back"}),o||a?(0,U.jsx)(p.a,{}):s||i?(0,U.jsx)(C,{movieDetails:i}):(0,U.jsx)("p",{children:"No trending movies available."}),(0,U.jsx)(D,{}),(0,U.jsx)(v.j3,{})]})}}}]);
//# sourceMappingURL=426.a2a3cc37.chunk.js.map