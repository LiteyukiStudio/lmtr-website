<script setup lang="ts">
import {defineProps} from "vue";
import logo from "../assets/logo.png";

const props = defineProps({
    isSidebarOpen: Boolean
});

</script>

<template>
    <div class="sidebar" :class="{'open': props.isSidebarOpen}">
        <div class="sidebar-header">
            <img id="logo" :src="logo" alt="logo"/>
        </div>
        <div class="sidebar-content">
            <div class="option">首页</div>
            <div class="option">关于</div>
            <div class="option">疑问</div>
            <div class="option">加入</div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: var(--white-color);
    transform: translateX(-100%);
    transition: transform 0.3s;
}

#logo {
    height: 80px;
}

.sidebar {
    /* ... */
    transform: translateX(-100%);
    transition: transform 0.3s;
}

.sidebar.open {
    box-shadow: 8px 0 8px rgba(0, 0, 0, 0.4);
    transform: translateX(0);
}

.sidebar-content{
    padding-left: 20px;
}
</style>