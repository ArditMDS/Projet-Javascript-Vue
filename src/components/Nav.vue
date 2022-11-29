<template>
  <nav class="nav">
    <div class="navPart1">
      <router-link class="navLien logoGros" to="/buuk"><strong>buuk</strong></router-link>
      <router-link class="navLien" to="/">Accueil</router-link>
      <router-link class="navLien" to="/concerts">Tous les concerts</router-link>
      <router-link class="navLien" to="/mesRéservations">Mes réservations</router-link>
    </div>
    <div class="navPart2">
      <router-link class="navLien" to="/numéro">+33 4 50 67 33 22</router-link>
    </div>
  </nav> 
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style>
a.logoGros {
  font-size: 22px;
  border-right: 1px solid white;
  padding: 20px 47px 20px 47px;
}
.navLien {
  width: auto;
  color: white;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid white;
  padding: 25px;
}
 .navLien:hover {
  color: #D48AE6;
  border-color: #D48AE6;
}
.router-link-active {
  color:#D48AE6;
  border-color: #D48AE6;
}
.nav {
  display: flex;
  width: 100%;
  font-size: 15px;
}
.navPart1 {
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
}
.navPart2 {
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
}
</style>