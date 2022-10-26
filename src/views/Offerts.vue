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
        <router-link to="/oferta/crm">
            <OffersItem src="crm.png">
                <template v-slot:header>System ERPONE CRM</template>
                <template v-slot:text
                    >Platforma ERPONE pozwala na łatwe i szybkie generowanie
                    ofert i zamówień według Państwa klientów. Dzięki
                    architekturze naszej platformy jesteśmy w standardowym
                    czasie wdrożenia spersonalizować każdy element Systemu pod
                    Państwa potrzeby.</template
                >
            </OffersItem></router-link
        >
        <router-link to="/oferta/b2b"
            ><OffersItem src="b2b.png"
                ><template v-slot:header>ERPONE - platforma B2B</template>
                <template v-slot:text
                    >Dzięki naszej platformie ERPONE tworzymy dedykowane
                    rozwiązania B2B zgodnie z wymogami i specyfiką działalności
                    Państwa firmy. Tak aby uprościć komunikację i transakcje
                    biznesowe między stronami.</template
                ></OffersItem
            ></router-link
        >

        <router-link to="/oferta/oprogramowanie-na-zamowienie"
            ><OffersItem src="store.png"
                ><template v-slot:header>Oprogramowanie na zamówienie</template>
                <template v-slot:text
                    >Zajmujemy się projektowaniem i realizacją aplikacji i
                    systemów dedykowanych.Nasi specjaliści są w stanie stworzyć
                    takie rozwiązania, które pomogą osiągnąć większy zysk i
                    zmniejszyć koszty operacyjne funkcjonowania firmy.</template
                ></OffersItem
            ></router-link
        >
        <router-link to="/oferta/rozwiazania-dla-ubezpieczen"
            ><OffersItem src="life-insurance.png"
                ><template v-slot:header>Rozwiązania dla ubezpieczeń</template>
                <template v-slot:text
                    >Posiadamy sporą wiedzę z zakresu ubezpieczeń oraz procesów
                    zachodzących przy obsłudze ubezpieczeń z punktu widzenia
                    brokera ubezpieczeniowego jak i multiagencji
                    ubezpieczeniowej.</template
                ></OffersItem
            ></router-link
        >
        <router-link to="/oferta/uslugi-powdrozeniowe"
            ><OffersItem src="customer-service.png"
                ><template v-slot:header>Usługi powdrożeniowe</template>
                <template v-slot:text
                    >Każdy nasz system jest jak żywy organizm, który dostosowuje
                    się swojego właściciela. Wraz z rozwojem Państwa firmy
                    będziemy go modyfikować oraz usprawniać, tak aby nadążał za
                    zmianami na rynku i u Państwa w firmie.</template
                ></OffersItem
            ></router-link
        >
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
