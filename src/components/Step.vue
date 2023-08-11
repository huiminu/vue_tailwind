<template>
    <div class="step">
        <ul class="step-content">
            <li class="step-items">
                <router-link to="/test/step1" active-class="step-items-active">
                    <div class="step-line"></div>
                    step1
                </router-link>
            </li>
            <li class="step-items">
                <router-link to="/test/primevue" active-class="step-items-active">
                    <div class="step-line"></div>
                    primevue
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
.step{
    @apply h-[92px] bg-gray-200 z-20 sticky top-[40px] left-0 right-0 px-5 flex items-center;
    &-content{
        @apply flex mx-auto space-x-1.5 text-sm font-normal w-full md:w-[840px];
    }
    &-content-sm{
        @apply w-[430px];
    }
    &-items{
        @apply flex-1 text-gray-600;
    }
    &-line{
        @apply bg-gray-500 h-[4px] rounded-full mb-1;
    }
    &-items-active{
        @apply text-secondary-700;
        .step-line{
            @apply bg-secondary-700;
        }
    }
    &-items-finish{
        @apply text-secondary-800;
        .step-line{
            @apply bg-secondary-800;
        }
    }
}

.modal-step-wapper{
    @apply py-8 px-5 bg-gray-200 mx-0;
}
</style>