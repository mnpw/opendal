(()=>{"use strict";var e,a,t,c,r,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={exports:{}};return f[e].call(t.exports,t,t.exports,b),t.exports}b.m=f,e=[],b.O=(a,t,c,r)=>{if(!t){var f=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],r=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&r||f>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,c,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var f={};a=a||[null,t({}),t([]),t(t)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(r,f),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",217:"b56f9725",380:"ab10c306",455:"07df3158",533:"b2b675dd",716:"a0405932",1011:"cc62039a",1163:"434bbc94",1372:"1db64337",1477:"b2f554cd",1513:"9897d641",1652:"8cc9519e",1713:"a7023ddc",1846:"054cd2fb",2379:"d5c31a96",2505:"14a24c8e",2535:"814f3328",2804:"2cbf1097",3057:"136e1c50",3085:"1f391b9e",3089:"a6aa9e1f",3358:"f3200a52",3608:"9e4087bc",3661:"3806ecb0",3845:"e892cec6",3922:"6eb7fe18",4013:"01a85c17",4157:"283e63f8",4195:"c4f5d8e4",4477:"1957547a",4536:"22d8fa67",4538:"f1ca5a39",4719:"8f4159f2",4832:"ece86388",5214:"bb5b2057",5555:"37896f57",6089:"62a401e9",6103:"ccc49370",6427:"5a65e608",6611:"209227ae",6948:"e19a6781",6983:"ae4554eb",7289:"c6ab695b",7309:"4fb2b91a",7757:"57a16c1d",7794:"02514dc9",7918:"17896441",8610:"6875c492",9319:"4b02d014",9514:"1be78505",9817:"14eb3368"}[e]||e)+"."+{53:"917b7ba9",217:"3b197ec1",380:"29b8f7a2",455:"bea29bdc",533:"c28c5950",716:"8b370376",1011:"25423886",1163:"535a85c6",1372:"295c66c1",1477:"a906ccb6",1506:"7a372cde",1513:"de971340",1652:"4228527f",1713:"72cf0d24",1846:"cbc392c0",2379:"d1f7c11c",2505:"0e997d88",2529:"ea72b266",2535:"bc5ca14b",2804:"ece3cbea",3057:"c85fcf3c",3085:"fc747d21",3089:"66019f66",3358:"117ebfb8",3608:"822525bd",3661:"7d81778c",3845:"24b9fc4e",3922:"b59e0610",4013:"4316cd6e",4157:"a74b6771",4195:"2019e4f4",4477:"81f72cab",4536:"85197c12",4538:"22680aa8",4719:"6363d8e7",4832:"c7f148e3",4972:"f7d54065",5214:"014820fa",5555:"fc5a447b",6089:"d2f23607",6103:"ba4b09b5",6427:"e0a31904",6611:"066f1206",6948:"8576bf3f",6983:"443ef2b0",7289:"3dec8a44",7309:"4e640a3e",7757:"bcc79cf4",7794:"f65c569b",7918:"fa99442c",8610:"a3ea2b2f",9319:"e06cd8f0",9514:"d888abe5",9817:"5d4ade20"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="opendal-website:",b.l=(e,a,t,f)=>{if(c[e])c[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+t),d.src=e),c[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",b56f9725:"217",ab10c306:"380","07df3158":"455",b2b675dd:"533",a0405932:"716",cc62039a:"1011","434bbc94":"1163","1db64337":"1372",b2f554cd:"1477","9897d641":"1513","8cc9519e":"1652",a7023ddc:"1713","054cd2fb":"1846",d5c31a96:"2379","14a24c8e":"2505","814f3328":"2535","2cbf1097":"2804","136e1c50":"3057","1f391b9e":"3085",a6aa9e1f:"3089",f3200a52:"3358","9e4087bc":"3608","3806ecb0":"3661",e892cec6:"3845","6eb7fe18":"3922","01a85c17":"4013","283e63f8":"4157",c4f5d8e4:"4195","1957547a":"4477","22d8fa67":"4536",f1ca5a39:"4538","8f4159f2":"4719",ece86388:"4832",bb5b2057:"5214","37896f57":"5555","62a401e9":"6089",ccc49370:"6103","5a65e608":"6427","209227ae":"6611",e19a6781:"6948",ae4554eb:"6983",c6ab695b:"7289","4fb2b91a":"7309","57a16c1d":"7757","02514dc9":"7794","6875c492":"8610","4b02d014":"9319","1be78505":"9514","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>c=e[a]=[t,r]));t.push(c[2]=r);var f=b.p+b.u(a),d=new Error;b.l(f,(t=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,c[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var c,r,f=t[0],d=t[1],o=t[2],n=0;if(f.some((a=>0!==e[a]))){for(c in d)b.o(d,c)&&(b.m[c]=d[c]);if(o)var i=o(b)}for(a&&a(t);n<f.length;n++)r=f[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();