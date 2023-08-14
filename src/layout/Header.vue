
<template>
    <div class="header">
        <div class="flex items-center">
            <!-- 電腦 -->
            <div class="hidden md:flex md:items-center px-2">
                <router-link class="header-link" to="/">六腳練習</router-link>
                <span class="mx-2">|</span> 
                <router-link class="header-link" to="/components">components</router-link>
                <span class="mx-2">|</span> 
                <router-link class="header-link" to="/test">test</router-link>
                <span class="mx-2">|</span> 
                <router-link class="header-link" active-class="active-bg" to="/test/step1">step-1</router-link>
                <span class="mx-2">|</span> 
                <router-link class="header-link" active-class="active-bg" to="/test/primevue">step-2</router-link>
            </div>
        </div>
        <div class="flex space-x-3 items-center">
            <button id="belldropdown" data-dropdown-toggle="belldropdown-ul" class="bell-btn" type="button"
                data-dropdown-offset-distance="8" data-dropdown-offset-skidding="-110" data-dropdown-placement="bottom">
                <i class="bell block relative">
                    <i class="alert-dot-border"></i>
                </i>
            </button>
            <div id="belldropdown-ul" class="hidden header-dropdown-bg w-[260px]">
                <ul class="bell-dropdown" aria-labelledby="belldropdown">
                    <li>
                        <i class="alert-dot"></i>
                        王小明分派XXX給您
                        <span>10分鐘前</span>
                    </li>
                    <li>
                        <i class="alert-dot"></i>
                        王小明分派XXX給您
                        <span>10分鐘前</span>
                    </li>
                </ul>
            </div>
            <button id="userdropdown" data-dropdown-toggle="userdropdown-ul" class="user-btn relative" type="button"
                data-dropdown-offset-distance="8" data-dropdown-offset-skidding="-36" data-dropdown-placement="bottom">
                <i class="user"></i>
                王小明
                <i class="dropdown-icon "></i>
            </button>
            <div id="userdropdown-ul" class="hidden header-dropdown-bg w-[200px]">
                <ul class="user-dropdown" aria-labelledby="userdropdown">
                    <li>
                        <i class="edit-password"></i>
                        <a href="#">修改密碼</a>
                    </li>
                    <li>
                        <i class="logout"></i>
                        <a href="#">登出</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.header {
    @apply flex fixed top-0 right-0 left-0 justify-between bg-primary-500 text-sm text-primary-300 ml-[92px] px-5 z-20 w-[470px] sm:w-auto;
    &-link{
        @apply px-2 py-2.5; 
        &.active{
            @apply text-yellow-200;
        }
        &:hover{
            @apply text-white;
            .breadcrumb-arrow{
                background-image: url('../../imgs/icon/breadcrumb-arrow-white.png');
            }
        }
        &.active-bg{
            @apply bg-primary-800 text-white;
        }
    }
    &-dropdown-bg {
        @apply z-10 bg-primary-500 rounded-[4px] py-[10px];
        li { 
            @apply h-9  active:bg-primary-600 px-[15px] flex items-center;
        }
    }
}

.bell-btn {
    @apply h-[40px] w-[40px] rounded-[4px] flex items-center justify-center bg-primary-500;
    &:active {
        @apply bg-primary-600;
        .alert-dot {
            @apply border-primary-600;
        }
    }
}

.user-btn {
    @apply flex justify-center items-center space-x-2 h-[40px] w-[128px] rounded-[4px] text-white bg-primary-500 active:bg-primary-600;
}

.user-dropdown{
    li{
        @apply space-x-2 flex hover:bg-primary-800 cursor-pointer;
    }
}

.bell-dropdown{
    li{
        @apply space-x-2 flex justify-between hover:bg-primary-800 cursor-pointer;
    }
    span{
        @apply text-primary-400;
    }
}

.alert-dot {
    @apply w-[10px] h-[10px] bg-alert rounded-full;
    &-border{
        @apply w-[10px] h-[10px] bg-alert rounded-full absolute top-0 right-0 border-2 border-primary-500;
    }
}
</style>