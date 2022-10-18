<template>
    <!-- there navbar -->

    <div class="sec1">
        <h1>Tworzymy oprogramowanie dla biznesu</h1>
        <button>dowiedz się więcej</button>
    </div>

    <div class="sec2">
        <img src="../assets/img/home-human1.png" alt="" />
        <div>
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
    <div class="sec3"></div>

    <div class="sec4">
        <img src="../assets/img/home-human3.png" alt="" />
        <div>
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
            <p>
                Naszym wiodącym modułem platformy ERPONE jest:
                <ul>
                    <li><b>ERPONE CRM </b>-moduł do zarządzania relacjami z Klientami, wsparcia sprzedaży, ofertowania, obsługi zamówień... </li>
                    <li><b>ERPONE B2B</b> - moduł platformy wsparcia sprzedaży hurtowej, wymiany informacji, rozliczeń...</li>
                </ul>
                 
            </p>
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
    font-family: var(--font-family-header);
    font-weight: 600;
    font-size: 5vw;

    color: #364263;
}

.sec1 button{
     background: #364263;
     padding: 15px 40px;

     border-radius: 23px;
     border: none;


     font-family: var(--font-family-header);
     font-weight: 600;
     font-size: 1vw;
     letter-spacing: 0.8px;

     color: #E4FAFF;
}

.sec2 {
    display: flex;
    background-color: #364263;
    width: 100%;
}

.sec2 img {
    width: 50vw;
}

.sec2 h3{
     font-family: var(--font-family-header);
     font-weight: 700;
     font-size: 6vw;
     line-height: 8vw;
     display: flex;
     align-items: center;
     text-align: center;
     letter-spacing: 0.055em;

     color: #E4FAFF;
}

.sec3 {
    height: 50vh;
}
</style>
