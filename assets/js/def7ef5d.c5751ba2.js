"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2879],{6008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(5893),o=t(1151),i=t(4866),s=t(5162);const a={title:"Token authentication interceptor",sidebar_position:40},l=void 0,c={id:"tutorial/strategy/tokenAuthentication",title:"Token authentication interceptor",description:"Policy type: Interceptor",source:"@site/docs/tutorial/06-strategy/04-tokenAuthentication.md",sourceDirName:"tutorial/06-strategy",slug:"/tutorial/strategy/tokenAuthentication",permalink:"/tutorial/strategy/tokenAuthentication",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-strategy/04-tokenAuthentication.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Token authentication interceptor",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Form submit strategy",permalink:"/tutorial/strategy/useForm"},next:{title:"Universal upload strategy",permalink:"/tutorial/strategy/useUploader"}},h={},d=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Bind Token authentication interceptor",id:"bind-token-authentication-interceptor",level:2},{value:"Bind client-based authentication interceptor",id:"bind-client-based-authentication-interceptor",level:3},{value:"Bind server-based authentication interceptor",id:"bind-server-based-authentication-interceptor",level:3},{value:"Refresh Token silently on the client",id:"refresh-token-silently-on-the-client",level:2},{value:"Refresh Token silently on the server side",id:"refresh-token-silently-on-the-server-side",level:2},{value:"Processed in request success interceptor",id:"processed-in-request-success-interceptor",level:3},{value:"Handled in request error interceptor",id:"handled-in-request-error-interceptor",level:3},{value:"Release visitor request",id:"release-visitor-request",level:2},{value:"Login interception",id:"login-interception",level:2},{value:"Assign token",id:"assign-token",level:2},{value:"Logout interception",id:"logout-interception",level:2},{value:"Custom identification identity",id:"custom-identification-identity",level:2},{value:"token refresh identity",id:"token-refresh-identity",level:3},{value:"Visitor identify",id:"visitor-identify",level:3},{value:"Login identity",id:"login-identity",level:3},{value:"Log out identity",id:"log-out-identity",level:3},{value:"Typescript",id:"typescript",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Policy type: Interceptor"}),(0,r.jsx)(n.p,{children:"Version requirements: v1.3.0+"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Before using extension hooks, make sure you are familiar with the basic use of alova."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Token authentication interceptor provides unified management of token-based login, logout, token assignment, and token refresh, and supports silent token refresh."}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u2728 Unified maintenance of all codes for token identity authentication, including login, logout, token assignment, token refresh, etc.;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Supports verification of token expiration on the client and server, and refreshes the token without any warning;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Requests that rely on tokens automatically wait for the token refresh to complete before requesting;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Set request ID with metadata;"}),"\n",(0,r.jsx)(n.li,{children:"\u2728 Automatically release visitor requests that do not rely on tokens;"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(i.Z,{groupId:"framework",children:[(0,r.jsx)(s.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-vue --save\r\n# yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,r.jsx)(s.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-react --save\r\n# yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,r.jsx)(s.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-svelte --save\r\n# yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"All the following interceptors are optional, just choose the ones you want to use."})}),"\n",(0,r.jsx)(n.h2,{id:"bind-token-authentication-interceptor",children:"Bind Token authentication interceptor"}),"\n",(0,r.jsxs)(n.p,{children:["Token identity authentication is completed through global interceptors, which provide ",(0,r.jsx)(n.code,{children:"createClientTokenAuthentication"})," and ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," for client- and server-based identity authentication respectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Client-based identity authentication: means judging whether the token has expired from the client, such as the token expiration time obtained during login;"}),"\n",(0,r.jsxs)(n.li,{children:["Server-based identity authentication: It indicates whether the token has expired based on the status returned from the server. For example, when ",(0,r.jsx)(n.code,{children:"status"})," is 401, it means it has expired;"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bind-client-based-authentication-interceptor",children:"Bind client-based authentication interceptor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createClientTokenAuthentication } from '@alova/scene-*';\r\nimport { createAlova } from 'alova';\r\n\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication({\r\n  // ...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  beforeRequest: onAuthRequired(method => {\r\n    // ...interceptor before original request\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //...original response success interceptor\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"onResponseRefreshToken"}),", you can also bind response error and completion interceptors, which is the same as the original usage."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createAlova({\r\n  // ...\r\n  // highlight-start\r\n  responded: onResponseRefreshToken({\r\n    onSuccess: (response, method) => {\r\n      //...original response success interceptor\r\n    },\r\n    onError: (error, method) => {\r\n      //...original response error interceptor\r\n    },\r\n    onComplete: method => {\r\n      //...original response completion interceptor\r\n    }\r\n  })\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you don't need to set an interceptor, you don't need to pass in the interceptor function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createAlova({\r\n  //...\r\n  // highlight-start\r\n  beforeRequest: onAuthRequired(),\r\n  responded: onResponseRefreshToken()\r\n  // highlight-end\r\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"bind-server-based-authentication-interceptor",children:"Bind server-based authentication interceptor"}),"\n",(0,r.jsx)(n.p,{children:"Same as client-based usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createServerTokenAuthentication } from '@alova/scene-*';\r\nimport { createAlova } from 'alova';\r\n\r\nconst { onAuthRequired, onResponseRefreshToken } = createServerTokenAuthentication({\r\n  // ...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  beforeRequest: onAuthRequired(method => {\r\n    // ...interceptor before original request\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //...original response success interceptor\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"refresh-token-silently-on-the-client",children:"Refresh Token silently on the client"}),"\n",(0,r.jsxs)(n.p,{children:["Just set ",(0,r.jsx)(n.code,{children:"refreshToken"})," and specify whether the token expires, and call the function to refresh the token. When the token refresh is completed, all requests that rely on the token will wait for the token refresh to complete."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  refreshToken: {\r\n    // Triggered before the request, the method parameter will be received and a boolean will be returned to indicate whether the token has expired.\r\n    isExpired: method => {\r\n      return tokenExpireTime < Date.now();\r\n    },\r\n\r\n    // Triggered when the token expires, trigger the refresh token in this function\r\n    handler: async method => {\r\n      const { token, refresh_token } = await refreshToken();\r\n      localStorage.setItem('token', token);\r\n      localStorage.setItem('refresh_token', refresh_token);\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In order for the ",(0,r.jsx)(n.code,{children:"refreshToken"})," request to pass smoothly, the ",(0,r.jsx)(n.code,{children:"authRole"})," needs to be identified as ",(0,r.jsx)(n.code,{children:"refreshToken"})," through metadata."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information about metadata, go to ",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method metadata"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    authRole: 'refreshToken'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"refresh-token-silently-on-the-server-side",children:"Refresh Token silently on the server side"}),"\n",(0,r.jsx)(n.p,{children:"The same as refreshing the token silently on the client, just specify whether the token expires and call the function to refresh the token. When the token refresh is completed, all requests that rely on the token will wait for the token refresh to complete."}),"\n",(0,r.jsx)(n.h3,{id:"processed-in-request-success-interceptor",children:"Processed in request success interceptor"}),"\n",(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"GlobalFetch"}),", as long as the server returns the response data, the response success interceptor will be triggered. At this time, we need to handle the token refresh in the response success interceptor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnSuccess: {\r\n    // Triggered when responding, the response and method can be obtained, and a boolean is returned to indicate whether the token has expired.\r\n    // When the server returns 401, it means the token has expired.\r\n    isExpired: (response, method) => {\r\n      return response.status === 401;\r\n    },\r\n\r\n    // Triggered when the token expires, trigger the refresh token in this function\r\n    handler: async (response, method) => {\r\n      const { token, refresh_token } = await refreshToken();\r\n      localStorage.setItem('token', token);\r\n      localStorage.setItem('refresh_token', refresh_token);\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"handled-in-request-error-interceptor",children:"Handled in request error interceptor"}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"axios"})," interceptor, if the server returns a status code other than ",(0,r.jsx)(n.code,{children:"200/300"}),", the response error interceptor will be triggered. At this time, we need to handle the token refresh in the response error interceptor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnError: {\r\n    // Triggered when responding, error and method can be obtained, and boolean is returned to indicate whether the token has expired.\r\n    // When the server returns 401, it means the token has expired.\r\n    isExpired: (error, method) => {\r\n      return error.response.status === 401;\r\n    },\r\n\r\n    // Triggered when the token expires, trigger the refresh token in this function\r\n    handler: async (error, method) => {\r\n      const { token, refresh_token } = await refreshToken();\r\n      localStorage.setItem('token', token);\r\n      localStorage.setItem('refresh_token', refresh_token);\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In order for the ",(0,r.jsx)(n.code,{children:"refreshToken"})," request to pass smoothly, the ",(0,r.jsx)(n.code,{children:"authRole"})," needs to be identified as ",(0,r.jsx)(n.code,{children:"refreshToken"})," through metadata."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more information about metadata, please go to ",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method metadata"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    authRole: 'refreshToken'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"release-visitor-request",children:"Release visitor request"}),"\n",(0,r.jsxs)(n.p,{children:['Some interfaces do not need to rely on token authentication. We call them "guest requests". At this time, we can set their metadata to ',(0,r.jsx)(n.code,{children:"authRole: null"})," to bypass the front-end interception and allow them to send requests and receive responses smoothly."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\r\n  const method = alovaInstance.Get('/token_not_required');\r\n  method.meta = {\r\n    authRole: null\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"login-interception",children:"Login interception"}),"\n",(0,r.jsx)(n.p,{children:"In the identity authentication interceptor, you can also intercept login requests and save login information in the interceptor to achieve the purpose of unified maintenance of identity authentication codes."}),"\n",(0,r.jsxs)(n.p,{children:["First identify the metadata of the login request as ",(0,r.jsx)(n.code,{children:"authRole: 'login'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\r\n  const method = alovaInstance.Get('/login');\r\n  method.meta = {\r\n    authRole: 'login'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then save the login information in the login interceptor."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  login(response, method) {\r\n    localStorage.setItem('token', response.token);\r\n    localStorage.setItem('refresh_token', response.refresh_token);\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The login interceptor usage of ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," is the same."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"assign-token",children:"Assign token"}),"\n",(0,r.jsxs)(n.p,{children:["Usually, we will append token to the request information in ",(0,r.jsx)(n.code,{children:"beforeRequest"}),". The ",(0,r.jsx)(n.code,{children:"assignToken"})," callback function is provided in the Token authentication interceptor for assigning tokens. It will filter guest requests and login requests and trigger them before the requests. It can also achieve the purpose of unified maintenance of identity authentication codes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n   assignToken: method => {\r\n     method.config.headers.Authorization = localStorage.getItem('token')};\r\n   }\r\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The usage of assignToken callback function of ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," is the same."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"logout-interception",children:"Logout interception"}),"\n",(0,r.jsx)(n.p,{children:"When your logout also requires calling the interface, you can also intercept the logout request and clear the login information."}),"\n",(0,r.jsxs)(n.p,{children:["First identify the logout request metadata as ",(0,r.jsx)(n.code,{children:"authRole: 'logout'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\r\n  const method = alovaInstance.Get('/logout');\r\n  method.meta = {\r\n    authRole: 'logout'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then clear the login information in the logout interceptor."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  logout(response, method) {\r\n    localStorage.removeItem('token');\r\n    localStorage.removeItem('refresh_token');\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The login interceptor usage of ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," is the same."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"custom-identification-identity",children:"Custom identification identity"}),"\n",(0,r.jsx)(n.p,{children:"The above metadata identities are actually the default identities. If you need to customize the identity, you can set it as follows."}),"\n",(0,r.jsx)(n.h3,{id:"token-refresh-identity",children:"token refresh identity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  refreshToken: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  }\r\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnSuccess: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  },\r\n  refreshTokenOnError: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, requests with ",(0,r.jsx)(n.code,{children:"refreshToken: true"})," in the metadata will be identified as ",(0,r.jsx)(n.code,{children:"refreshToken"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    refreshToken: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"visitor-identify",children:"Visitor identify"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  visitorMeta: {\r\n    isVisitor: true\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, requests with ",(0,r.jsx)(n.code,{children:"isVisitor: true"})," in the metadata will be identified as visitors."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\r\n  const method = alovaInstance.Get('/token_not_required');\r\n  method.meta = {\r\n    isVisitor: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"login-identity",children:"Login identity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  login: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      login: true\r\n    },\r\n    // highlight-end\r\n    handler(response, method) {\r\n      //Login interceptor\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, requests with ",(0,r.jsx)(n.code,{children:"login: true"})," in the metadata will be identified as ",(0,r.jsx)(n.code,{children:"login"})," identity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\r\n  const method = alovaInstance.Get('/login');\r\n  method.meta = {\r\n    login: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"log-out-identity",children:"Log out identity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  logout: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      logout: true\r\n    },\r\n    // highlight-end\r\n    handler(response, method) {\r\n      //Logout interceptor\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, requests with ",(0,r.jsx)(n.code,{children:"logout: true"})," in the metadata will be identified as ",(0,r.jsx)(n.code,{children:"logout"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\r\n  const method = alovaInstance.Get('/logout');\r\n  method.meta = {\r\n    logout: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The login interceptor usage of ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," is the same."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"createClientServerTokenAuthentication"})," and ",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," are adapted to the ",(0,r.jsx)(n.code,{children:"GlobalFetch"})," request adapter, you can only specify the type of ",(0,r.jsx)(n.code,{children:"StatesHook"}),", as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// highlight-start\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<typeof VueHook>({\r\n  // highlight-end\r\n  //...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  beforeRequest: onAuthRequired(method => {\r\n    // The type of method is Method<any, any, any, any, RequestInit, Response, Headers>\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //The response type is Response\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you are not using the ",(0,r.jsx)(n.code,{children:"GlobalFetch"})," request adapter, You also need to specify the type of request adapter, which is also simple."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is an example of the axios request adapter. Specify the request adapter type in ",(0,r.jsx)(n.code,{children:"createClientTokenAuthentication"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\r\n\r\n// highlight-start\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<\r\n  typeof ReactHook,\r\n  typeof axiosRequestAdapter\r\n>({\r\n  // highlight-end\r\n  //...\r\n});\r\nconst alovaInstance = createAlova({\r\n  //...\r\n  // highlight-start\r\n  beforeRequest: onAuthRequired(method => {\r\n    // The type of method is Method<any, any, any, any, AlovaAxiosRequestConfig, AxiosResponse, AxiosResponseHeaders>\r\n    // highlight-end\r\n  }),\r\n  // highlight-start\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //The response type is AxiosResponse\r\n    // highlight-end\r\n    return response.data;\r\n  })\r\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"The server-based Token authentication interceptor is used in the same way."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\r\n\r\n// highlight-start\r\ncreateServerTokenAuthentication<typeof ReactHook, typeof axiosRequestAdapter>({\r\n  // highlight-end\r\n  //...\r\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(4334);const o={tabItem:"tabItem_Ymn6"};var i=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(7294),o=t(4334),i=t(2466),s=t(6550),a=t(469),l=t(1980),c=t(7392),h=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,h.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==r&&(c(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:h,...i,className:(0,o.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(k,{...e,...n})]})}function b(e){const n=(0,f.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);