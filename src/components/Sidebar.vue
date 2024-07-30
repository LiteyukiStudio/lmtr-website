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
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #fff;
    box-shadow: 40px 0 40px rgba(0, 0, 0, 0.1);
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
    transform: translateX(0);
}
</style>