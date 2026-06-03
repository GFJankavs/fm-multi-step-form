<script setup lang="ts">
import classNames from 'classnames';

const { id, label, ariaLabel, disabled } = defineProps<{
    id: string;
    label?: string;
    ariaLabel?: string;
    disabled?: boolean;
}>();

const model = defineModel<boolean>({ default: false });
</script>

<template>
    <label :for="id" :class="classNames(
        'inline-flex items-center gap-200 select-none',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
    )">
        <input :id="id" type="checkbox" v-model="model" :disabled="disabled" :aria-label="label ? undefined : ariaLabel"
            class="peer sr-only" />
        <span :class="classNames(
            'grid place-items-center h-5 w-5 shrink-0 rounded border transition-colors',
            'border-purple-200 bg-white',
            'peer-checked:border-purple-600 peer-checked:bg-purple-600',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-purple-400 peer-focus-visible:ring-offset-2',
        )">
            <svg v-show="model" class="h-[9px] w-3" width="12" height="9" viewBox="0 0 12 9" aria-hidden="true">
                <path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" />
            </svg>
        </span>
        <span v-if="label" class="text-preset-4 text-blue-950">{{ label }}</span>
    </label>
</template>
