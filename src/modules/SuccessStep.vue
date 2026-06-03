<script setup lang="ts">
import successImg from "../assets/images/icon-thank-you.svg";
</script>

<template>
    <div
        class="flex flex-col items-center h-full w-full justify-center gap-300 md:gap-400 md:max-w-[320px] max-md:py-[80px] max-md:px-300">
        <img :src="successImg" alt="Thank you" />
        <div class="grid gap-100 md:gap-200 text-center">
            <h1 class="text-preset-2 md:text-preset-1 text-blue-950">Thank you!</h1>
            <p class="text-gray text-preset-3">Thanks for confirming your subscription! We hope you have fun using our
                platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
</template>