<script setup lang="ts">
import classNames from 'classnames';
import { formatPrice } from '../utils/price';

const { selected, icon, isYearly, price, label, id } = defineProps<{
    selected: boolean;
    icon: string;
    isYearly: boolean;
    price: number;
    label: string;
    id: string;
    tabindex?: number;
}>()

const emit = defineEmits(['onCardSelect'])

const select = () => emit('onCardSelect', id);

const onKeydown = (event: KeyboardEvent) => {
    const el = event.currentTarget as HTMLElement;
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            select();
            break;
        case 'ArrowRight':
        case 'ArrowDown': {
            event.preventDefault();
            const next = el.nextElementSibling as HTMLElement | null;
            next?.focus();
            next?.click();
            break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
            event.preventDefault();
            const prev = el.previousElementSibling as HTMLElement | null;
            prev?.focus();
            prev?.click();
            break;
        }
    }
}
</script>

<template>
    <div @click="select" @keydown="onKeydown" role="radio" :aria-checked="selected" :aria-label="label"
        :tabindex="tabindex ?? 0" :class="classNames('cursor-pointer flex flex-row lg:flex-col md:justify-between md:items-center lg:items-start gap-200 p-200 rounded-lg border border-purple-200 active:border-purple-600 outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2', {
        'bg-blue-50 border-purple-600': selected,
    })">
        <div class="flex gap-200 lg:flex-col items-center lg:items-start">
            <img :src="icon" alt="Arcade" class="w-10 h-10">
            <div class="flex flex-col justify-center">
                <h3 class="text-preset-3-medium text-blue-950">{{ label }}</h3>
                <span class="text-preset-4 text-gray">{{ formatPrice(price, isYearly) }}</span>
                <span v-if="isYearly" class="inline-block md:hidden lg:inline-block text-preset-5 text-blue-950">2
                    months
                    free</span>
            </div>
        </div>

        <span v-if="isYearly" class="hidden md:inline-block lg:hidden text-preset-5 text-blue-950">2 months
            free</span>
    </div>
</template>