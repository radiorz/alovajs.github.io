"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const o=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},3781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(7462),o=r(7294),n=r(3905),i=r(3894);const l=()=>o.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/condition-search?embed=1&file=%2Fsrc%2FApp.vue"}),s={title:"Conditional Search",sidebar_position:30},c=void 0,p={unversionedId:"tutorial/example/condition-search",id:"tutorial/example/condition-search",title:"Conditional Search",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/tutorial/02-example/03-condition-search.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/condition-search",permalink:"/tutorial/example/condition-search",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/03-condition-search.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Conditional Search",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"form submission",permalink:"/tutorial/example/submit-form"},next:{title:"Response Cache - Memory Mode",permalink:"/tutorial/example/memory-cache"}},u={},d=[],m={toc:d},f="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,n.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"Getting Started Guide"),";")),(0,n.kt)(l,{mdxType:"ConditionSearch"}),(0,n.kt)("admonition",{title:"example description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This example mainly shows the simplicity of data search. There is no need for the developer to maintain the state of the request, data, etc., and there is no need to manually trigger the request to send. Just bind the state of the search conditions.")))}h.isMDXComponent=!0}}]);