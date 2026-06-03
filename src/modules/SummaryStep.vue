<script setup lang="ts">
import { computed } from 'vue';
import { addonOptions, planOptions } from '../constants';
import type { FormData } from '../types/form';
import StepHeader from '../components/StepHeader.vue';
import { formatPrice, periodLabel } from '../utils/price';

const { formData } = defineProps<{
    formData: FormData;
}>();

defineEmits(["changePlan"]);

const selectedPlan = computed(() => {
    if (!formData.plan) return null;
    const plan = planOptions.find(p => p.id === formData.plan);
    if (!plan) return null;
    return { ...plan, price: formData.yearly ? plan.priceYearly : plan.priceMonthly };
});

const selectedAddons = computed(() =>
    formData.addons
        .map(id => addonOptions.find(a => a.id === id))
        .filter((a): a is NonNullable<typeof a> => a !== undefined)
        .map(addon => ({ ...addon, price: formData.yearly ? addon.priceYear : addon.priceMonth }))
);

const totalPrice = computed(() => {
    const planPrice = selectedPlan.value?.price ?? 0;
    return selectedAddons.value.reduce((sum, addon) => sum + addon.price, planPrice);
});

const longPeriod = computed(() => periodLabel(formData.yearly, true));
</script>

<template>
    <div class="grid gap-300 md:gap-400 w-full">
        <StepHeader title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
        <div class="p-200 rounded-lg bg-blue-50 grid gap-200">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-preset-4-medium text-blue-950">{{ `${selectedPlan?.label} (${formData.yearly ?
                        'Yearly' : 'Monthly'})` }}</h4>
                    <button type="button" class="text-preset-4 text-gray underline hover:text-purple-600 cursor-pointer rounded outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                        @click="$emit('changePlan')">Change</button>
                </div>
                <span class="text-preset-4-bold text-blue-950">{{ selectedPlan ? formatPrice(selectedPlan.price,
                    formData.yearly) : '' }}</span>
            </div>
            <div class="h-px w-full opacity-20 bg-gray" />
            <div class="grid gap-200">
                <div v-for="addon in selectedAddons" :key="addon.id" class="flex items-center justify-between">
                    <span class="text-preset-4 text-gray">{{ addon.title }}</span>
                    <span class="text-preset-4 text-blue-950">+{{ formatPrice(addon.price, formData.yearly) }}</span>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between px-4">
            <span class="text-preset-4 text-gray">{{ `Total price (per ${longPeriod})` }}</span>
            <span class="text-preset-4-bold text-purple-600">{{ formatPrice(totalPrice, formData.yearly) }}</span>
        </div>
    </div>
</template>
