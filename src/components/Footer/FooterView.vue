<template>
 <footer>

<a 
  
  class="socialLink"
  v-for="(socialLink, index) in socialLinks" 
  :key="index"
  :href="socialLink.link"
  target="_blank"
  >
<img 
  :alt="socialLink.label"
  :title="socialLink.label"
  :src="socialLink.icon"
  >
  
</a>
</footer>
</template>

<script  src="./FooterView.ts"></script>

<style src="./FooterView.css">

</style> >