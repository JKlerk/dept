<template>
    <div>
        <Transition @after-enter="afterEnter()" name="slide-y">
            <NavComponent class="absolute" v-if="store.showNav"></NavComponent>
        </Transition>
        <RouterView />
    </div>
</template>
<script lang="ts" setup>
import NavComponent from './components/NavComponent.vue'
import { useStore } from './stores/index'
import anime from 'animejs/lib/anime.es.js'
const store = useStore()

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
</script>
