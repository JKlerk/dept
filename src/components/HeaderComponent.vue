<template>
    <div class="flex border-b py-4 px-5 lg:px-0">
        <h1 class="font-teko text-4xl font-bold">DEPT</h1>
        <div class="flex flex-1 justify-end">
            <svg
                @click="store.toggleNav(true)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 cursor-pointer stroke-neutral-900 transition-transform duration-100 hover:scale-125"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores'
const store = useStore()
</script>
