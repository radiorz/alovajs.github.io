"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[271],{38389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(85893),n=r(11151);const o={title:"Multiple servers"},a=void 0,i={id:"tutorial/project/best-practice/multiple-servers",title:"Multiple servers",description:"If your project needs to request multiple servers, you can create multiple alova instances to correspond to different servers. In order to easily distinguish between different environments, you can also use environment variables to manage the hosts of multiple servers.",source:"@site/docs/tutorial/07-project/01-best-practice/05-multiple-servers.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/multiple-servers",permalink:"/tutorial/project/best-practice/multiple-servers",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/05-multiple-servers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Multiple servers"},sidebar:"tutorial",previous:{title:"Manage Cache with IndexedDB",permalink:"/tutorial/project/best-practice/manage-cache-by-indexeddb"},next:{title:"Common middleware practices",permalink:"/tutorial/project/best-practice/middleware"}},c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"If your project needs to request multiple servers, you can create multiple alova instances to correspond to different servers. In order to easily distinguish between different environments, you can also use environment variables to manage the hosts of multiple servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createAlova } from 'alova';\n\n//Create user-related alova instance\nconst userAlova = createAlova({\n  baseURL: VITE_API_USER\n});\n\n//Create order-related alova instances\nconst alova2 = createAlova({\n  baseURL: VITE_API_ORDER\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var s=r(67294);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);