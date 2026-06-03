<script setup lang="ts">
import StepWrapper from './modules/StepWrapper.vue';
import PersonalStep from './modules/PersonalStep.vue';
import { reactive, ref } from 'vue';
import PlanStep from './modules/PlanStep.vue';
import AddonStep from './modules/AddonStep.vue';
import type { FormData } from './types/form';
import SummaryStep from './modules/SummaryStep.vue';
import SuccessStep from './modules/SuccessStep.vue';

const currentStep = ref(1);
const isSuccess = ref(false);
const errors = reactive({
  personal: {
    name: '',
    email: '',
    phone: ''
  },
  plan: '',
  addons: ''
})

const canProceed = (step: number, data: FormData) => {
  switch (step) {
    case 2:
      return !!data.plan;
    default:
      return true;
  }
}

const validateForm = (step: number, data: FormData) => {
  switch (step) {
    case 1: {
      if (!data.personal.name) {
        errors.personal.name = 'Name is required';
        return false;
      } else {
        errors.personal.name = '';
      }
      if (!data.personal.email) {
        errors.personal.email = 'Email is required';
        return false;
      } else {
        errors.personal.email = '';
      }
      if (!data.personal.phone) {
        errors.personal.phone = 'Phone is required';
        return false;
      } else {
        errors.personal.phone = '';
      }
      return true;
    }
    case 2: {
      if (!data.plan) {
        errors.plan = 'Please select a plan';
        return false;
      } else {
        errors.plan = '';
      }
      return true;
    }
  }
  return true;
}

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
  const result = validateForm(currentStep.value, formData);
  if (!result) return;
  if (currentStep.value === 4) {
    isSuccess.value = true;
  } else {
    currentStep.value = value;
  }
}

</script>

<template>
  <StepWrapper :current-step="currentStep" @on-next-step="handleStepChange" @on-step-back="handleStepChange"
    :next-disabled="!canProceed(currentStep, formData)" :is-end="isSuccess">
    <PersonalStep v-if="currentStep === 1 && !isSuccess" v-model="formData.personal" :errors="errors.personal" />
    <PlanStep v-if="currentStep === 2 && !isSuccess" v-model:plan="formData.plan" v-model:yearly="formData.yearly" />
    <AddonStep v-if="currentStep === 3 && !isSuccess" v-model:addons="formData.addons" :is-yearly="formData.yearly" />
    <SummaryStep v-if="currentStep === 4 && !isSuccess" :formData="formData" />
    <SuccessStep v-if="isSuccess" />
  </StepWrapper>
</template>
