<template>
    <div class="partners">
        <h3>ХАМТРАГЧИД</h3>
        <div class="partners_wrapper">
            <div><img src="../assets/img/partners/EU logo with text copy.png" alt="">  </div>
            <div><img src="../assets/img/partners/GAC NEW LOGO.png" alt="">  </div>
            <div><img src="../assets/img/partners/MONES_color copy.png" alt="">  </div>
            <div><img src="../assets/img/partners/TAF logo.png" alt="">  </div>
            <div><img src="../assets/img/partners/Updated CCR logo -RGB copy.png" alt="">  </div>
        </div>
    </div>
</template>

<script>

export default {
name: 'Partners',

};

</script>

<style scoped>

    .partners {
        width: 100%;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .partners h3 {
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 30px;
    }
    .partners_wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 140px;
    }
    .partners_wrapper div {
        width: 130px;
        opacity: 0.5;
        cursor: pointer;
    }

</style>
    