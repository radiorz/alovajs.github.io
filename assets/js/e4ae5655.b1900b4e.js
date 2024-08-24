"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7007],{95431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(85893),a=r(11151);r(74866),r(85162);const s={title:"useWatcher with serial"},i=void 0,l={id:"tutorial/client/strategy/use-serial-watcher",title:"useWatcher with serial",description:"use hook",source:"@site/docs/tutorial/03-client/01-strategy/12-use-serial-watcher.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-serial-watcher",permalink:"/tutorial/client/strategy/use-serial-watcher",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/12-use-serial-watcher.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"useWatcher with serial"},sidebar:"tutorial",previous:{title:"useRequest with serial",permalink:"/tutorial/client/strategy/use-serial-request"},next:{title:"retriable request",permalink:"/tutorial/client/strategy/use-retriable-request"}},o={},u=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Request error",id:"request-error",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"policy type",type:"info",children:(0,n.jsx)(t.p,{children:"use hook"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Status update triggers a set of serial requests, which is more concise and easy to use than ",(0,n.jsx)(t.a,{href:"/tutorial/project/best-practice/serial-request",children:"serial request in best practice"}),", with unified loading status, error, and callback functions."]}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A more concise and easy-to-use serial method;"}),"\n",(0,n.jsx)(t.li,{children:"Unified request status and callback function;"}),"\n",(0,n.jsx)(t.li,{children:"Status update triggers serial execution of multiple requests;"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(t.p,{children:["Same usage as ",(0,n.jsx)(t.code,{children:"useWatcher"}),", except that the first parameter is changed to an array of handlers executed serially, and each handler will receive the response data of the previous request."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { useSerialWatcher } from 'alova/client';\n\nconst {\n  // Serial loading status, all requests will be changed to false\n  loading,\n\n  // The response data of the last request\n  data,\n\n  // Any request error will record the error message here\n  error,\n\n  // Manually send a serial request\n  send,\n\n  // serial request success callback binding function\n  onSuccess,\n\n  // Serial request error callback binding function, any request error will trigger it\n  onError,\n\n  // Serial request completion callback binding function\n  onComplete\n} = useSerialWatcher(\n  [\n    // args is the parameter passed in by the send function\n    (...args) => request1(args),\n\n    // Starting from the second handler, the first parameter is the response data of the previous request, and args is received from the second\n    (response1, ...args) => request2(response1, args),\n    (response2, ...args) => request3(response2, args)\n  ],\n  [watchedState1, watchedState2],\n  {\n    immediate: true\n  }\n);\n\n// Manually trigger the request and pass parameters\nsend(1, 2, 3);\n"})}),"\n",(0,n.jsx)(t.p,{children:"It is worth noting that the first item in the handler array can also be specified as a method instance, and the second item must be a function."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSerialRequest([\n  methodInstance,\n  (response1, ...args) => request2(response1, args),\n  (response2, ...args) => request3(response2, args)\n]);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"request-error",children:"Request error"}),"\n",(0,n.jsxs)(t.p,{children:["When any of the serial requests is wrong, ",(0,n.jsx)(t.code,{children:"onError"})," will be triggered, and its ",(0,n.jsx)(t.code,{children:"event.method"})," will point to the method instance of the request error."]}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"hook-configuration",children:"Hook configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Inherit all configurations of ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usewatcher",children:(0,n.jsx)(t.strong,{children:"useWatcher"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"responsive-data",children:"Responsive data"}),"\n",(0,n.jsxs)(t.p,{children:["Inherit all responsive data from ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usewatcher",children:(0,n.jsx)(t.strong,{children:"useWatcher"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"action-function",children:"Action function"}),"\n",(0,n.jsxs)(t.p,{children:["Inherit all action functions of ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usewatcher",children:(0,n.jsx)(t.strong,{children:"useWatcher"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"event",children:"Event"}),"\n",(0,n.jsxs)(t.p,{children:["Inherit all events from ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usewatcher",children:(0,n.jsx)(t.strong,{children:"useWatcher"})}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(90512);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(90512),s=r(12466),i=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:r,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=u??g;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);