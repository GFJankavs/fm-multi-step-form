<script setup lang="ts">
import classNames from 'classnames';

const { variant, disabled } = defineProps<{
    variant: "primary" | "secondary" | "additional"
    disabled?: boolean;
}>()

defineEmits(['onButtonClick']);

</script>

<template>
    <button @click="$emit('onButtonClick')" :disabled="disabled" :aria-disabled="disabled" :class="classNames('cursor-pointer disabled:cursor-not-allowed text-preset-3-medium rounded-lg inline-flex items-center justify-center', {
        'px-300 py-200 text-white': variant === 'primary' || variant === 'secondary',
        'bg-blue-950 active:bg-blue-700': variant === 'primary',
        'bg-purple-600 active:bg-purple-400': variant === 'secondary',
        'text-gray active:text-blue-950': variant === 'additional'
    })">
        <slot></slot>
    </button>
</template>