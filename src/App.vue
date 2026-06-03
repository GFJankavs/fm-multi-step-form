<script setup lang="ts">
import StepWrapper from './modules/StepWrapper.vue';
import PersonalStep from './modules/PersonalStep.vue';
import { reactive, ref } from 'vue';
import PlanStep from './modules/PlanStep.vue';
import AddonStep from './modules/AddonStep.vue';
import type { FormData } from './types/form';
import SummaryStep from './modules/SummaryStep.vue';

const currentStep = ref(1);

const formData = reactive<FormData>({
  personal: {
    name: '',
    email: '',
    phone: ''
  },
  yearly: false,
  plan: null,
  addons: []
})

const handleStepChange = (value: number) => {
  currentStep.value = value;
}

</script>

<template>
  <StepWrapper :current-step="currentStep" @on-next-step="handleStepChange" @on-step-back="handleStepChange">
    <PersonalStep v-if="currentStep === 1" v-model="formData.personal" />
    <PlanStep v-if="currentStep === 2" v-model:plan="formData.plan" v-model:yearly="formData.yearly" />
    <AddonStep v-if="currentStep === 3" v-model:addons="formData.addons" :is-yearly="formData.yearly" />
    <SummaryStep v-if="currentStep === 4" />
  </StepWrapper>
</template>
