<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Kariera from "../kariera.json";

export default {
    components: { Footer, Navbar },
    data() {
        return {
            career: 0,
            others: [],
        };
    },
    methods: {
        changeCareer: function () {
            for (var i = 0; i < Kariera.kariera.length; i++) {
                if (Kariera.kariera[i].id == this.$route.params.id) {
                    console.log(this.career);
                    this.career = Kariera.kariera[i];
                } else {
                    this.others.push({
                        id: Kariera.kariera[i].id,
                        name: Kariera.kariera[i].name,
                        desc: Kariera.kariera[i].description,
                    });
                }
            }
        },
    },
    mounted() {
        this.changeCareer();
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
                <h1>{{ career.name }}</h1>
            </div>

            <div class="desc">
                <p>{{ career.description }}</p>
                <div class="needs">
                    <p>
                        <span class="header2">Technologie: </span>
                        {{ career.technologies }}
                    </p>
                    <p>
                        <span class="header2">Prowadzenie projektu: </span>
                        {{ career.projects }}
                    </p>
                    <p>
                        <span class="header2">Mile widziane: </span>
                        {{ career.milewidziane }}
                    </p>
                    <p>
                        <span class="header2">Umowa: </span>
                        {{ career.contract }}
                    </p>
                    <p>
                        <span class="header2">Wymiar czasu pracy: </span>
                        {{ career.times }}
                    </p>
                    <p>
                        <span class="header2">Zadania: </span>
                        {{ career.tasks }}
                    </p>
                </div>
            </div>
            <p class="addit">
                Zainteresowane osoby prosimy o wysłanie CV ze zdjęciem na adres
                mailowy: rekrutacja at masterdev.pl lub o kontakt
                telefoniczny.<br />
                W tytule maila prosimy wpisać
                <span class="upper">{{ career.name }}</span> oraz swoje IMIĘ i
                NAZWISKO np. <span class="upper">{{ career.name }}</span> JAN
                KOWALSKI
            </p>
            <p class="claus">
                Prosimy o umieszczenie w CV klauzuli "Wyrażam zgodę na
                przetwarzanie moich danych osobowych dla potrzeb niezbędnych do
                rekrutacji (Zgodnie z Ustawą z dnia 29.08.1997r. o ochronie
                danych osobowych Dz. U. Nr 133, poz 883).")
            </p>
        </div>
        <div class="others" v-if="others.length > 0">
            <h4>Pozostałe oferty pracy</h4>
            <div v-for="other in others" :key="other.id">
                <router-link :to="other.id" class="otheritem">
                    <h5>{{ other.name }}</h5>
                    <p>{{ other.desc }}</p>
                    <span class="arrow-right"></span>
                </router-link>
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
    font-weight: var(--font-weight-1);
    font-size: 40px;
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
}

.main {
    display: flex;
    flex-direction: wrap;
    padding: 70px 0px;
    justify-content: center;
    align-items: flex-start;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 65%;
    gap: 20px;

    color: var(--primary-color);
}

.desc {
    line-height: 27px;
    font-size: 16px;
}

.content p {
    width: 81%;
}
.needs p {
    margin-top: 25px;
}
.header2 {
    font-weight: var(--font-weight-1);
}

.addit {
    font-size: 14px;
}

.claus {
    font-size: 13px;
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

.upper {
    text-transform: uppercase;
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
        width: 100%;
    }
    .others h4 {
        font-size: 20px;
    }

    .otheritem {
        width: 40%;
    }
}

@media screen and (max-width: 800px) {
    .content {
        width: 100%;
    }
    .otheritem {
        width: 300px;
    }
}

@media screen and (max-width: 800px) {
    .main {
        padding: 60px 50px;
    }
}

@media screen and (max-width: 400px) {
    .others h4 {
        text-align: center;
    }
    .otheritem {
        width: 100%;
    }
    h1 {
        text-align: center;
    }
}

@media screen and (max-width: 400px) {
    h1 {
        font-size: 31px;
    }
}
</style>
