<script setup lang="ts">

import CardComponent from '../components/CardComponent.vue';
import ToggleComponent from '../components/ToggleComponent.vue';
import StepHeader from '../components/StepHeader.vue';
import { planOptions } from '../constants.ts';

const plan = defineModel<string | null>('plan', { default: null });
const yearly = defineModel<boolean>('yearly', { default: false });

const handleOptionSelect = (id: string) => {
    plan.value = id;
}

</script>

<template>
    <div class="grid gap-300 md:gap-400">
        <StepHeader title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-100">
            <CardComponent v-for="option in planOptions" :key="option.id" :selected="plan === option.id"
                :icon="option.icon" :label="option.label" :price="yearly ? option.priceYearly : option.priceMonthly"
                :is-yearly="yearly" :id="option.id" @on-card-select="handleOptionSelect" />
        </div>
        <ToggleComponent v-model="yearly" />
    </div>
</template>