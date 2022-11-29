<template>
    <div class="mesRéservations">
      <div class="backgroundBleu">
        <Nav />
        <TexteAccueil text="Mes réservations, " sousText="pour les concerts" />
      </div>
      <NoReservation />
      <Footer />
      
        
    </div>
  </template>
  
  <script>
  import Nav from '../components/Nav.vue'
  import TexteAccueil from '../components/TexteAccueil.vue'
  import NoReservation from '../components/NoReservation.vue'
  import Footer from '../components/Footer.vue'

  
  export default {
    name: 'mesRéservations',
    components: {
      Nav,
      TexteAccueil,
      NoReservation,
      Footer,
    },
  }
  </script>
  
  <style lang="scss">
  .mesRéservations {
  color: white;
  }
  .backgroundBleu {
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  background-size: cover;
  border-radius: 0 0 0 50px;
}
  </style>