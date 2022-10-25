<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Kariera from "../kariera.json";
import { onUpdated } from "@vue/runtime-core";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
    components: { Footer, Navbar },
    data() {
        return {
            career: 0,
        };
    },
    methods: {
        changeCareer: function () {
            for (var i = 0; i < Kariera.kariera.length; i++) {
                if (Kariera.kariera[i].id == this.$route.params.id) {
                    console.log(this.career);
                    return (this.career = Kariera.kariera[i]);
                }
            }
        },
    },
    mounted() {
        this.changeCareer();
    },
};
</script>

<template>
    <Navbar class="nav"> </Navbar>
    <div class="content">
        <h1>{{ career.name }}</h1>
    </div>
    <div class="sidebar">
        <h2>Nasze inne oferty</h2>
        <!-- Tutaj dać komponent żeby wyświetlał -->
    </div>
    <Footer class="foot"></Footer>
</template>

<style scoped>
.nav {
    position: relative;
}
</style>
