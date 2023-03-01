
<template>
  <header>
    <nav class="container">
        <a href="/"><img alt="JC-Dev" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></a>

        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="menu-button" v-on:click="openMenu">

        <div id="menu-overlay" v-if="menuActive" v-on:click=closeMenu ></div>
        <div id="menu-itens" :class="{active:menuActive}" >
          <a href="/"><img alt="JC-Dev" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfólio</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contatos">Contato</a></li>
          </ul>
        </div>
    </nav>
  </header>

</template>

<script  src="./HeaderPage.ts"></script>

<style scoped src="./HeaderPage.css"></style>>