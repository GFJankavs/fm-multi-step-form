<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>

<template>
    <div class="grid gap-100">
        <h1 class="text-preset-2 inline-block md:hidden text-blue-950">{{ title }}</h1>
        <h1 class="text-preset-1 hidden md:inline-block text-blue-950">{{ title }}</h1>
        <p class="text-gray text-preset-3">{{ subtitle }}</p>
    </div>
</template>
