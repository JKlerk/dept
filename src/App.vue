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
    console.log('AFter enter called')
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
<style>
.slide-y-enter-active {
    @apply -translate-y-full transform transition duration-500 ease-out;
}

.slide-y-enter-to {
    @apply translate-y-0;
}

.slide-y-leave-active {
    @apply transition duration-500 ease-in;
}

.slide-y-leave-to {
    @apply -translate-y-full transition duration-500;
}
</style>
