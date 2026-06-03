<script setup lang="ts">
import InputComponent from '../components/InputComponent.vue';
import StepHeader from '../components/StepHeader.vue';
import type { PersonalInfo } from '../types/form';

const props = defineProps<{
    errors: {
        name: string;
        email: string;
        phone: string;
    }
}>();

const personal = defineModel<PersonalInfo>({ required: true });

</script>

<template>
    <div class="grid gap-300 md:gap-400">
        <StepHeader title="Personal info" subtitle="Please provide your name, email address, and phone number." />
        <div class="grid gap-300">
            <InputComponent v-model="personal.name" type="text" required label="Name" id="name"
                placeholder="e.g. Stephen King" :error="errors.name.length > 0 ? errors.name : undefined" />
            <InputComponent v-model="personal.email" type="email" required label="Email" id="email"
                placeholder="e.g. stephenking@lorem.com" :error="errors.email.length > 0 ? errors.email : undefined" />
            <InputComponent v-model="personal.phone" type="phone" required label="Phone" id="phone"
                placeholder="e.g. +1 234 567 890" :error="errors.phone.length > 0 ? errors.phone : undefined" />
        </div>
    </div>
</template>