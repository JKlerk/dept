<template>
    <div>
        <NavComponent v-if="store.showNav"></NavComponent>
        <RouterView />
    </div>
</template>
<script lang="ts" setup>
import NavComponent from './components/NavComponent.vue'
import { useStore } from './stores/index'
const store = useStore()
</script>
