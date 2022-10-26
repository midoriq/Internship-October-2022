<script setup>
import { ref, computed } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <router-view></router-view>
</template>

<style>
body {
    background-color: var(--background-color);
}
a {
    text-transform: none;
    text-decoration: none;
    color: inherit;
}
</style>
