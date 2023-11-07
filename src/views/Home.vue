<template>
    <div class="container"> 
      <Header/>
      <Hero/>
      <MainNews/>
      <ExtraNews/>
      <SpecialNews/>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  import Hero from "../components/Hero.vue";
  import MainNews from "../components/MainNews.vue";
  import ExtraNews from "../components/ExtraNews.vue";
  import SpecialNews from "../components/SpecialNews.vue";

  export default {
    name: 'Home',
    components: {
    Header,
    Hero,
    MainNews,
    ExtraNews,
    SpecialNews,
    Footer,
  },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  .container {
    max-width: 1920px;
  }
  </style>
  