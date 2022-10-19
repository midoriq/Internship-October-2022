<template>
    <div class="item">
        <h4 class="item-header"><slot name="header"></slot></h4>
        <p class="item-text"><slot></slot></p>
    </div>
</template>

<style scoped>
.item {
    border: 2.64706px solid rgba(39, 51, 82, 0.4);
    filter: drop-shadow(0px 2.64706px 5.29412px rgba(0, 0, 0, 0.25));

    padding: 0 3vw;
    height: 15vw;
    width: 27%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-content: center;
    gap: 13px;
}

.item-header {
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    color: var(--secondary-color);

    font-size: 1.5vw;
}

.item-text {
    font-family: var(--font-text);
    font-weight: var(--font-weight-text);
    color: var(--secondary-color);

    font-size: 0.9vw;
    letter-spacing: 0.055em;

    text-align: justify;
}

/* .content {
    width: 40%;
} */
</style>
