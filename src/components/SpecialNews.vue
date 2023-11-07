<template>
    <div class="special">
        <div class="bg">
            <h3>ОНЦЛОХ НИЙТЛЭЛҮҮД</h3>
        </div>
        <div class="special_wrapper">
            <div class="special_content">
                <div class="box">
                    <img src="../assets/img/news/special1.png" alt="">
                    <div class="box_inner">
                        <h5>Lorem ipsum dolor sit amet quisquam est, qui dolorem ipsum quia</h5>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia...</p>
                        <div>
                            <span class="more">цааш үзэх</span>
                            <span class="date">2023.10.30</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/img/news/special2.png" alt="">
                    <div class="box_inner">
                        <h5>Lorem ipsum dolor sit amet quisquam est, qui dolorem ipsum quia</h5>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia...</p>
                        <div>
                            <span class="more">цааш үзэх</span>
                            <span class="date">2023.10.30</span>
                        </div>
                    </div>
                </div>
            </div>
            <button>Бусад нийтлэлүүд үзэх</button>
        </div>
    </div>
 
  </template>
  
  <script>
  export default {
    name: 'SpecialNews',
  };
  </script>
  
  <style scoped>
    .special {
        max-width: 1240px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: 52px auto 0;
        position: relative;
    }

    .special .bg {
        width: 100%;
        height: 318px;
        background-color: var(--success-color);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        padding-top: 37px;
        color: #fff;
    }
    .special .bg h3 {
        font-size: 22px;
    }

    .special .special_wrapper {
        position: relative;
    }
    .special .special_content {
        gap: 40px;
        top: -5rem; 
        left: 50%; 
        transform: translate(-50%, -50%);
        position: absolute;
        display: flex;
    }

    .special .special_wrapper .box {
        width: 560px;
        height: 360px;
    }
    .special .special_wrapper .box img {
        width: 560px;
        height: 360px;
    }
    .box_inner {
        padding: 34px 46px 44px;
        background-color: var(--primary-color);
        border-bottom: 6px solid var(--success-color);
    }

    .box_inner h5{
        font-size: 22px;
        color: var(--primary-color);
        font-weight: bold;
    }
    .box_inner p{
        font-size: 20px;
        color: var(--text-color);
    }
    .box_inner div {
        display: flex;
        justify-content: space-between;
    }
    .box_inner div .more{
        font-size: 20px;
        color: var(--text-color);
        font-weight: bold;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }
    .box_inner div .date{
        font-size: 20px;
        color: var(--text-color);
        font-weight: 300;
    }
    .special_wrapper button {
        width: 318px;
        height: 40px;
        background-color: var(--success-color);
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24rem;
        border: none;
        border-radius: 20px;
        padding: 4px 60px;
        color: #fff;
        font-size: 20px;
    }
  </style>
  