<script setup>
import OfferItem from "../components/OfferItem.vue";
import References from "../components/References.vue";
import Partners from "../components/Partners.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import { routerKey } from "vue-router";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function goNext(link) {
    router.replace({ path: "/oferta/" + link });
}
</script>

<template>
    <Navbar></Navbar>

    <div class="sec1">
        <h1>Tworzymy oprogramowanie dla biznesu</h1>
        <a href="#onas"><button>dowiedz się więcej</button></a>
    </div>
    <div class="sec2">
        <div class="sec2img" id="onas">
            <!-- <img src="../assets/img/home-human1.png" alt="" /> -->
        </div>
        <div class="sec2-text">
            <h3>Czym się zajmujemy?</h3>
            <p>
                Już od ponad 10 lat realizujemy i wdrażamy autorskie systemy
                wspierające działalność Naszych klientów. Pracujemy na ciągle
                rozwijanej własnej platformie ERPONE, którą dostosowujemy
                indywidualnie do unikatowych potrzeb każdej z firm.
            </p>
        </div>
    </div>

    <!-- tutaj komponenty z tego co robimy -->
    <div class="sec3">
        <OfferItem @click="goNext('crm')" src="crm.png">
            <template v-slot:header> System CMR </template>
            <p>
                Wsparcie sprzedaży, ofertowanie, obsługa zamówień. Zarządzanie
                projektami i pracą działu handlowego.
            </p>
        </OfferItem>
        <OfferItem @click="goNext('b2b')" src="b2b.png">
            <template v-slot:header>Platforma B2B</template>
            <p>Wsparcie sprzedaży hurtowej i obsługa zamówień</p>
        </OfferItem>
        <OfferItem
            @click="goNext('oprogramowanie-na-zamowienie')"
            src="store.png"
        >
            <template v-slot:header>Oprogramowanie na zamówienie</template>
            <p>
                Dedykowane oprogramowanie dla dużych i średnich firm.
            </p></OfferItem
        >
        <OfferItem
            @click="goNext('rozwiazania-dla-ubezpieczen')"
            src="life-insurance.png"
            ><template v-slot:header>Rozwiązania dla ubezpieczeń</template>
            <p>Systemy do kalkulacji, sprzedaży oraz obsługi ubezpieczeń.</p>
        </OfferItem>
        <OfferItem
            @click="goNext('uslugi-powdrozeniowe')"
            src="customer-service.png"
        >
            <template v-slot:header>Usługi powdrożeniowe</template>
            <p>Wsparcie i serwis. Rozwój oprogramowania.</p></OfferItem
        >
    </div>

    <div class="sec4">
        <div class="sec4-elements">
            <div class="sec4img">
                <img src="../assets/img/home-human3.png" alt="" />
            </div>

            <div class="sec4-text">
                <h3>Dlaczego Masterdev?</h3>
                <div class="sec4-content">
                    <p>
                        Na rynku jesteśmy od 2010 roku i od samego początku
                        skupiliśmy się na tworzeniu zaawansowanych rozwiązań
                        informatycznych realizowanych na zamówienie Klienta.
                    </p>
                    <p>
                        Na bazie wielu lat doświadczeń przy tworzeniu
                        informatycznych rozwiązań wsparcia sprzedaży i
                        zarządzania relacjami z klientami oraz doświadczeń
                        naszych klientów stworzyliśmy unikatową platformę
                        ERPONE. Jest to elastyczny System, który dostosowujemy
                        indywidualnie do Państwa potrzeb, nawet tych najbardziej
                        unikatowych!
                    </p>
                    <p>Naszym wiodącym modułem platformy ERPONE jest:</p>
                    <ul>
                        <li>
                            <b>ERPONE CRM </b>-moduł do zarządzania relacjami z
                            Klientami, wsparcia sprzedaży, ofertowania, obsługi
                            zamówień...
                        </li>
                        <li>
                            <b>ERPONE B2B</b> - moduł platformy wsparcia
                            sprzedaży hurtowej, wymiany informacji, rozliczeń...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="marg"></div>
    <div class="sec5">
        <div class="sec5-content">
            <h3>Referencje</h3>
            <p>
                <span>Obok</span> prezentujemy referencje jakie nasza firma
                otrzymała i możemy się nimi publicznie pochwalić.
            </p>
        </div>
        <References class="referen"></References>
    </div>

    <div class="sec6">
        <h3>Jesteśmy dumni z posiadania takich klientów</h3>
        <Partners class="partn"></Partners>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.sec1 {
    background-image: url("../assets/img/data-tech3.jpg");
    background-size: cover;
    background-position: center;

    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.sec1 h1 {
    padding: 0;
    margin: 0;
    width: 80vw;

    text-align: center;
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 5vw;

    color: var(--primary-color);
}

.sec1 button {
    background-color: var(--primary-color);
    /* padding: 15px 40px; */

    padding: 1.3em 3.2em;

    border-radius: 23px;
    border: none;

    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 1vw;
    letter-spacing: 1.2px;

    color: var(--secondary-color);
    transition: ease-in-out 0.4s;
}

.sec1 button:hover {
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--additional-color);
}

@media screen and (max-width: 1000px) {
    /* Section 1 */
    .sec1 h1 {
        font-size: 60px;
    }

    .sec1 button {
        font-size: 14px;
        padding: 17px 45px;
    }
}

@media screen and (max-width: 700px) {
    /* Section 1 */
    .sec1 h1 {
        font-size: 8vw;
    }

    .sec1 button {
        font-size: 12px;
        padding: 14px 40px;
    }
}

@media screen and (max-width: 500px) {
    /* Section 1 */
    .sec1 h1 {
        font-size: 9vw;
    }
    .sec1 button {
        font-size: 10px;
        padding: 12px 35px;
    }
}

.sec2 {
    display: flex;
    width: 100%;
    background-color: var(--primary-color);
    height: 85vh;
}

.sec2img {
    width: 50vw;
    background-color: #fff;
    background-image: url("../assets/img/home-human1.png");
    background-blend-mode: luminosity;
    background-size: cover;
    background-position: center;
}
.sec2-text {
    background-color: var(--primary-color);
    width: 50vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.sec2 h3 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-2);
    font-size: 3em;
    width: 80%;

    text-align: center;

    color: var(--secondary-color);
}

.sec2 p {
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);
    color: var(--secondary-color);
    /* font-size: 17px;
    line-height: 24px; */
    font-size: 1em;
    line-height: 24px;

    text-align: justify;

    width: 60%;
}

@media screen and (max-width: 1000px) {
    /* Section 2 */
    .sec2 h3 {
        font-size: 2.5em;
    }

    .sec2 p {
        font-size: 0.9em;
    }
}

@media screen and (max-width: 800px) {
    .sec2img {
        display: none;
    }
    .sec2-text {
        width: 100vw;
    }
    .sec2 {
        height: 75vh;
    }
}

.sec3 {
    padding: 7vw 0 17vw 0;
    background-color: var(--primary-color);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vw 20px;

    flex-wrap: wrap;
}

@media screen and (max-width: 800px) {
    .sec3 {
        padding-top: 0;
        gap: 55px 20px;
    }
}

/* @media screen and (max-width: 600px) {
    .sec3 {
        gap: 9vw 20px;
    }
} */

.sec4 {
    position: relative;
    min-height: 70vh;
}

.sec4-elements {
    /* position: absolute; */
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: center;
    top: -120px;
}
.sec4img img {
    width: 600px;

    /* position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 0; */
}

.sec4-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    background-color: var(--background-color);
    /* position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-50%, -50%); */
}

.sec4img {
    align-self: flex-start;
    top: 60px;

    display: flex;
    justify-content: flex-end;
}

.sec4img,
.sec4-text {
    width: 50vw;
}

.sec4-text h3 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-2);
    color: var(--primary-color);

    font-size: 2.7vw;

    padding-top: 60px;
}

.sec4-content {
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);
    color: var(--primary-color);
    line-height: 25px;

    width: 65%;
    text-align: justify;
}

@media screen and (max-width: 1200px) {
    .sec4-content {
        width: 80%;
    }
    .sec4-text h3 {
        font-size: 3.3vw;
    }
}

@media screen and (max-width: 1000px) {
    .sec4img {
        display: none;
    }
    .sec4-text {
        width: 100vw;
    }
    .sec4-elements {
        min-height: 80vh;
        top: 0;
    }
    .sec4-content {
        width: 60%;
    }
    .sec4 {
        min-height: 80vh;
    }
    .sec4-text h3 {
        font-size: 4.5vw;
        padding-top: 0;
    }
}

@media screen and (max-width: 800px) {
    .sec4 {
        padding: 20px 10px;
    }
    .sec4-content {
        width: 80%;
    }
    .sec4-text h3 {
        font-size: 6vw;
    }
}

@media screen and (max-width: 550px) {
    .sec4,
    .sec4-elements {
        min-height: 100vh;
    }

    .sec4-text h3 {
        font-size: 7vw;
    }
}

/*
.marg {
    min-height: 70vh;
} */

.sec5 {
    shape-outside: ellipse(1200px 50%);
    clip-path: ellipse(1200px 50%);

    min-height: 110vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.referen {
    min-width: 60vw;
    margin-right: 40px;
}

.sec5-content {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.sec5-content h3 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-2);
    font-size: 50px;
    color: var(--secondary-color);
}

.sec5-content p {
    width: 67%;
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);
    font-size: 15px;
    color: var(--secondary-color);
    text-align: justify;
}

@media screen and (max-width: 1000px) {
    .sec5 {
        flex-direction: column;
        gap: 50px;
    }
    .sec5-content {
        width: 100vw;
    }
    .referen {
        min-width: 85vw;
        margin: 0;
    }

    .sec5-content p {
        font-size: 16px;
    }

    .sec5-content p span {
        display: none;
    }
    .sec5-content p:before {
        content: "Poniżej";
    }
}

@media screen and (max-width: 600px) {
    .sec5-content p {
        width: 80%;
    }
}

@media screen and (max-width: 450px) {
    .sec5-content p {
        font-size: 14px;
    }
    .sec5-content h3 {
        font-size: 47px;
    }
}

.sec6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    min-height: 30vw;
}

.sec6 h3 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-text);

    text-align: center;
    font-size: 3.2vw;
    width: 50%;
}
.partn {
    width: 70vw;
}

@media screen and (max-width: 800px) {
    .sec6 {
        min-height: 45vw;
    }

    .sec6 h3 {
        font-size: 4vw;
        width: 70%;
    }
}

@media screen and (max-width: 600px) {
    .sec6 h3 {
        font-size: 5vw;
        width: 80%;
    }
}

@media screen and (max-width: 400px) {
    .sec6 {
        min-height: 70vw;
    }
}
</style>
