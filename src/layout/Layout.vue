<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerLayout from './header.vue'
import sidebar from './Sidebar.vue'
</script>
<template>
    <headerLayout />
    <sidebar />
    <!--RouterView 顯示內頁樣式  -->
    <RouterView class="ml-[110px]" />
</template>