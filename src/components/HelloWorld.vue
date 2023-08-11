<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
})

import { RouterLink, RouterView } from 'vue-router'
// 引入icon
// import iconTest from '../components/icons/IconDocumentation.vue'
</script>

<template>
  <div class="greetings">
    <!-- router  link -->
    <router-link class="text-4xl text-yellow-400 cursor-pointer bg-slate-600" to="/test">12121index page</router-link>
    <RouterView />

    <h1 class="green">{{ msg }}</h1>
    <!-- <p class="text-xl text-yellow-900 font-semibold bg-yellow-100">測試測試</p> -->

    <!-- 引入icon -->
    <!-- <div class="flex mt-10 items-center border p-3">
      <iconTest class="mr-3" /> 引入icon
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
