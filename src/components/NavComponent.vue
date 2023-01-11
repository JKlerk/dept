<template>
    <div class="bg-neutral-900 min-h-screen w-full pt-10 px-20 overflow-auto">
        <div>
            <div class="flex flex-1 justify-end">
                <svg @click="store.toggleNav(false)" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 stroke-white x" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            <div @click="store.toggleNav(false)" class="font-teko mt-10 text-white space-y-8">
                <RouteItem :name="'Home'"></RouteItem>
                <RouteItem :name="'Werk'"></RouteItem>
                <RouteItem :name="'Over'"></RouteItem>
                <RouteItem :name="'Diensten'"></RouteItem>
                <RouteItem :name="'Partners'"></RouteItem>
                <RouteItem :name="'Stories'"></RouteItem>
                <RouteItem :name="'Vacatures'"></RouteItem>
                <!-- <RouteItem :name="'Events'"></RouteItem>
                <RouteItem :name="'Contact'"></RouteItem> -->
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores'
import RouteItem from './RouteItem.vue'

const store = useStore()
</script>
