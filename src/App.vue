<template>
  <p>{{ message }}</p>
  <ol>
    <li v-for="item in list" :key="item.id">{{ item }}</li>
  </ol>
  <input v-model="message">
  <input v-model.number="count">
  <p v-if="show">Hello world!</p>

  <button v-on:click="show=!show">변경하기</button>
  <transition>
    <p v-if="show">나는 안보였다가 보였다가!</p>
  </transition>

</template>

<script>
export default {
  data() {
        return {
            message: 'Hello Vue3!',
            list: ['사과', '바나나', '딸기'],
            count: 1,
            show: true
        }
    },
  // 데이터 추가하는 방법
  // 책에서와 같이, console로 추가하는 방법은 없다...
  mounted() {
    console.log('Adding element to the list');
    this.list.push('오렌지');
  }
}
</script>

<style>
#app{
  
}
.v-enter-active, .v-leave-active{
  transition: opacity 1s;
}
.v-enter, .v-leave-to{
  opacity: 0;
}
</style>
