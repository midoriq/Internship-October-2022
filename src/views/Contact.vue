<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <Navbar class="nav"></Navbar>
        <div class="main">
            <div class="section1">
                <div class="map-box">
                    <iframe class="contact-map" src="https://www.google.com/maps/embed/v1/place?q=MASTERDEV%20Rafa%C5%82%20%C5%81%C4%99cki%2C%20Wjazdowa%2C%20Radom%2C%20Polska&amp;key=AIzaSyCISUZ3p1LRe1Od8FX75Eud-qvnEz4hXB0&amp;language=PL" width="600" height="600"></iframe>
                </div>
                <div class="form-box">
                    <form class="form">
                        <h2>Napisz do nas</h2>
                        <div class="name-box">
                            <div class="first-name input-box">
                                <label for="firstName">Imię</label><input required id="firstName" type="text"/>
                            </div>
                            <div class="last-name input-box">
                                <label for="lastName">Nazwisko</label><input required id="lastName" type="text"/>
                            </div>
                        </div>
                        <div class="email input-box">
                            <label for="email">Email</label><input required id="email" type="email"/>
                        </div>
                        <div class="text input-box">
                                <label for="message">Treść</label><textarea required rows="10" id="message"></textarea>
                        </div>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
            <div class="section2">
                <h2>Kontakt</h2>
                <div class="kontakt-box">
                    <div class="kontakt-box-inner kontakt-box-inner1">
                        <h3>nasz adres</h3>
                        <p>ul. wierzbicka 99c 26-600 Radom</p>
                        <p><span>NIP:</span> 948-234-65</p>
                        <p><span>REGON:</span> 142621730</p>
                        <p>(48) 377-31-05</p>
                        <p>biuro@masterdev.pl</p>
                        <p>Poza godzinami pracy aktywny jest telefon alarmowy, udostępniony w umowie serwisowej.</p>
                    </div>
                    <div class="kontakt-box-inner kontakt-box-inner2">
                        <h4>Dział handlowy</h4>
                        <p>(48) 377-31-05</p>
                        <p>handlowy@masterdev.pl</p>
                        <p>poniedziałek - piątek 9.00 - 18.00</p>
                        <h4>Dział marketingu</h4>
                        <p>marketing@masterdev.pl</p>
                        <h4>Dział wsparcia i serwisu</h4>
                        <p>(48) 377-31-05</p>
                        <p>serwis@masterdev.pl</p>
                        <p>poniedziałek - piątek 9.00 - 16.00</p>
                        <h4>Rafał Łęcki</h4>
                        <p>696-364-022</p>
                        <p>rafal.lecki@masterdev.pl</p>
                    </div>
                </div>
                <img alt="" class="img img1" src="../assets/contact/img1.jpg" />
                <img alt="" class="img img2" src="../assets/contact/img2.png" />
            </div>
            <div class="section3">
                <h2>Obserwuj nas<br/>w social mediach</h2>
                <div class="social-media">
                    <a href="https://www.facebook.com/MasterdevPoland"><img alt="facebook" src="../assets/contact/facebook.png" /></a>
                    <a href="https://twitter.com/masterdevpl"><img alt="twitter" src="../assets/contact/twitter.png" /></a>
                </div>
            </div>
        </div>
    <Footer></Footer>
</template>

<style scoped>

.section2{
    width: 100%;
    margin-top: 50px;
    padding-top: 30px;
    background-color: #eff6f8;
}
.section2 h2{
    margin-left: 40px;
}
.kontakt-box{
    z-index: 100;
    margin-top: 20px;
    background-color: #f2fafc;
    font-size: 12px;
    display: flex;
    width: 50%;
    font-family: var(--font-text);
    color: var(--primary-color);
    gap: 20px;
    padding: 10px 20px;
    margin-left: 100px;
}
.kontakt-box-inner{
    width: 50%;
}
.img{
    position: absolute;
}
.img1{
    width: 350px;
    top: 15%;
    right: 23%;
}
.img2{
    width: 450px;
    top: 50%;
    right: 10%;
}
@media screen and (max-width: 1300px) {
    .img1{
    width: 250px;
    }
    .img2{
        width: 350px;
        top: 40%;
    }
}
@media screen and (max-width: 1100px) {
    .img1{
    width: 200px;
    }
    .img2{
        width: 300px;
        top: 35%;
        right: 8%;
    }
}
@media screen and (max-width: 950px) {
    .img1{
    width: 150px;
    }
    .img2{
        width: 250px;
        top: 28%;
        right: 6%;
    }
}
@media screen and (max-width: 800px) {
    .kontakt-box{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .img{
        display: none;
    }
}
h3, h4{
    padding: 20px 0 7px;
}
h3{
    font-size: 25px;
}
h4{
    font-size: 22px;
}
.kontakt-box p{
    padding: 5px 0;
}
.nav {
    position: relative;
}
.section1{
    margin-top: 50px;
    display: flex;
}
.map-box{
    width: 50%;
}
.form-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
h2 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 4vw;
    color: var(--primary-color);
}
.contact-map{
    border: 0;
    width: 100%;
}
.name-box{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.input-box{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}
.name-box .input-box{
    width: 40%;
}
label, input, textarea{
    font-family: var(--font-header);
}
input, textarea{
    border-radius: 3px;
    border: 2px solid rgb(223, 221, 221);
    padding: 7px 10px;
    transition: ease-in-out 0.4s;
}
input:focus, textarea:focus{
    outline: none;
    border-color: rgb(173, 173, 173);
}
button {
    background-color: var(--primary-color);
    padding: 15px 40px;
    width: 100%;


    border-radius: 8px;
    border: none;

    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 16px;
    letter-spacing: 1.2px;

    color: var(--secondary-color);
    transition: ease-in-out 0.4s;
}

button:hover {
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--additional-color);
}
@media screen and (max-width: 800px) {
    .section1 {
        flex-direction: column;
        gap: 50px;
        align-items: center;
    }
    .map-box{
        width: 100%;
    }
    .form-box{
        width: 80%;
    }
    .form{
        width: 80%;
    }
}
@media screen and (max-width: 500px) {
    .name-box{
        flex-direction: column;
        gap: 20px;
    }
    .name-box .input-box{
        width: 100%;
    }
}
.section3{
    display: flex;
    margin: 30px 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.social-media{
    display: flex;
    gap: 40px;

}
.social-media img{
    width: 64px;
}
@media screen and (max-width: 800px) {
    .social-media img{
        width: 48px;
    }
}
@media screen and (max-width: 600px) {
    .social-media img{
        width: 32px;
    }
    .social-media{
        gap: 20px;
    }
    .section3{
        gap: 20px;
    }
}
@media screen and (max-width: 600px) {
    .section2 h2{
        text-align: center;
    }
    .kontakt-box{
        width:100%;
    }
}
</style>