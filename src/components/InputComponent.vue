<script setup lang="ts">
const { error, id, label, type = "text", placeholder, required } = defineProps<{
    error?: string;
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}>();

const model = defineModel<string>();
</script>

<template>
    <div class="grid gap-100 w-full">
        <div class="flex items-center justify-between w-full">
            <label :for="id" class="text-preset-4 text-blue-950">{{
                label
            }}</label>
            <span v-if="error" :id="`${id}-error`" class="text-preset-4-bold text-red-500">{{
                error
            }}</span>
        </div>
        <input :required="required" :id="id" v-model="model" :type="type" :placeholder="placeholder"
            :aria-invalid="!!error" :aria-describedby="error ? `${id}-error` : undefined" :class="[
                'py-100 px-200 rounded-lg border caret-blue-950 text-blue-950 outline-none text-preset-3-medium',
                error ? 'border-red-500' : 'border-purple-200 focus:border-purple-600',
            ]" />
    </div>
</template>
