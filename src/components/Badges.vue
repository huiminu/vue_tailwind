<template>
    <span :class="['badges', badgesColorClass]">{{ text }}</span>
</template>


<script>
// 導出模板
export default {
    // 導出挖洞的內容
    props: {
        text: {
            type: String,
            default: "預設文字",
        }, 
        badgesColor: {
            type: String,
            default: 'default', //對應預設的顏色
        }
    },
    // 各種顏色對應
    computed: {
        badgesColorClass() {
            switch (this.badgesColor) {
                case 'success':
                    return 'badges-success';
                case 'danger':
                    return 'badges-danger';
                case 'warning':
                    return 'badges-warning';
                default:
                    return 'badges-outline-secondary';
            }
        }
    },
}
</script>



<style lang="scss">
.badges {
    @apply h-6 rounded-[4px] border px-1 text-sm font-normal leading-5 text-gray-600 border-gray-400 bg-white;

    &-outline-secondary {
        @apply bg-gray-200 text-gray-600 border-gray-400;
    }

    &-success {
        @apply text-success-500 border-success-200;
    }

    &-danger {
        @apply text-danger-500 border-danger-100;
    }

    &-warning {
        @apply text-warning-600 border-warning-200;
    }
}
</style>