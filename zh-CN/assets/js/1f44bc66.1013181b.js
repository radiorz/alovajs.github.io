"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),d=n(1980),u=n(7392),s=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,u]=v({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=d??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var g=n(2389);const f="tabList__CuJ",h="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:i,selectValue:d,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==i&&(c(t),d(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",sidebar_position:100},d=void 0,u={unversionedId:"next-step/download-upload-progress",id:"next-step/download-upload-progress",title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u662f\u5173\u95ed\u7684\uff0c\u4f60\u9700\u8981\u5728\u5728\u6307\u5b9a\u7684Method\u5b9e\u4f8b\u4e0a\u5f00\u542f\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-next-step/10-download-upload-progress.md",sourceDirName:"06-next-step",slug:"/next-step/download-upload-progress",permalink:"/zh-CN/next-step/download-upload-progress",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/10-download-upload-progress.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u53d7\u63a7\u7684\u7f13\u5b58",permalink:"/zh-CN/next-step/controlled-cache"},next:{title:"Strategy",permalink:"/zh-CN/category/strategy"}},s={},c=[{value:"\u4e0b\u8f7d\u8fdb\u5ea6",id:"\u4e0b\u8f7d\u8fdb\u5ea6",level:2},{value:"\u4e0a\u4f20\u8fdb\u5ea6",id:"\u4e0a\u4f20\u8fdb\u5ea6",level:2},{value:"\u4e0a\u4f20/\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b",id:"\u4e0a\u4f20\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u662f\u5173\u95ed\u7684\uff0c\u4f60\u9700\u8981\u5728\u5728\u6307\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u4e0a\u5f00\u542f\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u8fdb\u5ea6"},"\u4e0b\u8f7d\u8fdb\u5ea6"),(0,r.kt)("p",null,"\u5148\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"enableDownload"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u8868\u793a\u5f00\u542f\u4e86\u4e0b\u8f7d\u8fdb\u5ea6\uff0c\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher"),"\u4e09\u4e2a use hook \u4e2d\u63a5\u6536",(0,r.kt)("inlineCode",{parentName:"p"},"downloading"),"\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u5c06\u6301\u7eed\u66f4\u65b0\u8fd9\u4e2a\u72b6\u6001\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\u6587\u4ef6\u5927\u5c0f\uff1a{{ downloading.total }}B</div>\n  <div>\u5df2\u4e0b\u8f7d\uff1a{{ downloading.loaded }}B</div>\n  <div>\u8fdb\u5ea6\uff1a{{ downloading.loaded / downloading.total * 100 }}%</div>\n</template>\n\n<script setup>\n  const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n    enableDownload: true\n  });\n  const { dowinlading } = useRequest(downloadGetter);\n<\/script>\n"))),(0,r.kt)(l.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n  enableDownload: true\n});\n\nconst App = () => {\n  const { dowinlading } = useRequest(downloadGetter);\n  return (\n    <>\n      <div>\u6587\u4ef6\u5927\u5c0f\uff1a{downloading.total}B</div>\n      <div>\u5df2\u4e0b\u8f7d\uff1a{downloading.loaded}B</div>\n      <div>\u8fdb\u5ea6\uff1a{(downloading.loaded / downloading.total) * 100}%</div>\n    </>\n  );\n};\n"))),(0,r.kt)(l.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n    enableDownload: true\n  });\n  const { dowinlading } = useRequest(downloadGetter);\n<\/script>\n\n<div>\u6587\u4ef6\u5927\u5c0f\uff1a{downloading.total}B</div>\n<div>\u5df2\u4e0b\u8f7d\uff1a{downloading.loaded}B</div>\n<div>\u8fdb\u5ea6\uff1a{downloading.loaded / downloading.total * 100}%</div>\n")))),(0,r.kt)("h2",{id:"\u4e0a\u4f20\u8fdb\u5ea6"},"\u4e0a\u4f20\u8fdb\u5ea6"),(0,r.kt)("p",null,"\u4e0a\u4f20\u8fdb\u5ea6\u4e0e\u4e0b\u8f7d\u8fdb\u5ea6\u4f7f\u7528\u65b9\u6cd5\u76f8\u540c\uff0c\u5148\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"enableUpload"),"\u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u518d\u901a\u8fc7\u63a5\u6536",(0,r.kt)("inlineCode",{parentName:"p"},"uploading"),"\u54cd\u5e94\u5f0f\u72b6\u6001\u63a5\u6536\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\u6587\u4ef6\u5927\u5c0f\uff1a{{ uploading.total }}B</div>\n  <div>\u5df2\u4e0a\u4f20\uff1a{{ uploading.loaded }}B</div>\n  <div>\u8fdb\u5ea6\uff1a{{ uploading.loaded / uploading.total * 100 }}%</div>\n</template>\n\n<script setup>\n  const downloadGetter = alovaInstance.Get('/todo/uploadfile', {\n    enableUpload: true\n  });\n  const { uploading } = useRequest(downloadGetter);\n<\/script>\n"))),(0,r.kt)(l.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const downloadGetter = alovaInstance.Get('/todo/uploadfile', {\n  enableUpload: true\n});\n\nconst App = () => {\n  const { uploading } = useRequest(downloadGetter);\n  return (\n    <>\n      <div>\u6587\u4ef6\u5927\u5c0f\uff1a{uploading.total}B</div>\n      <div>\u5df2\u4e0a\u4f20\uff1a{uploading.loaded}B</div>\n      <div>\u8fdb\u5ea6\uff1a{(uploading.loaded / uploading.total) * 100}%</div>\n    </>\n  );\n};\n"))),(0,r.kt)(l.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const downloadGetter = alovaInstance.Get('/todo/uploadfile', {\n    enableUpload: true\n  });\n  const { uploading } = useRequest(downloadGetter);\n<\/script>\n\n<div>\u6587\u4ef6\u5927\u5c0f\uff1a{uploading.total}B</div>\n<div>\u5df2\u4e0a\u4f20\uff1a{uploading.loaded}B</div>\n<div>\u8fdb\u5ea6\uff1a{uploading.loaded / uploading.total * 100}%</div>\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"GlobalFetch"),"\u9002\u914d\u5668\u9700\u6ce8\u610f"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0 fetch api \u9650\u5236\uff0calova \u63d0\u4f9b\u7684 ",(0,r.kt)("strong",{parentName:"p"},"GlobalFetch")," \u9002\u914d\u5668\u4e0d\u652f\u6301\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u540e\u7eed\u5c06\u9646\u7eed\u63d0\u4f9b\u66f4\u52a0\u5b8c\u5584\u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002\u76ee\u524d\u5982\u9700\u8981\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u8bf7\u81ea\u884c\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"../advanced/custom-http-adapter"},"\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668"),"\u3002")),(0,r.kt)("h2",{id:"\u4e0a\u4f20\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b"},"\u4e0a\u4f20/\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Progress = {\n  /** \u4e0a\u4f20\u6216\u4e0b\u8f7d\u7684\u6570\u636e\u603b\u6570\u636e\u91cf */\n  total: number;\n  /** \u5df2\u5b8c\u6210\u7684\u6570\u636e */\n  loaded: number;\n};\n")))}m.isMDXComponent=!0}}]);