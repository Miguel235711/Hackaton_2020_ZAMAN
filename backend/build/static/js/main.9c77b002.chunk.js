(this["webpackJsonpfb-app"]=this["webpackJsonpfb-app"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"addColaborador",(function(){return P})),t.d(n,"fetchColaboradores",(function(){return D}));var o=t(3),c=t(2),r=t.n(c),i=t(33),s=t.n(i),l=(t(62),t(63),t(9)),d=t(12),u=t(7),j=t(13),b=t.n(j),p=t(20),m=t(22),h=t(23),f=t(25),O=t(24),v=t(36),x=t(53),g=(t(56),t(54)),y=t.n(g);function N(e){return Object(o.jsx)("div",{className:"my-4",children:Object(o.jsxs)("select",{className:"btn-1 w-100",value:e.value,name:e.name,onChange:function(a){return e.onChange(a.target)},children:[Object(o.jsx)("option",{value:e.name,children:e.label}),e.options?e.options.map((function(e,a){return Object(o.jsx)("option",{value:e.NumeroEstacion,children:e.NumeroEstacion+" en "+e.Localidad},a)})):""]})})}function C(e){return Object(o.jsx)("div",{className:"my-4",children:Object(o.jsxs)("select",{className:"btn-1 w-100",value:e.value,name:e.name,onChange:function(a){return e.onChange(a.target)},children:[Object(o.jsx)("option",{value:e.name,children:e.label}),e.options?e.options.map((function(e,a){return Object(o.jsx)("option",{value:a,children:e.Marca+" "+e.Modelo+" en "+e.GeoPunto.Latitud+e.GeoPunto.Longitud},a)})):""]})})}c.Component;var A=t(21),k=t(26),w="/",L=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).buttons=function(){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(A.a,{to:Object(k.formatRoute)(w),className:"navbar-brand",children:Object(o.jsx)("div",{className:"nav-element",children:Object(o.jsx)("span",{className:"d-flex justify-content-center",children:"Estaciones"})})}),Object(o.jsx)(A.a,{to:Object(k.formatRoute)(w),className:"navbar-brand",children:Object(o.jsx)("div",{className:"nav-element",children:Object(o.jsx)("span",{className:"d-flex justify-content-center",children:"Camaras"})})}),Object(o.jsx)(A.a,{to:Object(k.formatRoute)(w),className:"navbar-brand",children:Object(o.jsx)("div",{className:"nav-element",children:Object(o.jsx)("span",{className:"d-flex justify-content-center",children:"Especies"})})}),Object(o.jsx)(A.a,{to:Object(k.formatRoute)(w),className:"navbar-brand",children:Object(o.jsx)("div",{className:"nav-element",children:Object(o.jsx)("span",{className:"d-flex justify-content-center",children:"Colaboradores"})})})]})},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("nav",{className:"navbar justify-content-between sticky-top nav-color nav",children:[Object(o.jsx)(A.a,{to:Object(k.formatRoute)(w),className:"navbar-brand",children:Object(o.jsx)("div",{className:"nav-element",children:Object(o.jsx)("span",{className:"d-flex justify-content-center",children:"Inicio"})})}),this.buttons()]})}}]),t}(c.Component),M=t(30);M.a.initializeApp({apiKey:"AIzaSyDvCodC9i0xVesTXr6UpUmtq2Ykd622dgc",authDomain:"hackaton-2020-800b1.firebaseapp.com",databaseURL:"https://hackaton-2020-800b1.firebaseio.com",projectId:"hackaton-2020-800b1",storageBucket:"hackaton-2020-800b1.appspot.com",messagingSenderId:"769326052713",appId:"1:769326052713:web:509132750ecd13f66db9f8",measurementId:"G-K1G1J1MJWD"});var E=M.a.firestore();E.settings({cacheSizeBytes:M.a.firestore.CACHE_SIZE_UNLIMITED}),E.enablePersistence().catch((function(e){"failed-precondition"==e.code?console.log("failed-precondition"):"unimplemented"==e.code&&console.log("unimplemented")}));var _=M.a,R="colaborador_get_colaboradores",S="colaborador_add_colaborador",F={fromFirestore:function(e,a){var t=e.data(a);return{id:e.id,nombre:t.nombre}},toFirestore:function(e){return e}},I=function(){return _.firestore().collection("rpd").withConverter(F)},P=function(e){return function(){var a=Object(p.a)(b.a.mark((function a(t){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("addColaborador"),I().add(e).then((function(a){console.log(a),t({type:S,payload:e})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},D=function(){return function(){var e=Object(p.a)(b.a.mark((function e(a){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchColaboradores"),e.next=3,I().get();case 3:t=e.sent.docs.map((function(e){return e.data()})),console.log("people: ".concat(t)),a({type:R,payload:t});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},W=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={estacion:"",camara:""},n}return Object(h.a)(t,[{key:"loadML",value:function(){var e=Object(p.a)(b.a.mark((function e(){var a,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=x.imageClassifier("model/model.json",(function(){console.log("Model loaded!")})),t=document.getElementById("demo_image"),a.predict(t,1,(function(e,a){console.log(a)}))}catch(n){console.log("error in loadML() ".concat(n))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.props.fetchColaboradores(),this.props.addColaborador({nombre:"mike was here"}),this.loadML()}},{key:"showFotos",value:function(){return this.props.fotos.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsx)("th",{className:"sb-table-content",children:Object(o.jsx)("span",{children:e.nombre})})})}))}},{key:"addFireData",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=_.firestore().collection("item"),e.t1=_.firestore.Timestamp.now(),e.t2=_.firestore.Timestamp.now(),e.t3={Latitud:-2.56288407347755,Longitud:-76.8923471347454},e.t4=["Mariam Weston","Napole\xf3n Uyunkar","Anuar Hern\xe1ndez"],e.next=7,_.firestore.Timestamp.now();case 7:return e.t5=e.sent,e.t6=["Michelle Carrillo"],e.t7=["Animal Karma","Foundation y Fundaci\xf3n","IKIAM"],e.t8=["Mariam Weston","Napole\xf3n Uyunkar","Anuar Hern\xe1ndez "],e.t9=["Michelle Carrillo"],e.t10={IDLocalidad:"AW_AE01",Localidad:"Comunidad Achuar de Wachirpas Amazonas Ecuatoriano",NumeroEstacion:"AW_AE01.3",Provincia:"Pastaza",RegionAdministrativa:3,Pais:"Ecuador",Tipo:"Sencilla",Notas:"Paraje Lagunas",Marca:"Bushnell",Modelo:"4K",OrientacionGeografica:"",FechaColocacion:e.t1,FechaRemocion:e.t2,Notas2:"Notas ejemplo",GeoPunto:e.t3,Datum:"WGS84",Altitud:242,Vegetacion:"Bosque Lluvioso de Tierras Bajas",Clima:"Af",Collector:e.t4,NumeroFotografia:"MCC01.jpg",FechaFotoCaptura:e.t5,Reino:"Animalia",Filo:"Chordata",Clase:"Mammalia",Orden:"Carnivora",Familia:"Felidae",Genero:"Leopardus (Gray, 1842)",Especie:"Leopardus pardalis (Linnaeus, 1758)",NombreComunESP:"Ocelote",NombreComunING:"Ocelot",Sexo:"ND",Edad:"A",NumIndividuos:1,IdentificadoPor:e.t6,RedListIUCN:"Lc",LibroRojoEcuador:"Nt",Project:"",ProjectManager:"",Laboratory:e.t7,LaboratoryManager:"",FinancialSupport:"",ResponsableTecnicoEnCampo:e.t8,DigitalCardWork:e.t9},e.next=15,e.t0.add.call(e.t0,e.t10);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getFireData",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.firestore().collection("react").get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fileChangedHandler",value:function(e){console.log(e.target.files)}},{key:"render",value:function(){var e=this;return this.getFireData().then((function(e){console.log(e.size)})),Object(o.jsxs)("div",{className:"main-cont",children:[Object(o.jsx)(L,{}),Object(o.jsx)("img",{id:"demo_image",crossorigin:"anonymous",src:"DSCF0038.jpg"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"justify-content-center pt-5",children:Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("h3",{children:Object(o.jsx)("b",{children:"Cargar Imagenes"})})})}),Object(o.jsx)("div",{className:"d-flex justify-content-center form",children:Object(o.jsx)("div",{className:"card-form card",children:Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)(N,{name:"estacion",label:"Estaci\xf3n",value:this.state.estacion,options:this.props.estaciones,onChange:function(a){return e.setState({estacion:a.value})}}),Object(o.jsx)(C,{name:"camara",label:"Camara",value:this.state.camara,options:this.props.camaras,onChange:function(a){return e.setState({camara:a.value})}}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"Seleccionar responsables t\xe9cnico de campo"})})}),this.props.colaboradores.map((function(e,a){return Object(o.jsxs)("div",{class:"input-group my-3",children:[Object(o.jsx)("div",{class:"input-group-prepend",children:Object(o.jsx)("div",{class:"input-group-text",children:Object(o.jsx)("input",{type:"checkbox","aria-label":"Checkbox for following text input"})})}),e.nombre]},a)})),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"Seleccionar responsables de procesamiento de datos"})})}),this.props.colaboradores.map((function(e,a){return Object(o.jsxs)("div",{class:"input-group my-3",children:[Object(o.jsx)("div",{class:"input-group-prepend",children:Object(o.jsx)("div",{class:"input-group-text",children:Object(o.jsx)("input",{type:"checkbox","aria-label":"Checkbox for following text input"})})}),e.nombre]},a)})),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsxs)("button",{className:"btn-file",onChange:this.fileChangedHandler,children:[Object(o.jsx)("label",{htmlFor:"file",children:"Cargar imagenes"}),Object(o.jsx)("input",{id:"file",directory:"",webkitdirectory:"",type:"file"})]})})]})})})]}),Object(o.jsx)("div",{className:"modal fade",id:"Modal",tabIndex:"-1","aria-labelledby":"ModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(o.jsx)("div",{className:"modal-content",children:Object(o.jsxs)("div",{className:"modal-body text-center align-items-center",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:Object(o.jsx)("b",{children:"Seleccionar responsables t\xe9cnico de campo"})})}),this.props.colaboradores.map((function(e,a){return Object(o.jsxs)("div",{class:"input-group my-3",children:[Object(o.jsx)("div",{class:"input-group-prepend",children:Object(o.jsx)("div",{class:"input-group-text",children:Object(o.jsx)("input",{type:"checkbox","aria-label":"Checkbox for following text input"})})}),e.nombre]},a)})),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btn-1 my-1 w-50 d-inline","data-dismiss":"modal",children:"Aceptar"})})]})})})})]})}}]),t}(c.Component),G=Object(v.b)((function(e){var a=e.camaraReducer,t=e.estacionReducer,n=e.colaboradorReducer;return Object(u.a)(Object(u.a)(Object(u.a)({},a),t),n)}),n)(W),z=Object(d.a)(),B=function(){return Object(o.jsx)(l.Router,{history:z,children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsx)(l.Switch,{children:Object(o.jsx)(l.Route,{exact:!0,path:w,render:function(){return Object(o.jsx)(G,{})}})})})})},T=t(19),U=t(55),H=t(17),K="fotos_add_foto",J="fotos_get_fotos",q={fotos:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case J:return Object(u.a)(Object(u.a)({},e),{},{fotos:a.payload});case K:return Object(u.a)(Object(u.a)({},e),{},{fotos:[].concat(Object(H.a)(e.fotos),[a.payload])});default:return e}},X="camara_get_camaras",Y="camara_add_camara",Z={camaras:[{Marca:"Bushnell",Modelo:"4K",OrientacionGeografica:"",FechaColocacion:"17/05/18",FechaRemocion:"",Notas2:"Notas ejemplo",GeoPunto:{Latitud:-2.56288407347755,Longitud:-76.8923471347454},Datum:"WGS84",Altitud:242,Vegetacion:"Bosque Lluvioso de Tierras Bajas",Clima:"Af",Collector:["Mariam Weston","Napole\xf3n Uyunkar","Anuar Hern\xe1ndez"]},{Marca:"Bushnell",Modelo:"4K",OrientacionGeografica:"",FechaColocacion:"17/05/18",FechaRemocion:"",Notas2:"Notas ejemplo",GeoPunto:{Latitud:-2.58327644837327,Longitud:-76.8042640918858},Datum:"WGS84",Altitud:260,Vegetacion:"Bosque Lluvioso de Tierras Bajas",Clima:"Af",Collector:["Mariam Weston","Napole\xf3n Uyunkar","Anuar Hern\xe1ndez"]}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case X:return console.log("GET_CAMARAS payload ".concat(a.payload)),Object(u.a)(Object(u.a)({},e),{},{camaras:a.payload});case Y:return Object(u.a)(Object(u.a)({},e),{},{camaras:[].concat(Object(H.a)(e.camaras),[a.payload])});default:return e}},$={colaboradores:[{nombre:"Mariam Weston"},{nombre:"Napole\xf3n Uyunkar"},{nombre:"Anuar Hern\xe1ndez"},{nombre:"Michelle Carrillo"}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:return console.log("GET_COLABORADORES"),Object(u.a)(Object(u.a)({},e),{},{colaboradores:a.payload});case S:return Object(u.a)(Object(u.a)({},e),{},{colaboradores:[].concat(Object(H.a)(e.colaboradores),[a.payload])});default:return e}},ae="especie_get_especies",te="especie_add_especie",ne={especies:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ae:return Object(u.a)(Object(u.a)({},e),{},{especies:a.payload});case te:return{especies:[e.especies,a.payload]};default:return e}},ce="estacion_get_estaciones",re="estacion_add_estacion",ie={estaciones:[{IDLocalidad:"AW_AE01",Localidad:"Comunidad Achuar de Wachirpas Amazonas Ecuatoriano",NumeroEstacion:"AW_AE01.3",Provincia:"Pastaza",RegionAdministrativa:3,Pais:"Ecuador",Tipo:"Sencilla",Notas:"Paraje Lagunas"},{IDLocalidad:"AW_AE01",Localidad:"Comunidad Achuar de Wachirpas Amazonas Ecuatoriano",NumeroEstacion:"AW_AE01.4",Provincia:"Morona Santiago",RegionAdministrativa:6,Pais:"Ecuador",Tipo:"Sencilla",Notas:"Paraje R\xedo Sanguijuela/ Jichach entsa"}]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ce:return Object(u.a)(Object(u.a)({},e),{},{estaciones:a.payload});case re:return Object(u.a)(Object(u.a)({},e),{},{estaciones:[].concat(Object(H.a)(e.estaciones),[a.payload])});default:return e}},le=Object(T.c)({fotoReducer:V,camaraReducer:Q,colaboradorReducer:ee,estacionReducer:se,especieReducer:oe}),de=Object(T.d)(le,{},Object(T.a)(U.a));s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v.a,{store:de,children:Object(o.jsx)(B,{})})}),document.getElementById("root"))},63:function(e,a,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.9c77b002.chunk.js.map