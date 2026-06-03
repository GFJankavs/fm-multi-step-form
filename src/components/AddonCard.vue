<script setup lang="ts">
import classNames from 'classnames';
import CheckboxComponent from './CheckboxComponent.vue';

const { id, title, description, price, isYearly = false } = defineProps<{
    id: string;
    title: string;
    description: string;
    price: number;
    isYearly?: boolean;
}>();

const selected = defineModel<boolean>({ default: false });
</script>

<template>
    <div @click="selected = !selected" :class="classNames('cursor-pointer flex items-center justify-between py-200 px-300 rounded-lg border transition-colors', {
        'border-purple-200 hover:border-purple-600': !selected,
        'border-purple-600 bg-blue-50': selected
    })">
        <div class="flex items-center gap-300">
            <CheckboxComponent :id="`addon-${id}`" :aria-label="title" v-model="selected" @click.stop />
            <div class="flex flex-col">
                <h3 class="text-preset-3-medium text-blue-950">{{ title }}</h3>
                <p class="text-preset-4 text-gray">{{ description }}</p>
            </div>
        </div>
        <span class="text-preset-4 text-purple-600">+${{ price }}/{{ isYearly ? 'yr' : 'mo' }}</span>
    </div>
</template>
