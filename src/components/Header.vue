 <template>
   <div class="top-nav">
    <div class="dr logo"> 
      <img src="../assets/logo/logo.png" alt="">
    </div>
    <div class="dr nav_wrapper">
      <div class="search">
        <img src="../assets/img/nav/search.png" alt="">
     </div>
     <div class="dr gerelt">
        <img src="../assets/img/nav/gerelt.png" alt="">
     </div>
     <div class="dr tohirgoo">
        <img src="../assets/img/nav/menu.png" alt="">
     </div>
    </div>
   </div>

</template>
  
<script>

import "../assets/styles/main.css"

export default {
    name: 'Header',
};

</script>


<style scoped>
.top-nav {
  height: 75px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.logo {
  width: 104px;
}
.nav_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 18px;
}

.dr {
  cursor: pointer;
}
</style>




   