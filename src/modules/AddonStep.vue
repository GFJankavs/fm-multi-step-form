<script setup lang="ts">
import AddonCard from '../components/AddonCard.vue';
import { addonOptions } from '../constants.ts';

const { isYearly = false } = defineProps<{
    isYearly?: boolean;
}>();

const selected = defineModel<string[]>('addons', { default: () => [] });

const toggleAddon = (id: string, value: boolean) => {
    if (value) {
        if (!selected.value.includes(id)) selected.value = [...selected.value, id];
    } else {
        selected.value = selected.value.filter((addonId) => addonId !== id);
    }
};

</script>

<template>
    <div class="grid gap-300 md:gap-400">
        <div class="grid gap-100">
            <h1 class="text-preset-2 inline-block md:hidden text-blue-950">Pick add-ons</h1>
            <h1 class="text-preset-1 hidden md:inline-block text-blue-950">Pick add-ons</h1>
            <p class="text-gray text-preset-3">Add-ons help enhance your gaming experience.</p>
        </div>
        <div class="grid gap-200">
            <AddonCard v-for="addon in addonOptions" :key="addon.id" :id="addon.id" :title="addon.title"
                :description="addon.description" :price="isYearly ? addon.priceYear : addon.priceMonth"
                :is-yearly="isYearly" :model-value="selected.includes(addon.id)"
                @update:model-value="(value) => toggleAddon(addon.id, value)" />
        </div>
    </div>
</template>