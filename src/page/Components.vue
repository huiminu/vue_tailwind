
<script type="module">
import ButtonComponent from '../components/Button.vue';
import BadgesComponent from '../components/Badges.vue';

export default {
    data() {
        return {
            id:1
        }
    },
    components: {
        ButtonComponent, // 在這裡註冊按鈕元件
        BadgesComponent, //註冊Badges 元件
    },
    // 方法
    methods: {
        getRoute() {
            // route目前路由下又那些資訊(以取得的方式來調用)
            // fullPath就是進入路由的完整路徑
            console.log(this.$route)
        },
        getRouter() {
            // 主要按鈕點擊事件處理
            // console.log('danger Button Clicked!');
            // alert('你是一隻熊!!!')
            console.log(this.$router)
        },
        // 其他按鈕點擊事件處理...
    },
};
</script>
<template>
    <div class="flex-row mt-[60px] p-4 space-y-5">
        <h1>Components</h1>
        <font-awesome-icon icon="shopping-cart" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        
        <!-- <p class="text-gray-300 text-3xl">{{ num }}</p> -->
        <!-- <div class="flex mb-5">
            <input class="from-control mr-2" type="number" v-model="num">
        </div> -->
        <h2>button 按鈕</h2>
        <div class="flex space-x-3">
            <ButtonComponent buttonColor="primary" @click="getRoute" text="getRoute" />
            <ButtonComponent buttonColor="secondary" @click="getRouter" text="getRouter" />
            <ButtonComponent buttonColor="info" text="info" />
            <ButtonComponent buttonColor="light" text="info"  />
        </div>
        <h2>Badges 標籤 <span class="text-base">預設灰色</span></h2>
        <div class="flex space-x-2">
            <BadgesComponent badgesColor="success" text="已查證" />
            <BadgesComponent badgesColor="success" text="已內稽" />
            <BadgesComponent badgesColor="success" text="已完成" />
            <BadgesComponent badgesColor="success" text="盤查中" />
            <BadgesComponent badgesColor="warning" text="內稽中" />
            <BadgesComponent badgesColor="warning" text="外稽中" />
            <BadgesComponent badgesColor="danger" text="未盤查" />
            <BadgesComponent text="產品型" />
            <BadgesComponent class="badges first-line:outline-secondary" text="服務型" />
        </div>
        <h2>pagination</h2>
        <div class="flex">
            <ButtonComponent buttonColor="light" text="<" />
            <ButtonComponent v-for="page in 5" buttonColor="light" :text="page" :key="page"/>
            <ButtonComponent buttonColor="light" text=">" />
        </div>
        <h2>tab</h2>
        <div class="flex w-full">
            <button class="flex-1 px-3 py-2 border-b" :class="{'nav-link-avtive ' : id ===1}" @click="id=1">11</button>
            <button class="flex-1 px-3 py-2 border-b" :class="{'nav-link-avtive ' : id ===2}" @click="id=2" >22</button>
            <button class="flex-1 px-3 py-2 border-b" :class="{'nav-link-avtive ' : id ===3}" @click="id=3">2333</button>
        </div>
        <div>
            <div v-if="id ===1">1內容</div>
            <div v-else-if="id ===2">2內容</div>
            <div v-else-if="id ===3">3內容</div>
        </div>
    </div>
</template>
<style>
.from-control {
    @apply text-gray-600 h-10 rounded-sm px-2;
}
.nav-link-avtive{
    @apply bg-lime-100;
}
</style>
