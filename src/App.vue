<template>
    <a-config-provider>
        <router-view></router-view>
    </a-config-provider>
</template>

<script setup>
import { useSystemStore } from "@/stores/system.js";

const systemStore = useSystemStore();
systemStore.changeLocale();
</script>
