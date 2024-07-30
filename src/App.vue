<script setup lang="ts">
import {ref} from "vue"
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

let isSidebarOpen = ref(false)
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
    isSidebarOpen.value = false
}
</script>

<template>
    <div @click="closeSidebar" :class="{shadow: isSidebarOpen}">

        <Navbar :toggleSidebar="toggleSidebar"/>
        <Sidebar :isSidebarOpen="isSidebarOpen"/>

        <Content/>
    </div>

</template>

<style scoped>
.shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
