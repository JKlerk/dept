<template>
    <div class="flex flex-1 justify-end border-b border-neutral-600">
        <div v-if="isCurrentRoute(props.name)" class="my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white md:h-12 md:w-12" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
            </svg>
        </div>
        <h1 class="text-5xl md:text-7xl">{{ props.name }}</h1>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})

const route = useRoute()

function isCurrentRoute(name: string) {
    return route.name === name.toLocaleLowerCase()
}
</script>
