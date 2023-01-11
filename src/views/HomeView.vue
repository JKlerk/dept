<template>
    <div>
        <div class="mx-auto max-w-7xl">
            <HeaderComponent></HeaderComponent>
            <div class="mt-10 grid grid-cols-2 gap-8 px-4 lg:grid-cols-3 lg:px-0">
                <CaseComponent :key="item.id" v-for="item in cases" :case="item"></CaseComponent>
            </div>
        </div>
        <div class="mt-20 bg-gray-100 py-20">
            <div class="mx-auto max-w-7xl">
                <div class="space-y-4 text-center">
                    <h1 class="font-teko text-5xl font-light uppercase">Clients</h1>
                    <div class="mx-auto px-4 lg:w-1/2 lg:px-0">
                        <p class="">We value a great working relationship with our clients above all else. It's why they often come with our parties. It's also why we're able to challenge and inspire them to reach for the stars.</p>
                    </div>
                </div>
                <div class="mt-20 grid grid-cols-2 lg:grid-cols-4">
                    <NiveaLogo class="mx-auto h-36 w-36"></NiveaLogo>
                    <TransaviaLogo class="mx-auto h-36 w-36"></TransaviaLogo>
                    <ZalandoLogo class="mx-auto h-36 w-36"></ZalandoLogo>
                    <TomTomLogo class="mx-auto h-36 w-36"></TomTomLogo>
                    <MicrosoftLogo class="mx-auto hidden h-36 w-36 lg:block"></MicrosoftLogo>
                    <KlmLogo class="mx-auto hidden h-36 w-36 lg:block"></KlmLogo>
                    <AbnAmroLogo class="mx-auto hidden h-36 w-36 lg:block"></AbnAmroLogo>
                    <PatheLogo class="mx-auto hidden h-36 w-36 lg:block"></PatheLogo>
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
