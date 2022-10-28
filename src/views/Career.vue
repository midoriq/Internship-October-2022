<template>
    <Navbar class="nav"> </Navbar>
    <div class="main-header">
        <h1>Dołącz do naszego zespołu!</h1>
    </div>

    <div class="main-content">
        <h2>Oferty pracy ({{ count }})</h2>
        <router-link to="/kariera/1">
            <CareerItem>
                <template v-slot:header>.NET Developer</template>
                <template v-slot:text
                    >Jeśli posiadasz doświadczenie w projektowaniu oraz
                    programowaniu aplikacji biznesowych, chcesz się rozwijać,
                    mieć kontakt z klientem i mieć wpływ na tworzone rozwiązania
                    to zapraszamy :)</template
                >
            </CareerItem>
        </router-link>
        <router-link to="/kariera/2">
            <CareerItem>
                <template v-slot:header>Junior .NET Developer</template>
                <template v-slot:text
                    >Nie posiadasz doświadczenia lub posiadasz niewielkie
                    doświadczenie? A może jeszcze studiujesz? Chcesz poznać
                    nasze technologie i dołączyć do Teamu MASTERDEV? Wyślij do
                    nas CV.</template
                >
            </CareerItem>
        </router-link>
    </div>

    <Footer class="foot"></Footer>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import CareerItem from "../components/CareerItem.vue";

export default {
    components: { Footer, Navbar, CareerItem },
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        updateCount() {
            this.count = document.querySelectorAll(".item").length;
        },
    },
    mounted() {
        this.updateCount();
    },
    updated() {
        this.updateCount();
    },
};
</script>

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
    font-weight: var(--font-weight-2);
    font-size: 60px;
    color: var(--primary-color);
}

h2 {
    font-family: var(--font-header);
    font-weight: 500;
    font-size: 30px;
    color: var(--primary-color);
}

.main-content {
    background-color: var(--secondary-color);
    color: var(--primary-color);

    padding: 9vh 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
}

@media screen and (max-width: 1000px) {
    .main-content {
        padding: 6vh 100px;
    }
}

@media screen and (max-width: 800px) {
    .main-content {
        padding: 6vh 50px;
    }
}

@media screen and (max-width: 400px) {
    h1 {
        font-size: 50px;
    }
}
.item {
    transition: 0.5s ease-in-out;
}
.item:hover {
    background-color: var(--additional-color);
}
</style>
