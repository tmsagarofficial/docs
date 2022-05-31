"use strict";(self.webpackChunkappblox_docs=self.webpackChunkappblox_docs||[]).push([[328],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9099:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),l=["components"],a={sidebar_position:11},s="blox push",p={unversionedId:"blox-cli/Commands/blox-push",id:"blox-cli/Commands/blox-push",title:"blox push",description:"To push Blox code to source control.",source:"@site/docs/blox-cli/Commands/blox-push.md",sourceDirName:"blox-cli/Commands",slug:"/blox-cli/Commands/blox-push",permalink:"/docs/blox-cli/Commands/blox-push",editUrl:"https://github.com/Appblox/docs/tree/main/docs/blox-cli/Commands/blox-push.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"blox log",permalink:"/docs/blox-cli/Commands/blox-log"},next:{title:"blox push-config",permalink:"/docs/blox-cli/Commands/blox-push-config"}},c={},u=[{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Details",id:"details",level:3}],m={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blox-push"},"blox push"),(0,i.kt)("p",null,"To push Blox code to source control."),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"blox push [blox-name] [options]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Blox push command can be used to make commits and to push Blox code to connected source control.\nThe operation can be performed on a single Blox or all the Blox at once."),(0,i.kt)("h3",{id:"details"},"Details"),(0,i.kt)("p",null,"The command requires two options to be passed, ",(0,i.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--force")," if no Blox name is provided. Also, the commit message passed with ",(0,i.kt)("inlineCode",{parentName:"p"},"-m")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--message")," flag."),(0,i.kt)("p",null,'To push a single Blox by the name blox1 with the commit message "initial commit", the command looks like so:\n',(0,i.kt)("inlineCode",{parentName:"p"},'blox push blox1 -m "initial commit"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'blox push -f -m "initial commit"'),' will commit and push all the Blox with the commit message "initial commit".'),(0,i.kt)("p",null,"In case a message was not passed initially, a prompt will ask for a message before committing."),(0,i.kt)("p",null,"If the operation fails, the reason will be listed in a report shown at the end of the operation.\n(Eg. If there are no files to stage, the push operation fails)"))}d.isMDXComponent=!0}}]);