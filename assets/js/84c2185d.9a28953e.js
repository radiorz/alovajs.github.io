"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3209],{90057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(85893),i=r(11151);const a={title:"Request retry strategy"},s=void 0,o={id:"tutorial/server/strategy/retry",title:"Request retry strategy",description:"server hook",source:"@site/docs/tutorial/04-server/01-strategy/01-retry.md",sourceDirName:"tutorial/04-server/01-strategy",slug:"/tutorial/server/strategy/retry",permalink:"/tutorial/server/strategy/retry",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/04-server/01-strategy/01-retry.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Request retry strategy"},sidebar:"tutorial",previous:{title:"Server Strategy",permalink:"/tutorial/server/strategy/"},next:{title:"Send Captcha",permalink:"/tutorial/server/strategy/send-captcha"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set the maximum number of static retries",id:"set-the-maximum-number-of-static-retries",level:3},{value:"Dynamically set the maximum number of retries",id:"dynamically-set-the-maximum-number-of-retries",level:3},{value:"Set the delay time",id:"set-the-delay-time",level:3},{value:"Set an unfixed retry delay time",id:"set-an-unfixed-retry-delay-time",level:3}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"type",type:"info",children:(0,n.jsx)(t.p,{children:"server hook"})}),"\n",(0,n.jsx)(t.p,{children:"Request retry strategy, you can use it for important requests."}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Customize the number of retries or determine whether to retry based on conditions;"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Retry delay mechanism;"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const { retry } = require('alova/server');\nconst { alovaInstance } = require('./api');\n\nconst request = alovaInstance.Get('/api/user');\nconst hookedMethod = retry(request);\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"retry"}),"'s maximum request retry count defaults to 3, and each retry will be delayed by 1 second."]}),"\n",(0,n.jsx)(t.h3,{id:"set-the-maximum-number-of-static-retries",children:"Set the maximum number of static retries"}),"\n",(0,n.jsx)(t.p,{children:"The maximum number of retries indicates the maximum number of times a request is retried after the first request fails. If the request succeeds during this period, it will stop retrying. The default maximum number of retries is 3 times, and you can customize the setting in the following way."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const hookedMethod = retry(request, {\n  // ...\n  // highlight-start\n  // Set the maximum number of retries to 5\n  retry: 5\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dynamically-set-the-maximum-number-of-retries",children:"Dynamically set the maximum number of retries"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes you may want to determine whether to continue retrying based on a certain condition. In this case, you can set ",(0,n.jsx)(t.code,{children:"retry"})," to a function that returns a boolean value to dynamically determine whether to continue retrying."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const hookedMethod = retry(request, {\n  // ...\n  // highlight-start\n  // The first parameter is the last error instance, and the second parameter is the parameter passed in by send\n  retry(error) {\n    // If the request times out, continue to retry\n    return /network timeout/i.test(error.message);\n  }\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"set-the-delay-time",children:"Set the delay time"}),"\n",(0,n.jsx)(t.p,{children:"The default retry delay time is 1 second, and you can customize it in the following way."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"retry(request, {\n  // ...\n  backoff: {\n    // highlight-start\n    // Set the delay time to 2 seconds\n    delay: 2000\n    // highlight-end\n  }\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"set-an-unfixed-retry-delay-time",children:"Set an unfixed retry delay time"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes you want the delay time of each request to be not fixed. You can set the delay growth multiple as follows. The delay time will increase exponentially according to the number of retries."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"retry(request, {\n  // ...\n  backoff: {\n    delay: 2000,\n    // highlight-start\n    // When multiplier is set to 2, the first retry delay is 2 seconds, the second is 4 seconds, the third is 8 seconds, and so on.\n    multiplier: 2\n    // highlight-end\n  }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Not enough? You can even add a random jitter value to each delay time to make it look less regular."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"retry(request, {\n// ...\nbackoff: {\ndelay: 2000,\nmultiplier: 2,\n// highlight-start\n/**\n* The starting percentage value of the delay request jitter, ranging from 0-1\n* When only startQuiver is set, endQuiver defaults to 1\n* For example, if it is set to 0.5, it will add a random time of 50% to 100% to the current delay time\n* If endQuiver has a value, the delay time will increase by a random value in the range of startQuiver and endQuiver\n*/\nstartQuiver: 0.5,\n\n/**\n* The ending percentage value of the delay request jitter, ranging from 0-1\n* When only endQuiver is set, startQuiver defaults to 0\n* For example, if it is set to 0.8, it will add a random time of 0% to 80% to the current delay time\n* If startQuiver has a value, the delay time will increase by a random value in the range of startQuiver and endQuiver\n*/\nendQuiver: 0.8;\n// highlight-end\n}\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);