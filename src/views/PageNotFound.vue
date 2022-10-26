<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
    <Navbar class="navabar"></Navbar>
    <div class="content">
        <h1>404</h1>
        <h3>Nie znaleziono strony</h3>
    </div>
</template>

<style scoped>
.navbar {
    position: relative;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 85vh;
}

h1,
h3 {
    font-family: var(--font-header);
    color: var(--primary-color);
}

h1 {
    font-weight: var(--font-weight-2);
    font-size: 160px;
}

p {
    font-family: var(--font-text);
}
</style>
