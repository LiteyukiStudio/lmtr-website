<script setup lang="ts">
import { defineProps } from "vue";
import logo from "../assets/logo.png";
import sidebarButton from "../assets/ui/sidebarButton.svg";

const props = defineProps({
    toggleSidebar: {
        type: Object as () => { (payload: MouseEvent): void },
        required: true,
        validator: (value: any): boolean => typeof value === 'function'
    }
});

</script>

<template>
    <!--    三部分 左 点击侧栏, 中 logo, 右 语言-->
    <div class="navbar">
        <div class="navbar-left">
            <img id="sidebar-button" :src="sidebarButton" alt="sidebar" @click.stop="props.toggleSidebar"/>
        </div>
        <div class="navbar-center">
            <img id="logo" :src="logo" alt="logo"/>
        </div>
        <div class="navbar-right">

        </div>
    </div>
</template>

<style scoped>
.navbar {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left img {
    height: 50px;
}

.navbar-left,
.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-center img {
    height: 80px;
}

</style>