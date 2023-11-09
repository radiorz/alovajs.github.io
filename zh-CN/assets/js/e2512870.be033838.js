"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3494],{9281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(5893),i=n(1151),s=n(4866),a=n(5162);const l={title:"\u6b65\u9aa42-\u8c03\u6574\u54cd\u5e94\u5904\u7406",sidebar_position:50},o=void 0,d={id:"tutorial/strategy/sensorless-data-interaction/modify-response",title:"\u6b65\u9aa42-\u8c03\u6574\u54cd\u5e94\u5904\u7406",description:"\u5728\u4e0a\u4e00\u8282\u7684\u4fdd\u5b88\u8bf7\u6c42\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5728 Todo \u9879\u7684\u521b\u5efa\u3001\u7f16\u8f91\u548c\u5220\u9664\u8bf7\u6c42\u54cd\u5e94\u540e\u8c03\u7528fetch\u91cd\u65b0\u62c9\u53d6\u6570\u636e\u5237\u65b0\u7684\u9875\u9762\uff0c\u4e3a\u4e86\u80fd\u5728\u64cd\u4f5c\u540e\u7acb\u5373\u5c55\u793a\u7ed3\u679c\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u8c03\u6574\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-strategy/01-sensorless-data-interaction/05-modify-response.md",sourceDirName:"tutorial/07-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/modify-response",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/modify-response",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/01-sensorless-data-interaction/05-modify-response.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u6b65\u9aa42-\u8c03\u6574\u54cd\u5e94\u5904\u7406",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/conservative-request"},next:{title:"\u6b65\u9aa43-\u8bbe\u7f6e\u8bf7\u6c42\u91cd\u8bd5",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/request-retry"}},c={},u=[{value:"\u8bbe\u7f6e\u884c\u4e3a\u6a21\u5f0f",id:"\u8bbe\u7f6e\u884c\u4e3a\u6a21\u5f0f",level:2},{value:"\u9759\u9ed8\u961f\u5217\u8bf4\u660e",id:"\u9759\u9ed8\u961f\u5217\u8bf4\u660e",level:2},{value:"\u5728\u56de\u8c03\u4e2d\u624b\u52a8\u66f4\u65b0\u5217\u8868",id:"\u5728\u56de\u8c03\u4e2d\u624b\u52a8\u66f4\u65b0\u5217\u8868",level:2},{value:"\u5728\u65b0\u589e/\u7f16\u8f91\u540e\u66f4\u65b0\u5217\u8868",id:"\u5728\u65b0\u589e\u7f16\u8f91\u540e\u66f4\u65b0\u5217\u8868",level:3},{value:"\u79fb\u9664\u540e\u66f4\u65b0\u5217\u8868",id:"\u79fb\u9664\u540e\u66f4\u65b0\u5217\u8868",level:3},{value:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55",id:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55",level:2},{value:"\u521b\u5efa/\u7f16\u8f91\u6210\u529f\u56de\u8c03",id:"\u521b\u5efa\u7f16\u8f91\u6210\u529f\u56de\u8c03",level:3},{value:"\u5220\u9664\u6210\u529f\u56de\u8c03",id:"\u5220\u9664\u6210\u529f\u56de\u8c03",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728\u4e0a\u4e00\u8282\u7684\u4fdd\u5b88\u8bf7\u6c42\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5728 Todo \u9879\u7684\u521b\u5efa\u3001\u7f16\u8f91\u548c\u5220\u9664\u8bf7\u6c42\u54cd\u5e94\u540e\u8c03\u7528",(0,r.jsx)(t.code,{children:"fetch"}),"\u91cd\u65b0\u62c9\u53d6\u6570\u636e\u5237\u65b0\u7684\u9875\u9762\uff0c\u4e3a\u4e86\u80fd\u5728\u64cd\u4f5c\u540e\u7acb\u5373\u5c55\u793a\u7ed3\u679c\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u8c03\u6574\uff1a"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5c06\u521b\u5efa\u3001\u7f16\u8f91\u548c\u5220\u9664\u8bf7\u6c42\u7684\u884c\u4e3a\u6a21\u5f0f\u8bbe\u7f6e\u4e3a",(0,r.jsx)(t.code,{children:"silent"}),"\uff0c\u5b83\u4eec\u5c06\u4f1a\u5728\u8bf7\u6c42\u65f6\u7acb\u5373\u89e6\u53d1\u6210\u529f\u56de\u8c03\uff1b"]}),"\n",(0,r.jsx)(t.li,{children:"\u624b\u52a8\u66f4\u65b0\u5217\u8868\uff0c\u800c\u4e0d\u662f\u62c9\u53d6\u6570\u636e\uff0c\u4f7f\u7528\u865a\u62df\u6570\u636e\u5360\u4f4d\u670d\u52a1\u7aef\u7684\u54cd\u5e94\u6570\u636e\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55\uff0c\u7528\u4e8e\u5728\u5237\u65b0\u9875\u9762\u65f6\u8fdb\u884c\u6570\u636e\u8865\u507f\uff1b"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u8bbe\u7f6e\u884c\u4e3a\u6a21\u5f0f",children:"\u8bbe\u7f6e\u884c\u4e3a\u6a21\u5f0f"}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7\u914d\u7f6e\u53c2\u6570",(0,r.jsx)(t.code,{children:"behavior"}),"\u8fdb\u884c\u8bbe\u7f6e\uff0c\u53ef\u9009\u53c2\u6570\u4e3a",(0,r.jsx)(t.code,{children:"queue"}),"\u3001",(0,r.jsx)(t.code,{children:"silent"}),"\u3001",(0,r.jsx)(t.code,{children:"static"}),"\uff0c\u6216\u8005\u4e00\u4e2a\u8fd4\u56de\u884c\u4e3a\u6570\u636e\u7684\u51fd\u6570\u5b9e\u73b0\u52a8\u6001\u8bbe\u7f6e\u884c\u4e3a\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a",(0,r.jsx)(t.code,{children:"queue"}),"\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u4e3a\u9759\u6001\u8bbe\u7f6e behavior \u53c2\u6570\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\r\n  // highlight-start\r\n  behavior: 'silent',\r\n  // highlight-end\r\n  immediate: false\r\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u4e3a\u52a8\u6001\u8bbe\u7f6e behavior \u53c2\u6570\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { send } = useSQRequest(createOrEditTodo, {\r\n  // highlight-start\r\n  // arg\u53c2\u6570\u53ef\u901a\u8fc7send\u51fd\u6570\u4f20\u5165\r\n  behavior: arg => {\r\n    if (arg === 0) return 'silent';\r\n    return 'queue';\r\n  },\r\n  // highlight-end\r\n  immediate: false\r\n});\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u5f53 behavior \u8bbe\u7f6e\u4e3a\u51fd\u6570\u65f6\uff0c\u5b83\u5c06\u5728\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\u65f6\u88ab\u8c03\u7528\uff0c\u6765\u786e\u5b9a\u672c\u6b21\u8bf7\u6c42\u4ee5\u54ea\u79cd\u884c\u4e3a\u6765\u5904\u7406\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9759\u9ed8\u961f\u5217\u8bf4\u660e",children:"\u9759\u9ed8\u961f\u5217\u8bf4\u660e"}),"\n",(0,r.jsxs)(t.p,{children:["\u5c06 behavior \u53c2\u6570\u8bbe\u7f6e\u4e3a",(0,r.jsx)(t.code,{children:"queue"}),"\u6216",(0,r.jsx)(t.code,{children:"silent"}),"\u540e\uff0c\u8bf7\u6c42\u5c06\u8fdb\u5165\u9759\u9ed8\u961f\u5217\u7b49\u5f85\u53d1\u8d77\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4eec\u5c06\u8fdb\u5165\u540d\u79f0\u4e3a",(0,r.jsx)(t.code,{children:"default"}),"\u7684\u961f\u5217\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u961f\u5217\u6765\u4fdd\u5b58 silentMethod \u5b9e\u4f8b\uff0c\u961f\u5217\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\r\n  // highlight-start\r\n  // \u6307\u5b9a\u8bf7\u6c42\u4fe1\u606f\u8fdb\u5165\u540d\u79f0\u4e3aqueue-2\u7684\u961f\u5217\u4e2d\r\n  queue: 'queue-2',\r\n  // highlight-end\r\n  behavior: 'silent',\r\n  immediate: false\r\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5728\u56de\u8c03\u4e2d\u624b\u52a8\u66f4\u65b0\u5217\u8868",children:"\u5728\u56de\u8c03\u4e2d\u624b\u52a8\u66f4\u65b0\u5217\u8868"}),"\n",(0,r.jsx)(t.h3,{id:"\u5728\u65b0\u589e\u7f16\u8f91\u540e\u66f4\u65b0\u5217\u8868",children:"\u5728\u65b0\u589e/\u7f16\u8f91\u540e\u66f4\u65b0\u5217\u8868"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{value:"1",label:"\u5217\u8868\u9875\u672a\u9500\u6bc1",children:[(0,r.jsxs)(t.p,{children:["\u5f53\u5217\u8868\u9875\u672a\u88ab\u9500\u6bc1\uff0c\u4f8b\u5982\u5728\u5f53\u524d\u9875\u4f7f\u7528\u6a21\u6001\u6846\u64cd\u4f5c\uff0c\u6216\u4f7f\u7528\u4e86",(0,r.jsx)(t.code,{children:"<keep-alive>"}),"(Vue)\u4fdd\u7559\u4e86\u9875\u9762\u7ec4\u4ef6\uff0c\u6570\u636e\u8fd8\u4f1a\u5b58\u5728\uff0c\u6b64\u65f6\u6211\u4eec\u4f7f\u7528",(0,r.jsx)(t.strong,{children:"updateStateEffect"}),"\u6765\u66f4\u65b0\u5217\u8868\u6570\u636e\uff0c\u76f8\u6bd4\u4e8e alova \u5bfc\u51fa\u7684",(0,r.jsx)(t.strong,{children:"updateState"}),"\uff0c\u5b83\u5177\u6709\u8ffd\u8e2a\u865a\u62df\u6570\u636e\u8ffd\u8e2a\u529f\u80fd\uff0c\u5f53\u83b7\u53d6\u5230\u54cd\u5e94\u6570\u636e\u540e\uff0c\u5b83\u5c06\u81ea\u52a8\u8ffd\u8e2a\u5217\u8868\u6570\u636e\u5185\u7684\u865a\u62df\u6570\u636e\uff0c\u5e76\u66ff\u6362\u4e3a\u5b9e\u9645\u6570\u636e\u3002"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\r\nimport { createOrEditTodo, todoList } from './api.js';\r\n\r\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\r\n  behavior: 'silent',\r\n  immediate: false,\r\n\r\n  // highlight-start\r\n  // \u5728\u5904\u7406\u5217\u8868\u66f4\u65b0\u524d\uff0c\u9700\u8981\u6839\u636e\u54cd\u5e94\u6570\u636e\u7684\u7ed3\u6784\u5148\u6784\u9020\u76f8\u540c\u7ed3\u6784\u7684\u865a\u62df\u54cd\u5e94\u6570\u636e\r\n  // \u4f8b\u5982\uff0c\u5728\u521b\u5efa Todo \u9879\u65f6\u5c06\u8fd4\u56de\u8fd9\u6761\u6570\u636e\u7684 id\u3002\r\n  silentDefaultResponse: () => {\r\n    return {\r\n      id: '--'\r\n    };\r\n  }\r\n  // highlight-end\r\n});\r\n\r\n// highlight-start\r\nonSuccess(({ data, silentMethod }) => {\r\n  // \u6784\u9020\u5217\u8868\u6570\u636e\u9879\r\n  const editingItem = {\r\n    ...detail,\r\n\r\n    // \u5f53\u7f16\u8f91\u65f6\uff0c\u4f7f\u7528\u539fid\uff0c\u5426\u5219\u4f7f\u7528\u54cd\u5e94\u6570\u636e\u5185\u7684id\r\n    // \u5728\u9759\u9ed8\u63d0\u4ea4\u65f6\uff0cdata.id\u4e3a\u865a\u62df\u6570\u636e\uff0c\u5728static\u884c\u4e3a\u6a21\u5f0f\u65f6\uff0cdata.id\u4e3a\u5b9e\u9645\u7684id\u503c\r\n    id: id || data.id\r\n  };\r\n\r\n  // \u4f7f\u7528updateStateEffect\uff0c\u800c\u4e0d\u662fupdateState\r\n  updateStateEffect(todoList(), todoListRaw => {\r\n    if (id) {\r\n      todoListRaw = todoListRaw.map(item => (item.id === id ? editingItem : item));\r\n    } else {\r\n      todoListRaw.unshift(editingItem);\r\n    }\r\n    return todoListRaw;\r\n  });\r\n});\r\n// highlight-end\n"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["updateStateEffect \u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e",(0,r.jsx)(t.a,{href:"/tutorial/learning/update-response-data-across-modules",children:"updateState"}),"\u4e00\u81f4"]}),"\n"]})]}),(0,r.jsxs)(a.Z,{value:"2",label:"\u5217\u8868\u9875\u5df2\u9500\u6bc1",children:[(0,r.jsxs)(t.p,{children:["\u5f53\u5217\u8868\u9875\u5df2\u88ab\u9500\u6bc1\uff0c\u6570\u636e\u5df2\u88ab\u91ca\u653e\uff0c\u4f8b\u5982\u8df3\u8f6c\u5230\u4e86\u65b0\u9875\u9762\uff0c\u6b64\u65f6\u4f7f\u7528",(0,r.jsx)(t.strong,{children:"setCache"}),"\u66f4\u65b0\u7f13\u5b58\u6570\u636e\uff0c\u5f53\u8fd4\u56de\u5217\u8868\u9875\u65f6\u5c06\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u5e76\u547d\u4e2d\u66f4\u65b0\u7684\u7f13\u5b58\u3002"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, setCache, equals } from '@alova/scene-*';\r\nimport { createOrEditTodo, todoList } from './api.js';\r\n\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nconst id = urlParams.get('id') || '';\r\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\r\n  behavior: 'silent',\r\n  immediate: false,\r\n\r\n  // highlight-start\r\n  // \u5728\u5904\u7406\u5217\u8868\u66f4\u65b0\u524d\uff0c\u9700\u8981\u6839\u636e\u54cd\u5e94\u6570\u636e\u7684\u7ed3\u6784\u5148\u6784\u9020\u76f8\u540c\u7ed3\u6784\u7684\u865a\u62df\u54cd\u5e94\u6570\u636e\r\n  // \u4f8b\u5982\uff0c\u5728\u521b\u5efa Todo \u9879\u65f6\u5c06\u8fd4\u56de\u8fd9\u6761\u6570\u636e\u7684 id\u3002\r\n  silentDefaultResponse: () => {\r\n    return {\r\n      id: '--'\r\n    };\r\n  }\r\n  // highlight-end\r\n});\r\n// highlight-start\r\nonSuccess(({ data, silentMethod }) => {\r\n  // \u6784\u9020\u5217\u8868\u6570\u636e\u9879\r\n  const editingItem = {\r\n    ...detail,\r\n\r\n    // \u5f53\u7f16\u8f91\u65f6\uff0c\u4f7f\u7528\u539fid\uff0c\u5426\u5219\u4f7f\u7528\u54cd\u5e94\u6570\u636e\u5185\u7684id\r\n    // \u5728\u9759\u9ed8\u63d0\u4ea4\u65f6\uff0cdata.id\u4e3a\u865a\u62df\u6570\u636e\uff0c\u5728static\u884c\u4e3a\u6a21\u5f0f\u65f6\uff0cdata.id\u4e3a\u5b9e\u9645\u7684id\u503c\r\n    id: id || data.id\r\n  };\r\n\r\n  const methodTodoList = todoList();\r\n  setCache(methodTodoList, todoListRaw => {\r\n    if (id) {\r\n      todoListRaw = todoListRaw.map(item => (equals(item.id, id) ? editingItem : item));\r\n    } else {\r\n      todoListRaw.unshift(editingItem);\r\n    }\r\n    return todoListRaw;\r\n  });\r\n  // \u8c03\u7528setUpdateState\u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u8ffd\u8e2a\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u548cupdateStateEffect\u76f8\u540c\u7684\u5ef6\u8fdf\u66f4\u65b0\u6548\u679c\r\n  if (silentMethod) {\r\n    silentMethod.setUpdateState(methodTodoList);\r\n    silentMethod.save();\r\n  }\r\n});\r\n// highlight-end\n"})})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u79fb\u9664\u540e\u66f4\u65b0\u5217\u8868",children:"\u79fb\u9664\u540e\u66f4\u65b0\u5217\u8868"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\r\nimport { deleteTodo, todoList } from './api.js';\r\n\r\nconst { loading, data, send, onSuccess } = useSQRequest(deleteTodo, {\r\n  immediate: false,\r\n  // highlight-start\r\n  behavior: 'silent'\r\n  // highlight-end\r\n});\r\n\r\nonSuccess(({ sendArgs: [deletingId] }) => {\r\n  updateStateEffect(todoList(), todoListRaw => todoListRaw.filter(item => item.id !== deletingId));\r\n});\r\n\r\n// \u4e8b\u4ef6\u56de\u8c03\u89e6\u53d1\u5220\u9664\u8bf7\u6c42\r\nconst handleDelete = deletingId => {\r\n  send(deletingId);\r\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55",children:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55"}),"\n",(0,r.jsx)(t.p,{children:"\u4ec5\u4ec5\u5b8c\u6210\u624b\u52a8\u66f4\u65b0\u5217\u8868\u8fd8\u4e0d\u591f\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u8003\u8651\u5f53\u7f51\u7edc\u6062\u590d\u540e\uff0c\u5f53\u8bf7\u6c42\u961f\u5217\u8fd8\u5b58\u7b49\u5f85\u4e2d\u7684\u8bf7\u6c42\u65f6\uff0c\u6b64\u65f6\u52a0\u8f7d\u7684\u5217\u8868\u6570\u636e\u8fd8\u4e0d\u5305\u62ec\u672a\u63d0\u4ea4\u8bf7\u6c42\u7684\u90e8\u5206\uff0c\u8fd9\u4f1a\u8ba9\u7528\u6237\u9020\u6210\u4e00\u5b9a\u7684\u56f0\u60d1\uff1a"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u201c\u6211\u660e\u660e\u5df2\u7ecf\u65b0\u589e\u4e86\u591a\u6761\u6570\u636e\uff0c\u4e3a\u4ec0\u4e48\u5217\u8868\u4e2d\u6ca1\u6709\uff1f\u201d"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728\u6210\u529f\u56de\u8c03\u4e2d\u8bb0\u5f55\u64cd\u4f5c\uff0c\u4ee5\u53ca\u76f8\u5173\u6570\u636e\uff0c\u4ee5\u4fbf\u518d\u6b21\u52a0\u8f7d\u5217\u8868\u6570\u636e\u65f6\uff0c\u5c06\u672a\u63d0\u4ea4\u7684\u6570\u636e\u624b\u52a8\u8865\u507f\u5230\u5217\u8868\u4e2d\uff0c\u4ece\u800c\u8ba9\u5217\u8868\u6570\u636e\u59cb\u7ec8\u4fdd\u6301\u6700\u65b0\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06\u76f8\u5173\u6570\u636e\u6302\u8f7d\u5230 silentMethod \u5b9e\u4f8b\u4e0a\uff0c\u5b83\u5c06\u968f\u7740\u5b9e\u4f8b\u4e00\u540c\u88ab\u6301\u4e45\u5316\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"\u521b\u5efa\u7f16\u8f91\u6210\u529f\u56de\u8c03",children:"\u521b\u5efa/\u7f16\u8f91\u6210\u529f\u56de\u8c03"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// ...\r\nonSuccess(({ silentMethod }) => {\r\n  // \u6784\u9020\u5217\u8868\u6570\u636e\u9879\r\n  const editingItem = {\r\n    ...detail,\r\n    id: id || data.id\r\n  };\r\n  // ...\r\n  // highlight-start\r\n  if (silentMethod) {\r\n    // \u8bbe\u7f6e\u540d\u79f0\uff0c\u4ee5\u4fbf\u540e\u7eed\u67e5\u8be2\r\n    // \u5982\u679ceditingItem.id\u662f\u865a\u62df\u6570\u636e\u5c06\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b83\u7684id\r\n    silentMethod.entity.setName('edit' + editingItem.id);\r\n    silentMethod.reviewData = {\r\n      operate: id ? 'edit' : 'add',\r\n      data: editingItem\r\n    };\r\n    silentMethod.save();\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u5220\u9664\u6210\u529f\u56de\u8c03",children:"\u5220\u9664\u6210\u529f\u56de\u8c03"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// ...\r\nonSuccess(({ sendArgs: [deletingId], silentMethod }) => {\r\n  // ...\r\n  // highlight-start\r\n  if (silentMethod) {\r\n    silentMethod.reviewData = {\r\n      operate: 'delete',\r\n      data: {\r\n        id: deletingId\r\n      }\r\n    };\r\n    silentMethod.save();\r\n  }\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["onSuccess \u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u53ea\u6709\u5728",(0,r.jsx)(t.code,{children:"queue"}),"\u548c",(0,r.jsx)(t.code,{children:"silent"}),"\u884c\u4e3a\u6a21\u5f0f\u4e0b silentMethod \u624d\u6709\u503c\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:["\u4e00\u822c\u800c\u8a00\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(t.code,{children:"silentMethod.a = ..."}),"\u3001\u6216",(0,r.jsx)(t.code,{children:"silentMethod.b = ..."}),"\u6765\u4fdd\u5b58\u64cd\u4f5c\u8bb0\u5f55\uff0c\u4f46\u5728 typescript \u4e2d\u4f1a\u62a5\u9519\uff0c\u56e0\u6b64\u7279\u522b\u63d0\u4f9b\u4e86",(0,r.jsx)(t.em,{children:"reviewData"}),"\u4f5c\u4e3a\u9759\u9ed8\u63d0\u4ea4\u64cd\u4f5c\u8bb0\u5f55\u7684\u4fdd\u5b58\u5c5e\u6027\uff1b"]}),"\n",(0,r.jsxs)(t.li,{children:["\u4fee\u6539 silentMethod \u6570\u636e\u540e\uff0c\u9700\u8981\u901a\u8fc7",(0,r.jsx)(t.code,{children:"silentMethod.save()"}),"\u6765\u4fdd\u5b58\u4fee\u6539\uff1b"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u4e00\u6b65\u5c06\u5bf9\u9759\u9ed8\u63d0\u4ea4\u8bf7\u6c42\u8bbe\u7f6e\u91cd\u8bd5\u53c2\u6570\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(4334);const i={tabItem:"tabItem_Ymn6"};var s=n(5893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),i=n(4334),s=n(2466),a=n(6550),l=n(469),o=n(1980),d=n(7392),c=n(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:i}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),v=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(d(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function S(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,j.jsx)(S,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);