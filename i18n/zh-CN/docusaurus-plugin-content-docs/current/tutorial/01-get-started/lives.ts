export const quickStartVue = `<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <span v-else>responseData: {{ data }}</span>
</template>

<script setup>
import { createAlova, useRequest } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';
// 1. 创建alova实例
const alovaInstance = createAlova({
  // VueHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: VueHook,
  // 请求适配器，推荐使用fetch请求适配器
  requestAdapter: GlobalFetch(),
  // 全局的响应拦截器
  responded: response => response.json()
});
// 2. 使用alova实例创建method并传给useRequest即可发送请求
const { loading, data, error } = useRequest(
  alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
);
</script>`;

export const quickStartVueOptions = `<template>
  <div v-if="todo.loading">Loading...</div>
  <div v-else-if="todo.error">{{ todo.error.message }}</div>
  <span v-else>responseData: {{ todo.data }}</span>
</template>

<script>
import { createAlova, useRequest } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';
import { mapAlovaHook } from '@alova/vue-options';

// 1. 创建alova实例
const alovaInstance = createAlova({
  // VueHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: VueHook,
  // 请求适配器，推荐使用fetch请求适配器
  requestAdapter: GlobalFetch(),
  // 全局的响应拦截器
  responded: response => response.json()
});

export default {
  mixins: mapAlovaHook(function () {
    return {
      // 2. 使用alova实例创建method并传给useRequest即可发送请求
      todo: useRequest(
        alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
      )
    }
  }),
  data() {
    return {}; 
  }
}
</script>`;

export const quickStartReact = `import { createAlova, useRequest } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';

// 1. 创建alova实例
const alovaInstance = createAlova({
  // ReactHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: ReactHook,

  // 请求适配器，推荐使用fetch请求适配器
  requestAdapter: GlobalFetch(),

  // 全局的响应拦截器
  responded: response => response.json()
});

const App = () => {
  // 2. 使用alova实例创建method并传给useRequest即可发送请求
  const { loading, data, error } = useRequest(
    alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
  );

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <span>responseData: {JSON.stringify(data)}</span>
  );
};
export default App;`;

export const quickStartStaticVue = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"></script>
    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"></script>
    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"></script>
  </head>
  <body>
    <div id="app">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <span v-else>responseData: {{ data }}</span>
    </div>
  </body>
  <script>
    const alovaInstance = alova.createAlova({
      statesHook: VueHook,
      requestAdapter: GlobalFetch(),
      responded: response => response.json()
    });

    Vue.createApp({
      setup() {
        return alova.useRequest(
          alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
        );
      }
    }).mount('#app');
  </script>
</html>`;

export const quickStartStaticVueOptions = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"></script>
    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"></script>
    <script src="https://unpkg.com/@alova/vue-options/dist/alova-vue-options.umd.min.js"></script>
  </head>
  <body>
    <div id="app">
      <div v-if="todo.loading">Loading...</div>
      <div v-else-if="todo.error">{{ todo.error.message }}</div>
      <span v-else>responseData: {{ todo.data }}</span>
    </div>
  </body>
  <script>
  console.log(window)
    const alovaInstance = alova.createAlova({
      statesHook: AlovaVueOptions.VueOptionsHook,
      requestAdapter: GlobalFetch(),
      responded: response => response.json()
    });

    new Vue({
      el: '#app',
      mixins: AlovaVueOptions.mapAlovaHook(function () {
        return {
          todo: alova.useRequest(
            alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
          )
        }
      }),
      data() {
        return {};
      }
    });
  </script>
</html>`;

export const quickStartStaticReact = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"></script>
    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"></script>
    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script type="text/babel">
    const alovaInstance = alova.createAlova({
      statesHook: ReactHook,
      requestAdapter: GlobalFetch(),
      responded: response => response.json()
    });

    const App = () => {
      const { loading, data, error } = alova.useRequest(
        alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')
      );

      if (loading) {
        return <div>Loading...</div>;
      } else if (error) {
        return <div>{error.message}</div>;
      }
      return (
        <span>responseData: {JSON.stringify(data)}</span>
      );
    };
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<App />);
  </script>
</html>`;