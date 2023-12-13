"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[139],{2623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=t(5893),i=t(1151),s=t(4866),a=t(5162);const l={title:"retriable request",sidebar_position:80},o=void 0,d={id:"tutorial/strategy/useRetriableRequest",title:"retriable request",description:"use hook",source:"@site/docs/tutorial/05-strategy/11-useRetriableRequest.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useRetriableRequest",permalink:"/tutorial/strategy/useRetriableRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/11-useRetriableRequest.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"retriable request",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"useWatcher with serial",permalink:"/tutorial/strategy/useSerialWatcher"},next:{title:"request by server-send events",permalink:"/tutorial/strategy/useSSE"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set the static maximum number of retries",id:"set-the-static-maximum-number-of-retries",level:3},{value:"Dynamically set the maximum number of retries",id:"dynamically-set-the-maximum-number-of-retries",level:3},{value:"Set delay time",id:"set-delay-time",level:3},{value:"Set an unfixed retry delay time",id:"set-an-unfixed-retry-delay-time",level:3},{value:"Manually stop retrying",id:"manually-stop-retrying",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"BackoffPolicy",id:"backoffpolicy",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3},{value:"RetriableRetryEvent",id:"retriableretryevent",level:4},{value:"RetriableFailEvent",id:"retriablefailevent",level:4}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.admonition,{title:"strategy type",type:"info",children:(0,n.jsx)(r.p,{children:"use hook"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"A use hook that can automatically retry a request failure, you can use it for important requests."}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/tutorial/example/retriable-hook",children:"Request Retry Demo"})}),"\n",(0,n.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u2728Customize the number of retries or judge whether retry is required according to the conditions;"}),"\n",(0,n.jsx)(r.li,{children:"\u2728 Retry delay mechanism;"}),"\n",(0,n.jsx)(r.li,{children:"\u2728 Manually stop retrying;"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(s.Z,{groupId:"framework",children:[(0,n.jsx)(a.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-vue --save\r\n#yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,n.jsx)(a.Z,{value:"2",label:"react",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-react --save\r\n#yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,n.jsx)(a.Z,{value:"3",label:"svelte",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-svelte --save\r\n#yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"use",children:"use"}),"\n",(0,n.jsx)(r.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const {\r\n  // Loading status, always true during retry, until retry succeeds or fails\r\n  loading,\r\n\r\n  // response data\r\n  data,\r\n\r\n  // Request error information, every time a request or retry fails, there will be an error instance\r\n  // The last error instance will be overwritten\r\n  error,\r\n\r\n  // Every time a request or retry fails, the onError event will be triggered\r\n  onError,\r\n\r\n  // Request retry event, triggered immediately after each retry request is issued\r\n  onRetry,\r\n\r\n  // request retry failure event\r\n  // The request is not successful after reaching the maximum number of retries, or manually stopping retries will trigger\r\n  onFail,\r\n\r\n  // request or retry success event\r\n  onSuccess,\r\n\r\n  // Every request or retry, regardless of success or failure, will trigger the completion event\r\n  onComplete\r\n} = useRetriableRequest(request);\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The maximum number of request retries for ",(0,n.jsx)(r.code,{children:"useRetriableRequest"})," defaults to 3, and each retry will be delayed by 1 second. It will also make a request by default, you can change the behavior by setting ",(0,n.jsx)(r.code,{children:"immediate"})," to false."]}),"\n",(0,n.jsx)(r.h3,{id:"set-the-static-maximum-number-of-retries",children:"Set the static maximum number of retries"}),"\n",(0,n.jsx)(r.p,{children:"The maximum number of retries indicates the maximum number of times to retry the request after the first request fails. During this period, if the request succeeds, it will stop continuing to retry. The default maximum number of retries is 3, and you can customize the settings in the following ways."}),"\n",(0,n.jsxs)(r.p,{children:["When the request reaches the maximum number of retries and still fails, the ",(0,n.jsx)(r.code,{children:"onFail"})," event will be triggered and the request retry will stop. If you want to continue to retry after the failure, you can call the ",(0,n.jsx)(r.code,{children:"send"})," function, and it will perform a new round request and retry."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const { send } = useRetriableRequest(request, {\r\n  //...\r\n  // highlight-start\r\n  // Set the maximum number of retries to 5\r\n  retry: 5\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"dynamically-set-the-maximum-number-of-retries",children:"Dynamically set the maximum number of retries"}),"\n",(0,n.jsxs)(r.p,{children:["Maybe sometimes you want to use a certain condition to determine whether to continue to retry. At this time, you can set ",(0,n.jsx)(r.code,{children:"retry"})," as a function that returns a boolean value to dynamically determine whether to continue to retry."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"useRetriableRequest(request, {\r\n  //...\r\n  // highlight-start\r\n  // The first parameter is the last error instance, and the parameters passed in from the second parameter to send\r\n  retry(error, ...args) {\r\n    // If the request times out, continue to retry\r\n    return /network timeout/i.test(error.message);\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"set-delay-time",children:"Set delay time"}),"\n",(0,n.jsx)(r.p,{children:"The default retry delay time is 1 second, you can customize the setting in the following ways."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"useRetriableRequest(request, {\r\n  //...\r\n  backoff: {\r\n    // highlight-start\r\n    // Set the delay time to 2 seconds\r\n    delay: 2000\r\n    // highlight-end\r\n  }\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"set-an-unfixed-retry-delay-time",children:"Set an unfixed retry delay time"}),"\n",(0,n.jsx)(r.p,{children:"Sometimes you want that the delay time of each request is not fixed, you can set the delay growth multiple in the following way, and the delay time will increase exponentially according to the number of retries."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"useRetriableRequest(request, {\r\n  //...\r\n  backoff: {\r\n    delay: 2000,\r\n    // highlight-start\r\n    // When the multiplier is set to 2, the first retry delay is 2 seconds, the second is 4 seconds, the third is 8 seconds, and so on.\r\n    multiplier: 2\r\n    // highlight-end\r\n  }\r\n});\n"})}),"\n",(0,n.jsx)(r.p,{children:"not enough? You can even add a random jitter value to each delay to make it look less regular."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"useRetriableRequest(request, {\r\n   //...\r\n   backoff: {\r\n     delay: 2000,\r\n     multiplier: 2,\r\n     // highlight-start\r\n     /**\r\n      * The initial jitter percentage value of the delay request, the range is 0-1\r\n      * When only startQuiver is set, endQuiver defaults to 1\r\n      * For example set to 0.5, it will add 50% to 100% random time on the current delay time\r\n      * If endQuiver has a value, the delay time will be increased by a random value in the range of startQuiver and endQuiver\r\n      */\r\n     startQuiver: 0.5,\r\n\r\n     /**\r\n      * The jitter end percentage value of the delayed request, the range is 0-1\r\n      * When only endQuiver is set, startQuiver defaults to 0\r\n      * For example set to 0.8, it will add a random time from 0% to 80% on the current delay time\r\n      * If startQuiver has a value, the delay time will increase the random value in the range of startQuiver and endQuiver\r\n      */\r\n     endQuiver: 0.8;\r\n     // highlight-end\r\n   }\r\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"manually-stop-retrying",children:"Manually stop retrying"}),"\n",(0,n.jsxs)(r.p,{children:["In some cases, you need to manually stop the retry, whether you are currently requesting or waiting for the next retry, you can use ",(0,n.jsx)(r.code,{children:"stop"})," to stop it."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"const { stop } = useRetriableRequest(request, {\r\n  //...\r\n});\r\n\r\nconst handleStop = () => {\r\n  stop();\r\n};\n"})}),"\n",(0,n.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(r.h3,{id:"hook-configuration",children:"Hook configuration"}),"\n",(0,n.jsxs)(r.p,{children:["Inherit all configurations from ",(0,n.jsx)(r.a,{href:"/api/core-hooks#userequest",children:(0,n.jsx)(r.strong,{children:"useRequest"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["| Name    | Description                                                                                                                                  | Type                            | Default                                   | Version |\r\n| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------- | ------- | --- |\r\n| retry   | The maximum number of retries can also be set as a function returning a boolean value to dynamically determine whether to continue to retry. | number                          | (error: Error, ...args: any[]) => boolean | 3       | -   |\r\n| backoff | Backoff policy, set retry delay time, etc.                                                                                                   | ",(0,n.jsx)(r.a,{href:"#backoffpolicy",children:"BackoffPolicy"})," | -                                         | -       |"]}),"\n",(0,n.jsx)(r.h3,{id:"backoffpolicy",children:"BackoffPolicy"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Version"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"delay"}),(0,n.jsx)(r.td,{children:"Delay time for another request, in milliseconds"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"1000"}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"multiplier"}),(0,n.jsx)(r.td,{children:"Specify the delay multiplier, for example, when multiplier is set to 2 and delay is 1 second, the first retry is 1 second, the second is 2 seconds, the third is 4 seconds, and so on"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"startQuiver"}),(0,n.jsx)(r.td,{children:"The initial jitter percentage value of the delay request, ranging from 0-1. When only startQuiver is set, endQuiver defaults to 1. For example, if it is set to 0.5, it will increase the current delay time by 50% to 100% randomly Time, if endQuiver has a value, the delay time will be increased by a random value in the range of startQuiver and endQuiver"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"endQuiver"}),(0,n.jsx)(r.td,{children:"The jitter end percentage value of the delayed request, the range is 0-1, when onlyWhen endQuiver is set, startQuiver defaults to 0. For example, if it is set to 0.5, it will add a random time from 0% to 50% to the current delay time. If startQuiver has a value, the delay time will increase the random value in the range of startQuiver and endQuiver"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"responsive-data",children:"Responsive data"}),"\n",(0,n.jsxs)(r.p,{children:["Inherit all responsive data from ",(0,n.jsx)(r.a,{href:"/api/core-hooks#userequest",children:(0,n.jsx)(r.strong,{children:"useRequest"})}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"action-function",children:"Action function"}),"\n",(0,n.jsxs)(r.p,{children:["Inherit all action functions of ",(0,n.jsx)(r.a,{href:"/api/core-hooks#userequest",children:(0,n.jsx)(r.strong,{children:"useRequest"})}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"description"}),(0,n.jsx)(r.th,{children:"function parameters"}),(0,n.jsx)(r.th,{children:"return value"}),(0,n.jsx)(r.th,{children:"version"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"stop"}),(0,n.jsx)(r.td,{children:"Stop retrying, it is only valid during retrying, and the onFail event will be triggered immediately after stopping"}),(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"-"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"event",children:"Event"}),"\n",(0,n.jsxs)(r.p,{children:["Inherit all events from ",(0,n.jsx)(r.a,{href:"/api/core-hooks#userequest",children:(0,n.jsx)(r.strong,{children:"useRequest"})}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Callback Parameters"}),(0,n.jsx)(r.th,{children:"Version"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onRetry"}),(0,n.jsx)(r.td,{children:"Retry event bindings, they will fire after a retry is initiated"}),(0,n.jsxs)(r.td,{children:["Retry event instance ",(0,n.jsx)(r.a,{href:"#retriableretryevent",children:"RetriableRetryEvent"})]}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onFail"}),(0,n.jsxs)(r.td,{children:["Triggered when the request fails. It will be triggered when no more retries are made. For example, when the maximum number of retries is reached, when the retry callback returns false, manually call stop to stop retrying",(0,n.jsx)("br",{}),"Note:",(0,n.jsx)("br",{}),"1 The .onError event will be triggered every time an error is reported.",(0,n.jsx)("br",{}),"2. If there are no retries, onError, onComplete and onFail will be triggered at the same time"]}),(0,n.jsxs)(r.td,{children:["Retry event instance ",(0,n.jsx)(r.a,{href:"#retriablefailevent",children:"RetriableFailEvent"})]}),(0,n.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"retriableretryevent",children:"RetriableRetryEvent"}),"\n",(0,n.jsx)(r.p,{children:"Event event instance inherited from alova."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Version"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"retryTimes"}),(0,n.jsx)(r.td,{children:"current retry times"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"required"}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"retryDelay"}),(0,n.jsx)(r.td,{children:"The delay time of this retry, in ms"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"required"}),(0,n.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"retriablefailevent",children:"RetriableFailEvent"}),"\n",(0,n.jsx)(r.p,{children:"Event event instance inherited from alova."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Version"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"retryTimes"}),(0,n.jsx)(r.td,{children:"current retry times"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"required"}),(0,n.jsx)(r.td,{children:"-"})]})})]})]})}function m(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>a});t(7294);var n=t(4334);const i={tabItem:"tabItem_Ymn6"};var s=t(5893);function a(e){let{children:r,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,a),hidden:t,children:r})}},4866:(e,r,t)=>{t.d(r,{Z:()=>q});var n=t(7294),i=t(4334),s=t(2466),a=t(6550),l=t(469),o=t(1980),d=t(7392),u=t(12);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:i}}=e;return{value:r,label:t,attributes:n,default:i}}))}(t);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(i.location.search);r.set(s,e),i.replace({...i.location,search:r.toString()})}),[s,i])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:i}=e,s=h(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[d,c]=x({queryString:t,groupId:i}),[f,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,s]=(0,u.Nk)(t);return[i,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),j=(()=>{const e=d??f;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,s]),tabValues:s}}var y=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function p(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),i=l[t].value;i!==n&&(d(r),a(i))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:c,onClick:u,...s,className:(0,i.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function g(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(p,{...e,...r}),(0,v.jsx)(b,{...e,...r})]})}function q(e){const r=(0,y.Z)();return(0,v.jsx)(g,{...e,children:c(e.children)},String(r))}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>a});var n=t(7294);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);