<script setup lang="ts">
import InputComponent from '../components/InputComponent.vue';
import type { PersonalInfo } from '../types/form';

const personal = defineModel<PersonalInfo>({ required: true });

</script>

<template>
    <div class="grid gap-300 md:gap-400">
        <div class="grid gap-100">
            <h1 class="text-preset-2 inline-block md:hidden text-blue-950">Personal info</h1>
            <h1 class="text-preset-1 hidden md:inline-block text-blue-950">Personal info</h1>
            <p class="text-gray text-preset-3">Please provide your name, email address, and phone number.</p>
        </div>
        <div class="grid gap-300">
            <InputComponent v-model="personal.name" type="text" required label="Name" id="name"
                placeholder="e.g. Stephen King" />
            <InputComponent v-model="personal.email" type="email" required label="Email" id="email"
                placeholder="e.g. stephenking@lorem.com" />
            <InputComponent v-model="personal.phone" type="phone" required label="Phone" id="phone"
                placeholder="e.g. +1 234 567 890" />
        </div>
    </div>
</template>