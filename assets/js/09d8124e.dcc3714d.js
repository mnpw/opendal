"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4543],{7192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var s=t(1527),r=t(2175);function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," scan"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," presign"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"This service is mainly provided by GitHub actions."}),"\n",(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",children:"Caching dependencies to speed up workflows"})," for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["To make this service work as expected, please make sure to either call ",(0,s.jsx)(n.code,{children:"endpoint"})," and ",(0,s.jsx)(n.code,{children:"token"})," to\nconfigure the URL and credentials, or that the following environment has been setup correctly:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ACTIONS_CACHE_URL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ACTIONS_RUNTIME_TOKEN"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"They can be exposed by following action:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- name: Configure Cache Env\n  uses: actions/github-script@v6\n  with:\n    script: |\n      core.exportVariable('ACTIONS_CACHE_URL', process.env.ACTIONS_CACHE_URL || '');\n      core.exportVariable('ACTIONS_RUNTIME_TOKEN', process.env.ACTIONS_RUNTIME_TOKEN || '');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To make ",(0,s.jsx)(n.code,{children:"delete"})," work as expected, ",(0,s.jsx)(n.code,{children:"GITHUB_TOKEN"})," should also be set via:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"env:\n  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(n.p,{children:["Unlike other services, ghac doesn't support create empty files.\nWe provide a ",(0,s.jsx)(n.code,{children:"enable_create_simulation()"})," to support this operation but may result unexpected side effects."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, ",(0,s.jsx)(n.code,{children:"ghac"})," is a cache service which means the data store inside could\nbe automatically evicted at any time."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": Set the work dir for backend."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to [",(0,s.jsx)(n.code,{children:"GhacBuilder"}),"]'s public API docs for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-no_run",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Ghac;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create ghac backend builder.\n    let mut builder = Ghac::default();\n    // Set the root for ghac, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var l=t(5431),c=t(2860);const o={title:"GHAC"},d=void 0,u={id:"services/ghac",title:"GHAC",description:"GitHub Action Cache service support",source:"@site/docs/services/ghac.mdx",sourceDirName:"services",slug:"/services/ghac",permalink:"/docs/services/ghac",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/ghac.mdx",tags:[],version:"current",lastUpdatedBy:"Suyan",lastUpdatedAt:1714318766,formattedLastUpdatedAt:"Apr 28, 2024",frontMatter:{title:"GHAC"},sidebar:"docs",previous:{title:"Gdrive",permalink:"/docs/services/gdrive"},next:{title:"Gridfs",permalink:"/docs/services/gridfs"}},h={},p=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",children:"GitHub Action Cache"})," service support"]}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(c.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Ghac;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Ghac, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(c.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"ghac\", {\n        root: '/path/to/dir'\n    });\n}\n"})})}),(0,s.jsx)(c.Z,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("ghac", {\n    "root": "/path/to/dir"\n})\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var s=t(6259);const r={tabItem:"tabItem_CbVR"};var a=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(959),r=t(6259),a=t(2990),i=t(8903),l=t(3133),c=t(563),o=t(351),d=t(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:t,groupId:r}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=o??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=t(1527);function v(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(959);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);