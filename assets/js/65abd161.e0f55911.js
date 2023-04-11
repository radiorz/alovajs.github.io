"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),i(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function q(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const l={title:"Get started",sidebar_position:10},i=void 0,u={unversionedId:"get-started/start",id:"get-started/start",title:"Get started",description:"In the following getting started guide, we will take todos as an example, and explain alova around the needs of obtaining todo lists for different dates, viewing todo details, and creating, editing, and deleting items. . let's start!",source:"@site/docs/03-get-started/01-start.md",sourceDirName:"03-get-started",slug:"/get-started/start",permalink:"/get-started/start",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-get-started/01-start.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Get started",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"request method instance",permalink:"/get-started/request-method-instance"}},c={},d=[{value:"Create an Alova instance",id:"create-an-alova-instance",level:2},{value:"Set global request interceptor",id:"set-global-request-interceptor",level:2},{value:"Set global response interceptor",id:"set-global-response-interceptor",level:2},{value:"Set the global request timeout",id:"set-the-global-request-timeout",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the following getting started guide, we will take todos as an example, and explain ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," around the needs of obtaining todo lists for different dates, viewing todo details, and creating, editing, and deleting items. . let's start!"),(0,r.kt)("h2",{id:"create-an-alova-instance"},"Create an Alova instance"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," instance is used at the beginning, all requests need to start from it. It is written like ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", and the following is the simplest method to create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"."),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain name\n  baseURL: 'https://api.alovajs.org',\n\n  // VueHook can help us use vue's ref function to create request-related states that can be managed by Alova, including request state loading, response data data, request error object error, etc. (details to follow)\n  statesHook: VueHook,\n\n  // request adapter, we recommend and provide fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain name\n  baseURL: 'https://api.alovajs.org',\n\n  // ReactHook can help us call useState to create request-related states that can be managed by Alova, including request state loading, response data data, request error object error, etc. (details to follow)\n  statesHook: ReactHook,\n\n  // request adapter, we recommend and provide fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nconst alovaInstance = createAlova({\n  // Suppose we need to interact with the server for this domain name\n  baseURL: 'https://api.alovajs.org',\n\n  // SvelteHook can help us call writable to create request-related states that can be managed by Alova, including request state loading, response data data, request error object error, etc. (details to follow)\n  statesHook: SvelteHook,\n\n  // request adapter, we recommend and provide fetch request adapter\n  requestAdapter: GlobalFetch()\n});\n")))),(0,r.kt)("h2",{id:"set-global-request-interceptor"},"Set global request interceptor"),(0,r.kt)("p",null,"Usually, we need to use the same configuration for all requests, such as adding token and timestamp to the request header. ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," provides us with a global request interceptor, which will be triggered before the request. We can use this interceptor Set the request parameters in a unified way, which is also similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // The function parameter is a method instance, including request data such as url, params, data, headers, etc.\n  // You are free to modify these data\n  // highlight-start\n  beforeRequest(method) {\n    // Suppose we need to add token to the request header\n    method.config.headers.token = 'token';\n  }\n  // highlight-end\n});\n")),(0,r.kt)("p",null,"You can also set beforeRequest as an async function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // highlight-start\n  async beforeRequest(method) {\n    // perform some asynchronous tasks\n    //...\n  }\n  // highlight-end\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Detailed request method example introduction will be explained in the next section")),(0,r.kt)("h2",{id:"set-global-response-interceptor"},"Set global response interceptor"),(0,r.kt)("p",null,"When we want to unify the parsing of response data and uniform handling of errors, we can specify a global response interceptor when creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," instance, which is also similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),". Response interceptors include interceptors for successful requests and interceptors for failed requests."),(0,r.kt)("admonition",{title:"responded and responded are compatible",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In 2.0.x and previous versions, ",(0,r.kt)("inlineCode",{parentName:"p"},"responded")," was misspelled as ",(0,r.kt)("inlineCode",{parentName:"p"},"responsed"),", and the two have been made compatible in 2.1.0. It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"responded")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"responsed")," in subsequent versions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // highlight-start\n  // Use two items of the array to specify the interceptor for successful request and the interceptor for failed request\n  responded: {\n    // request success interceptor\n    // When using the GlobalFetch request adapter, the first parameter receives the Response object\n    // The second parameter is the method instance of the current request, you can use it to synchronize the configuration information before and after the request\n    onSuccess: async (response, method) => {\n      if (response.status >= 400) {\n        throw new Error(response.statusText);\n      }\n      const json = await response.json();\n      if (json.code !== 200) {\n        // This request will throw an error when an error is thrown or a Promise instance in the reject state is returned\n        throw new Error(json.message);\n      }\n\n      // The parsed response data will be passed to the transformData hook function of the method instance, and these functions will be explained later\n      return json.data;\n    },\n\n    // Interceptor for request failure\n    // This interceptor will be entered when the request is wrong.\n    // The second parameter is the method instance of the current request, you can use it to synchronize the configuration information before and after the request\n    onError: (err, method) => {\n      alert(error.message);\n    }\n  }\n  // highlight-end\n});\n")),(0,r.kt)("p",null,"If you don't need to set the interceptor for request failure, you can directly pass in the interceptor function for successful request instead of setting the callback through the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // highlight-start\n  async responded(response, method) {\n    // request success interceptor\n  }\n  // highlight-end\n});\n")),(0,r.kt)("admonition",{title:"special attention",type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Both ",(0,r.kt)("inlineCode",{parentName:"li"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onError")," can be set as sync function and async functions."),(0,r.kt)("li",{parentName:"ol"},"The onError callback is a capture function for request errors. When an error is caught but no error is thrown or a Promise instance in the reject state is returned, the request will be considered successful and no response data will be obtained."))),(0,r.kt)("h2",{id:"set-the-global-request-timeout"},"Set the global request timeout"),(0,r.kt)("p",null,"The following is to set the global request timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Globally set the request timeout\nconst alovaInstance = createAlova({\n  //...\n  // highlight-start\n  // Request timeout time, in milliseconds, the default is 0, which means never timeout\n  timeout: 50000\n  // highlight-end\n});\n")))}h.isMDXComponent=!0}}]);