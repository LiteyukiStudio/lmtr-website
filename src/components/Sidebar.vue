<script setup lang="ts">
import {defineProps} from "vue";
import logo from "../assets/logo.png";
import router from "../router/index.ts"

const props = defineProps({
    isSidebarOpen: Boolean
});
// 遍历路由
const routes = router.getRoutes();
// 修改sidedar的options
const sidebarOptions = routes.map((route) => {
    return {
        name: route.name,
        path: route.path,
    }
})


</script>

<template>
    <div class="sidebar" :class="{'open': props.isSidebarOpen}">
        <div class="sidebar-header">
            <img id="logo" :src="logo" alt="logo"/>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-options">
                <router-link v-for="option in sidebarOptions" :key="option.name" :to="option.path">
                    {{ option.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
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

.sidebar-content {
    padding-left: 20px;
}

.sidebar-options > * {
    display: block;
}

a {
    color: #333;
    text-decoration: none;
    margin-bottom: 10px;
}
</style>