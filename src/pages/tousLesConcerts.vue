<template>
    <div class="concerts">
      <div class="backgroundBleu">
        <Nav />
        <TexteAccueil text="Tous les concerts, " sousText="en avant-première." />
      </div>
      <SearchFilter />
      <CategorieRap />
      <Footer />
    </div>
    
  </template>
  
  <script>
  import Welcome from '../components/Welcome.vue'
  import Nav from '../components/Nav.vue'
  import TexteAccueil from '../components/TexteAccueil.vue'
  import SearchFilter from '../components/SearchFilter.vue'
  import CategorieRap from '../components/CategorieRap.vue'
  import Footer from '../components/Footer.vue'


  
  export default {
    name: 'Concerts',
    components: {
      Welcome,
      Nav,
      TexteAccueil,
      SearchFilter,
      CategorieRap,
      Footer,
    },
  }
  </script>
  
  <style lang="scss">
  .concerts {
    width: 100%;
    color: white;
  }
  
  .backgroundBleu {
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  background-size: cover;
  border-radius: 0 0 0 50px;
}
  </style>