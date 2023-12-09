"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1652],{9613:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(k,s(s({ref:t},o),{},{components:a})):r.createElement(k,s({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8023:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(8126),n=(a(9496),a(9613));const i={toc:[{value:"Capabilities",id:"capabilities",level:2}]},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"This service can be used to:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","create_dir"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","scan"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","presign"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")))}c.isMDXComponent=!0;const l={title:"IPMFS"},p=void 0,o={unversionedId:"services/ipmfs",id:"services/ipmfs",title:"IPMFS",description:"IPFS Mutable File System (IPMFS) support",source:"@site/docs/services/ipmfs.mdx",sourceDirName:"services",slug:"/services/ipmfs",permalink:"/docs/services/ipmfs",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/ipmfs.mdx",tags:[],version:"current",lastUpdatedBy:"Suyan",lastUpdatedAt:1702095182,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{title:"IPMFS"},sidebar:"docs",previous:{title:"IPFS",permalink:"/docs/services/ipfs"},next:{title:"LibSQL",permalink:"/docs/services/libsql"}},m={},u=[],d={toc:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"IPFS Mutable File System (IPMFS) support"),(0,n.kt)(c,{components:a.components,mdxType:"Docs"}))}b.isMDXComponent=!0}}]);