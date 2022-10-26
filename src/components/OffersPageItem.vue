<script setup>
defineProps({
    src: String,
});
</script>

<template>
    <div class="item">
        <!-- <slot name="image"><img src="offer-icons/crm.png" alt="" /></slot> -->
        <img :src="'/offer-icons/' + src" alt="" />

        <h4><slot name="header">System ERPONE CRM</slot></h4>

        <p>
            <slot name="text"
                >Platforma ERPONE pozwala na łatwe i szybkie generowanie ofert i
                zamówień według Państwa klientów. Dzięki architekturze naszej
                platformy jesteśmy w standardowym czasie wdrożenia
                spersonalizować każdy element Systemu pod Państwa
                potrzeby.</slot
            >
        </p>
        <span class="arrow-right"></span>
    </div>
</template>

<style scoped>
.item {
    font-family: var(--font-header);
    background-color: var(--background-color);
    color: var(--primary-color);
    width: 280px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 20px;
    height: 340px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;

    cursor: pointer;
    transition: ease-in-out 2s;
}

.item img {
    align-self: center;
    height: 100px;
}

.item h4,
.item p {
    width: 90%;
}

.item h4 {
    font-weight: var(--font-weight-1);
    font-size: 17px;
}

.item p {
    font-weight: var(--font-weight-text);
    font-size: 10px;
    text-align: justify;
}

.item .arrow-right {
    align-self: flex-end;
    justify-self: flex-end;
}

.arrow-right {
    width: 12px;
    height: 12px;
    border-top: 1.5px solid var(--primary-color);
    border-right: 1.5px solid var(--primary-color);
    transform: rotate(45deg);
}

@media screen and (max-width: 800px) {
    .item {
        width: 230px;
        height: 310px;
    }

    .item img {
        height: 70px;
    }
    .item p {
        font-size: 9px;
    }
}

@media screen and (max-width: 600px) {
    .item {
        width: 220px;
        height: 280px;
        gap: 10px;
    }

    .item img {
        height: 50px;
    }
    .item p {
        font-size: 9px;
    }
    .item h4 {
        font-size: 14px;
    }
    .item .arrow-right {
        font-size: 16px;
    }
}
</style>
