<script setup lang="ts">
import classNames from 'classnames';

const { variant, disabled } = defineProps<{
    variant: "primary" | "secondary" | "additional"
    disabled?: boolean;
}>()

defineEmits(['onButtonClick']);

</script>

<template>
    <button @click="$emit('onButtonClick')" :disabled="disabled" :aria-disabled="disabled" :class="classNames('cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-preset-3-medium rounded-lg inline-flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2', {
        'px-300 py-200 text-white': variant === 'primary' || variant === 'secondary',
        'bg-blue-950 active:bg-blue-700': variant === 'primary',
        'bg-purple-600 active:bg-purple-400': variant === 'secondary',
        'text-gray active:text-blue-950': variant === 'additional'
    })">
        <slot></slot>
    </button>
</template>