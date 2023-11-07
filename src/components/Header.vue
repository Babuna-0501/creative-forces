<template>
    <header>
            <nav class="d-flex justify-content-between">
                <div><a href="/"><img class="logo" src="../assets/logo/logo.png" alt=""></a></div>
                <div class="d-flex justify-content-between menu">
                    <div><img src="../assets/img/nav/search.png" alt="search"></div>
                    <div><img src="../assets/img/nav/gerelt.png" alt=""></div>
                    <div><img src="../assets/img/nav/menu.png" alt=""></div>
                </div>
            </nav>
        </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
        header {
            background-color: var( --secondary-color);
            color: #000;
            text-align: center;
            padding: 10px 0;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
        }

        nav li {
            display: inline;
            margin-right: 20px;
        }

        nav {
            max-width: 1920px;
            width: var(--container);
            margin-left: auto;
            margin-right: auto;
        }

        nav a {
            text-decoration: none;
            color: #000;
        }

        nav div {
            cursor: pointer;
        }

        .menu {
            flex-direction: row;
            gap: 18px;
        }
        .logo {
            width: 104px;
            height: 43px;
        }
  </style>
  