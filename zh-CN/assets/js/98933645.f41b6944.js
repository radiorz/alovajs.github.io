"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8846],{2582:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=n(5893),s=n(1151);const o={title:"\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9002\u914d\u5668",sidebar_position:20},a=void 0,d={id:"tutorial/custom/custom-http-adapter",title:"\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9002\u914d\u5668",description:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/10-custom/02-custom-http-adapter.md",sourceDirName:"tutorial/10-custom",slug:"/tutorial/custom/custom-http-adapter",permalink:"/zh-CN/tutorial/custom/custom-http-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/10-custom/02-custom-http-adapter.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9002\u914d\u5668",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/tutorial/custom/overview"},next:{title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/custom/custom-storage-adapter"}},l={},i=[{value:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",id:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",id:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",id:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",level:3},{value:"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",id:"xmlhttprequest-\u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",level:2},{value:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\r\n  // ...\r\n  requestAdapter: GlobalFetch()\r\n});\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"requestAdapter"}),"\u5c31\u662f\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5185\u90e8\u7684\u8bf7\u6c42\u53d1\u9001\u548c\u63a5\u6536\u90fd\u5c06\u4f9d\u8d56\u8bf7\u6c42\u9002\u914d\u5668\uff0c",(0,t.jsx)(r.code,{children:"GlobalFetch"}),"\u5c31\u662f\u901a\u8fc7 fetch api \u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u8bf7\u6c42\u7684\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u4f46\u662f\uff0c\u5f53",(0,t.jsx)(r.code,{children:"alova"}),"\u8fd0\u884c\u5728 fetch api \u4e0d\u53ef\u7528\u7684\u73af\u5883\u65f6\uff08\u5982 app\u3001\u5c0f\u7a0b\u5e8f\uff09\uff0c\u5c31\u9700\u8981\u66f4\u6362\u4e00\u4e2a\u652f\u6301\u5f53\u524d\u73af\u5883\u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u90a3\u5e94\u8be5\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u9002\u914d\u5668\u5462\uff1f\u5f88\u7b80\u5355\uff0c\u5b83\u5176\u5b9e\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\u65f6\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5185\u5305\u542b\u5982",(0,t.jsx)(r.code,{children:"url"}),"\u3001",(0,t.jsx)(r.code,{children:"method"}),"\u3001",(0,t.jsx)(r.code,{children:"data"}),"\u3001",(0,t.jsx)(r.code,{children:"headers"}),"\u3001",(0,t.jsx)(r.code,{children:"timeout"}),"\u7b49\u8bf7\u6c42\u76f8\u5173\u7684\u6570\u636e\u96c6\u5408\uff0c\u867d\u7136\u5b57\u6bb5\u8f83\u591a\uff0c\u4f46\u6211\u4eec\u53ea\u9700\u8bbf\u95ee\u6211\u4eec\u9700\u8981\u7684\u6570\u636e\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",children:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784"}),"\n",(0,t.jsx)(r.p,{children:"\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u63a5\u6536\u5230\u8bf7\u6c42\u76f8\u5173\u7684\u53c2\u6570\uff0c\u4ee5\u53ca\u5f53\u524d\u6b63\u5728\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u76f8\u5173\u7684\u51fd\u6570\u96c6\u5408\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"function CustomRequestAdapter(requestElements, methodInstance) {\r\n  // \u53d1\u9001\u8bf7\u6c42...\r\n  return {\r\n    async response() {\r\n      // ...\u8fd4\u56de\u54cd\u5e94\u6570\u636e\r\n    },\r\n    async headers() {\r\n      // \u8fd4\u56de\u54cd\u5e94\u5934\u7684\u5f02\u6b65\u51fd\u6570\r\n    },\r\n    abort() {\r\n      // \u4e2d\u65ad\u8bf7\u6c42\uff0c\u5f53\u5916\u90e8\u8c03\u7528abort\u65f6\u5c06\u89e6\u53d1\u6b64\u51fd\u6570\r\n    },\r\n    onDownload(updateDownloadProgress) {\r\n      // \u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateDownloadProgress\u6765\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\r\n    },\r\n    onUpload(updateUploadProgress) {\r\n      // \u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateUploadProgress\u6765\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\r\n    }\r\n  };\r\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",children:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"requestElements"})}),"\n",(0,t.jsx)(r.p,{children:"\u53d1\u9001\u8bf7\u6c42\u7684\u76f8\u5173\u5143\u7d20\uff0c\u5305\u542b\u4ee5\u4e0b\u6570\u636e\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"interface RequestElements {\r\n  // \u8bf7\u6c42url\uff0cget\u53c2\u6570\u5df2\u5305\u542b\u5176\u4e2d\r\n  readonly url: string;\r\n\r\n  // \u8bf7\u6c42\u7c7b\u578b\uff0c\u5982GET\u3001POST\u3001PUT\u7b49\r\n  readonly type: MethodType;\r\n\r\n  // \u8bf7\u6c42\u5934\u4fe1\u606f\uff0c\u5bf9\u8c61\r\n  readonly headers: Arg;\r\n\r\n  // \u8bf7\u6c42\u4f53\u4fe1\u606f\r\n  readonly data?: RequestBody;\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"methodInstance"})}),"\n",(0,t.jsx)(r.p,{children:"\u5f53\u524d\u8bf7\u6c42\u7684 method \u5b9e\u4f8b"}),"\n",(0,t.jsx)(r.h3,{id:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",children:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"response\uff08\u5fc5\u586b\uff09"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u54cd\u5e94\u503c\uff0c\u5b83\u5c06\u4f1a\u4f20\u9012\u7ed9\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\uff08responded\uff09\uff1b"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"headers\uff08\u5fc5\u586b\uff09"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u54cd\u5e94\u5934\u5bf9\u8c61\u5c06\u4f20\u9012\u7ed9 Method \u5b9e\u4f8b\u7684 transformData \u8f6c\u6362\u94a9\u5b50\u51fd\u6570\uff1b"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"abort\uff08\u5fc5\u586b\uff09"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\uff0c\u5728 ",(0,t.jsx)(r.a,{href:"#%E6%89%8B%E5%8A%A8%E4%B8%AD%E6%96%AD%E8%AF%B7%E6%B1%82",children:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42"})," \u7ae0\u8282\u4e2d\u8c03\u7528",(0,t.jsx)(r.code,{children:"abort"}),"\u51fd\u6570\u65f6\uff0c\u5b9e\u9645\u4e0a\u89e6\u53d1\u4e2d\u65ad\u8bf7\u6c42\u7684\u51fd\u6570\u5c31\u662f\u8fd9\u4e2a\u4e2d\u65ad\u51fd\u6570\uff1b"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"onDownload\uff08\u53ef\u9009\uff09"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6b64\u51fd\u6570\u5185\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u66f4\u65b0\u7684\u9891\u7387\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\u6a21\u62df\u6bcf\u9694 100 \u6beb\u79d2\u66f4\u65b0\u4e00\u6b21\u3002",(0,t.jsx)(r.code,{children:"updateDownloadProgress"}),"\u56de\u8c03\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u603b\u5927\u5c0f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5df2\u4e0b\u8f7d\u5927\u5c0f\uff1b"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"onUpload\uff08\u53ef\u9009\uff09"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6b64\u51fd\u6570\u5185\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u66f4\u65b0\u7684\u9891\u7387\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\u6a21\u62df\u6bcf\u9694 100 \u6beb\u79d2\u66f4\u65b0\u4e00\u6b21\u3002",(0,t.jsx)(r.code,{children:"updateUploadProgress"}),"\u56de\u8c03\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u603b\u5927\u5c0f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5df2\u4e0a\u4f20\u5927\u5c0f\uff1b"]}),"\n",(0,t.jsx)(r.h2,{id:"xmlhttprequest-\u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",children:"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b"}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u901a\u8fc7 XMLHttpRequest \u53d1\u9001\u8bf7\u6c42\u7684\u9002\u914d\u5668\u7684\u793a\u4f8b\uff0c\u4e3b\u8981\u7528\u4e8e\u6f14\u793a\u9002\u914d\u5668\u7684\u5199\u6cd5\uff0c\u4ee3\u7801\u4e0d\u5b8c\u6574\uff0c\u4e0d\u53ef\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"function XMLHttpRequestAdapter(requestElements, methodInstance) {\r\n  // \u89e3\u6784\u51fa\u9700\u8981\u7528\u5230\u7684\u6570\u636e\r\n  const { url, type, data, headers } = config;\r\n\r\n  // \u53d1\u9001\u8bf7\u6c42\r\n  const xhr = new XMLHttpRequest();\r\n  xhr.open(type, url);\r\n  for (const key in headers) {\r\n    xhr.setRequestHeader(key, headers[key]);\r\n  }\r\n  const responsePromise = new Promise((resolve, reject) => {\r\n    xhr.addEventListener('load', event => {\r\n      // \u5904\u7406\u54cd\u5e94\u6570\u636e\r\n      resolve(/* ... */);\r\n    });\r\n    xhr.addEventListener('error', event => {\r\n      // \u5904\u7406\u8bf7\u6c42\u9519\u8bef\r\n      reject(/* ... */);\r\n    });\r\n  });\r\n\r\n  xhr.send(JSON.stringify(data));\r\n\r\n  return {\r\n    // \u8fd4\u56de\u54cd\u5e94\u6570\u636e\u7684\u5f02\u6b65\u51fd\u6570\r\n    response: () => responsePromise,\r\n\r\n    // \u8fd4\u56de\u54cd\u5e94\u5934\u7684\u5f02\u6b65\u51fd\u6570\r\n    headers: () => responsePromise.then(() => xhr.getAllResponseHeaders()),\r\n    abort: () => {\r\n      xhr.abort();\r\n    },\r\n\r\n    // \u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateDownloadProgress\u6765\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\r\n    onDownload: updateDownloadProgress => {\r\n      xhr.addEventListener('progress', event => {\r\n        // \u6570\u636e\u63a5\u6536\u8fdb\u5ea6\r\n        updateDownloadProgress(event.total, event.loaded);\r\n      });\r\n    },\r\n\r\n    // \u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateUploadProgress\u6765\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\r\n    onUpload: updateUploadProgress => {\r\n      xhr.upload.onprogress = event => {\r\n        updateUploadProgress(event.total, event.loaded);\r\n      };\r\n    }\r\n  };\r\n}\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["\u66f4\u5b8c\u6574\u7684\u8bf7\u6c42\u9002\u914d\u5668\u7ec6\u8282\u53ef\u4ee5\u67e5\u9605 ",(0,t.jsx)(r.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts",children:"GlobalFetch \u6e90\u7801"})," \u6765\u4e86\u89e3\u3002"]})}),"\n",(0,t.jsx)(r.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",children:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b"}),"\n",(0,t.jsxs)(r.p,{children:["\u8bf7\u6c42\u9002\u914d\u5668\u7684\u53c2\u6570\u4ee5\u53ca\u652f\u6301 Typescript \u7684\u5199\u6cd5\uff0c\u53ef\u4ee5\u5728 ",(0,t.jsx)(r.a,{href:"/tutorial/getting-started/typescript",children:"Typescript \u7ae0\u8282"}),"\u4e2d\u627e\u5230\u3002"]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>a});var t=n(7294);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);