<template>
    <div>
        <div class="max-w-7xl mx-auto">
            <HeaderComponent></HeaderComponent>
            <div class="grid grid-cols-3 gap-8 mt-10">
                <CaseComponent :key="item.id" v-for="item in cases" :case="item"></CaseComponent>
            </div>
        </div>
        <div class="bg-gray-100 py-20 mt-20">
            <div class="max-w-7xl mx-auto">
                <div class="text-center space-y-4">
                    <h1 class="text-5xl font-teko font-light uppercase">Clients</h1>
                    <div class="w-1/2 mx-auto">
                        <p class="">We value a great working relationship with our clients above all else. It's why they often come with our parties. It's also why we're able to challenge and inspire them to reach for the stars.</p>
                    </div>
                </div>
                <div class="grid grid-cols-4 mt-20">
                    <NiveaLogo class="w-36 h-36 mx-auto"></NiveaLogo>
                    <TransaviaLogo class="w-36 h-36 mx-auto"></TransaviaLogo>
                    <ZalandoLogo class="w-36 h-36 mx-auto"></ZalandoLogo>
                    <TomTomLogo class="w-36 h-36 mx-auto"></TomTomLogo>
                    <MicrosoftLogo class="w-36 h-36 mx-auto"></MicrosoftLogo>
                    <KlmLogo class="w-36 h-36 mx-auto"></KlmLogo>
                    <AbnAmroLogo class="w-36 h-36 mx-auto"></AbnAmroLogo>
                    <PatheLogo class="w-36 h-36 mx-auto"></PatheLogo>
                </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script lang="ts" setup>
import CaseComponent from '@/components/CaseComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NiveaLogo from '@/components/icons/NiveaLogo.vue'
import TransaviaLogo from '@/components/icons/TransaviaLogo.vue'
import ZalandoLogo from '@/components/icons/ZalandoLogo.vue'
import TomTomLogo from '@/components/icons/UnileverLogo.vue'
import MicrosoftLogo from '@/components/icons/MicrosoftLogo.vue'
import KlmLogo from '@/components/icons/KlmLogo.vue'
import AbnAmroLogo from '@/components/icons/AbnAmroLogo.vue'
import PatheLogo from '@/components/icons/PatheLogo.vue'
import { cases } from '@/data'
</script>
