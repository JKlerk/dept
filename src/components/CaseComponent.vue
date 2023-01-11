<template>
    <div class="font-teko">
        <img class="w-64" :src="props.case.src" />
        <div class="space-y-3 mt-2">
            <p class="text-gray-400 font-inter uppercase text-xs font-bold">{{ props.case.company }}</p>
            <p class="text-2xl">{{ props.case.name }}</p>
            <p class="my-auto uppercase text-blue-500">View case</p>
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
