"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=v({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=i??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},1876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const s={title:"vue2/3 options",sidebar_position:10},i=void 0,u={unversionedId:"tutorial/framework/vue-options",id:"tutorial/framework/vue-options",title:"vue2/3 options",description:"\u901a\u5e38\uff0cuse hook \u53ea\u80fd\u5728 vue \u7684 setup \u4e2d\u4f7f\u7528\uff0c\u4f46\u901a\u8fc7@alova/vue-options\u63d0\u4f9b\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 vue \u7684 options \u4e2d\u4f7f\u7528 alova \u7684 use hook\uff0c\u5b8c\u7f8e\u517c\u5bb9 alova \u7684\u51e0\u4e4e\u6240\u6709\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/10-framework/01-vue-options.md",sourceDirName:"tutorial/10-framework",slug:"/tutorial/framework/vue-options",permalink:"/zh-CN/tutorial/framework/vue-options",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/10-framework/01-vue-options.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"vue2/3 options",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Framework",permalink:"/zh-CN/category/framework"},next:{title:"solid",permalink:"/zh-CN/tutorial/framework/solid"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"mapAlovaHook \u51fd\u6570\u8bf4\u660e",id:"mapalovahook-\u51fd\u6570\u8bf4\u660e",level:2},{value:"\u7c7b\u578b\u652f\u6301",id:"\u7c7b\u578b\u652f\u6301",level:2},{value:"\u81ea\u52a8\u63a8\u65ad",id:"\u81ea\u52a8\u63a8\u65ad",level:3},{value:"\u4e3a\u54cd\u5e94\u6570\u636e\u6dfb\u52a0\u7c7b\u578b",id:"\u4e3a\u54cd\u5e94\u6570\u636e\u6dfb\u52a0\u7c7b\u578b",level:3}],d={toc:c},m="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u5e38\uff0cuse hook \u53ea\u80fd\u5728 vue \u7684 setup \u4e2d\u4f7f\u7528\uff0c\u4f46\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@alova/vue-options"),"\u63d0\u4f9b\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 vue \u7684 options \u4e2d\u4f7f\u7528 alova \u7684 use hook\uff0c\u5b8c\u7f8e\u517c\u5bb9 alova \u7684\u51e0\u4e4e\u6240\u6709\u529f\u80fd\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"vue2 \u548c vue3 \u4e2d\u5747\u53ef\u4f7f\u7528\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@alova/vue-options"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@alova/vue-options",alt:"npm"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alovajs/vue-options/actions/workflows/release.yml"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/alovajs/vue-options/actions/workflows/release.yml/badge.svg?branch=main",alt:"build"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/alovajs/vue-options?branch=main"},(0,o.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/alovajs/vue-options/badge.svg?branch=main",alt:"coverage status"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://badgen.net/badge/icon/typescript?icon=typescript&label",alt:"typescript"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"})),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install alova @alova/vue-options --save\n"))),(0,o.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add alova @alova/vue-options\n")))),(0,o.kt)("admonition",{title:"alova \u7248\u672c\u8981\u6c42",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"alova \u7248\u672c >= 2.13.1")),(0,o.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("p",null,"\u5148\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"vueOptionHook"),"\u521b\u5efa alova \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova, Method } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport { VueOptionsHook } from '@alova/vue-options';\n\n// api.js\nconst alovaInst = createAlova({\n  baseURL: 'http://example.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n")),(0,o.kt)("p",null,"\u518d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"mapAlovaHook"),"\u5c06 use hook \u7684\u8fd4\u56de\u503c\u96c6\u5408\u6620\u5c04\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\uff0c\u4ee5\u4e0b\u662f\u8bbf\u95ee\u54cd\u5e94\u5f0f\u72b6\u6001\u548c\u64cd\u4f5c\u51fd\u6570\u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u901a\u8fc7\u96c6\u5408\u7684 key \u6765\u8bbf\u95ee",(0,o.kt)("inlineCode",{parentName:"li"},"loading/data/error"),"\u7b49\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"this.key.loading"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"this.key.data"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u901a\u8fc7\u96c6\u5408\u7684 key \u52a0\u51fd\u6570\u540d\u79f0\u6765\u8bbf\u95ee\u64cd\u4f5c\u51fd\u6570\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"$"),"\u62fc\u63a5\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"this.key$send"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"this.key$onSuccess"),"\u3002")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <span role=\"loading\">{{ todoRequest.loading ? 'loading' : 'loaded' }}</span>\n    <span role=\"error\">{{ todoRequest.error ? todoRequest.error.message : '' }}</span>\n    <div role=\"data\">{{ JSON.stringify(todoRequest.data) }}</div>\n    <button\n      @click=\"todoRequest$send\"\n      role=\"btnSend\">\n      send\n    </button>\n  </div>\n</template>\n\n<script>\n  import { useRequest } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n  import { getData } from './api';\n\n  export default {\n    // mapAlovaHook\u5c06\u8fd4\u56demixins\u6570\u7ec4\uff0cuse hook\u7684\u7528\u6cd5\u4e0e\u4e4b\u524d\u4e00\u81f4\n    mixins: mapAlovaHook(function (vm) {\n      // \u53ef\u4ee5\u901a\u8fc7this\u6216vm\u6765\u8bbf\u95ee\u7ec4\u4ef6\u5b9e\u4f8b\n      // \u4f7f\u7528this\u65f6\uff0c\u6b64\u56de\u8c03\u51fd\u6570\u4e0d\u80fd\u4e3a\u7bad\u5934\u51fd\u6570\n      console.log(this, vm);\n      return {\n        todoRequest: useRequest(getData)\n      };\n    }),\n    created() {\n      this.todoRequest.loading;\n      this.todoRequest$send();\n      this.todoRequest$onSuccess(event => {\n        event.data.match;\n        event.sendArgs.copyWithin;\n      });\n      this.todoRequest$onSuccess(event => {\n        console.log('success', event);\n      });\n      this.todoRequest$onError(event => {\n        console.log('error', event);\n      });\n    },\n    mounted() {\n      this.todoRequest$onComplete(event => {\n        console.log('complete', event);\n      });\n    }\n  };\n<\/script>\n")),(0,o.kt)("h2",{id:"mapalovahook-\u51fd\u6570\u8bf4\u660e"},"mapAlovaHook \u51fd\u6570\u8bf4\u660e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapAlovaHook"),"\u662f\u7528\u4e8e\u5c06 alova \u7684 use hook \u8fd4\u56de\u7684\u72b6\u6001\u548c\u51fd\u6570\u96c6\u5408\uff0c\u901a\u8fc7 mixins \u6620\u5c04\u5230 vue \u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\u3002\u5b83\u63a5\u6536\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u5e76\u8fd4\u56de use hook \u7684\u8fd4\u56de\u503c\u96c6\u5408\u3002"),(0,o.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u56de\u8c03\u51fd\u6570\u5c06\u4f1a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"created"),"\u9636\u6bb5\u6267\u884c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee vue \u7ec4\u4ef6\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1. \u901a\u8fc7 this \u8bbf\u95ee\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6ce8\u610f\u56de\u8c03\u51fd\u6570\u4e0d\u80fd\u4e3a\u7bad\u5934\u51fd\u6570\nmapAlovaHook(function () {\n  console.log(this);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n\n// =======================\n// 2. \u901a\u8fc7\u51fd\u6570\u53c2\u6570\u8bbf\u95ee\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6b64\u65f6\u53ef\u4ee5\u7528\u7bad\u5934\u51fd\u6570\nmapAlovaHook(vm => {\n  console.log(vm);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n")),(0,o.kt)("h2",{id:"\u7c7b\u578b\u652f\u6301"},"\u7c7b\u578b\u652f\u6301"),(0,o.kt)("h3",{id:"\u81ea\u52a8\u63a8\u65ad"},"\u81ea\u52a8\u63a8\u65ad"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@alova/vue-options"),"\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684 ts \u7c7b\u578b\u652f\u6301\uff0c\u65e0\u8bba\u662f\u5426\u4f7f\u7528 typescript\uff0c\u6620\u5c04\u7684\u503c\u7c7b\u578b\u90fd\u4f1a\u88ab\u81ea\u52a8\u63a8\u65ad\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"this.todoRequest.loading; // boolean\nthis.todoRequest.error; // Error | undefined\nthis.todoRequest.data; // any\nthis.todoRequest$send; // (...args: any[]) => Promise<any>\nthis.todoRequest$onSuccess; // (handler: SuccessHandler) => void\nthis.todoRequest$onError; // (handler: ErrorHandler) => void\nthis.todoRequest$onComplete; // (handler: CompleteHandler) => void\n// ...\n")),(0,o.kt)("h3",{id:"\u4e3a\u54cd\u5e94\u6570\u636e\u6dfb\u52a0\u7c7b\u578b"},"\u4e3a\u54cd\u5e94\u6570\u636e\u6dfb\u52a0\u7c7b\u578b"),(0,o.kt)("p",null,"\u9664\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"this.todoRequest.data"),"\u5916\uff0c\u5176\u4ed6\u503c\u90fd\u6709\u4e86\u6b63\u786e\u7684\u7c7b\u578b\uff0c\u90a3\u4e48\u5982\u4f55\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"\u4e5f\u8bbe\u7f6e\u7c7b\u578b\u5462\uff1f\u5176\u5b9e\u4e0e alova \u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528\u662f\u76f8\u540c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"javascript")),(0,o.kt)("p",null,"\u5728 javascript \u4e2d\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca\u6dfb\u52a0\u7c7b\u578b\uff0cMethod \u7684\u524d\u4e24\u4e2a\u6cdb\u578b\u53c2\u6570\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),"\uff0c\u7b2c\u4e09\u4e2a\u6cdb\u578b\u53c2\u6570\u5c31\u662f\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Method } from 'alova';\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"typescript")),(0,o.kt)("p",null,"\u5728 typescript \u4e2d\u6dfb\u52a0\u54cd\u5e94\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"/tutorial/advanced/typescript/#the-type-of-response-data"},"alova \u6587\u6863 typescript \u7ae0\u8282")))}v.isMDXComponent=!0}}]);