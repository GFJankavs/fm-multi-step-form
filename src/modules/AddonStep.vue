<script setup lang="ts">
import AddonCard from '../components/AddonCard.vue';
import StepHeader from '../components/StepHeader.vue';
import { addonOptions } from '../constants.ts';

const { isYearly = false } = defineProps<{
    isYearly?: boolean;
}>();

const selected = defineModel<string[]>('addons', { default: () => [] });

const toggleAddon = (id: string, checked: boolean) => {
    selected.value = checked
        ? [...new Set([...selected.value, id])]
        : selected.value.filter(a => a !== id);
};

</script>

<template>
    <div class="grid gap-300 md:gap-400 w-full">
        <StepHeader title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />
        <div class="grid gap-200">
            <AddonCard v-for="addon in addonOptions" :key="addon.id" :id="addon.id" :title="addon.title"
                :description="addon.description" :price="isYearly ? addon.priceYear : addon.priceMonth"
                :is-yearly="isYearly" :model-value="selected.includes(addon.id)"
                @update:model-value="(value) => toggleAddon(addon.id, value)" />
        </div>
    </div>
</template>