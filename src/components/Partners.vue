<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            {
                title: "4Studio sp. z o.o.",
                content: "Agencja interaktywna.",
                image: "/public/partnerzy/4studio.png",
            },
            {
                title: "Absena sp. z o.o.",
                content: "Portal e-turystyczny.",
                image: "/public/partnerzy/absena.png",
            },
            {
                title: "AutoGaz Centrum",
                content: "Producent samochodowych instalacji gazowych.",
                image: "/public/partnerzy/agc.png",
            },
            {
                title: "Amicus Sp. z o.o.",
                content: "Producent zasilaczy impulsowych.",
                image: "/public/partnerzy/amicus.png",
            },
            {
                title: "Auto-Backup sp. z o.o.",
                content: "Producent oprogramowania do backupu.",
                image: "/public/partnerzy/autobackup.png",
            },
            {
                title: "Centrum Projektowo-Szkoleniowe Sp. z o.o.",
                content: "Kompleksowa obsługa projektów i szkoleń.",
                image: "/public/partnerzy/cps.png",
            },
            {
                title: "FST Management Sp. z o.o.",
                content: "Broker ubezpieczeniowy.",
                image: "/public/partnerzy/fst.png",
            },
            {
                title: "Hosten Polska Sp. z o.o.",
                content: "Producent profili z PVC i aluminium.",
                image: "/public/partnerzy/hosten.png",
            },
            {
                title: "INS24 Sp. z o.o.",
                content: "Multiagencja ubezpieczeniowa.",
                image: "/public/partnerzy/ins24.png",
            },
            {
                title: "Ocelot Systemy Informatyczne",
                content: "Producent oprogramowania.",
                image: "/public/partnerzy/ocelot.png",
            },
            {
                title: "Ogólnopolskie Stowarzyszenie Pracowników Służby Bezpieczeństwa i Higieny Pracy.",
                content: "",
                image: "/public/partnerzy/ospsbhp.png",
            },
            {
                title: "Prestige PR",
                content: "Agencja PR.",
                image: "/public/partnerzy/prestige.png",
            },
            {
                title: "RADWAG Wagi Elektroniczne",
                content: "Producent Wag Elektronicznych",
                image: "/public/partnerzy/radwag.png",
            },
            {
                title: "RAF Integration Services Sp. z o.o.",
                content: "Optymalizacja obsługi szkód.",
                image: "/public/partnerzy/raf.png",
            },
            {
                title: "F2J Reman Radom",
                content: "Zakład regeneracji silników oraz skrzyń biegów.",
                image: "/public/partnerzy/reman.png",
            },
            {
                title: "Veloce Software",
                content: "Agencja interaktywna.",
                image: "/public/partnerzy/veloce.png",
            },
        ],
    }),
};
</script>

<template>
    <vueper-slides
        class="no-shadow"
        :visible-slides="6"
        slide-multiple
        :slide-ratio="1 / 19"
        :gap="5"
        :dragging-distance="200"
        :arrows="false"
        :infinite="true"
        :autoplay="true"
        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
        />
    </vueper-slides>
</template>

<style scoped>
.ex--center-mode {
    width: 600px;
    max-width: 100%;
    margin: auto;
}
</style>
