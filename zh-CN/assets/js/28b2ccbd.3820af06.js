"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5579],{653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(5893),a=n(1151),s=n(4866),o=n(5162);const i={title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",sidebar_position:90},l=void 0,c={id:"tutorial/learning/cache-set-and-query",title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",description:"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-learning/09-cache-set-and-query.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/cache-set-and-query",permalink:"/zh-CN/tutorial/learning/cache-set-and-query",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/09-cache-set-and-query.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",permalink:"/zh-CN/tutorial/learning/invalidate-response-cache"},next:{title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",permalink:"/zh-CN/tutorial/learning/update-response-data-across-modules"}},d={},u=[{value:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",level:2},{value:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",level:2},{value:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",level:2},{value:"\u7f13\u5b58\u67e5\u8be2",id:"\u7f13\u5b58\u67e5\u8be2",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f8b\u5982\u6211\u4eec\u9700\u8981\u6309\u65e5\u671f\u83b7\u53d6 todo \u5217\u8868\u6570\u636e\uff0c\u5728\u521d\u59cb\u5316\u65f6\u4e00\u6b21\u8bf7\u6c42\u83b7\u53d6\u4e86 5 \u6708 1 \u65e5\u5230 5 \u65e5\uff0c5 \u5929\u7684\u6570\u636e\uff0c\u7136\u540e\u7528\u6237\u5728\u64cd\u4f5c\u65f6\u53c8\u83b7\u53d6\u4e86\u4e00\u6b21 5 \u6708 1 \u65e5\u7684\u6570\u636e\uff0c\u6b64\u65f6\u4e0d\u4f1a\u547d\u4e2d\u521d\u59cb\u5316\u65f6\u7684 5 \u6708 1 \u65e5\u6570\u636e\uff0c\u56e0\u4e3a\u521d\u59cb\u5316\u7684 5 \u5929\u6570\u636e\u662f\u5b58\u653e\u5728\u4e00\u8d77\u7684\uff0c\u800c\u4e0d\u662f\u5206\u5f00\u7f13\u5b58\u7684\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4e3a\u8fd9 5 \u5929\u7684\u6570\u636e\u76f8\u7ee7\u624b\u52a8\u521b\u5efa\u5355\u6761\u7684\u54cd\u5e94\u7f13\u5b58\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u89e3\u51b3\u5355\u6761\u6570\u636e\u8bf7\u6c42\u65f6\u7684\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728",(0,r.jsx)(t.a,{href:"/tutorial/learning/response-cache",children:"\u7f13\u5b58\u6a21\u5f0f"}),"\u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u6bcf\u4efd\u7f13\u5b58\u6570\u636e\u662f\u4ee5\u53d1\u9001\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u4f5c\u4e3a key \u8fdb\u884c\u4fdd\u5b58\u7684\uff0c\u56e0\u6b64\u5728\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\u65f6\u4e5f\u5c06\u4f7f\u7528 method \u5b9e\u4f8b\u6765\u67e5\u627e\u5bf9\u5e94\u7684\u7f13\u5b58\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",children:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<template>\r\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\r\n</template>\r\n<script setup>\r\n  import { setCache } from 'alova';\r\n  import { ref } from 'vue';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\r\n  const dates = ref(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    // ...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate(dates.value.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(({ data: todoListDates }) => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\r\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\r\n    todoListDates.forEach(todoDate => {\r\n      // setCache\u53c2\u6570\u8bf4\u660e\uff1a\r\n      // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\r\n      // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\r\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\r\n    dates.value = ['2022-05-01'];\r\n  };\r\n  // highlight-end\r\n<\/script>\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"react",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { setCache } from 'alova';\r\nimport { useState } from 'react';\r\n\r\nconst getTodoListByDate = dateList =>\r\n  alovaInstance.Get('/todo/list/dates', {\r\n    params: { dateList }\r\n  });\r\n\r\nconst App = () => {\r\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\r\n  const [dates, setDates] = useState(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    // ...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate(dates.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(({ data: todoListDates }) => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\r\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\r\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\r\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\r\n    todoListDates.forEach(todoDate => {\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\r\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\r\n    setDates(['2022-05-01']);\r\n  };\r\n  // highlight-end\r\n\r\n  return <button onClick={handleTodolistToggle}>\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>;\r\n};\n"})})}),(0,r.jsx)(o.Z,{value:"3",label:"svelte",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<script>\r\n  import { setCache } from 'alova';\r\n  import { writable } from 'svelte/store';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\r\n  const dates = writable(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\r\n  const {\r\n    // ...\r\n    onSuccess\r\n  } = useWatcher(() => getTodoListByDate($dates.join()), [dates], {\r\n    immediate: true\r\n  });\r\n  onSuccess(({ data: todoListDates }) => {\r\n    if (todoListDates.length <= 1) {\r\n      return;\r\n    }\r\n\r\n    // highlight-start\r\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\r\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\r\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\r\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\r\n    todoListDates.forEach(todoDate => {\r\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n    });\r\n    // highlight-end\r\n  });\r\n\r\n  // highlight-start\r\n  const handleTodolistToggle = () => {\r\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\r\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\r\n    $dates = ['2022-05-01'];\r\n  };\r\n  // highlight-end\r\n<\/script>\r\n<button on:click=\"{handleTodolistToggle}\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n"})})}),(0,r.jsx)(o.Z,{value:"4",label:"vue options",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<template>\r\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\r\n</template>\r\n<script>\r\n  import { setCache, useWatcher } from 'alova';\r\n  import { mapAlovaHook } from '@alova/vue-options';\r\n\r\n  const getTodoListByDate = dateList =>\r\n    alovaInstance.Get('/todo/list/dates', {\r\n      params: { dateList }\r\n    });\r\n\r\n  export default {\r\n    mixins: mapAlovaHook(function () {\r\n      return {\r\n        todo: useWatcher(() => getTodoListByDate(this.dates.join()), ['dates'], {\r\n          immediate: true\r\n        })\r\n      };\r\n    }),\r\n    data() {\r\n      return {\r\n        // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\r\n        dates: ['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']\r\n      };\r\n    },\r\n    mounted() {\r\n      this.todo$onSuccess(({ data: todoListDates }) => {\r\n        if (todoListDates.length <= 1) {\r\n          return;\r\n        }\r\n\r\n        // highlight-start\r\n        // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\r\n        // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\r\n        todoListDates.forEach(todoDate => {\r\n          // setCache\u53c2\u6570\u8bf4\u660e\uff1a\r\n          // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\r\n          // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\r\n          setCache(getTodoListByDate(todoDate.date), [todoDate]);\r\n        });\r\n        // highlight-end\r\n      });\r\n    },\r\n    methods: {\r\n      // highlight-start\r\n      handleTodolistToggle() {\r\n        // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\r\n        // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\r\n        this.dates = ['2022-05-01'];\r\n      }\r\n      // highlight-end\r\n    }\r\n  };\r\n<\/script>\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",children:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e"}),"\n",(0,r.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,r.jsx)(t.code,{children:"setCache"}),"\u4e2d\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u52a8\u6001\u8ba1\u7b97\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u9700\u8981\u66f4\u65b0\u7684\u7f13\u5b58\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\r\n  // \u8fd4\u56de\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\r\n  return {\r\n    ...oldCache,\r\n    expire: isAfter('2022-10-01', new Date())\r\n  };\r\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u540c\u6837\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"method \u5b9e\u4f8b\u5339\u914d\u5668"})," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"setCache(\r\n  {\r\n    name: 'todoList',\r\n    filter: (method, index, ary) => {\r\n      return index < 5;\r\n    }\r\n  },\r\n  'newCache'\r\n);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",children:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"}),"\n",(0,r.jsxs)(t.p,{children:["\u6709\u65f6\u5019\u4f60\u9700\u8981\u52a8\u6001\u5224\u65ad\u662f\u5426\u9700\u8981\u66f4\u65b0\u7f13\u5b58\uff0c\u5982\u679c\u5728",(0,r.jsx)(t.code,{children:"setCache"}),"\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u672a\u8fd4\u56de\u6570\u636e\uff0c\u6216\u8fd4\u56de\u4e86",(0,r.jsx)(t.code,{children:"undefined"}),"\uff0c\u6b64\u65f6\u5c06\u4e0d\u66f4\u65b0\u539f\u7f13\u5b58\u6570\u636e"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\r\n  const isExpired = isAfter('2022-10-01', new Date());\r\n  if (!isExpired) {\r\n    return; // \u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0\r\n  }\r\n  return null; // \u5c06\u7f13\u5b58\u66f4\u65b0\u4e3anull\r\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u7f13\u5b58\u67e5\u8be2",children:"\u7f13\u5b58\u67e5\u8be2"}),"\n",(0,r.jsx)(t.p,{children:"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u7f13\u5b58\u67e5\u8be2\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { queryCache } from 'alova';\r\n\r\nconst cacheData = queryCache(getTodoListByDate('2022-10-01'));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"method \u5b9e\u4f8b\u5339\u914d\u5668"})," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const cacheData = queryCache({\r\n  name: 'todoList',\r\n  filter: (method, index, ary) => {\r\n    return index < 5;\r\n  }\r\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(4334);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(7294),a=n(4334),s=n(2466),o=n(6550),i=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function D(e){const t=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);