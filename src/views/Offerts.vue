<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import OffersItem from "../components/OffersPageItem.vue";
</script>

<template>
    <Navbar class="nav"> </Navbar>
    <div class="main-header">
        <h1>Oferta</h1>
    </div>

    <div class="main-content">
        <OffersItem>
            <template v-slot:image
                ><img src="offer-icons/crm.png" alt=""
            /></template>
            <template v-slot:header>Test</template>
            <template v-slot:text>probatekstu</template>
        </OffersItem>
        <OffersItem></OffersItem>
        <OffersItem></OffersItem>
        <OffersItem></OffersItem>
        <OffersItem></OffersItem>
    </div>

    <Footer class="foot"></Footer>
</template>

<style scoped>
.nav {
    position: relative;
}

.main-header {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    font-family: var(--font-header);
    font-weight: 500;
    font-size: 80px;
    color: var(--primary-color);
}

.main-content {
    padding: 100px 50px;
    min-height: 80vh;
    background-color: var(--primary-color);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 100px 100px;
}

/* .foot {
    border: none;
} */

@media screen and (max-width: 600px) {
    .main-content {
        padding: 50px 20px;
        gap: 50px 30px;
    }
}
</style>
