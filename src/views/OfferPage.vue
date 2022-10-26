<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Oferta from "../oferta.json";

export default {
    components: { Footer, Navbar },
    data() {
        return {
            offer: 0,
            others: [],
        };
    },
    methods: {
        changeOffer: function () {
            for (var i = 0; i < Oferta.oferta.length; i++) {
                if (Oferta.oferta[i].id == this.$route.params.id) {
                    console.log(this.offer);
                    this.offer = Oferta.oferta[i];
                } else {
                    this.others.push({
                        id: Oferta.oferta[i].id,
                        name: Oferta.oferta[i]["short-header"],
                        content: Oferta.oferta[i]["short-description"],
                    });
                }
            }
        },
        stringToHTML: function (str) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, "text/html");
            return doc.body;
        },
    },
    mounted() {
        this.changeOffer();
    },
    watch: {
        $route(to, from) {
            document.location.reload();
        },
    },
};
</script>

<template>
    <Navbar class="nav"> </Navbar>
    <div class="main">
        <div class="content">
            <div class="header">
                <img :src="`/offer-icons/${offer.icon}`" />
                <!-- {{ offer.image }} -->
                <div class="headcontent">
                    <h1>{{ offer.name }}</h1>
                    <p>{{ offer.mainheader }}</p>
                </div>
            </div>
            <div class="descr" v-html="this.offer.content"></div>
            <!-- <div class="descr">

            </div> -->
        </div>
        <div class="others" v-if="others.length > 0">
            <h4>Pozostałe oferty pracy</h4>
            <div class="sec-others">
                <div class="item2" v-for="other in others" :key="other.id">
                    <router-link :to="other.id" class="otheritem">
                        <h5>{{ other.name }}</h5>
                        <p>{{ other.content }}</p>
                        <span class="arrow-right"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <Footer class="foot"></Footer>
</template>

<style scoped>
.nav {
    position: relative;
}

h1 {
    font-family: var(--font-header);
    font-weight: 500;
    font-size: 37px;
}

h4 {
    font-family: var(--font-header);
    font-weight: 600;
}

h5 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
}
p {
    font-family: var(--font-text);
    text-align: justify;
    font-size: 15px;
}

img {
    height: 130px;
}

.main {
    display: flex;
    flex-direction: wrap;
    padding: 70px 0px;
    justify-content: center;
    align-items: flex-start;
}

.header {
    display: flex;
    gap: 20px;
}

.headcontent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
}

.sec-others {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.header p {
    font-size: 16px;
    line-height: 20px;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    gap: 10px;

    color: var(--primary-color);
}

.others {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--additional-color);
}

.otheritem {
    width: 100%;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 30px 40px;
    box-shadow: 0px 3.01659px 3.01659px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}
.others p {
    font-size: 11px;
}
.otheritem h5 {
    font-size: 16px;
}

.arrow-right {
    align-self: flex-end;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 1.5px solid var(--secondary-color);
    border-right: 1.5px solid var(--secondary-color);
    transform: rotate(45deg);
}

/* STYLES FOR V-HTML */
.descr >>> p,
.descr >>> ul li {
    font-family: var(--font-text);
    text-align: justify;
    font-size: 15px;
    color: var(--primary-color);
    width: 80%;
    line-height: 22px;
}

.descr >>> ul li {
    line-height: 29px;
}

.descr >>> h3 {
    padding: 30px 0 10px 0;
    font-size: 23px;
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);

    width: 80%;
}

.descr >>> .bold {
    font-weight: 600;
}

@media screen and (max-width: 1200px) {
    .main {
        gap: 20px;
    }
    .content {
        width: 60%;
    }
    .otheritem {
        padding: 30px 30px;
    }
    .others {
        width: 24%;
    }
}

@media screen and (max-width: 1000px) {
    .main {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        padding: 70px 100px;
    }
    .content {
        width: 80%;
    }
    .content p {
        width: 100%;
    }
    .others {
        width: 90%;
        display: flex;
        gap: 50px;
        justify-content: center;
    }
    .others h4 {
        font-size: 20px;
    }
    .sec-others {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */

        flex-wrap: wrap;
        gap: 30px 40px;
    }
    .item2 {
        min-width: 40%;
    }

    .otheritem {
        height: 180px;
        justify-content: center;
    }
}

@media screen and (max-width: 800px) {
    .main {
        padding: 60px 0 60px 50px;
    }
    .content {
        width: 100%;
    }
    .otheritem {
        width: 300px;
    }

    .headcontent {
        width: 60%;
    }
}

@media screen and (max-width: 550px) {
    .others h4 {
        text-align: center;
    }
    .otheritem {
        width: 100%;
    }
    h1 {
        text-align: center;
    }
    .main {
        align-items: center;
        padding: 30px 50px;
    }
    .descr >>> p {
        width: 100%;
    }
    .headcontent {
        width: 100%;
    }

    .header {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        height: 100%;
        width: auto;
    }
}

@media screen and (max-width: 400px) {
    h1 {
        font-size: 31px;
    }
    .otheritem {
        height: 210px;
    }
}

@media screen and (max-width: 320px) {
    h1 {
        font-size: 25px;
    }
}
</style>
