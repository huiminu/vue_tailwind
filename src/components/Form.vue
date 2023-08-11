<template>
    <input class="form-control" type="text" value="">
</template>
<style>
.form-control {
    @apply h-9 w-full border bg-white border-primary-400 rounded-sm text-sm font-normal leading-5 text-gray-800 px-2;
    &:focus {
        @apply border-primary-500 ring-0 outline-none;
    }
    &:disabled {
        @apply bg-gray-200 text-gray-600;
    }
    &:invalid{
        @apply border-danger-500 focus:border-danger-500;
        ~.invalid-text{
            @apply text-danger-500 text-sm;
        }
    }
    &-danger{
        @apply border-danger-500 focus:border-danger-500;
    }
}
</style>