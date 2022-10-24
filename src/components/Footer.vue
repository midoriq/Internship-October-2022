<template>
    <footer class="footer">
        <div class="footer_inner">
            <div class="footer-list-box">
                <h4>Kontakt</h4>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        ul. Wierzbicka 99c, 26-600 Radom
                    </li>
                    <li class="footer-list-item">(48) 377-31-05</li>
                    <li class="footer-list-item">biuro@masterdev.pl</li>
                    <li class="footer-list-item">www.masterdev.pl</li>
                    <li class="footer-list-item">
                        <span class="footer-bold">NIP: </span>948-24-92-65 |
                        <span class="footer-bold">REGON: </span>142621730
                    </li>
                </ul>
            </div>
            <div class="footer-list-box">
                <h4>Linki</h4>
                <ul class="footer-list">
                    <li class="footer-list-item">Start</li>
                    <li class="footer-list-item">Firma</li>
                    <li class="footer-list-item">Oferta</li>
                    <li class="footer-list-item">Kariera</li>
                    <li class="footer-list-item">Kontakt</li>
                </ul>
            </div>
            <div class="footer-list-box">
                <p>Odwiedź nas na F | T</p>
                <p>Polityka prywatności | Polityka cookies</p>
                <p>© 2009-2022 MASTERDEV Wszystkie prawa zastrzeżone</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    width: 100vw;
    display: flex;
    justify-content: center;
    min-height: 300px;
    min-width: 100%;
    padding-top: 15px;
    line-height: 1.5;
    font-family: var(--font-header);
    color: var(--primary-color);
}

.footer_inner {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
    border-top: 1px solid var(--primary-color);
    padding-top: 10px;
}

.footer-list-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
}

.footer-list {
    list-style-type: none;
    padding: 0;
}

.footer-list-item {
    line-height: 2;
}
.footer h4 {
    font-weight: 600;
    font-size: 2em;
}
.footer p {
    padding: 10px 0;
}
.footer-bold {
    font-weight: 600;
}
</style>
