<script setup lang="ts">
import classNames from 'classnames';

const { selected, icon, isYearly, price, label } = defineProps<{
    selected: boolean;
    icon: string;
    isYearly: boolean;
    price: number;
    label: string;
    id: string;
}>()

defineEmits(['onCardSelect'])
</script>

<template>
    <div @click="$emit('onCardSelect', id)" :class="classNames('cursor-pointer flex flex-row lg:flex-col md:justify-between md:items-center lg:items-start gap-200 p-200 rounded-lg border border-purple-200 active:border-purple-600', {
        'bg-blue-50 border-purple-600': selected,
    })">
        <div class="flex gap-200 lg:flex-col items-center lg:items-start">
            <img :src="icon" alt="Arcade" class="w-10 h-10">
            <div class="flex flex-col justify-center">
                <h3 class="text-preset-3-medium text-blue-950">{{ label }}</h3>
                <span class="text-preset-4 text-gray">{{ `$${price}/${isYearly ? "yr" : "mo"}` }}</span>
                <span v-if="isYearly" class="inline-block md:hidden lg:inline-block text-preset-5 text-blue-950">2
                    months
                    free</span>
            </div>
        </div>

        <span v-if="isYearly" class="hidden md:inline-block lg:hidden text-preset-5 text-blue-950">2 months
            free</span>
    </div>
</template>