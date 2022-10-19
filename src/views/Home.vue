<script setup>
import OfferItem from "../components/OfferItem.vue";
</script>

<template>
    <!-- there navbar -->

    <div class="sec1">
        <h1>Tworzymy oprogramowanie dla biznesu</h1>
        <button>dowiedz się więcej</button>
    </div>

    <!-- TODO: 
        - zmienić obraz w section 2:
            - zeby był lepszej jakości
            - czarno biały a nie kolorowy
            - lekko go też zmniejszyc
    -->

    <div class="sec2">
        <div class="sec2img">
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
        <OfferItem>
            <template v-slot:header> System CMR </template>
            <p>
                Wsparcie sprzedaży, ofertowanie, obsługa zamówień. Zarządzanie
                projektami i pracą działu handlowego.
            </p>
        </OfferItem>
        <OfferItem>
            <template v-slot:header>Platforma B2B</template>
            <p>Wsparcie sprzedaży hurtowej i obsługa zamówień</p>
        </OfferItem>
        <OfferItem>
            <template v-slot:header>Oprogramowanie na zamówienie</template>
            <p>
                Dedykowane oprogramowanie dla dużych i średnich firm.
            </p></OfferItem
        >
        <OfferItem
            ><template v-slot:header>Rozwiązania dla ubezpieczeń</template>
            <p>Systemy do kalkulacji, sprzedaży oraz obsługi ubezpieczeń.</p>
        </OfferItem>
        <OfferItem>
            <template v-slot:header>Usługi powdrożeniowe</template>
            <p>Wsparcie i serwis. Rozwój oprogramowania.</p></OfferItem
        >
    </div>

    <div class="sec4">
        <div class="sec4img">
            <img src="../assets/img/home-human3.png" alt="" />
        </div>

        <div class="sec4-text">
            <h3>Dlaczego Masterdev?</h3>
            <p>
                Na rynku jesteśmy od 2010 roku i od samego początku skupiliśmy
                się na tworzeniu zaawansowanych rozwiązań informatycznych
                realizowanych na zamówienie Klienta.
            </p>
            <p>
                Na bazie wielu lat doświadczeń przy tworzeniu informatycznych
                rozwiązań wsparcia sprzedaży i zarządzania relacjami z klientami
                oraz doświadczeń naszych klientów stworzyliśmy unikatową
                platformę ERPONE. Jest to elastyczny System, który dostosowujemy
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
                    <b>ERPONE B2B</b> - moduł platformy wsparcia sprzedaży
                    hurtowej, wymiany informacji, rozliczeń...
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.sec1 {
    background-image: url(../assets/img/data-tech.jpg);
    background-size: cover;
    background-position: center;

    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
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
    padding: 15px 40px;

    border-radius: 23px;
    border: none;

    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 1vw;
    letter-spacing: 0.8px;

    color: var(--secondary-color);
}

.sec2 {
    display: flex;
    width: 100%;
    background-color: var(--primary-color);
    height: 80vh;
}

.sec2img {
    width: 50vw;
    background-image: url("../assets/img/home-human1.png");
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
    font-size: 2.7vw;

    text-align: center;
    letter-spacing: 0.055em;

    color: var(--secondary-color);
}

.sec2 p {
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);
    color: var(--secondary-color);
    letter-spacing: 0.055em;

    text-align: justify;

    width: 60%;
}

.sec3 {
    padding: 5vw 0 13vw 0;
    background-color: var(--primary-color);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4vw 20px;

    flex-wrap: wrap;
}

.sec4 {
    display: flex;
    flex-direction: row;
}
.sec4img {
}

.sec4-text {
}

.sec4img,
.sec4-text {
    width: 50vw;
}
</style>
