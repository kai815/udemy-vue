import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
// Vue.directive("border",{
//   bind(el, beinding, vnode) {
//     //ディレクティブが初めて対象の要素に紐付いた時
//   },
//   inserted(el, beinding, vnode) {
//     //親Nodeに挿入された時(DOMに実際に挿入された時) 
//   },
//   update(el, beinding, vnode, oldVnode) {
//     //コンポーネントが更新される度。子コンポーネントが更新される前
//   },
//   componentUpdated(el, beinding, vnode, oldVnode) {
//     //コンポーネントが更新されるた度。子コンポーネントが更新された後
//   },
//   unbind(el, beinding, vnode) {
//     //ディレクティブが紐付いている要素から取り除かれた時
//   }
// });
// Vue.directive("border", function(el, binding){
//   // el.style.border = "solid black 2px";
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem";
//   }
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = '0.2px 5px rgba(0,0,0,0.26)';
//   }
// })
Vue.filter("upperCaseTitle", function(value){
  return value.toUpperCase();
})
Vue.mixin({
  created(){
    // console.log("global mixin");
  }
})

new Vue({
  // render: h => h(App),
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
