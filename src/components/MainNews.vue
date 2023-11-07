<template>
    <div class="mainNews"> 
        <div class="first">
            <img class="img-fluid" src="../assets/img/news/mnews1.png" alt="">
            <div class="title d-flex">
                <h4>ГЭРЭЛТ ЦОХ БАЙШИН ТББ</h4>
            </div>
        </div>
        <div class="second">
            <img class="img-fluid" src="../assets/img/news/mnews2.png" alt="">
            <div class="title d-flex">
                <h4>ТОХИРУУЛГА.МН</h4>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainNews',
  };
  </script>
  
  <style scoped>
  .mainNews {
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 52px auto 0;
  }
  .mainNews .first .title{
    height: 103px;
    background-color:#00BCA9;
    color: var(--success-color);
    align-items: center;
    padding-left: 48px;
    border-bottom: 6px solid var(--success-color);
  }
  .mainNews .second .title{
    height: 103px;
    background-color:#00BCA9;
    color: var(--success-color);
    align-items: center;
    padding-left: 48px;
    border-bottom: 6px solid var(--success-color);
  }


  </style>
  