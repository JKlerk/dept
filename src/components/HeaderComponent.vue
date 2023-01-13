<template>
    <div>
        <div class="flex border-b py-4 px-5 lg:px-0">
            <h1 class="font-teko text-4xl font-bold">DEPT</h1>
            <div class="flex flex-1 justify-end">
                <button>
                    <svg
                        @click="toggleNav(true)"
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
                </button>
            </div>
        </div>
        <Teleport to="body">
            <Transition @after-enter="afterEnter()" name="slide-y">
                <NavComponent @toggle-nav="toggleNav" class="absolute top-0" v-if="state.showNav"></NavComponent>
            </Transition>
        </Teleport>
    </div>
</template>
<script lang="ts" setup>
import anime from 'animejs/lib/anime.es.js'
import NavComponent from '@/components/NavComponent.vue'
import { reactive } from 'vue'
const state = reactive({
    showNav: false,
})

function afterEnter() {
    anime.timeline().add({
        targets: '.fade-in',
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 200,
        easing: 'easeOutExpo',
    })
}

function toggleNav(val: boolean) {
    state.showNav = val
    val ? (document.querySelector('body')!.style.overflow = 'hidden') : (document.querySelector('body')!.style.overflow = 'auto')
}
</script>
