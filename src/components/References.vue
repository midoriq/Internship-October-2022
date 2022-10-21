<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            {
                title: "skdhhsdjhsd",
                content: "fkgjfkgj",
                image: "/public/references/ref1.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref2.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref3.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref4.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref5.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref6.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref7.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref8.gif",
            },
            {
                title: "Slide #2",
                content: "",
                image: "/public/references/ref9.gif",
            },
        ],
    }),
};
</script>

<template>
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :slide-ratio="1 / 2.5"
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
