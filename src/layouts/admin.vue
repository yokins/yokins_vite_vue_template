<template>
    <a-layout>
        <a-layout-header :style="{ background: token.colorBgContainer }">
            <div class="flex rn aic"></div>
        </a-layout-header>
        <a-layout-content class="layout_content">
            <router-view></router-view>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import { theme } from "ant-design-vue";

const { useToken } = theme;
const { token } = useToken();
</script>

<style lang="scss" scoped>
.layout_content {
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 64px);
    box-sizing: border-box;
    padding: 15px 50px;
}
</style>
