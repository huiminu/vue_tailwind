<script>
    import testStep from '../components/Step.vue';
    export default {
        components: {
            testStep, 
        },
    };
</script>
<template>
    <div>
        <testStep/>
        <!-- step1 跟 primevue 的內容放置位置 -->
        <router-view class="p-4"></router-view>
        <!-- <router-view name="badges"></router-view>
        <router-view name="button"></router-view> -->
    </div>
</template>