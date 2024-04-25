"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2161],{9571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=t(1527),s=t(2175);function a(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,r.jsx)(n.del,{children:"scan"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,r.jsx)(n.del,{children:"presign"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.p,{children:"Currently, only OneDrive Personal is supported."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"access_token"}),": set the access_token for Graph API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": Set the work directory for backend"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to [",(0,r.jsx)(n.code,{children:"OnedriveBuilder"}),"]'s docs for more information"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Onedrive;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // create backend builder\n    let mut builder = Onedrive::default();\n\n    builder.access_token("xxx").root("/path/to/root");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var o=t(5431),l=t(2860);const c={title:"OneDrive"},u=void 0,d={id:"services/onedrive",title:"OneDrive",description:"OneDrive services support.",source:"@site/docs/services/onedrive.mdx",sourceDirName:"services",slug:"/services/onedrive",permalink:"/docs/services/onedrive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/onedrive.mdx",tags:[],version:"current",lastUpdatedBy:"Pop",lastUpdatedAt:1714049921,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"OneDrive"},sidebar:"docs",previous:{title:"Obs",permalink:"/docs/services/obs"},next:{title:"OSS",permalink:"/docs/services/oss"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://onedrive.com",children:"OneDrive"})," services support."]}),"\n","\n",(0,r.jsx)(i,{components:e.components}),"\n",(0,r.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Onedrive, map)?;\n    Ok(())\n}\n'})})}),(0,r.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("onedrive", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'})})}),(0,r.jsx)(l.Z,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("onedrive",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var r=t(6259);const s={tabItem:"tabItem_CbVR"};var a=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(959),s=t(6259),a=t(2990),i=t(8903),o=t(3133),l=t(563),c=t(351),u=t(3026);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var v=t(1527);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(k,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(959);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);