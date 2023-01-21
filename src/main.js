import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Career from "./views/Career.vue";
import Offerts from "./views/Offerts.vue";
import OfferPage from "./views/OfferPage.vue";
import CareerPage from "./views/CareerPage.vue";
import AboutUs from "./views/O_nas.vue";
import PageNotFound from "./views/PageNotFound.vue";
import Contact from "./views/Contact.vue";

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
            path: "/Praktyki-pazdziernik-2022",
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
            component: AboutUs,
        },
        {
            path: "/kontakt",
            name: "Kontakt",
            component: Contact,
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
            props: true,
        },
        {
            path: "/kariera/:id",
            name: "Kariera",
            component: CareerPage,
            props: true,
        },
        { path: "/:pathMatch(.*)*", component: PageNotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    },
});

createApp(App).use(router).mount("#app");
