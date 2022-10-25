<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <Navbar class="nav"> </Navbar>
    <div class="content">
        <div class="parag1">
            <img src="./offer-icons/icon1.png" alt="" />
            <h1>ERPONE „Więcej niż CRM”</h1>
            <p>System dostosowany do potrzeb firmy, a nigdy na odwrót.</p>
        </div>
        <p>
            Wierzymy, że to Państwo sami wiecie najlepiej jak realizować procesy
            sprzedażowe oraz jak prowadzić interesy ze swoimi Klientami. System
            komputerowy powinien Państwa w tym wspierać, podążać za Państwa
            firmą i w pełni dostosowywać się do procesów Państwa
            przedsiębiorstwa.
        </p>
        <p>
            Dlatego korzystając z wielu lat doświadczeń przy tworzeniu
            informatycznych rozwiązań wsparcia sprzedaży i zarządzania relacjami
            z klientami oraz doświadczeń naszych klientów stworzyliśmy unikatową
            platformę ERPONE. Jest to elastyczny System, który dostosowujemy
            indywidualnie do Państwa potrzeb, nawet tych najbardziej
            unikatowych!
        </p>
        <h3>Więcej niż CRM</h3>
        <p>
            Sprzedaż nie kończy się na wysłaniu oferty. Dlatego ERPONE umożliwia
            obsługę pełnego procesu sprzedaży od zimnego lead’a do ostatecznego
            odbioru zamówienia. Dzięki naszemu autorskiemu narzędziu Lejkowi
            Rozszerzonemu System ułatwia zarządzanie każdym etapem procesu
            pozyskiwania Klienta, ofertowaniu oraz realizacji zamówienia. W
            każdej chwili zwracając pełną i dostosowaną do potrzeb menadżerów
            informację biznesową.
        </p>
        <h3>Skracamy czas czynności wspierających sprzedaż</h3>
        <p>
            Platforma ERPONE pozwala na łatwe i szybkie generowanie ofert i
            zamówień według Państwa wzorów oraz wysyłanie ich do Państwa
            klientów. Dzięki czemu możecie Państwo zaoszczędzić czas marnowany
            na wykonywanie powtarzalnych i żmudnych czynności i poświęcić go na
            aktywne pozyskiwanie nowych szans sprzedażowych.
        </p>
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
