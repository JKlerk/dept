<template>
    <div>
        <div class="max-w-7xl mx-auto">
            <HeaderComponent></HeaderComponent>
            <div class="grid grid-cols-3 gap-8 mt-10">
                <CaseComponent :key="item.id" v-for="item in cases" :case="item"></CaseComponent>
            </div>
        </div>
        <FooterComponent class="mt-20"></FooterComponent>
    </div>
</template>
<script lang="ts" setup>
import CaseComponent from '@/components/CaseComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { cases } from '@/data'
</script>
