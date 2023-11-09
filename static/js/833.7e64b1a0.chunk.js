"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[833],{1236:function(n,e,t){t.d(e,{Bt:function(){return s},Dt:function(){return c},Pv:function(){return o},y:function(){return a}});var i=t(1243),r="48978cb53ccabb273ee7577d68beda02";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(n){return i.Z.get("/search/movie?api_key=".concat(r,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},a=function(n){return i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US"))},s=function(n){return i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US"))},c=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU"}},9833:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,r,o,a,s,c,d,l,u,f=t(7689),v=t(4585),x=t(168),h=t(6444),p=h.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n"]))),m=h.ZP.img(r||(r=(0,x.Z)(["\n  width: 360px;\n  margin-right: 20px;\n"]))),g=h.ZP.h2(o||(o=(0,x.Z)(["\n  font-size: 42px;\n  margin: 0;\n"]))),j=h.ZP.span(a||(a=(0,x.Z)(["\n  font-weight: 500;\n"]))),Z=h.ZP.p(s||(s=(0,x.Z)(["\n  font-size: 24px;\n  line-height: 2;\n"]))),b=t(1236),k=t(3433),w=(t(2791),t(5048)),_=t(3337),y=t(184),P=function(n){var e=n.movie,t=(0,w.I0)(),i=(0,w.v9)((function(n){return n.movies.favorites})),r=i.some((function(n){return n.id===e.id}));return(0,y.jsx)("button",{onClick:function(){r?t((0,_.zm)(e)):i.some((function(n){return n.id===e.id}))||t((0,_._p)(e));var n=[].concat((0,k.Z)(i),[e]);localStorage.setItem("favoriteMovies",JSON.stringify(n))},children:r?"Remove from Favorite":"Add to Favorite"})},U=function(n){var e=n.movieDetails,t=e.poster_path,i=e.original_title,r=e.overview,o=e.genres,a=e.vote_average;return(0,y.jsxs)(p,{children:[(0,y.jsx)(m,{src:(0,b.Dt)(t),alt:i}),(0,y.jsxs)("div",{children:[(0,y.jsx)(g,{children:i}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{children:"User Score "}),Math.round(100*a/10),"%"]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{children:"Overview: "}),r]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{children:"Genres: "}),o?o.map((function(n){return n.name})).join(", "):"genres are not defined."]}),(0,y.jsx)(P,{movie:e})]})]})},S=h.ZP.h3(c||(c=(0,x.Z)(["\n  font-size: 38px;\n  text-align: center;\n"]))),A=h.ZP.ul(d||(d=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n"]))),C=t(8940),z=function(){var n,e,t=(0,f.TH)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{children:"Additional information"}),(0,y.jsxs)(A,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(C.rU,{to:"cast",state:{from:null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(C.rU,{to:"reviews",state:{from:null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from},children:"Reviews"})})]})]})},O=t(1087),q=h.ZP.div(l||(l=(0,x.Z)(["\n  margin: 20px 30px;\n"]))),D=(0,h.ZP)(O.rU)(u||(u=(0,x.Z)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 4px 12px;\n  background-color: inherit;\n  border: 1px solid #000;\n  border-radius: 5px;\n  color: #000;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  &:hover {\n    background-color: #ff6b01;\n    border: 1px solid #ff6b01;\n    color: #fff;\n  }\n"])));function F(){var n,e,t=(0,f.UO)().movieId,i=(0,_.QC)(t),r=i.data,o=i.isLoading,a=i.isFetching,s=i.isSuccess,c=(0,f.TH)(),d=null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)(q,{children:[(0,y.jsx)(D,{to:d,children:"Go Back"}),o||a?(0,y.jsx)(v.a,{}):s||r?(0,y.jsx)(U,{movieDetails:r}):(0,y.jsx)("p",{children:"No trending movies available."}),(0,y.jsx)(z,{}),(0,y.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=833.7e64b1a0.chunk.js.map