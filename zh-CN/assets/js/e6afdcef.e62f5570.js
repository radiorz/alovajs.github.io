"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6369],{9522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>f,frontMatter:()=>h,metadata:()=>v,toc:()=>x});var t=n(5893),o=n(1151),s=n(4866),a=n(5162),i=n(5502),l=n(9286);const d='<template>\r\n  <select v-model="userId">\r\n    <option :value="1">User 1</option>\r\n    <option :value="2">User 2</option>\r\n    <option :value="3">User 3</option>\r\n  </select>\r\n\r\n  \x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\r\n  <div v-if="loading">Loading...</div>\r\n  <ul v-else>\r\n    <li v-for="todo in data" :key="todo.id">{{ todo.completed ? \'(Completed)\' : \'\' }}{{ todo.title }}</li>\r\n  </ul>\r\n</template>\r\n\r\n<script setup>\r\nimport { useWatcher } from \'alova\';\r\nimport { ref } from \'vue\';\r\nimport { alovaInstance } from \'./api\';\r\n\r\n// \u521b\u5efamethod\u5b9e\u4f8b\r\nconst filterTodoList = userId => {\r\n  return alovaInstance.Get(`/users/${userId}/todos`);\r\n};\r\nconst userId = ref(1);\r\nconst {\r\n  loading,\r\n  data,\r\n} = useWatcher(\r\n\r\n  // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\r\n  () => filterTodoList(userId.value),\r\n\r\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n  [userId]\r\n);\r\n<\/script>',c="import { useWatcher } from 'alova';\r\nimport { useState } from 'react';\r\nimport { alovaInstance } from './api';\r\n\r\n// \u521b\u5efamethod\u5b9e\u4f8b\r\nconst filterTodoList = userId => {\r\n  return alovaInstance.Get(`/users/${userId}/todos`);\r\n};\r\n\r\nconst App = () => {\r\n  const [userId, setUserId] = useState(1);\r\n  const {\r\n    loading,\r\n    data = [],\r\n    error\r\n  } = useWatcher(\r\n    // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\r\n    () => filterTodoList(userId),\r\n\r\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n    [userId]\r\n  );\r\n\r\n  return (\r\n    <>\r\n      <select\r\n        value={userId}\r\n        onChange={e => setUserId(e.target.value)}>\r\n        <option value={1}>User 1</option>\r\n        <option value={2}>User 2</option>\r\n        <option value={3}>User 3</option>\r\n      </select>\r\n\r\n      {/* \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 */}\r\n      {loading ? <div>Loading...</div> : null}\r\n      {!loading ? (\r\n        <ul>\r\n          {data.map(todo => (\r\n            <li>\r\n              {todo.completed ? '(Completed)' : ''}\r\n              {todo.title}\r\n            </li>\r\n          ))}\r\n        </ul>\r\n      ) : null}\r\n    </>\r\n  );\r\n};\r\nexport default App;\r\n",u='<script>\r\nimport { writable } from \'svelte/store\';\r\n\r\n// \u521b\u5efamethod\u5b9e\u4f8b\r\nconst filterTodoList = userId => {\r\n  return alovaInstance.Get(`/users/${userId}/todos`);\r\n};\r\nconst userId = writable(0);\r\nconst { loading, data, error } = useWatcher(\r\n  // \u53c2\u6570\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\r\n  () => filterTodoList($userId),\r\n\r\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n  [userId]\r\n);\r\n<\/script>\r\n\r\n<select bind:value="{$userId}">\r\n  <option value="{1}">User 1</option>\r\n  <option value="{2}">User 2</option>\r\n  <option value="{3}">User 3</option>\r\n</select>\r\n\r\n\x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\r\n{#if $loading}\r\n<div>Loading...</div>\r\n{:else}\r\n<ul>\r\n  {#each $data as todo}\r\n    <li class="todo-title">{{ todo.completed ? \'(Completed)\' : \'\' }}{{ todo.title }}</li>\r\n  {/each}\r\n</ul>\r\n{/if}',p='<template>\r\n  <select v-model="userId">\r\n    <option :value="1">User 1</option>\r\n    <option :value="2">User 2</option>\r\n    <option :value="3">User 3</option>\r\n  </select>\r\n\r\n  \x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\r\n  <div v-if="todo.loading">Loading...</div>\r\n  <ul v-else>\r\n    <li v-for="todoItem in todo.data" :key="todoItem.id">{{ todoItem.completed ? \'(Completed)\' : \'\' }}{{ todoItem.title }}</li>\r\n  </ul>\r\n</template>\r\n\r\n<script>\r\nimport { mapAlovaHook } from \'@alova/vue-options\';\r\nimport { useWatcher } from \'alova\';\r\nimport { alovaInstance } from \'./api\';\r\n\r\n// \u521b\u5efamethod\u5b9e\u4f8b\r\nconst filterTodoList = userId => {\r\n  return alovaInstance.Get(`/users/${userId}/todos`);\r\n};\r\n\r\nexport default {\r\n  mixins: mapAlovaHook(function() {\r\n    return {\r\n      todo: useWatcher(\r\n\r\n        // \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\r\n        () => filterTodoList(this.userId),\r\n      \r\n        // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n        [\'userId\']\r\n      )\r\n    };\r\n  }),\r\n  data() {\r\n    return {\r\n      userId: 1\r\n    };\r\n  }\r\n};\r\n<\/script>',h={title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:100},m=void 0,v={id:"tutorial/getting-started/states-change-request",title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",description:"\u5728\u4e00\u4e9b\u9700\u8981\u968f\u6570\u636e\u53d8\u5316\u800c\u91cd\u65b0\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\uff0c\u53ef\u4ee5\u4f7f\u7528useWatcher \u6765\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/10-states-change-request.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/states-change-request",permalink:"/zh-CN/tutorial/getting-started/states-change-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/10-states-change-request.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",permalink:"/zh-CN/tutorial/getting-started/request-manually"},next:{title:"\u5171\u4eab\u8bf7\u6c42",permalink:"/zh-CN/tutorial/getting-started/share-request"}},g={},x=[{value:"\u5173\u952e\u5b57\u641c\u7d22",id:"\u5173\u952e\u5b57\u641c\u7d22",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u8bbe\u7f6e\u521d\u59cb\u6570\u636e",id:"\u8bbe\u7f6e\u521d\u59cb\u6570\u636e",level:2},{value:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",id:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",level:2},{value:"\u8bbe\u7f6e\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",id:"\u8bbe\u7f6e\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u9632\u6296",id:"\u8bf7\u6c42\u9632\u6296",level:2},{value:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4",id:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4",level:3},{value:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4",id:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4",level:3},{value:"\u72b6\u6001\u6539\u53d8\u65f6\u963b\u6b62\u8bf7\u6c42",id:"\u72b6\u6001\u6539\u53d8\u65f6\u963b\u6b62\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u65f6\u5e8f",id:"\u8bf7\u6c42\u65f6\u5e8f",level:2}];function j(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\u5728\u4e00\u4e9b\u9700\u8981\u968f\u6570\u636e\u53d8\u5316\u800c\u91cd\u65b0\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(r.code,{children:"useWatcher"})," \u6765\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5173\u952e\u5b57\u641c\u7d22",children:"\u5173\u952e\u5b57\u641c\u7d22"}),"\n",(0,t.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5\u641c\u7d22 todo \u9879\u4e3a\u4f8b\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(a.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(i.Z,{template:"vue",mainFile:d,editorHeight:800})}),(0,t.jsx)(a.Z,{value:"2",label:"react",children:(0,t.jsx)(i.Z,{template:"react",mainFile:c,editorHeight:800})}),(0,t.jsx)(a.Z,{value:"3",label:"svelte",children:(0,t.jsx)(l.Z,{language:"html",children:u})}),(0,t.jsx)(a.Z,{value:"4",label:"vue options",children:(0,t.jsx)(i.Z,{template:"vue",style:"options",mainFile:p,editorHeight:800})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u5206\u9875",children:"\u5206\u9875"}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5 todo \u5217\u8868\u5206\u9875\u8bf7\u6c42\u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(a.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<template>\r\n  \x3c!-- ... --\x3e\r\n</template>\r\n\r\n<script setup>\r\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\r\n  const getTodoList = currentPage => {\r\n    return alovaInstance.Get('/todo/list', {\r\n      params: {\r\n        currentPage,\r\n        pageSize: 10\r\n      }\r\n    });\r\n  };\r\n\r\n  const currentPage = ref(1);\r\n  const { loading, data, error } = useWatcher(\r\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\r\n    () => getTodoList(currentPage.value),\r\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n    [currentPage],\r\n    {\r\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\r\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\r\n      immediate: true\r\n    }\r\n  );\r\n<\/script>\n"})})}),(0,t.jsx)(a.Z,{value:"2",label:"react",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { useState } from 'react';\r\n\r\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\r\nconst getTodoList = currentPage => {\r\n  return alovaInstance.Get('/todo/list', {\r\n    params: {\r\n      currentPage,\r\n      pageSize: 10\r\n    }\r\n  });\r\n};\r\n\r\nconst App = () => {\r\n  const [currentPage, setCurrentPage] = useState(1);\r\n  const {\r\n    loading,\r\n    data,\r\n    error\r\n\r\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\r\n  } = useWatcher(\r\n    () => getTodoList(currentPage),\r\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n    [currentPage],\r\n    {\r\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\r\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\r\n      immediate: true\r\n    }\r\n  );\r\n\r\n  return {\r\n    /* ... */\r\n  };\r\n};\n"})})}),(0,t.jsx)(a.Z,{value:"3",label:"svelte",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<script>\r\n  import { writable } from 'svelte/store';\r\n\r\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\r\n  const getTodoList = currentPage => {\r\n    return alovaInstance.Get('/todo/list', {\r\n      params: {\r\n        currentPage,\r\n        pageSize: 10\r\n      }\r\n    });\r\n  };\r\n\r\n  const currentPage = writable(1);\r\n  const {\r\n    loading,\r\n    data,\r\n    error\r\n\r\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\r\n  } = useWatcher(\r\n    () => getTodoList($currentPage),\r\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n    [currentPage],\r\n    {\r\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\r\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\r\n      immediate: true\r\n    }\r\n  );\r\n<\/script>\r\n\r\n\x3c!-- ... --\x3e\n"})})}),(0,t.jsx)(a.Z,{value:"4",label:"vue options",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<template>\r\n  \x3c!-- ... --\x3e\r\n</template>\r\n\r\n<script>\r\n  import { mapAlovaHook } from '@alovajs/vue-options';\r\n\r\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\r\n  const getTodoList = currentPage => {\r\n    return alovaInstance.Get('/todo/list', {\r\n      params: {\r\n        currentPage,\r\n        pageSize: 10\r\n      }\r\n    });\r\n  };\r\n\r\n  export default {\r\n    mixins: mapAlovaHook(function () {\r\n      paging: useWatcher(\r\n        () => getTodoList(this.currentPage),\r\n\r\n        // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n        ['currentPage'],\r\n        {\r\n          // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\r\n          // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\r\n          immediate: true\r\n        }\r\n      );\r\n    }),\r\n    data() {\r\n      return {\r\n        currentPage: 1\r\n      };\r\n    }\r\n  };\r\n<\/script>\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u8bbe\u7f6e\u521d\u59cb\u6570\u636e",children:"\u8bbe\u7f6e\u521d\u59cb\u6570\u636e"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// \u5728useWatcher\u4e2d\u540c\u6837\u53ef\u4ee5\u8bbe\u7f6edata\u7684\u521d\u59cb\u503c\r\nconst {\r\n  // \u54cd\u5e94\u524ddata\u7684\u521d\u59cb\u503c\u4e3a[]\uff0c\u800c\u4e0d\u662fundefined\r\n  data\r\n} = useWatcher(\r\n  () => getTodoList(/* \u53c2\u6570 */),\r\n  [\r\n    /* \u76d1\u542c\u72b6\u6001 */\r\n  ],\r\n  {\r\n    initialData: []\r\n  }\r\n);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u8bf7",(0,t.jsx)(r.a,{href:"/tutorial/getting-started/initial-data",children:"\u524d\u5f80\u521d\u59cb\u6570\u636e\u7ae0\u8282"}),"\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",children:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"useWatcher"}),"\u4e5f\u5177\u6709\u4e0e",(0,t.jsx)(r.code,{children:"useRequest"}),"\u76f8\u540c\u7684\u54cd\u5e94\u56de\u8c03\u7ed1\u5b9a\u51fd\u6570\uff0c",(0,t.jsx)(r.a,{href:"/tutorial/getting-started/response",children:"\u524d\u5f80\u54cd\u5e94\u5904\u7406\u7ae0\u8282"}),"\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u8bbe\u7f6e\u7acb\u5373\u53d1\u9001\u8bf7\u6c42",children:"\u8bbe\u7f6e\u7acb\u5373\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const { send } = useWatcher(() => getTodoList(currentPage), [currentPage], {\r\n  // highlight-start\r\n  immediate: true\r\n  // highlight-end\r\n});\r\nsend();\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0e",(0,t.jsx)(r.code,{children:"useRequest"}),"\u4e0d\u540c\u7684\u662f\uff0c",(0,t.jsx)(r.code,{children:"useWatcher"}),"\u7684",(0,t.jsx)(r.code,{children:"immediate"}),"\u5c5e\u6027\u9ed8\u8ba4\u662f",(0,t.jsx)(r.code,{children:"false"}),"\uff0c\u6b64\u5916\uff0csend \u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219\u4e0e",(0,t.jsx)(r.code,{children:"useRequest"}),"\u4e00\u81f4\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u8be6\u7ec6\u4f7f\u7528\u8bf7",(0,t.jsx)(r.a,{href:"/tutorial/getting-started/request-manually",children:"\u524d\u5f80\u624b\u52a8\u53d1\u9001\u8bf7\u6c42\u7ae0\u8282"}),"\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u8bf7\u6c42\u9632\u6296",children:"\u8bf7\u6c42\u9632\u6296"}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u5e38\u6211\u4eec\u90fd\u4f1a\u5728\u9891\u7e41\u89e6\u53d1\u7684\u4e8b\u4ef6\u5c42\u9762\u7f16\u5199\u9632\u6296\u4ee3\u7801\uff0c\u8fd9\u6b21\u6211\u4eec\u5728\u8bf7\u6c42\u5c42\u9762\u5b9e\u73b0\u4e86\u9632\u6296\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u518d\u4e5f\u4e0d\u7528\u5728\u6a21\u7cca\u641c\u7d22\u529f\u80fd\u4e2d\u81ea\u5df1\u5b9e\u73b0\u9632\u6296\u4e86\uff0c\u7528\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\u3002"}),"\n",(0,t.jsx)(r.admonition,{title:"Tips\uff1a\u4ec0\u4e48\u662f\u51fd\u6570\u9632\u6296",type:"info",children:(0,t.jsx)(r.p,{children:"\u51fd\u6570\u9632\u6296\uff08debounce\uff09\uff0c\u5c31\u662f\u6307\u89e6\u53d1\u4e8b\u4ef6\u540e\uff0c\u5728 n \u79d2\u5185\u51fd\u6570\u53ea\u80fd\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u89e6\u53d1\u4e8b\u4ef6\u540e\u5728 n \u79d2\u5185\u53c8\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u5219\u4f1a\u91cd\u65b0\u8ba1\u7b97\u51fd\u6570\u5ef6\u6267\u884c\u65f6\u95f4\uff08\u5728\u8fd9\u91cc\u548c\u51fd\u6570\u8282\u6d41\u533a\u5206\u4e00\u4e0b\uff0c\u51fd\u6570\u8282\u6d41\u662f\u5728\u89e6\u53d1\u5b8c\u4e8b\u4ef6\u4e4b\u540e\u7684\u4e00\u6bb5\u65f6\u95f4\u4e4b\u5185\u4e0d\u80fd\u518d\u6b21\u89e6\u53d1\u4e8b\u4ef6\uff09"})}),"\n",(0,t.jsx)(r.h3,{id:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4",children:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\r\n  // highlight-start\r\n  // \u8bbe\u7f6edebounce\u4e3a\u6570\u5b57\u65f6\u8868\u793a\u4e3a\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\r\n  // \u5982\u8fd9\u8fb9\u8868\u793a\u5f53\u72b6\u6001keyword\u3001date\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53d8\u5316\u65f6\uff0c\u5c06\u5728500ms\u540e\u624d\u53d1\u9001\u8bf7\u6c42\r\n  debounce: 500\r\n  // highlight-end\r\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4",children:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4"}),"\n",(0,t.jsxs)(r.p,{children:["\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5bf9\u67d0\u51e0\u4e2a\u9891\u7e41\u53d8\u5316\u7684\u76d1\u542c\u72b6\u6001\u8fdb\u884c\u9632\u6296\uff0c\u5982\u6587\u672c\u6846\u7684",(0,t.jsx)(r.code,{children:"onInput"}),"\u89e6\u53d1\u7684\u72b6\u6001\u53d8\u5316\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\r\n  // highlight-start\r\n  // \u4ee5\u76d1\u542c\u72b6\u6001\u7684\u6570\u7ec4\u987a\u5e8f\u5206\u522b\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4\uff0c0\u6216\u4e0d\u4f20\u8868\u793a\u4e0d\u9632\u6296\r\n  // \u8fd9\u8fb9\u76d1\u542c\u72b6\u6001\u7684\u987a\u5e8f\u662f[keyword, date]\uff0c\u9632\u6296\u6570\u7ec4\u8bbe\u7f6e\u7684\u662f[500, 0]\uff0c\u8868\u793a\u53ea\u5bf9keyword\u5355\u72ec\u8bbe\u7f6e\u9632\u6296\r\n  debounce: [500, 0]\r\n  // \u4e5f\u53ef\u4ee5\u8fd9\u4e48\u6309\u5982\u4e0b\u8bbe\u7f6e:\r\n  // debounce: [500],\r\n  // highlight-end\r\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u72b6\u6001\u6539\u53d8\u65f6\u963b\u6b62\u8bf7\u6c42",children:"\u72b6\u6001\u6539\u53d8\u65f6\u963b\u6b62\u8bf7\u6c42"}),"\n",(0,t.jsxs)(r.p,{children:["\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u5728\u76d1\u542c\u7684\u72b6\u6001\u6539\u53d8\u65f6\u4e0d\u53d1\u9001\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Hook \u914d\u7f6e\u4e2d\u7684 sendable \u5c5e\u6027\u6765\u63a7\u5236\u76d1\u542c\u7684\u72b6\u6001\u6539\u53d8\u65f6\u662f\u5426\u53d1\u9001\u8bf7\u6c42\uff0csendable \u5c5e\u6027\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u7684\u53c2\u6570\u4e3a",(0,t.jsx)(r.code,{children:"AlovaEvent"}),"\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u5305\u542b",(0,t.jsx)(r.code,{children:"send"}),"\u51fd\u6570\u4f20\u5165\u7684\u53c2\u6570\u6240\u7ec4\u6210\u7684\u6570\u7ec4",(0,t.jsx)(r.code,{children:"sendArgs"}),"\uff0c\u4ee5\u53ca\u5f53\u524d\u8bf7\u6c42\u7684",(0,t.jsx)(r.code,{children:"method"}),"\u5b9e\u4f8b\uff0c\u5e76\u4e14\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a",(0,t.jsx)(r.code,{children:"truthy/falsy"}),"\u503c\u6765\u5224\u65ad\u672c\u6b21\u72b6\u6001\u6539\u53d8\u65f6\u662f\u5426\u9700\u8981\u89e6\u53d1\u8bf7\u6c42\uff08\u9ed8\u8ba4\u4e3a",(0,t.jsx)(r.code,{children:"true"}),"\uff09\uff0c",(0,t.jsx)(r.strong,{children:"\u629b\u51fa\u9519\u8bef\u4e5f\u8868\u793a\u4e0d\u89e6\u53d1\u8bf7\u6c42"}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"useWatcher(\r\n  () => getTodoList($currentPage),\r\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n  [state],\r\n  {\r\n    // highlight-start\r\n    sendable: methodInstance => {\r\n      // do something\r\n      // \u4ec5\u5f53 state \u4e3a 1 \u65f6\u53d1\u9001\u8bf7\u6c42\r\n      return state === 1;\r\n    }\r\n    // highlight-end\r\n  }\r\n);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u8bf7\u6c42\u65f6\u5e8f",children:"\u8bf7\u6c42\u65f6\u5e8f"}),"\n",(0,t.jsxs)(r.p,{children:["\u6709\u65f6\u5019\u5f53",(0,t.jsx)(r.code,{children:"useWatcher"}),"\u76d1\u542c\u7684\u72b6\u6001\u53d1\u751f\u8fde\u7eed\u7684\u6539\u53d8\u5bfc\u81f4\u8fde\u7eed\u7684\u8bf7\u6c42\u7684\u53d1\u8d77\u65f6\uff0c\u540e\u4e00\u6b21\u7684\u8bf7\u6c42\u5148\u4e8e\u524d\u4e00\u6b21\u7684\u8bf7\u6c42\u83b7\u5f97\u54cd\u5e94\uff0c\u4f46\u662f\u5f53\u524d\u4e00\u6b21\u8bf7\u6c42\u83b7\u5f97\u54cd\u5e94\u65f6\uff0c\u4f1a\u8986\u76d6\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\uff0c\u5bfc\u81f4\u83b7\u53d6\u5230\u4e0e\u72b6\u6001\u4e0d\u5339\u914d\u7684\u54cd\u5e94\uff1b\u4f8b\u5982\u8bf4\u6709\u4e2a\u72b6\u6001",(0,t.jsx)(r.code,{children:"state"}),"\u6539\u53d8\u540e\u53d1\u51fa\u4e86\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"1"}),"\uff0c\u7136\u540e\u5728\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"1"}),"\u8fd8\u672a\u54cd\u5e94\u65f6\u53c8\u6539\u53d8\u4e86",(0,t.jsx)(r.code,{children:"state"}),"\u503c\uff0c\u5e76\u53d1\u51fa\u4e86\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"2"}),"\uff0c\u5982\u679c\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"1"}),"\u540e\u4e8e\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"2"}),"\u8fd4\u56de\uff0c\u6700\u7ec8\u7684\u54cd\u5e94\u6570\u636e\u4f1a\u7ef4\u6301\u5728\u8bf7\u6c42",(0,t.jsx)(r.code,{children:"1"}),"\u3002\r\n\u6240\u4ee5\u6211\u4eec\u8bbe\u8ba1\u4e86",(0,t.jsx)(r.code,{children:"abortLast"}),"\u53c2\u6570\uff0c\u5b83\u7528\u4e8e\u6807\u8bb0\u5f53\u4e0b\u4e00\u6b21\u8bf7\u6c42\u53d1\u51fa\u65f6\uff0c\u662f\u5426\u4e2d\u65ad\u4e0a\u4e00\u6b21\u7684\u672a\u54cd\u5e94\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3a",(0,t.jsx)(r.code,{children:"true"}),"\uff0c\u8fd9\u6837",(0,t.jsx)(r.code,{children:"useWatcher"}),"\u6240\u53d1\u51fa\u7684\u8bf7\u6c42\u53ea\u6709\u6700\u540e\u4e00\u6b21\u6709\u6548\u3002"]}),"\n",(0,t.jsx)(r.mermaid,{value:"sequenceDiagram\r\n  participant U as \u7528\u6237\r\n  participant S as \u670d\u52a1\u5668\r\n  U ->> U: \u76d1\u542cstate\u72b6\u6001\r\n  U ->> S: state\u6539\u53d8\u53d1\u8d77\u8bf7\u6c421\r\n  U ->> S: state\u6539\u53d8\u53d1\u8d77\u8bf7\u6c422\r\n  S ->> U: \u8bf7\u6c422\u54cd\u5e94\r\n  S ->> U: \u8bf7\u6c421\u54cd\u5e94\r\n  U ->> U: \u8bf7\u6c422\u7684\u54cd\u5e94\u88ab\u8986\u76d6"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"useWatcher(\r\n  () => getTodoList($currentPage),\r\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\r\n  [state],\r\n  {\r\n    // highlight-start\r\n    abortLast: true // \u662f\u5426\u4e2d\u65ad\u4e0a\u4e00\u6b21\u7684\u672a\u54cd\u5e94\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue\r\n    // highlight-end\r\n  }\r\n);\n"})}),"\n",(0,t.jsx)(r.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"abortLast"}),"\u9ed8\u8ba4\u4e3a",(0,t.jsx)(r.code,{children:"true"}),"\uff0c\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f60\u4e0d\u9700\u8981\u5173\u6ce8\u8fd9\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u4fee\u6539\u4e3a",(0,t.jsx)(r.code,{children:"false"}),"\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u72b6\u6001\u4e0e\u54cd\u5e94\u4e0d\u5339\u914d\u7684\u95ee\u9898\u3002"]})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},5502:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(9020),o=n(3808),s=n(2949),a=n(5893);const i={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport VueHook from 'alova/vue';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: VueHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\r\nimport { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: VueOptionsHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport ReactHook from 'alova/react';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: ReactHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport SvelteHook from 'alova/svelte';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: SvelteHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},static:{root:"/index.html"}},l={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},d=e=>{let{template:r,mainFile:n,externalFiles:d={},containBaseURL:c=!0,containResponded:u=!0,editorHeight:p,style:h}=e;const m={light:o.A1,dark:o.cL},v=i[r+(h?`-${h}`:"")],g={[v.root]:n,...v.files?v.files:{},...d},x=Object.keys(g).find((e=>/api\.js$/.test(e)));g[x]&&(c||(g[x]=g[x].replace(/baseURL.+?\s{4}/,"")),u||(g[x]=g[x].replace(/,\s+responded.+json\(\)/,"")));const j={alova:"latest",...v.deps||{}},{colorMode:f}=(0,s.I)();let b={files:g,template:r,customSetup:{dependencies:j}};return b=l[r]?l[r](b):b,(0,a.jsx)(t.xR,{...b,theme:m[f],options:{editorWidthPercentage:70,editorHeight:p}})}}}]);