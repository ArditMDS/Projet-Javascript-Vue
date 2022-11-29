<template>
  <div class="home">
      <div class="backgroundBleu">
        <Nav />
        <TexteAccueil text="Les meilleurs concerts, " sousText="en avant-première." />
        <Slider />
        <TexteGras />
        <PetiteBoite />
      </div>
      <ImageMobile/>
      <Footer />
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'
import Nav from '../components/Nav.vue'
import TexteAccueil from '../components/TexteAccueil.vue'
import Slider from '../components/Slider.vue'
import PetiteBoite from '../components/PetiteBoite.vue'
import TexteGras from '../components/TexteGras.vue'
import ImageMobile from '../components/ImageMobile.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Nav,
    TexteAccueil,
    Slider,
    TexteGras,
    PetiteBoite,
    ImageMobile,
    Footer,
  },
}
</script>

<style lang="scss">
.home {
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.backgroundBleu {
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  background-size: cover;
  border-radius: 0 0 50px 50px;
}
</style>