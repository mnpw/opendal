"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1846],{5722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var s=t(1527),r=t(2175);function a(e){const n={code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," append"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," presign"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": Set the work dir for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bucket"}),": Set the container name for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint"}),": Set the endpoint for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"presign_endpoint"}),": Set the endpoint for presign."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"access_key_id"}),": Set the access_key_id for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"access_key_secret"}),": Set the access_key_secret for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"role_arn"}),": Set the role of backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oidc_token"}),": Set the oidc_token for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allow_anonymous"}),": Set the backend access OSS in anonymous way."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to [",(0,s.jsx)(n.code,{children:"OssBuilder"}),"]'s public API docs for more information."]}),"\n",(0,s.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.h2,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,no_run",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Oss;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create OSS backend builder.\n    let mut builder = Oss::default();\n    // Set the root for oss, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n    // Set the bucket name, this is required.\n    builder.bucket("test");\n    // Set the endpoint.\n    //\n    // For example:\n    // - "https://oss-ap-northeast-1.aliyuncs.com"\n    // - "https://oss-hangzhou.aliyuncs.com"\n    builder.endpoint("https://oss-cn-beijing.aliyuncs.com");\n    // Set the access_key_id and access_key_secret.\n    //\n    // OpenDAL will try load credential from the env.\n    // If credential not set and no valid credential in env, OpenDAL will\n    // send request without signing like anonymous user.\n    builder.access_key_id("access_key_id");\n    builder.access_key_secret("access_key_secret");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var c=t(5431),l=t(2860);const o={title:"OSS"},d=void 0,u={id:"services/oss",title:"OSS",description:"Aliyun Object Storage Service (OSS) support.",source:"@site/docs/services/oss.mdx",sourceDirName:"services",slug:"/services/oss",permalink:"/docs/services/oss",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/oss.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1713263303,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{title:"OSS"},sidebar:"docs",previous:{title:"OneDrive",permalink:"/docs/services/onedrive"},next:{title:"Persy",permalink:"/docs/services/persy"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Aliyun Object Storage Service (OSS) support."}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(l.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("bucket".to_string(), "test".to_string());\n    map.insert("endpoint".to_string(), "https://oss-cn-beijing.aliyuncs.com".to_string());\n    map.insert("access_key_id".to_string(), "access_key_id".to_string());\n    map.insert("access_key_secret".to_string(), "access_key_secret".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Oss, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(l.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("oss", {\n    root: "/path/to/dir",\n    bucket: "test",\n    endpoint: "https://oss-cn-beijing.aliyuncs.com",\n    access_key_id: "access_key_id",\n    access_key_secret: "access_key_secret",\n  });\n}\n'})})}),(0,s.jsx)(l.Z,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("oss",\n    root="/path/to/dir",\n    bucket="test",\n    endpoint="https://oss-cn-beijing.aliyuncs.com",\n    access_key_id="access_key_id",\n    access_key_secret="access_key_secret",\n)\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var s=t(6259);const r={tabItem:"tabItem_CbVR"};var a=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>_});var s=t(959),r=t(6259),a=t(2990),i=t(8903),c=t(3133),l=t(563),o=t(351),d=t(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:t,groupId:r}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=o??b;return h({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var k=t(1527);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==s&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,k.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,k.jsx)(j,{...e,...n}),(0,k.jsx)(y,{...e,...n})]})}function _(e){const n=(0,x.Z)();return(0,k.jsx)(v,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(959);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);