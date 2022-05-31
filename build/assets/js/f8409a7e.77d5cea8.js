"use strict";(self.webpackChunkappblox_docs=self.webpackChunkappblox_docs||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Blox Architecture",p={unversionedId:"intro",id:"intro",title:"Blox Architecture",description:"\u201cAs business needs change, organizations must be able to deliver innovation quickly and adapt applications dynamically \u2014 reassembling capabilities from inside and outside the enterprise. To do this, organizations must understand and implement the \u201ccomposable enterprise.\u201d \u2013 Gartner",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/Appblox/docs/tree/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Composability vs Dependency",permalink:"/docs/composability-vs-dependency"}},c={},u=[{value:"Philosophies",id:"philosophies",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blox-architecture"},"Blox Architecture"),(0,a.kt)("p",null,"\u201cAs business needs change, organizations must be able to deliver innovation quickly and adapt applications dynamically \u2014 reassembling capabilities from inside and outside the enterprise. To do this, organizations must understand and implement the \u201ccomposable enterprise.\u201d \u2013 Gartner"),(0,a.kt)("p",null,"Composable enterprise is an approach to design that embraces the API economy, delivering business outcomes through the assembly and combination of packaged business capabilities."),(0,a.kt)("p",null,"We often have the need to reuse common business use cases in the same or multiple Apps. "),(0,a.kt)("p",null,"So we derived Blox and Blox Architecture, a Composable Application Framework."),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"a-unit-of-an-app-which-solves-a-business-use-case-with-its-code-and-contracts---blox"},"\u201cA unit of an app which solves a business use case with its code and contracts\u201d - Blox")),(0,a.kt)("p",null,"Apps developed through Appblox are adhered to ",(0,a.kt)("inlineCode",{parentName:"p"},"Blox Spec")," comprised of ",(0,a.kt)("inlineCode",{parentName:"p"},"SDM, a collection of Standard Data Models and API layer schemas.")),(0,a.kt)("h2",{id:"philosophies"},"Philosophies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reusability"),(0,a.kt)("li",{parentName:"ul"},"Independent Blox development"),(0,a.kt)("li",{parentName:"ul"},"Each Blox will be inside separate Repos ( MultiRepo) "),(0,a.kt)("li",{parentName:"ul"},"Independent version management of Blox"),(0,a.kt)("li",{parentName:"ul"},"Independent and Instant Deployment of Blox"),(0,a.kt)("li",{parentName:"ul"},"Independently testable modules - Auditability"),(0,a.kt)("li",{parentName:"ul"},"Micro Frontend for Frontend Development"),(0,a.kt)("li",{parentName:"ul"},"FaaS for Backend Development"),(0,a.kt)("li",{parentName:"ul"},"Blox can be language agnostic"),(0,a.kt)("li",{parentName:"ul"},"Pre Defined set of Standard Data Models.")),(0,a.kt)("p",null,"We have two type of mode of operations, SaaS and Business - link"),(0,a.kt)("p",null,"In Business Model, we create Database for an organisation and all apps installed by that organisation will be connected to it. Since they share a common Blox Spec, Same DB and API schemas, and share a Common DB, the apps will be connected by design."))}m.isMDXComponent=!0}}]);