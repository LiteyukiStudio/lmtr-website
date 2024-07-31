<script setup lang="ts">
import map from "../assets/system-plan.png"
</script>

<template>
<div class="content" id="content-map">
    <h2>LMTR System Plan</h2>
    <img class="map" :src="map" alt="system-plan">
    <p>该线路图使用<a href="https://railmapgen.github.io/rmp/">地铁线路图绘制器绘制</a>，图中所用素材部分为<a href="https://mtr.com.hk/">港铁公司</a>所设计，均为非商用</p>
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