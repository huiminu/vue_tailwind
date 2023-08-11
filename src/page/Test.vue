<script>
    import testStep from '../components/Step.vue';
    export default {
        components: {
            testStep, 
        },
    };
</script>
<template>
    <div class="pt-4">
        <testStep/>
        <router-view></router-view>
        <p class="text-center mt-10">step元件</p>
        <router-view name="badges"></router-view>
        <router-view name="button"></router-view>
    </div>
</template>