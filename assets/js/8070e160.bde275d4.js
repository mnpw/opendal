"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2651],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,r(r({ref:n},s),{},{components:t})):a.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const o={title:"Quickstart",sidebar_position:3},r=void 0,i={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"OpenDAL can be easily integrated into different software with its Rust core and multilingual bindings.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Mingzhuo Yin",lastUpdatedAt:1700107580,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:3,frontMatter:{title:"Quickstart",sidebar_position:3},sidebar:"docs",previous:{title:"Welcome to Apache OpenDAL",permalink:"/docs/overview"},next:{title:"Services",permalink:"/docs/category/services"}},d={},p=[{value:"Rust core",id:"rust-core",level:2},{value:"Install",id:"install",level:3},{value:"Demo",id:"demo",level:3},{value:"Java binding",id:"java-binding",level:2},{value:"Install",id:"install-1",level:3},{value:"Maven",id:"maven",level:4},{value:"Gradle",id:"gradle",level:4},{value:"Classified library",id:"classified-library",level:4},{value:"Demo",id:"demo-1",level:3},{value:"Python binding",id:"python-binding",level:2},{value:"Install",id:"install-2",level:3},{value:"Demo",id:"demo-2",level:3},{value:"Node.js binding",id:"nodejs-binding",level:2},{value:"Install",id:"install-3",level:3},{value:"Demo",id:"demo-3",level:3}],s={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"OpenDAL can be easily integrated into different software with its Rust core and multilingual bindings."),(0,l.kt)("h2",{id:"rust-core"},"Rust core"),(0,l.kt)("p",null,"OpenDAL's core is implemented in Rust programming language. The most convenient way to use OpenDAL in your Rust program add the OpenDAL Cargo crate as a dependency."),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("p",null,"Run the following Cargo command in your project directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cargo add opendal\n")),(0,l.kt)("p",null,"Or add the following line to your Cargo.toml:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'opendal = "0.40.0"\n')),(0,l.kt)("h3",{id:"demo"},"Demo"),(0,l.kt)("p",null,"Try it out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use opendal::Result;\nuse opendal::layers::LoggingLayer;\nuse opendal::services;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Pick a builder and configure it.\n    let mut builder = services::S3::default();\n    builder.bucket("test");\n\n    // Init an operator\n    let op = Operator::new(builder)?\n        // Init with logging layer enabled.\n        .layer(LoggingLayer::default())\n        .finish();\n\n    // Write data\n    op.write("hello.txt", "Hello, World!").await?;\n\n    // Read data\n    let bs = op.read("hello.txt").await?;\n\n    // Fetch metadata\n    let meta = op.stat("hello.txt").await?;\n    let mode = meta.mode();\n    let length = meta.content_length();\n\n    // Delete\n    op.delete("hello.txt").await?;\n\n    Ok(())\n}\n')),(0,l.kt)("h2",{id:"java-binding"},"Java binding"),(0,l.kt)("p",null,"OpenDAL's Java binding is released to Maven central as ",(0,l.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/org.apache.opendal/opendal-java"},(0,l.kt)("inlineCode",{parentName:"a"},"org.apache.opendal:opendal-java:${version}")),"."),(0,l.kt)("h3",{id:"install-1"},"Install"),(0,l.kt)("h4",{id:"maven"},"Maven"),(0,l.kt)("p",null,"Generally, you can first add the ",(0,l.kt)("inlineCode",{parentName:"p"},"os-maven-plugin")," for automatically detect the classifier based on your platform:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n<extensions>\n  <extension>\n    <groupId>kr.motd.maven</groupId>\n    <artifactId>os-maven-plugin</artifactId>\n    <version>1.7.0</version>\n  </extension>\n</extensions>\n</build>\n")),(0,l.kt)("p",null,"Then add the dependency to opendal-java as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n<dependency>\n  <groupId>org.apache.opendal</groupId>\n  <artifactId>opendal-java</artifactId>\n  <version>${opendal.version}</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.opendal</groupId>\n  <artifactId>opendal-java</artifactId>\n  <version>${opendal.version}</version>\n  <classifier>${os.detected.classifier}</classifier>\n</dependency>\n</dependencies>\n")),(0,l.kt)("h4",{id:"gradle"},"Gradle"),(0,l.kt)("p",null,"For Gradle, you can first add the ",(0,l.kt)("inlineCode",{parentName:"p"},"com.google.osdetector")," for automatically detect the classifier based on your platform:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'plugins {\n    id "com.google.osdetector" version "1.7.3"\n}\n')),(0,l.kt)("p",null,"Then add the dependency to opendal-java as following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n    implementation "org.apache.opendal:opendal-java:$opendal.version"\n    implementation "org.apache.opendal:opendal-java:$opendal.version:$osdetector.classifier"\n}\n')),(0,l.kt)("h4",{id:"classified-library"},"Classified library"),(0,l.kt)("p",null,"For details in specifying classified library, read the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-opendal/tree/main/bindings/java"},"dedicated explanation"),"."),(0,l.kt)("h3",{id:"demo-1"},"Demo"),(0,l.kt)("p",null,"Try it out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Configure service\nfinal Map<String, String> conf = new HashMap<>();\nconf.put("root", "/tmp");\n// Construct operator\nfinal Operator op = Operator.of("fs", conf);\n// Write data\nop.write("hello.txt", "Hello, World!").join();\n// Read data\nfinal byte[] bs = op.read("hello.txt").join();\n// Delete\nop.delete("hello.txt").join();\n')),(0,l.kt)("h2",{id:"python-binding"},"Python binding"),(0,l.kt)("p",null,"OpenDAL's Python binding is released to PyPI repository as ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/opendal/"},(0,l.kt)("inlineCode",{parentName:"a"},"opendal")),"."),(0,l.kt)("h3",{id:"install-2"},"Install"),(0,l.kt)("p",null,"Run the following command to install ",(0,l.kt)("inlineCode",{parentName:"p"},"opendal"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install opendal\n")),(0,l.kt)("h3",{id:"demo-2"},"Demo"),(0,l.kt)("p",null,"Try it out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\nimport asyncio\n\nasync def main():\n    op = opendal.AsyncOperator("fs", root="/tmp")\n    await op.write("test.txt", b"Hello World")\n    print(await op.read("test.txt"))\n\nasyncio.run(main())\n')),(0,l.kt)("h2",{id:"nodejs-binding"},"Node.js binding"),(0,l.kt)("p",null,"OpenDAL's Python binding is released to npm registry as ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/opendal"},(0,l.kt)("inlineCode",{parentName:"a"},"opendal")),"."),(0,l.kt)("h3",{id:"install-3"},"Install"),(0,l.kt)("p",null,"Run the following command to install ",(0,l.kt)("inlineCode",{parentName:"p"},"opendal"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install opendal\n")),(0,l.kt)("h3",{id:"demo-3"},"Demo"),(0,l.kt)("p",null,"Try it out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("fs", { root: "/tmp" });\n  await op.write("test", "Hello, World!");\n  const bs = await op.read("test");\n  console.log(new TextDecoder().decode(bs));\n  const meta = await op.stat("test");\n  console.log(`contentLength: ${meta.contentLength}`);\n}\n')))}u.isMDXComponent=!0}}]);