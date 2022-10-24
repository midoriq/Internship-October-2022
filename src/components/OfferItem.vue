<template>
    <div class="item-body">
        <img class="item-img" src="/offer-icons/icon1.png" alt="" />
        <div class="item">
            <h4 class="item-header"><slot name="header"></slot></h4>
            <p class="item-text"><slot></slot></p>
        </div>
    </div>
</template>

<style scoped>
.item-body {
    /* border: 2.64706px solid rgba(39, 51, 82, 0.4);
    filter: drop-shadow(0px 2.64706px 5.29412px rgba(0, 0, 0, 0.25)); */

    border: 2.64706px solid rgba(39, 51, 82, 0.4);
    height: 15vw;
    width: 26%;
    padding: 0 3vw;

    color: var(--secondary-color);

    transition: ease-in-out 0.5s;
}

.item {
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-content: center;
    gap: 10px;
}

.item-img {
    position: absolute;
    top: -18%;
    left: 7%;
    height: 5vw;
}

/* img {
    background-color: var(--primary-color);
} */
.item-header {
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);

    font-size: 1.5vw;
}

.item-text {
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);

    font-size: 1vw;
    letter-spacing: 0.055em;

    text-align: justify;
}
.item-body:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);

    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    /* Section 2 */
    .item-body {
        width: 40%;
    }
    .item-header {
        font-size: 1.7vw;
    }
    .item-text {
        font-size: 1.2vw;
    }
}

@media screen and (max-width: 800px) {
    .item-body {
        width: 60%;
        height: 170px;
    }
    .item-header {
        font-size: 21px;
    }
    .item-text {
        font-size: 13px;
    }
    .item-img {
        height: 50px;
    }
}

@media screen and (max-width: 550px) {
    .item-body {
        width: 70%;
        height: 180px;
    }
    .item-header {
        font-size: 18px;
    }
    .item-text {
        font-size: 12px;
    }
    .item-img {
        height: 50px;
    }
}

/* .item-body:hover > img {
    background-color: var(--secondary-color);
} */

/* .content {
    width: 40%;
} */
</style>
