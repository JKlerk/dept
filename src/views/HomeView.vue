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
        <div class="relative">
            <FooterComponent></FooterComponent>
            <div @click="scrollToTop" class="absolute bottom-0 right-0 col-span-1 hidden h-full w-1/12 cursor-pointer items-center justify-center bg-white lg:flex">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 stroke-indigo-500" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="16" y1="9" x2="12" y2="5" />
                        <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                    <h1 class="text-center font-teko text-2xl text-indigo-500">TOP</h1>
                </div>
            </div>
        </div>
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

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}
</script>
