<template>
    <div>
        <div v-if="props.viewType === 'grid'" class="mx-auto w-full font-teko md:w-64">
            <img class="w-48 md:w-64" :src="props.case.src" />
            <div class="mt-2 space-y-3">
                <p class="font-inter text-xs font-bold uppercase text-gray-400">{{ props.case.company }}</p>
                <p class="truncate text-2xl">{{ props.case.name }}</p>
                <p class="my-auto uppercase text-blue-500">View case</p>
            </div>
        </div>
        <div v-else class="flex gap-x-4 rounded-lg border border-neutral-200 p-2 font-inter">
            <div>
                <img class="h-12 w-12 rounded-lg" :src="props.case.src" />
            </div>
            <div>
                <h1>{{ props.case.name }}</h1>
                <p class="text-sm text-neutral-400">{{ props.case.company }}</p>
            </div>
            <div class="my-auto flex flex-1 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-8 w-8 stroke-neutral-300" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
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
    viewType: {
        type: String,
        required: false,
        default: 'grid',
    },
})
</script>
