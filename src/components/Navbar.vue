<template>
    <nav id="navbar" class="navbar">
        <div class="navbar_inner">
            <a class="navbar-brand" href="#">
                <img src="icon.png" alt="logo" />
            </a>
            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    <li class="navbar-item"><a href="#">start</a></li>
                    <li class="navbar-item"><a href="#">firma</a></li>
                    <li class="navbar-item"><a href="#">oferta</a></li>
                    <li class="navbar-item"><a href="#">kariera</a></li>
                    <li class="navbar-item"><a href="#">kontakt</a></li>
                </ul>
            </div>
            <a @click="navSwitch" class="icon">&#9776;</a>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    width: 100vw;
    background: transparent;
    position: absolute;
    top: 0px;
    z-index: 100;
    padding: 15px 25px;
    font-family: var(--font-header);
    font-size: 17px;
}

.navbar_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-brand img {
    width: 150px;
    margin-right: 25px;
}

.navbar-collapse {
    display: flex;
    justify-content: flex-end;
}

.navbar-nav {
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    list-style: none;
}
.navbar-item {
    padding: 0 25px;
}
.navbar-nav a {
    letter-spacing: 0.065em;
    text-decoration: none;
    color: #000;
}
.navbar .icon {
    text-decoration: none;
    color: #000;
    font-size: 22px;
    display: none;
    cursor: pointer;
}
@media screen and (max-width: 1000px) {
    .navbar-item {
        padding: 10px 20px;
        /* font-size: 14px; */
    }
}
@media screen and (max-width: 800px) {
    .navbar-collapse {
        width: 100%;
        display: none;
    }
    .navbar .icon {
        display: block;
    }
}

@media screen and (max-width: 800px) {
    .responsive .navbar_inner {
        flex-wrap: wrap;
    }
    .responsive .navbar-collapse {
        display: flex;
        order: 5;
    }
    .responsive .navbar-nav {
        display: block;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        line-height: 1.5;
    }
}

@media screen and (max-width: 450px) {
    .navbar-brand img {
        width: 120px;
    }
}

@media screen and (max-width: 350px) {
    .navbar_inner {
        justify-content: center;
    }
    .navbar_inner {
        flex-wrap: wrap;
    }
}
</style>

<script>
export default {
    methods: {
        navSwitch: function () {
            const navbar = document.querySelector(".navbar");
            if (navbar.className === "navbar") {
                navbar.className += " responsive";
            } else navbar.className = "navbar";
        },
    },
};
</script>
