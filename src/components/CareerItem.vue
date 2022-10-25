<template>
    <div class="item">
        <div class="content">
            <h4><slot name="header">.NET Developer</slot></h4>
            <p>
                <slot name="text"
                    >Aktualnie szukamy
                    <span class="bold">C#, .NET Core, .NET Developera</span>
                    który dołączyłby do naszego Team'u rozwijającego systemy
                    CRM/B2B/eCommerce dla naszych klientów. <br /><br />Jeśli
                    posiadasz doświadczenie w projektowaniu oraz programowaniu
                    aplikacji biznesowych, chcesz się rozwijać, mieć kontakt z
                    klientem i mieć wpływ na tworzone rozwiązania to zapraszamy
                    :)
                </slot>
            </p>
        </div>
        <div class="arrow"><span class="arrow-right"></span></div>
    </div>
</template>

<style scoped>
h4 {
    font-family: var(--font-header);
    font-weight: var(--font-weight-1);
    font-size: 27px;
}

p {
    font-family: var(--font-header);
    font-weight: var(--font-weight-text);
    font-size: 13px;
    text-align: justify;
    line-height: 19px;

    width: 80%;
}

.bold {
    font-weight: var(--font-weight-2);
}

.item {
    background-color: var(--background-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 100%;
    height: 200px;
    padding: 40px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
}

.arrow {
    align-self: flex-end;
}

.arrow-right {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    transform: rotate(45deg);
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
}

@media screen and (max-width: 600px) {
    .item {
        height: 250px;
        padding: 20px 30px;
    }
    p {
        width: 90%;
    }
}
@media screen and (max-width: 450px) {
    .item {
        height: 290px;
        padding: 20px 30px;
    }
    p {
        width: 90%;
    }
}

@media screen and (max-width: 400px) {
    .item {
        height: 360px;
    }
}
</style>
