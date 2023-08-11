<template>
    <button @click="handleClick" :class="['btn', buttonColorClass]">
        {{ text }}
    </button>
</template>
<script>
// 導出模塊的預設
export default {
    // 
    props: {
        text: {
            type: String,
            default: '按鈕預設文字', // 預設按鈕文字
        },
        buttonColor: {
            type: String,
            default: 'default',  //預設按鈕顏色 
        },
        // buttonClass: {
        //     type: String,
        //     default: '', // 預設按鈕樣式類別
        // },
    },
    computed: {
        buttonColorClass() {
            // 根據按鈕顏色選項返回對應的樣式類別
            switch (this.buttonColor) {
                case 'primary':
                    return 'btn-primary';
                case 'info':
                    return 'btn-info';
                case 'secondary':
                    return 'btn-secondary';
                case 'light':
                    return 'btn-light';
                // 其他按鈕顏色定義...
                default:
                    return 'btn'; // 如果沒有匹配的顏色，使用預設樣式
            }
        },
    },
    // 方法
    methods: {
        handleClick() {
            // 在這裡處理按鈕點擊事件
            // this.$emit('click');
        },
    },
};

</script>
<style lang="scss">
.btn {
    @apply h-10 px-[14px] text-base font-normal rounded-[4px] leading-[22px] flex items-center;

    &-primary {
        @apply bg-primary-500 text-white hover:bg-primary-600;

        &:disabled {
            @apply text-gray-500 bg-gray-400;
        }
    }

    &-info {
        @apply bg-secondary-700 text-white hover:bg-secondary-800;

        &:disabled {
            @apply text-gray-500 bg-gray-400;
        }
    } 

    &-secondary{
        @apply bg-gray-600 text-white hover:bg-gray-700;
        &:disabled{
            @apply text-gray-500 bg-gray-400;
        }
    }

    &-light{
        @apply bg-white text-gray-600 border border-gray-400 hover:outline hover:outline-1 hover:outline-gray-400;
        &:disabled{
            @apply bg-gray-500;
        }
    }
}</style>