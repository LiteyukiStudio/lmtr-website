<script setup lang="ts">
import map from "../assets/system-plan.png"
</script>

<template>
<div class="content" id="content-map">
    <h2>LMTR System Plan</h2>
    <img class="map" :src="map" alt="system-plan">
</div>
</template>

<style scoped>
h2 {
    margin-top: 0;
    text-align: center;
}

.map{
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: block;
}
</style>