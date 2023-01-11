<template>
    <div class="min-h-screen w-full overflow-auto bg-neutral-900 px-5 pt-10 lg:px-20">
        <div>
            <div class="flex flex-1 justify-end">
                <svg
                    @click="store.toggleNav(false)"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 cursor-pointer stroke-white transition-transform duration-100 hover:scale-125"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            <div @click="store.toggleNav(false)" class="fade-in mt-10 space-y-8 font-teko text-white" style="opacity: 0">
                <RouteItem :name="'Home'"></RouteItem>
                <RouteItem :name="'Werk'"></RouteItem>
                <RouteItem :name="'Over'"></RouteItem>
                <RouteItem :name="'Diensten'"></RouteItem>
                <RouteItem :name="'Partners'"></RouteItem>
                <RouteItem :name="'Stories'"></RouteItem>
                <RouteItem :name="'Vacatures'"></RouteItem>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores'
import RouteItem from './RouteItem.vue'
import { onMounted } from 'vue'

const store = useStore()
</script>
