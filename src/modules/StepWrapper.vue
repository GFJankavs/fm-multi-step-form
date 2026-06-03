<script setup lang="ts">
import classNames from "classnames";
import heroBgMobile from "../assets/images/bg-sidebar-mobile.svg";
import heroBgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import ButtonComponent from "../components/ButtonComponent.vue";
import { reactive } from "vue";

const { currentStep } = defineProps<{
    currentStep: number;
}>()

const emit = defineEmits(['onStepBack', 'onNextStep']);

const handleStepChange = (direction: 'back' | 'next') => {
    if (direction === 'back' && currentStep > 1) {
        emit('onStepBack', currentStep - 1);
    } else if (direction === 'next' && currentStep < 5) {
        emit('onNextStep', currentStep + 1);
    }
}

const steps = reactive([
    {
        id: 1,
        label: "Your Info"
    },
    {
        id: 2,
        label: "Select Plan"
    },
    {
        id: 3,
        label: "Add-Ons"
    },
    {
        id: 4,
        label: "Summary"
    }
])

</script>

<template>
    <main class="md:flex items-center justify-center bg-blue-100 min-h-screen">
        <div id="content_mobile" class="flex flex-col min-h-screen h-full md:hidden">
            <header>
                <img :src="heroBgMobile" alt="Form Background" class="w-full h-[172px] object-cover" />
            </header>
            <div class="flex-1 h-full -mt-[140px] px-200">
                <div class="flex flex-col items-center gap-400">
                    <div class="flex justify-center items-center gap-200">
                        <span v-for="number in steps" :key="number.id" :class="classNames('flex items-center justify-center w-[33px] h-[33px] text-preset-4-bold border rounded-full', {
                            'border-white text-white bg-transparent': currentStep !== number.id,
                            'bg-blue-200 border-blue-200 text-blue-950': currentStep === number.id
                        })">{{ number.id }}</span>
                    </div>
                    <div
                        class="w-full py-400 px-300 rounded-[10px] bg-white shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)]">
                        <slot></slot>
                    </div>
                </div>
            </div>
            <footer class="p-200 flex justify-end items-center w-full bg-white">
                <ButtonComponent @on-button-click="() => handleStepChange('back')"
                    v-if="currentStep > 1 && currentStep < 5" variant="additional" class="mr-auto">Go
                    Back</ButtonComponent>
                <ButtonComponent @on-button-click="() => handleStepChange('next')" v-if="currentStep < 5"
                    variant="primary">Next Step</ButtonComponent>
            </footer>
        </div>
        <div
            class="hidden md:flex items-center justify-between md:gap-[82px] bg-white md:shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:rounded-[15px] overflow-hidden w-full max-w-[940px]">
            <div class="flex items-center bg-white gap-10">
                <div class="p-200 w-full md:w-[238px] h-[600px] lg:w-[306px]">
                    <div class="relative w-full h-full">
                        <img id="hero_desktop_img" :src="heroBgDesktop" alt="Form Background"
                            class="absolute inset-0 w-full h-full object-cover rounded-[10px]">
                        <div class="absolute top-10 left-8 grid gap-400">
                            <div v-for="step in steps" :key="step.id" class="flex items-center gap-200">
                                <span :class="classNames('flex items-center justify-center w-[33px] h-[33px] text-preset-4-bold border rounded-full', {
                                    'border-white text-white bg-transparent': currentStep !== step.id,
                                    'bg-blue-200 border-blue-200 text-blue-950': currentStep === step.id
                                })">{{ step.id }}</span>
                                <div class="flex flex-col">
                                    <h5 class="text-preset-5 text-blue-300 uppercase">{{ `Step ${step.id}` }}</h5>
                                    <h4 class="text-white text-preset-4-bold uppercase">{{ step.label }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-[600px] py-12 pr-[58px]  bg-white w-full flex-col justify-between">
                <slot></slot>
                <footer class="flex justify-end items-center w-full">
                    <ButtonComponent @on-button-click="() => handleStepChange('back')"
                        v-if="currentStep > 1 && currentStep < 5" variant="additional" class="mr-auto">Go
                        Back</ButtonComponent>
                    <ButtonComponent @on-button-click="() => handleStepChange('next')" v-if="currentStep < 5"
                        variant="primary">Next Step</ButtonComponent>
                </footer>
            </div>
        </div>
    </main>
</template>