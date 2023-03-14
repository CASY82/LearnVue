<template>
  <p>{{ message }}</p>
  <ol>
    <li v-for="item in list" :key="item.id">{{ item }}</li>
  </ol>
</template>

<script>
export default {
  data() {
        return {
            message: 'Hello Vue3!',
            list: ['사과', '바나나', '딸기']
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
</style>
