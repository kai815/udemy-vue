<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">fade</button>
    <p>{{myAnimation}}</p>
    <br>
    <button @click="add">追加</button>
    <ul style="width:200px; margin: auto;">
      <transition-group name="fade" tag="div">
        <li style="cursor: pointer;" v-for="(number, index) in numbers" @click="remove(index)" v-bind:key="number">{{number}}</li>
      </transition-group>
    </ul>
    <button @click="show= !show">切り替え</button><br>
    <transition v-bind:css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
      <div class="circle" v-if="show"></div>
    </transition>
    <button @click="myComponent = 'ComponentA'">A</button>
    <button @click="myComponent = 'ComponentB'">B</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
      <!-- <p v-if="show" key="hello">こんにちは</p>
      <p v-if="!show" key="bye">さよなら</p> -->
    </transition>
    <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
      <p v-if="show">hello</p>
    </transition>
    <transition v-bind:name="myAnimation" appear>
      <div v-if="show">
        <p>bye</p>
        <!-- <p>hello</p>
        <p>hello</p>
        <p>hello</p> -->
      </div>
    </transition>
  </div>
</template>
<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue"
export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      numbers:[0,1,2],
      nextNumber: 3,
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    };
  },
  methods:{
    randmoIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randmoIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el){
      // 現れる前
      el.style.transform = 'scale(0)';
    },
    enter(el, done){
      // 現れる時
      let scale = 0;
      const interval = setInterval(()=>{
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterEnter(){
      // 現れた時
    },
    enterCancelled(){
      // 現れるアニメーションがキャンセルされた時
    },
    beforeLeave(){
      // 消える前
    },
    leave(el,done){
      // 消える時
      let scale = 1;
      const interval = setInterval(()=>{
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterLeave(){
      // 消えた後
    },
    leaveCancelled(){
      // 現れるアニメーションがキャンセルされた時
    },
  }
};
</script>
<style>
.circle {
  background-color: deeppink;
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
}
.fade-move {
  transition: transform 1s;
}
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 2s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 2s;
  position: absolute;
  width: 200px;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}

/* .slide-leave {

} */
.slide-leave-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}
/* .slide-leave-to {
} */

@keyframes  slide-in {
  from{
    transform :translateX(100px);
  }
  to {
    transform :translateX(0);
  }
}
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>