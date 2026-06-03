<script setup lang="ts">
const { leftLabel = "Monthly", rightLabel = "Yearly" } = defineProps<{
    leftLabel?: string;
    rightLabel?: string;
}>();

const model = defineModel<boolean>({ default: false });

</script>

<template>
    <div class="flex items-center justify-center gap-300 py-200 px-400 rounded-lg bg-blue-50">
        <span class="text-preset-4-bold select-none" :class="model ? 'text-gray' : 'text-blue-950'">{{
            leftLabel
            }}</span>
        <button type="button" role="switch" :aria-checked="model"
            :aria-label="`Switch between ${leftLabel} and ${rightLabel}`" @click="model = !model"
            class="relative h-5 w-[38px] shrink-0 rounded-full bg-blue-950 cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
            <span class="absolute top-1 h-3 w-3 rounded-full bg-white transition-all duration-200"
                :class="model ? 'left-[22px]' : 'left-1'"></span>
        </button>
        <span class="text-preset-4-bold select-none" :class="model ? 'text-blue-950' : 'text-gray'">{{
            rightLabel
            }}</span>
    </div>
</template>
