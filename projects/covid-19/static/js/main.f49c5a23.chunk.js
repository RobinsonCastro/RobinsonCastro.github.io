(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),s=(a(102),a(24)),l=a.n(s),i=a(39),u=a(14),d=a(237),m=a(238),f=a(239),v=a(231),p=a(235),h=(a(104),a(2)),E=(a(105),a(236)),b=function(e){var t=e.title,a=e.cases,n=e.active,r=e.isRed,o=e.total,s=Object(h.a)(e,["title","cases","active","isRed","total"]);return c.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(n&&"infoBox--selected"," \n\t\t\t").concat(r&&"infoBox--red","\n\t\t\t")},c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"infoBox__title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},o," Total")))},y=a(242),g=a(243),j=(a(109),a(17)),O=a(25),x=a.n(O),w=a(240),N=a(241),_={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},C=function(e){return Object(j.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},k=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"},S=function(e){return c.a.createElement("div",{className:"map"},c.a.createElement(y.a,{center:e.center,zoom:e.zoom},c.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://osm.org/copyright">\r OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:_[t].hex,fillColor:_[t].hex,radius:Math.sqrt(e[t])*_[t].multiplier},c.a.createElement(N.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(e.countries,e.casesType)))},I=(a(110),function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,a)))})))}),R=a(89),B={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YYYY",tooltipFormate:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callbacks:function(e,t,a){return x()(e).format("0a")}}}]}},T=function(e){var t=e.casesType,a=void 0===t?"cases":t,r=Object(h.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),d=s[0],m=s[1],f=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var c in e.cases){if(t){var r={x:c,y:e[a][c]-t};n.push(r)}t=e[a][c]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=f(e,a);m(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),c.a.createElement("div",{className:r.className},d&&d.length>0&&c.a.createElement(R.a,{options:B,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:d}]}}))};a(204);var D=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),g=Object(u.a)(y,2),j=g[0],O=g[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),N=w[0],_=w[1],R=Object(n.useState)({lat:34.80746,lng:-40.4796}),B=Object(u.a)(R,2),D=B[0],M=B[1],z=Object(n.useState)(3),A=Object(u.a)(z,2),W=A[0],Y=A[1],J=Object(n.useState)([]),L=Object(u.a)(J,2),q=L[0],F=L[1],K=Object(n.useState)("cases"),V=Object(u.a)(K,2),$=V[0],G=V[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=C(e);_(a),F(e),r(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,E(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){var t,n,c;E(a),O(e);var r=(null===e||void 0===e||null===(t=e.countryInfo)||void 0===t?void 0:t.lat)?e.countryInfo.lat:34.80746,o=(null===e||void 0===e||null===(n=e.countryInfo)||void 0===n?void 0:n.long)?e.countryInfo.long:-40.4796;M([r,o]);var s=(null===e||void 0===e||null===(c=e.countryInfo)||void 0===c?void 0:c.lat)?3:2;Y(s)}));case 5:console.log(j);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 TRACKER"),c.a.createElement(d.a,{className:"app__dropdown"},c.a.createElement(m.a,{variant:"outlined",onChange:H,value:h},c.a.createElement(f.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return c.a.createElement(f.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{isRed:!0,active:"cases"===$,onClick:function(e){return G("cases")},title:"Coronavirus Cases",cases:k(j.todayCases),total:k(j.cases)}),c.a.createElement(b,{active:"recovered"===$,onClick:function(e){return G("recovered")},title:"Recovered",cases:k(j.todayRecovered),total:k(j.recovered)}),c.a.createElement(b,{isRed:!0,active:"deaths"===$,onClick:function(e){return G("deaths")},title:"Deaths",cases:k(j.deaths),total:k(j.deaths)})),c.a.createElement(S,{casesType:$,countries:q,center:D,zoom:W})),c.a.createElement(v.a,{className:"app__right"},c.a.createElement(p.a,null,c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(I,{countries:N}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",$),c.a.createElement(T,{className:"app__graph",casesType:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(205)}},[[97,1,2]]]);
//# sourceMappingURL=main.f49c5a23.chunk.js.map