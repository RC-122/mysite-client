// let listeners = {};
// export default{

//     //监听事件
//     $on(eventName, handler){
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     //取消监听事件
//     $off(eventName, handler){
//         if(!listeners[eventName]){
//             return;
//         }
//         listeners[eventName].delete;
//     },
//     //
//     $emit(eventName,...args){
//         if(!listeners[eventName]){
//             return console.error("error");
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }

import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;

export default app;
