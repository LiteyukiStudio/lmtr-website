<script setup lang="ts">
import {ref} from "vue"
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

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
        <div class="container">
            <Navbar :toggleSidebar="toggleSidebar"/>
            <Sidebar :isSidebarOpen="isSidebarOpen"/>
        </div>
        <router-view/>
    </div>

</template>

<style scoped>
.container {
    position: relative;
    z-index: 1;
}

</style>
