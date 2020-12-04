(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},67:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var c=a(1),r=a(10),s=a(0),n=a(18),i=a.n(n),l=(a(46),a(13)),o=a(11),j=a(35),u=a(3),d="FETCH_CHART_START",b="FETCH_CHART_SUCCESS",h="FETCH_CHART_ERROR",p="FETCH_TRACK_START",O="FETCH_TRACK_SUCCESS",_="FETCH_TRACK_ERROR",m="TRACK_CLEAR",f="FETCH_ARTIST_START",x="FETCH_ARTIST_SUCCESS",v="FETCH_ARTIST_ERROR",y="SETT_CURR_ARTIST",k="ARTIST_CLEAR",N={tracks:[],loading:!1,error:null};var T={tracks:[],loading:!1,error:null};var g={currArtist:"",artist:{name:"",link:" ",summury:"",stats:{listeners:"",playcount:""}},loading:!1,error:null};var R=Object(l.c)({chart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(u.a)(Object(u.a)({},t),{},{loading:!0});case b:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,tracks:e.tracks});case h:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,error:e.error});default:return t}},track:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(u.a)(Object(u.a)({},t),{},{loading:!0});case O:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,tracks:e.tracks});case _:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,error:e.error});case m:return Object(u.a)(Object(u.a)({},t),{},{tracks:[],loading:!1});default:return t}},artist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(u.a)(Object(u.a)({},t),{},{loading:!0});case x:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,artist:{name:e.artistInfo.name,link:e.artistInfo.url,summury:e.artistInfo.bio.summary.split(". ")[0],stats:{listeners:e.artistInfo.stats.listeners,playcount:e.artistInfo.stats.playcount}}});case v:return Object(u.a)(Object(u.a)({},t),{},{loading:!1,error:e.error});case y:return Object(u.a)(Object(u.a)({},t),{},{currArtist:e.currArtist,loading:!1});case k:return Object(u.a)(Object(u.a)({},t),{},{currArtist:"",artist:{name:"",link:"",summury:"",stats:{listeners:"",playcount:""}},loading:!1});default:return t}}}),E=a(4),C=(a(47),a(36)),S=(a(48),a(19)),A=a.n(S),w=A.a.create({baseURL:"https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json"}),I=A.a.create({baseURL:"/"}),H=A.a.create({baseURL:"/"}),F=a(12),L=a.n(F),U=a(15);function P(){return function(){var t=Object(U.a)(L.a.mark((function t(e){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.get();case 3:a=t.sent,c=a.data.results.trackmatches.track,e(M(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e((t.t0,{type:_}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function M(t){return{type:O,tracks:t}}function D(t){return{type:m,tracks:[]}}var K=function(){var t=Object(r.b)(),e=Object(s.useState)(),a=Object(C.a)(e,2),n=a[0],i=a[1];return Object(s.useEffect)((function(){return t(D())}),[]),Object(c.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),t(D()),I.defaults.baseURL="https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(n,"$&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json"),t(P())},children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter track name",className:"search-form__input",onChange:function(t){return i(t.target.value)}}),Object(c.jsx)("button",{className:"search-form__button",type:"submit",children:"Search"})]})};function V(t){return{type:b,tracks:t}}a(67);function X(t){return{type:x,artistInfo:t}}var J=function(t){var e=Object(r.b)(),a=Object(r.c)((function(e){return"chart"===t.type?e.chart.tracks:e.track.tracks}));return Object(s.useEffect)((function(){"chart"===t.type?e(function(){var t=Object(U.a)(L.a.mark((function t(e){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.get();case 3:a=t.sent,c=a.data.tracks.track,e(V(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:h});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()):e(P())}),[]),Object(c.jsxs)("div",{className:"chart",children:[Object(c.jsxs)("div",{className:"chart__top",children:[Object(c.jsx)("div",{className:"chart__top--count",children:"chart"===t.type?"Play-count":"Listeners"}),Object(c.jsx)("div",{className:"chart__top--track",children:"Track"}),Object(c.jsx)("div",{className:"chart__top--artist",children:"Artist"}),Object(c.jsx)("div",{className:"chart__top--more",children:"View more"})]}),a&&a.map((function(a){return Object(c.jsxs)("div",{className:"chart__row",children:[Object(c.jsx)("div",{className:"chart__count",children:"chart"===t.type?a.playcount:a.listeners}),Object(c.jsx)("div",{className:"chart__name",children:a.name}),Object(c.jsx)(o.b,{to:"/profile",children:Object(c.jsx)("button",{type:"button",value:"chart"===t.type?a.artist.name:a.artist,onClick:function(t){var a;e((a=t.target.value,{type:y,currArtist:a}))},className:"chart__name",children:"chart"===t.type?a.artist.name:a.artist})}),Object(c.jsx)("a",{href:a.url,className:"chart__link",children:"See More"})]},a.name+a.artist)}))]})};J.defaultPropTypes={type:"chart"};var q=J,B=function(){return Object(c.jsx)("div",{className:"app__search",children:Object(c.jsxs)("div",{className:"app__container",children:[Object(c.jsxs)("h1",{className:"app__title",children:[Object(c.jsx)("span",{className:"app__highlight",children:"search "}),"Music"]}),Object(c.jsx)(K,{}),Object(c.jsx)(q,{type:"track"})]})})},$=function(t){return Object(c.jsx)("div",{className:"app__home",children:Object(c.jsxs)("div",{className:"app__container",children:[Object(c.jsxs)("h1",{className:"app__title",children:[Object(c.jsx)("span",{className:"app__highlight",children:"quality "}),"Music"]}),Object(c.jsx)(q,{type:"chart"})]})})},z=(a(69),function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.artist.currArtist})),a=Object(r.c)((function(t){return t.artist.artist}));return H.defaults.baseURL="https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(e,"&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json"),Object(s.useEffect)((function(){return t(function(){var t=Object(U.a)(L.a.mark((function t(e){var a,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:f}),t.next=4,H.get();case 4:a=t.sent,c=a.data.artist,e(X(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:v});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(c.jsx)(c.Fragment,{children:e?Object(c.jsxs)("div",{className:"artist-card",children:[Object(c.jsxs)("div",{className:"artist-card__container",children:[Object(c.jsx)("h4",{className:"artist-card__title",children:a.name}),Object(c.jsxs)("div",{className:"artist-card__listeners",children:["Playcount :",a.stats.playcount]}),Object(c.jsxs)("div",{className:"artist-card__listeners",children:["Listeners :",a.stats.listeners]}),Object(c.jsx)("div",{className:"artist-card__text",children:a.summury})]}),Object(c.jsx)("a",{href:a.link,className:"artist-card__more",children:"View More"})]}):Object(c.jsx)("div",{className:"artist-card__message",children:Object(c.jsx)("h4",{className:"artist-card__message--text",children:"First pick some artist....."})})})}),G=function(){return Object(c.jsx)("div",{className:"app__search",children:Object(c.jsxs)("div",{className:"app__container",children:[Object(c.jsxs)("h1",{className:"app__title",children:[Object(c.jsx)("span",{className:"app__highlight",children:"Artist "}),"Profile"]}),Object(c.jsx)(z,{})]})})},Q=(a(70),function(){return Object(c.jsx)("nav",{className:"nav",children:Object(c.jsx)("div",{className:"app__container",children:Object(c.jsxs)("ul",{className:"nav__list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/",className:"nav__link",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/search",className:"nav__link",children:"Search"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/profile",className:"nav__link",children:"Profile"})})]})})})}),W=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(Q,{}),Object(c.jsxs)(E.c,{children:[Object(c.jsx)(E.a,{path:"/",exact:!0,component:$}),Object(c.jsx)(E.a,{path:"/search",exact:!0,component:B}),Object(c.jsx)(E.a,{path:"/profile",component:G})]})]})},Y="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d,Z=Object(l.e)(R,Y(Object(l.a)(j.a))),tt=Object(c.jsx)(r.a,{store:Z,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(W,{})})});i.a.render(tt,document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c08041ed.chunk.js.map