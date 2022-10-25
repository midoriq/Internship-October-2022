import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Career from "./views/Career.vue";
import Offerts from "./views/Offerts.vue";
import OfferPage from "./views/OfferPage.vue";
import CareerPage from "./views/CareerPage.vue";

import "./assets/main.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/kariera",
            name: "Career",
            component: Career,
        },
        {
            path: "/firma",
            name: "Firma",
            component: Career,
        },
        {
            path: "/kontakt",
            name: "Kontakt",
            component: Career,
        },
        {
            path: "/oferta",
            name: "Offerts",
            component: Offerts,
        },
        {
            path: "/oferta/:id",
            name: "Oferta",
            component: OfferPage,
        },
        {
            path: "/kariera/:id",
            name: "Kariera",
            component: CareerPage,
        },
    ],
});

createApp(App).use(router).mount("#app");
