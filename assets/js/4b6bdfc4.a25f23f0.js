"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=i,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),i=a(7294),r=a(6010),s=a(2466),l=a(6550),o=a(1980),u=a(7392),d=a(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function m(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=h({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??c;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(c(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(v,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return i.createElement(k,(0,n.Z)({key:String(t)},e))}},2620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(4866),s=a(5162);const l={title:"Skills",sidebar_position:20},o=void 0,u={unversionedId:"tutorial/best-practice/skills",id:"tutorial/best-practice/skills",title:"Skills",description:"The following are the better usage skills used by alova developers when using alova. They are collected from multiple parties and organized here. I hope that everyone can use alova more smoothly.",source:"@site/docs/tutorial/11-best-practice/02-skills.md",sourceDirName:"tutorial/11-best-practice",slug:"/tutorial/best-practice/skills",permalink:"/tutorial/best-practice/skills",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/11-best-practice/02-skills.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Skills",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Method management",permalink:"/tutorial/best-practice/method-manage"},next:{title:"Manage Cache with IndexedDB",permalink:"/tutorial/best-practice/manage-cache-by-indexeddb"}},d={},c=[{value:"Send request useRequest OR method",id:"send-request-userequest-or-method",level:2},{value:"Update state and cache at the same time",id:"update-state-and-cache-at-the-same-time",level:2},{value:"Quickly get sendArgs in onSuccess",id:"quickly-get-sendargs-in-onsuccess",level:2},{value:"Use prefixes to manage similar method instances",id:"use-prefixes-to-manage-similar-method-instances",level:2},{value:"Simulation data practice",id:"simulation-data-practice",level:2}],m={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following are the better usage skills used by alova developers when using alova. They are collected from multiple parties and organized here. I hope that everyone can use alova more smoothly."),(0,i.kt)("h2",{id:"send-request-userequest-or-method"},"Send request useRequest OR method"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useRequest")," provided by alova will only send a request and get the response data under normal circumstances, so why not use the method instance to send the request directly, because ",(0,i.kt)("inlineCode",{parentName:"p"},"useRequest")," can help us automatically manage ",(0,i.kt)("inlineCode",{parentName:"p"},"loading")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," and other responsive data that can be used directly, so if you need to use these states, use ",(0,i.kt)("inlineCode",{parentName:"p"},"useRequest")," without maintaining the data yourself. But on the contrary, you don't need to only apply ",(0,i.kt)("inlineCode",{parentName:"p"},"useRequest")," in the whole project. For example, when you only care about getting information and don't need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"loading"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", etc., when getting data outside the component, you can use method instance to send the request."),(0,i.kt)("h2",{id:"update-state-and-cache-at-the-same-time"},"Update state and cache at the same time"),(0,i.kt)("p",null,"When you finish editing a piece of data in a list, you don't want to re-request to update the list data again, but manually update the list data. Many developers may directly modify the list data."),(0,i.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <List :data="listData"></List>\n  <Editor @submit="handleItemSubmit"></Editor>\n</template>\n<script setup>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n<\/script>\n'))),(0,i.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"//...\n\nconst App = () => {\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n\n  return (\n    <>\n      <List data={listData}></List>\n      <Editor onSubmit={handleItemSubmit}></Editor>\n    </>\n  );\n};\n"))),(0,i.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n<\/script>\n<List data="{listData}"></List>\n<Editor on:submit="{handleItemSubmit}"></Editor>\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u274c This way of writing is not recommended")),(0,i.kt)("p",null,"Although this can trigger the interface to refresh, it may cause another problem, that is, when the list data is cached, because the cached data has not been updated, the hit cache is still the original data when entering the list page again."),(0,i.kt)("p",null,"So you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"updateState")," to update the stateful data and update the cache immediately."),(0,i.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <List :data="listData"></List>\n  <Editor @submit="handleItemSubmit"></Editor>\n</template>\n<script setup>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n<\/script>\n'))),(0,i.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"//...\n\nconst App = () => {\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n\n  return (\n    <>\n      <List data={listData}></List>\n      <Editor onSubmit={handleItemSubmit}></Editor>\n    </>\n  );\n};\n"))),(0,i.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n<\/script>\n<List data="{listData}"></List>\n<Editor on:submit="{handleItemSubmit}"></Editor>\n')))),(0,i.kt)("h2",{id:"quickly-get-sendargs-in-onsuccess"},"Quickly get sendArgs in onSuccess"),(0,i.kt)("p",null,"In actual projects, data is often passed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," function. If you need to use these data in callback functions such as onSuccess, since they exist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.sendArgs")," array, you can use the double destructuring method to directly obtain them to the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"onSuccess(({ sendArgs: [content] }) => {\n  console.log(content);\n});\n")),(0,i.kt)("h2",{id:"use-prefixes-to-manage-similar-method-instances"},"Use prefixes to manage similar method instances"),(0,i.kt)("p",null,"In many scenarios, we need to invalidate multiple caches at the same time. For example, the data of a page comes from multiple interfaces. When editing the data of this page, it is necessary to invalidate the cached data of these interfaces at the same time. You can method instances with the same prefix to classify them, and use this regex to invalidate caches with the same prefix."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const getData1 = id => alovaInstance.Get('/data1', {\n   name: `data-${id}-1`,\n   params: {\n     id\n   }\n});\nconst getData2 = alovaInstance.Get('/data2', {\n   name: `data-${id}-2`,\n   params: {\n     id\n   }\n});\nconst getData3 = alovaInstance.Get('/data3', {\n   name: `data-${id}-3`,\n   params: {\n     id\n   }\n});\n\nconst handleInvalidateCache = id => {\n   // Simultaneously invalidate the 3 cached data of the specified id\n   invalidateCache(new RegExp(`^data-${id}`);\n}\n")),(0,i.kt)("h2",{id:"simulation-data-practice"},"Simulation data practice"),(0,i.kt)("p",null,"If your project needs to use simulated data to simulate some or all interfaces in the development environment, and switch back to real network requests in production, you can control it through environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1 /** ... */], {\n  httpAdapter: globalFetch,\n  delay: 1000\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // Control the production environment through environment variables, and will not package mock related codes\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch\n  //...\n});\n")),(0,i.kt)("p",null,"And it is recommended that different developers in the team can create different mock interface data according to the version number of each iteration, so as to manage these mock data in the team. For details, please refer to the chapter of ",(0,i.kt)("a",{parentName:"p",href:"../extension/alova-mock"},"Simulation Data")," ."))}h.isMDXComponent=!0}}]);