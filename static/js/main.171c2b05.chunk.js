(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{220:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(17),a=n.n(r),c=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),a(t),c(t)}))},o=(n(100),n(52)),s=n(86),u=n(9),d=n(2),h=n(39),l=n.n(h),p=l.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),g={getWeather:function(t){return p.get("weather?q=".concat(t,"&appid=").concat("bc4b5b106eb4f6a33bb5c03f83e1937c","&units=metric&lang=en")).then((function(t){return t.data}))},getUserCity:function(){return l.a.get("https://api.ipify.org").then((function(t){return t.data})).then((function(t){return l.a.get("https://geo.ipify.org/api/v1?apiKey=at_zXucZUJUMQM2jv4zPDkZKqZook3Xw&ipAddress=".concat(t)).then((function(t){return t.data.location.city}))}))}},b=n(224),m="SET-THEME",x="SET-WEATHER-DATA",f="SET-CURRENT-CITY",j="SET-REQUEST-STATUS",y="INITIALIZED-SUCCESS",F="ADD-CITY",O="REMOVE-CITY",w="CHECK-IS-SINGLE-CITY",C={themes:{light:{name:"light",styles:{primary:"#363434",background:"#FFFFFF",appBackground:"linear-gradient(180deg, rgba(155, 245, 240, 0.8) 0%, rgba(141, 240, 169, 0.8) 100%)",burger:"#333232",shadow:"4px 4px 8px 0px rgba(34, 60, 80, 0.2)",toggler:{container:"#284c54",circle:"#FFFFFF"},input:{color:"#363434",background:"#FFFFFF"},button:{color:"#FFFFFF",background:"#33cfb2"},cities:{background:"rgba(27, 26, 26, 0.15)"}}},dark:{name:"dark",styles:{primary:"#FFFFFF",shadow:"4px 4px 8px 0px #320f52",background:"#232323",burger:"#FFFFFF",appBackground:"linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)",toggler:{container:"#232323",circle:"#FFFFFF"},cities:{background:"rgba(27, 26, 26, 0.95)"},input:{color:"#363434",background:"#FFFFFF"},button:{color:"#FFFFFF",background:"#4e1390"}}}},theme:{name:"dark",styles:{primary:"#FFFFFF",burger:"#FFFFFF",shadow:"4px 4px 8px 0px #320f52",background:"#232323",appBackground:"linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)",toggler:{container:"#232323",circle:"#FFFFFF"},cities:{background:"rgba(27, 26, 26, 0.95)"},input:{color:"#363434",background:"#FFFFFF"},button:{color:"#FFFFFF",background:"#4e1390"}}},isSingleCity:!0,currentCity:"",weather:{city:"...",status:"...",temperature:"...",imageCode:""},cities:[],initialized:!1,requestStatus:!1},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(b.a)();return{type:F,city:{name:t,id:e}}},v=function(t){return function(e){return e(I(t)),e(D(t))}},S=function(t){return{type:O,id:t}},T=function(t){return{type:x,weather:Object(d.a)({},t)}},D=function(t){return function(e){return g.getWeather(t).then((function(t){if(200===t.cod){var n={city:t.name,status:t.weather[0].description,temperature:t.main.temp,imageCode:t.weather[0].icon};return e(z(!0)),n}})).then((function(t){e(T(t))})).catch((function(t){return e(z(!1))}))}},z=function(t){return{type:j,requestStatus:t}},I=function(t){return{type:f,currentCity:t}},N=function(){return{type:w}},A=function(){return{type:y}},E=function(t,e){return function(n){n(v(t)).then((function(){n(k(t,e)),n(N())})).catch((function(t){return console.warn(t.message)})).finally((function(){return n(A())}))}},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(d.a)(Object(d.a)({},t),{},{theme:e.theme});case x:return Object(d.a)(Object(d.a)({},t),{},{weather:e.weather});case y:return Object(d.a)(Object(d.a)({},t),{},{initialized:!0});case f:return Object(d.a)(Object(d.a)({},t),{},{currentCity:e.currentCity});case F:return Object(d.a)(Object(d.a)({},t),{},{cities:[].concat(Object(u.a)(t.cities),[e.city])});case O:return Object(d.a)(Object(d.a)({},t),{},{cities:t.cities.filter((function(t){return t.id!==e.id}))});case w:return Object(d.a)(Object(d.a)({},t),{},{isSingleCity:1===t.cities.length});case j:return Object(d.a)(Object(d.a)({},t),{},{requestStatus:e.requestStatus});default:return t}},B=Object(o.b)(L,Object(o.a)(s.a));window.store=B;var U,q,R,W,M,J,P,Y,Z,H,K=B,Q=n(10),V=n(4),X=n(5),G=n(12),$=n(1),_=X.b.div(U||(U=Object(V.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: ",";\n    border-radius: 10px;\n    margin-left: auto;\n    width: 44px;\n    height: 22px;\n    cursor: pointer;\n\ttransition: background-color .8s;\n\n    .Circle {\n        background-color: ",";\n        border-radius: 50%;\n        width: 15px;\n        height: 15px;\n        margin-left: 3px;\n        transition: background-color .8s, margin .5s ease-out;\n    }\n"])),(function(t){return t.theme.toggler.container||"#000000"}),(function(t){return t.theme.toggler.circle||"#000000"})),tt=function(t){var e=Object(i.useState)(!1),n=Object(G.a)(e,2),r=n[0],a=n[1];return Object($.jsx)(_,{theme:t.theme,className:"Toggler",onClick:function(e){a(!r),t.toggleTheme()},children:Object($.jsx)("div",{className:"Circle",style:r?{marginLeft:26}:{}})})},et=Object(Q.b)((function(t){return{theme:t.theme,themes:t.themes}}),{setTheme:function(t){return{type:m,theme:t}}})((function(t){return Object($.jsx)(tt,{theme:t.theme.styles,toggleTheme:function(){t.theme.name===t.themes.light.name?t.setTheme(t.themes.dark):t.setTheme(t.themes.light)}})})),nt=function(t){return Object($.jsx)("header",{children:Object($.jsx)(et,{})})},it=X.b.div(q||(q=Object(V.a)(["\n    text-align: center;\n    margin-bottom: 75px;\n    padding-top: 100px;\n\n    .Location {\n        font-weight: 100;\n        font-size: 48px;\n        line-height: 56px;\n        margin-bottom: 40px;\n    }\n    .Img {\n        margin: 0 25px;\n          width: 100px;\n          height: 100px;\n    }\n    .Date {\n        font-weight: 500;\n        font-size: 24px;\n        line-height: 28px;\n        margin: 0 25px;\n\n        p {\n            margin: 10px 0;\n        }\n    }\n    .Degree {\n        font-weight: bold;\n        font-size: 72px;\n        line-height: 84px;\n    }\n    .Status {\n        font-weight: 500;\n        font-size: 20px;\n        text-transform: capitalize;\n    }\n    .Today {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        margin: 0 -25px;\n        margin-bottom: 40px;\n        overflow: hidden;\n    }\n\n      @media(max-width: 840px) {\n        padding-top: 80px;\n        margin-bottom: 50px;\n        \n        .Location {\n          font-size: 36px;\n          line-height: 48px;\n          margin-bottom: 30px;\n        }\n        .Status {\n          font-size: 18px;\n        }\n        .Degree {\n          font-size: 64px;\n          line-height: 72px;\n        }\n        .Date {\n          font-size: 20px;\n          line-height: 24px;\n        }\n      }\n"]))),rt=function(t){return Object($.jsxs)(it,{className:"Info",children:[Object($.jsx)("div",{className:"Location",children:t.weather.city}),Object($.jsxs)("div",{className:"Today",children:[Object($.jsx)("div",{className:"Img",children:Object($.jsx)("img",{src:"".concat("http://openweathermap.org/img/wn/").concat(t.weather.imageCode,"@2x.png"),alt:t.weather.status})}),Object($.jsxs)("div",{className:"Date",children:[Object($.jsx)("p",{children:"".concat(t.dateData.weekday,", ").concat(t.dateData.day," ").concat(t.dateData.month)}),Object($.jsx)("p",{children:Object($.jsx)("time",{children:"".concat(t.dateData.hours,":").concat(t.dateData.minutes)})})]})]}),Object($.jsxs)("div",{className:"Degree",children:[Math.round(t.weather.temperature),"\xb0C"]}),Object($.jsx)("div",{className:"Status",children:t.weather.status})]})},at=Object(Q.b)((function(t){return{weather:t.weather,currentCity:t.currentCity}}),{})((function(t){var e=new Date,n={day:e.getDate(),weekday:new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(e.getDate()),month:e.toLocaleString("default",{month:"long"}),hours:("0"+e.getHours()).slice(-2),minutes:("0"+e.getMinutes()).slice(-2)};return Object($.jsx)(rt,{dateData:n,weather:t.weather,currentCity:t.currentCity})})),ct=n(50),ot=X.b.button(R||(R=Object(V.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 5px 10px;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 1.1;\n    border: none;\n    box-shadow: ",";\n"])),(function(t){return t.itemBackground||"#FFFFFF"}),(function(t){return t.itemColor||"#000000"}),(function(t){return t.shadow||"none"})),st=function(t){return Object($.jsx)(ot,Object(d.a)(Object(d.a)({},t),{},{children:t.children}))},ut=X.b.input(W||(W=Object(V.a)(["\n    background-color: ",";\n    color: ",";\n    border: none;\n    padding: 5px 10px;\n    outline-color: ",";\n    font-size: 16px;\n    line-height: 1.1;\n    box-shadow: ",";\n"])),(function(t){return t.itemBackground||"#FFFFFF"}),(function(t){return t.itemColor||"#000000"}),(function(t){return t.itemBackground||"#FFFFFF"}),(function(t){return t.shadow||"none"})),dt=function(t){return Object($.jsx)(ut,Object(d.a)({},t))},ht=n(51),lt=X.b.div(M||(M=Object(V.a)(["\n    margin-bottom: 30px;\n\n    input {\n        width: 66.666%;\n        box-shadow: ",";\n        border: 1px transparent;\n          &.invalid {\n                border-color: red;\n            }\n    }\n\n    button {\n        width: 33.333%;\n\n        &:disabled {\n            opacity: .5;\n        }\n    }\n\n    .error {\n        color: red;\n        margin-top: 10px;\n        line-height: 1;\n        font-size: 16px;\n        min-height: 25px;\n        font-style: italic;\n    }\n\n      @media(max-width: 840px) {\n        margin-bottom: 15px;\n      }\n\n      @media(max-width: 400px) {\n          input, button {\n            width: 100%;\n          }\n      }\n"])),(function(t){return t.theme.shadow})),pt=function(t){var e=Object(i.useState)(""),n=Object(G.a)(e,2),r=n[0],a=n[1],c=ht.a().shape({city:ht.b().strict().matches(/^[A-Za-z\s]+$/,"Please enter a city name, without numbers (In english)").typeError("Please enter a city name, without numbers").required("").max(58,"City must be at most 58 characters").min(2,"City must be at least 2 characters")});return Object($.jsx)(lt,{className:"CitiesForm",theme:t.theme,children:Object($.jsx)(ct.b,{initialValues:{city:""},validationSchema:c,onSubmit:function(e,n){return function(e,n){t.cities.some((function(t){return t.name.toUpperCase()===e.city.toUpperCase()}))?(n.setSubmitting(!1),a("The ".concat(e.city," is already added to your cities"))):(t.getWeatherDataAndAddCity(e.city,n.setSubmitting,a),e.city="",a(""),window.localStorage.setItem("cities",JSON.stringify(t.cities)))}(e,n)},children:function(e){var n=e.values,i=e.errors,c=e.touched,o=e.handleChange,s=e.updateStatus,u=void 0===s?function(t){o(t),a("")}:s,d=e.isSubmitting;return Object($.jsxs)(ct.a,{children:[Object($.jsx)(dt,{name:"city",type:"text",value:n.city,placeholder:"Enter city name",itemBackground:t.theme.input.background,itemColor:t.theme.input.color,onChange:u,onBlur:function(){return a("")},className:c.city&&i.city&&"invalid"}),Object($.jsx)(st,{disabled:d,type:"submit",itemBackground:t.theme.button.background,itemColor:t.theme.button.color,shadow:t.theme.shadow,children:"Add"}),Object($.jsx)("div",{className:"error",children:r||i.city})]})}})})},gt=n.p+"static/media/remove.562b6f7b.svg",bt=X.b.div(J||(J=Object(V.a)(["\n    display: flex;\n    justify-content: space-between;\n    word-break: break-all;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 30px;\n    cursor: pointer;\n    padding: 15px 0;\n\n    .Delete {\n        width: 30px;\n        height: 30px;\n        flex-shrink: 0;\n    }\n\n      @media(max-width: 840px) {\n          padding: 8px 0;\n          font-size: 16px;\n          line-height: 24px;\n        \n            .Delete {\n              width: 20px;\n              height: 20px;\n            }\n      }\n"]))),mt=function(t){Object(i.useEffect)((function(){window.localStorage.setItem("cities",JSON.stringify(t.cities))}),[t.cities]);var e=t.children;return Object($.jsxs)(bt,{onClick:function(){t.isSingleCity&&t.currentCity.name===e||t.pickCity(e)},className:"Item",children:[Object($.jsx)("span",{children:t.children}),!t.isSingleCity&&Object($.jsx)("span",{className:"Delete",onClick:function(n){n.stopPropagation(),t.isSingleCity||t.removeAndChangeCity(t.dataId,e,t.currentCity,t.cities),t.checkIsSingleCity()},children:Object($.jsx)("img",{src:gt,alt:"Delete city"})})]})},xt=n(223),ft=n(225),jt=X.b.div(P||(P=Object(V.a)(["\n    .Title {\n        font-weight: 300;\n        font-size: 36px;\n        line-height: 42px;\n        margin-bottom: 15px;\n        text-align: center;\n    }\n    .List {\n        padding: 20px;\n        border-radius: 10px;\n        background: ",";\n    } \n    .City-enter {\n      opacity: 0;\n    }\n    .City-enter-active {\n      opacity: 1;\n      transition: opacity 500ms;\n    }\n    .City-exit {\n      opacity: 1;\n    }\n    .City-exit-active {\n      opacity: 0;\n      transition: opacity 500ms;\n    }\n\n  @media(max-width: 840px) {\n    .List {\n      padding: 12px;\n    }\n    .Title {\n      font-size: 28px;\n      line-height: 36px;\n    }\n  }\n"])),(function(t){return t.theme.cities.background||" rgba(27, 26, 26, 0.15)"})),yt=function(t){var e=t.cities.map((function(e){return Object($.jsx)(xt.a,{classNames:"City",timeout:300,children:Object($.jsx)(mt,Object(d.a)(Object(d.a)({},t),{},{dataId:e.id,children:e.name}))},e.id)}));return Object($.jsxs)(jt,{className:"Cities",theme:t.theme,children:[Object($.jsx)("div",{className:"Title",children:"Your cities"}),Object($.jsx)(pt,{isRequestSuccess:t.isRequestSuccess,cities:t.cities,theme:t.theme,getWeatherDataAndAddCity:t.getWeatherDataAndAddCity}),Object($.jsx)("div",{className:"List",children:Object($.jsx)(ft.a,{children:e})})]})},Ft=Object(Q.b)((function(t){return{theme:t.theme.styles,cities:t.cities,isSingleCity:t.isSingleCity,currentCity:t.currentCity,isRequestSuccess:t.isRequestSuccess}}),{pickCity:v,getWeatherDataAndAddCity:function(t,e,n){return function(i){return g.getWeather(t).then((function(t){if(200===t.cod){var e={city:t.name,status:t.weather[0].description,temperature:t.main.temp,imageCode:t.weather[0].icon};return i(z(!0)),e}})).then((function(e){i(I(t)),i(T(e)),i(k(t)),i(N())})).catch((function(t){i(z(!1)),n("The city does not exist")})).finally((function(){return e(!1)}))}},removeAndChangeCity:function(t,e,n,i){return function(r){r(S(t)),n===e&&(n===i[0].name?r(v(i[1].name)):r(v(i[0].name)))}},checkIsSingleCity:N})((function(t){return Object($.jsx)(yt,Object(d.a)({},t))})),Ot=n.p+"static/media/preloader.6aaff771.svg",wt=X.b.div(Y||(Y=Object(V.a)(["\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    img {\n        width: 300px;\n    }\n"]))),Ct=function(t){return Object($.jsx)(wt,{children:Object($.jsx)("img",{src:Ot,alt:"Loading..."})})},kt=Object(X.a)(Z||(Z=Object(V.a)(["\n\thtml {\n\t\tbox-sizing: border-box;\n\t}\n\n\t*,\n\t*::before,\n\t*::after {\n\t\tbox-sizing: inherit;\n\t}\n\n\tbody {\n\t\tfont-family: Roboto, sans-serif;\n\t\tfont-weight: 400;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tcolor: ",";\n\t\tbackground-color: ",";\n\t\ttransition: color .4s ease-in-out, background-color .5s ease-in-out;\n\t}\n\n\timg {\n\t\tdisplay: flex;\n\t\tmax-width: 100%;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\t\n\ta,\n\tbutton,\n\tinput,\n\ttextarea,\n\tspan {\n\t\tdisplay: inline-block;\n\t}\n"])),(function(t){return t.theme.primary||"#000000"}),(function(t){return t.theme.background||"#FFFFFF"})),vt=X.b.div(H||(H=Object(V.a)(["\n\tmargin: 15px;\t\n\t\n\t.AppInner {\n\t\tmargin: 30px auto;\n\t\tmax-width: 800px;\n\t\twidth: 100%;\n\t\tbackground: ",";\n\t\tborder-radius: 15px;\n\t\tpadding: 30px;\n\t}\n\t\n\t@media(max-width: 840px) {\n\t\t.AppInner {\n\t\t\tpadding: 15px;\n\t\t}\n\t}\n"])),(function(t){return t.theme.appBackground})),St=Object(Q.b)((function(t){return{theme:t.theme.styles,currentCity:t.currentCity,initialized:t.initialized}}),{initializeApp:function(){return function(t){var e=JSON.parse(window.localStorage.getItem("cities"))||null;e?(e.forEach((function(e){t(k(e.name))})),t(v(e[0].name)).then((function(){t(N()),t(A())}))):g.getUserCity().then((function(e){return t(E(e))})).catch((function(){return t(E("Moscow"))}))}}})((function(t){return Object(i.useEffect)((function(){t.initializeApp()}),[]),t.initialized?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(vt,{theme:t.theme,className:"App",children:Object($.jsxs)("div",{className:"AppInner",children:[Object($.jsx)(nt,{}),Object($.jsx)(at,{}),Object($.jsx)(Ft,{})]})}),Object($.jsx)(kt,{theme:t.theme})]}):Object($.jsx)(Ct,{})}));a.a.render(Object($.jsx)(Q.a,{store:K,children:Object($.jsx)(St,{})}),document.getElementById("root")),c()}},[[220,1,2]]]);
//# sourceMappingURL=main.171c2b05.chunk.js.map