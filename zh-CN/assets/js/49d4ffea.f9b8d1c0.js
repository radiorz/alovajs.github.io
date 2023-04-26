"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6249],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),r=t(7294),o=t(6010),l=t(2466),s=t(6550),i=t(1980),u=t(7392),p=t(12);function c(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,u]=v({queryString:t,groupId:a}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,p.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),h=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=t(2389);const b="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==s&&(c(n),i(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":s===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(g,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function T(e){const n=(0,h.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},3964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),l=t(5162);const s={title:"XMLHttpRequest\u9002\u914d\u5668",sidebar_position:20},i=void 0,u={unversionedId:"extension/alova-adapter-xhr",id:"extension/alova-adapter-xhr",title:"XMLHttpRequest\u9002\u914d\u5668",description:"\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/09-extension/02-alova-adapter-xhr.md",sourceDirName:"09-extension",slug:"/extension/alova-adapter-xhr",permalink:"/zh-CN/extension/alova-adapter-xhr",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/09-extension/02-alova-adapter-xhr.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"XMLHttpRequest\u9002\u914d\u5668",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u62df\u6570\u636e",permalink:"/zh-CN/extension/alova-mock"},next:{title:"axios\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-axios"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-xhr --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-xhr\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u521b\u5efa-alova"},"\u521b\u5efa alova"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"xhrRequestAdapter")," \u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport { xhrRequestAdapter } from '@alova/adapter-xhr';\n\nconst alovaInst = createAlova({\n  // ...\n  requestAdapter: xhrResponseAdapter()\n  // ...\n});\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,r.kt)("p",null,"XMLHttpRequest \u9002\u914d\u5668\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"responseType"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"withCredentials"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mimeType"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"auth"),"\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <div v-if=\"loading\">\u52a0\u8f7d\u4e2d...</div>\n  <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</div>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const list = () =>\n  alovaInst.Get('/list', {\n    /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <div>\u52a0\u8f7d\u4e2d...</div> : null }\n    <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</div>\n  )\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n       * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\n       * \u9ed8\u8ba4\u4e3a\u201cjson\u201d\n       */\n      responseType: 'text',\n\n      /**\n       * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\n       */\n      withCredentials: true,\n\n      /**\n       * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n       */\n      mimeType: 'text/plain; charset=x-user-defined',\n\n      /**\n       * auth \u8868\u793a\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n       * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n       * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n       * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n       */\n      auth: {\n        username: 'name1',\n        password: '123456'\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>\u52a0\u8f7d\u4e2d...</div>\n{/if}\n<div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ data }</div>\n")))),(0,r.kt)("h3",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"FormData"),"\u4e0a\u4f20\u6587\u4ef6\uff0c\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"FormData"),"\u5b9e\u4f8b\u4f1a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"xhr.send"),"\u53d1\u9001\u5230\u670d\u52a1\u7aef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// \u56fe\u7247\u9009\u62e9\u4e8b\u4ef6\u56de\u8c03\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5c06\u8bf7\u6c42 url \u6307\u5411\u6587\u4ef6\u5730\u5740\u5373\u53ef\u4e0b\u8f7d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"enableDownload"),"\u8bbe\u7f6e\u4e3a true \u6765\u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // \u4e0b\u8f7d\u56fe\u7247\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n")),(0,r.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\u3002\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("a",{parentName:"p",href:"/extension/alova-mock"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u4f7f\u7528 XMLHttpRequest \u9002\u914d\u5668\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u9002\u914d XMLHttpRequest \u9002\u914d\u5668\uff0c\u6b64\u65f6\u4f60\u9700\u8981\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"@alova/adapter-xhr"),"\u5305\u4e2d\u5bfc\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"xhrMockResponse"),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { xhrRequestAdapter, xhrMockResponse } from '@alova/adapter-xhr';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: xhrRequestAdapter(),\n\n  // \u4f7f\u7528xhrMockResponse\uff0c\u8ba9\u6a21\u62df\u6570\u636e\u9002\u914dXMLHttpRequest\u9002\u914d\u5668\n  onMockResponse: xhrMockResponse\n});\n\nexport const alovaInst = createAlova({\n  // ...\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : xhrRequestAdapter()\n});\n")),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\u3002"),(0,r.kt)("h3",{id:"method-\u914d\u7f6e"},"method \u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"AlovaXHRRequestConfig"),"\u4e2d\u7684\u914d\u7f6e\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/**\n * xhr\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n */\ninterface AlovaXHRRequestConfig {\n  /**\n   * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u3002\n   *\n   * \u53ef\u4ee5\u8bbe\u7f6e\u66f4\u6539\u54cd\u5e94\u7c7b\u578b\u3002 \u503c\u4e3a\uff1a\u201carraybuffer\u201d\u3001\u201cblob\u201d\u3001\u201cdocument\u201d\u3001\u201cjson\u201d\u548c\u201ctext\u201d\u3002\n   * \u8bbe\u7f6e1\uff1a\u5982\u679c\u5f53\u524d\u5168\u5c40\u5bf9\u8c61\u4e0d\u662f Window \u5bf9\u8c61\uff0c\u5219\u5ffd\u7565\u8bbe\u7f6e\u4e3a\u201c\u6587\u6863\u201d\u3002\n   * \u8bbe\u7f6e2\uff1a\u5982\u679c\u72b6\u6001\u6b63\u5728\u52a0\u8f7d\u6216\u5b8c\u6210\uff0c\u5219\u629b\u51fa\u201cInvalidStateError\u201dDOMException\u3002\n   * \u8bbe\u7f6e3\uff1a\u5982\u679c\u8bbe\u7f6e\u4e86\u540c\u6b65\u6807\u5fd7\u4e14\u5f53\u524d\u5168\u5c40\u5bf9\u8c61\u662f Window \u5bf9\u8c61\uff0c\u5219\u629b\u51fa\u201cInvalidAccessError\u201dDOMException\u3002\n   * @default "json"\n   */\n  responseType?: XMLHttpRequestResponseType;\n\n  /**\n   * \u5f53\u51ed\u8bc1\u8981\u5305\u542b\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u65f6\u4e3atrue\u3002 \u5f53\u5b83\u4eec\u88ab\u6392\u9664\u5728\u8de8\u6e90\u8bf7\u6c42\u4e2d\u4ee5\u53ca\u5f53 cookie \u5728\u5176\u54cd\u5e94\u4e2d\u88ab\u5ffd\u7565\u65f6\u4e3a false\u3002 \u9ed8\u8ba4\u4e3afalse\u3002\n   * \u5982\u679c\u72b6\u6001\u672a\u53d1\u9001\u6216\u672a\u6253\u5f00\uff0c\u6216\u8005\u8bbe\u7f6e\u4e86send() \u6807\u5fd7\uff0c\u5219\u629b\u51fa\u201cInvalidStateError\u201dDOMException\u3002\n   * @default false\n   */\n  withCredentials?: boolean;\n\n  /**\n   * \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7684mimeType\n   */\n  mimeType?: string;\n\n  /**\n   * `auth` \u8868\u793a\u5e94\u8be5\u4f7f\u7528 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u63d0\u4f9b\u51ed\u636e\u3002\n   * \u8fd9\u5c06\u8bbe\u7f6e\u4e00\u4e2a `Authorization` \u6807\u5934\uff0c\u8986\u76d6\u4efb\u4f55\u73b0\u6709\u7684\n   * \u4f7f\u7528 `headers` \u8bbe\u7f6e\u7684 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n   * \u8bf7\u6ce8\u610f\uff0c\u53ea\u6709 HTTP Basic \u8eab\u4efd\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\n   * \u5bf9\u4e8e Bearer \u4ee4\u724c\u7b49\uff0c\u8bf7\u6539\u7528 `Authorization` \u81ea\u5b9a\u4e49\u6807\u5934\u3002\n   */\n  auth?: {\n    username: string;\n    password: string;\n  };\n}\n')),(0,r.kt)("h3",{id:"\u54cd\u5e94\u6570\u636e"},"\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"XMLHttpRequest \u9002\u914d\u5668\u54cd\u5e94\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AlovaXHRResponseHeaders {\n  [x: string]: any;\n}\ninterface AlovaXHRResponse<T = any> {\n  status: number;\n  statusText: string;\n  data: T;\n  headers: AlovaXHRResponseHeaders;\n}\n")))}m.isMDXComponent=!0}}]);