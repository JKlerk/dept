<template>
    <div>
        <div class="mx-auto max-w-7xl">
            <HeaderComponent></HeaderComponent>
            <div class="relative font-inter">
                <img class="" src="https://images.unsplash.com/photo-1672162723391-9fd523f02f69?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzQ4MTk3OA&ixlib=rb-4.0.3&q=80&w=1400" />
                <div class="absolute top-0 flex h-full w-full items-center justify-center">
                    <h1 class="font-teko text-9xl lg:ml-20 lg:mb-20">Work</h1>
                    <div class="m-20 hidden flex-1 justify-end self-end lg:flex">
                        <button class="place-self-end self-end bg-neutral-900 p-2 px-4 text-white transition-colors duration-100 hover:bg-neutral-800">View case</button>
                    </div>
                </div>
            </div>
            <div class="m-4 block lg:hidden">
                <p class="cursor-pointer bg-neutral-900 p-2 px-4 text-center uppercase text-white transition-colors duration-100 hover:bg-neutral-800">View case</p>
            </div>
            <div class="mt-4 flex">
                <div class="grid grid-cols-2 gap-x-4 px-2">
                    <button class="my-auto rounded-lg p-1">
                        <svg
                            @click="state.viewType = 'list'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 cursor-pointer hover:stroke-indigo-500"
                            :class="state.viewType === 'list' ? 'stroke-indigo-500' : 'stroke-neutral-800'"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="9" y1="6" x2="20" y2="6" />
                            <line x1="9" y1="12" x2="20" y2="12" />
                            <line x1="9" y1="18" x2="20" y2="18" />
                            <line x1="5" y1="6" x2="5" y2="6.01" />
                            <line x1="5" y1="12" x2="5" y2="12.01" />
                            <line x1="5" y1="18" x2="5" y2="18.01" />
                        </svg>
                    </button>
                    <button class="my-auto rounded-lg p-1">
                        <svg
                            @click="state.viewType = 'grid'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 cursor-pointer hover:stroke-indigo-500"
                            :class="state.viewType === 'grid' ? 'stroke-indigo-500' : 'stroke-neutral-800'"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="6" height="6" rx="1" />
                            <rect x="14" y="4" width="6" height="6" rx="1" />
                            <rect x="4" y="14" width="6" height="6" rx="1" />
                            <rect x="14" y="14" width="6" height="6" rx="1" />
                        </svg>
                    </button>
                </div>
                <div class="relative mr-2 flex flex-1 justify-end">
                    <button @click="state.toggleFilter = true" class="my-auto flex stroke-neutral-800 transition-colors duration-100 hover:stroke-indigo-500 hover:text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                        </svg>
                        <p class="my-auto" for="Active Filter">Filter</p>
                    </button>
                    <Transition name="slide-small">
                        <div v-if="state.toggleFilter" class="absolute top-12 z-10 w-64 space-y-4 rounded-lg bg-neutral-900 p-5 font-inter">
                            <div class="flex">
                                <p class="font-bold text-white">Category</p>
                                <div class="flex flex-1 justify-end">
                                    <button class="transition-transform duration-100 hover:scale-125" @click="state.toggleFilter = false">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer stroke-white" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button @click="setFilter('')" :class="state.activeFilter === '' ? 'text-white' : 'text-neutral-700'" class="cursor-pointer rounded-lg p-2 text-sm text-white hover:bg-neutral-800">All cases</button>
                            <button
                                @click="setFilter(item)"
                                :class="state.activeFilter === item ? 'bg-neutral-800 text-white' : 'text-neutral-700'"
                                class="block cursor-pointer rounded-lg p-2 text-sm hover:bg-neutral-800"
                                :key="item"
                                v-for="item in state.categories"
                            >
                                {{ item }}
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="mt-10 grid gap-8 px-4 lg:px-0" :class="state.viewType === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'">
                <TransitionGroup name="list">
                    <CaseComponent :view-type="state.viewType" :key="item.id" v-for="item in activeCases" :case="item"></CaseComponent>
                </TransitionGroup>
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
            <button @click="scrollToTop" class="absolute bottom-0 right-0 col-span-1 hidden h-full w-1/12 cursor-pointer items-center justify-center bg-white lg:flex">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 stroke-indigo-500" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="16" y1="9" x2="12" y2="5" />
                        <line x1="8" y1="9" x2="12" y2="5" />
                    </svg>
                    <h1 class="text-center font-teko text-2xl text-indigo-500">TOP</h1>
                </div>
            </button>
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
import { computed, onMounted, reactive } from 'vue'
import type { Case } from '@/domain/Case'

const state = reactive({
    allCases: [] as Case[],
    categories: [] as string[],
    activeFilter: '',
    toggleFilter: false,
    viewType: 'grid',
})

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

onMounted(() => {
    state.allCases = cases
    getCategories()
})

const activeCases = computed(() => {
    if (state.activeFilter === '') return state.allCases
    const result = state.allCases.filter((x) => x.category === state.activeFilter)
    if (result === undefined) return state.allCases
    return result
})

function getCategories() {
    for (let index = 0; index < cases.length; index++) {
        const item = cases[index]
        if (state.categories.find((x) => x === item.category)) continue
        state.categories.push(item.category)
    }
}

function setFilter(value: string) {
    state.activeFilter = value
    state.toggleFilter = false
}
</script>
