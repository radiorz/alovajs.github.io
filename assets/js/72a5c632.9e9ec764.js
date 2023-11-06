"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3894:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=e=>{let{src:t}=e;return r.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},9108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=a(7462),n=a(7294),o=a(3905),i=a(3894);const l=()=>n.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/IndexedDB-cache?embed=1&file=%2Fsrc%2FApp.vue"}),c={title:"Manage Cache with IndexedDB",sidebar_position:110},d=void 0,p={unversionedId:"tutorial/example/controlled-cache-by-indexeddb",id:"tutorial/example/controlled-cache-by-indexeddb",title:"Manage Cache with IndexedDB",description:"The example uses vue3 as an example, but you can also use alova in react and svelte, please read the Getting Started Guide for details;",source:"@site/docs/tutorial/02-example/11-controlled-cache-by-indexeddb.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/controlled-cache-by-indexeddb",permalink:"/tutorial/example/controlled-cache-by-indexeddb",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/11-controlled-cache-by-indexeddb.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Manage Cache with IndexedDB",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Paginated list",permalink:"/tutorial/example/paginated-list"},next:{title:"Silent Submit - Settings Page",permalink:"/tutorial/example/silent-submit-setting"}},s={},u=[],m={toc:u},b="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte, please read the ",(0,o.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"Getting Started Guide")," for details;")),(0,o.kt)(l,{mdxType:"ControlledCacheByIndexedDB"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using controlled cache allows developers to customize and manage the cache. Under the large file cache, it can cooperate with IndexedDB to manage the local cache."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Operation guidance:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Select one of the pictures, the picture will request the network to load first, and the picture data will be saved in the local IndexedDB;"),(0,o.kt)("li",{parentName:"ol"},"Refresh the page and select the same picture again, the picture will get data from IndexedDB instead of initiating a network request;")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../next-step/controlled-cache"},"Controlled cache document"))))}h.isMDXComponent=!0}}]);