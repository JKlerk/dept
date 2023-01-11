<template>
    <div class="font-teko">
        <img class="w-64" :src="props.case.src" />
        <div class="space-y-3 mt-2">
            <p class="text-gray-400 font-inter uppercase text-xs font-bold">{{ props.case.company }}</p>
            <p class="text-2xl">{{ props.case.name }}</p>
            <div class="flex text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-blue-500" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
                </svg>
                <p class="my-auto uppercase">View case</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Case } from '@/domain/Case'
import type { PropType } from 'vue'
const props = defineProps({
    case: {
        type: Object as PropType<Case>,
        required: true,
    },
})
</script>
