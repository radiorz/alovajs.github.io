"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6930],{66910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var s=n(85893),a=n(11151),r=n(74866),i=n(85162);const l={title:"Cross components to trigger request"},o=void 0,d={id:"tutorial/strategy/actionDelegationMiddleware",title:"Cross components to trigger request",description:"middleware",source:"@site/versioned_docs/version-v2/tutorial/05-strategy/09-actionDelegationMiddleware.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/actionDelegationMiddleware",permalink:"/v2/tutorial/strategy/actionDelegationMiddleware",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/09-actionDelegationMiddleware.md",tags:[],version:"v2",sidebarPosition:9,frontMatter:{title:"Cross components to trigger request"},sidebar:"tutorial",previous:{title:"send captcha",permalink:"/v2/tutorial/strategy/useCaptcha"},next:{title:"useRequest with serial",permalink:"/v2/tutorial/strategy/useSerialRequest"}},c={},u=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Batch trigger action function",id:"batch-trigger-action-function",level:3},{value:"Action function delegation list",id:"action-function-delegation-list",level:2},{value:"useRequest",id:"userequest",level:3},{value:"useWatcher",id:"usewatcher",level:3},{value:"useFetcher",id:"usefetcher",level:3},{value:"usePagination",id:"usepagination",level:3},{value:"useSQRequest",id:"usesqrequest",level:3},{value:"useForm",id:"useform",level:3},{value:"useCaptcha",id:"usecaptcha",level:3},{value:"useRetriableRequest",id:"useretriablerequest",level:3},{value:"useSerialRequest",id:"useserialrequest",level:3},{value:"useSerialWatcher",id:"useserialwatcher",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"strategy type",type:"info",children:(0,s.jsx)(t.p,{children:"middleware"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In the past, if you want to trigger a request in another component in one component, you need to save the data in the Store and complete it by dispatching Action. Now, you can use this middleware to ",(0,s.jsx)(t.strong,{children:"remove the limitation of component hierarchy"}),", and quickly trigger any request action function in any component."]}),"\n",(0,s.jsx)(t.p,{children:"For example, after updating the menu data in a component, you can re-trigger the re-request of the side menu bar to refresh the data. When the list data is manipulated, the list update is triggered."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/v2/tutorial/example/action-delegation-middleware",children:"Cross-component trigger request Demo"})}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Delegate the action function of any use hook in alova;"}),"\n",(0,s.jsx)(t.li,{children:"Trigger the delegated action function anywhere;"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(r.Z,{groupId:"framework",children:[(0,s.jsx)(i.Z,{value:"1",label:"vue",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,s.jsx)(i.Z,{value:"2",label:"react",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"})})}),(0,s.jsx)(i.Z,{value:"3",label:"svelte",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"use",children:"use"}),"\n",(0,s.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Take vue3 as an example, the usage is the same in react and svelte."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"actionDelegationMiddleware"})," in component A to delegate the action function of ",(0,s.jsx)(t.code,{children:"useRequest"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component A",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  //...\n  middleware: actionDelegationMiddleware('actionName')\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In any component (such as component B), pass in the specified delegate name through ",(0,s.jsx)(t.code,{children:"accessAction"})," to trigger the action function of ",(0,s.jsx)(t.code,{children:"useRequest"})," in component A."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component B",children:"import { accessAction } from '@alova/scene-vue';\n\naccessAction('actionName', delegatedActions => {\n  // Call the send function in component A\n  delegatedActions.send();\n\n  // Call the abort function in component A\n  delegatedActions.abort();\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"note",type:"info",children:(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"All use hooks in alova support action function delegation, but the functions delegated by different use hooks are different."}),"\n",(0,s.jsxs)(t.li,{children:["When using ",(0,s.jsx)(t.code,{children:"actionDelegationMiddleware"}),", the delegate name can be passed in strings, numbers, and symbol values."]}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"batch-trigger-action-function",children:"Batch trigger action function"}),"\n",(0,s.jsxs)(t.p,{children:["In the above example, we use ",(0,s.jsx)(t.code,{children:"accessAction"})," to trigger the action function of a use hook, but in fact, delegates with the same name will not override each other, but will be stored in a group, and we can use this name to trigger them at the same time The delegated function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component C",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  //...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component D",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  //...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component E",children:"import { accessAction } from '@alova/scene-vue';\n\n// Because the delegate hooks of component C and component D will be matched, the callback function will be executed twice\naccessAction('actionName1', delegatedActions => {\n  // Call the send function in component C and component D\n  delegatedActions.send();\n\n  // Call the abort function in component C and component D\n  delegatedActions.abort();\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["At the same time, regular expressions can also be used in ",(0,s.jsx)(t.code,{children:"accessAction"})," to trigger batches of action functions whose delegate names meet the conditions"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component F",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  //...\n  middleware: actionDelegationMiddleware('prefix_name1')\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component G",children:"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  //...\n  middleware: actionDelegationMiddleware('prefix_name2')\n});\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:"title=Component H",children:"import { accessAction } from '@alova/scene-vue';\n\n// Because the delegate hooks of component F and component G will be matched, the callback function will be executed twice\naccessAction(/^prefix_/, delegatedActions => {\n  // Call the send function in component F and component G\n  delegatedActions.send();\n\n  // Call the abort function in component F and component G\n  delegatedActions.abort();\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"action-function-delegation-list",children:"Action function delegation list"}),"\n",(0,s.jsx)(t.p,{children:"Although the action functions delegated by most hooks are the same as the action functions themselves, this is not absolute. The following is the action function delegation list of each hook."}),"\n",(0,s.jsx)(t.h3,{id:"userequest",children:"useRequest"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"description"}),(0,s.jsx)(t.th,{children:"function parameters"}),(0,s.jsx)(t.th,{children:"return value"}),(0,s.jsx)(t.th,{children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usewatcher",children:"useWatcher"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest delegate list"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"usefetcher",children:"useFetcher"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"description"}),(0,s.jsx)(t.th,{children:"function parameters"}),(0,s.jsx)(t.th,{children:"return value"}),(0,s.jsx)(t.th,{children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fetch"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".fetch"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".abort"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".update"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usepagination",children:"usePagination"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"description"}),(0,s.jsx)(t.th,{children:"function parameters"}),(0,s.jsx)(t.th,{children:"return value"}),(0,s.jsx)(t.th,{children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"refresh"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"insert"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"remove"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"replace"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reload"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/usePagination#api",children:"usePagination action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"getState"}),(0,s.jsx)(t.td,{children:"Get paging related data by name"}),(0,s.jsx)(t.td,{children:"stateKey: 'page' | 'pageSize' | 'data' | 'pageCount' | 'total' | 'isLastPage'"}),(0,s.jsx)(t.td,{children:"Corresponding to the value of the statekey"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usesqrequest",children:"useSQRequest"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest delegate list"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"useform",children:"useForm"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"description"}),(0,s.jsx)(t.th,{children:"function parameters"}),(0,s.jsx)(t.th,{children:"return value"}),(0,s.jsx)(t.th,{children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"updateForm"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/useForm#api",children:"useForm action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reset"}),(0,s.jsxs)(t.td,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/useForm#api",children:"useForm action function"})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"usecaptcha",children:"useCaptcha"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest delegate list"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"useretriablerequest",children:"useRetriableRequest"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"name"}),(0,s.jsx)(t.th,{children:"description"}),(0,s.jsx)(t.th,{children:"function parameters"}),(0,s.jsx)(t.th,{children:"return value"}),(0,s.jsx)(t.th,{children:"version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stop"}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"/v2/tutorial/strategy/useRetriableRequest#api",children:"useRetriableRequest action function"})," for details"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"abort"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"update"}),(0,s.jsxs)(t.td,{children:["Same as ",(0,s.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"useserialrequest",children:"useSerialRequest"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest delegate list"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"useserialwatcher",children:"useSerialWatcher"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.a,{href:"#userequest",children:"useRequest delegate list"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(90512);const a={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),a=n(90512),r=n(12466),i=n(16550),l=n(20469),o=n(91980),d=n(67392),c=n(20812);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,u]=j({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=d??p;return x({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==s&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function q(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function y(e){const t=(0,m.Z)();return(0,f.jsx)(q,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);