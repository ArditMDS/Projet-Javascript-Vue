<template>
    <div class="réserver">
        <div class="backgroundBleu">
            <Nav />
            <ReservationArtiste />
            <Footer />
        </div>
    </div>
</template>



<script>
import Nav from '../../components/Nav.vue'
import ReservationArtiste from '../../components/ReservationArtiste.vue'
import Footer from '../../components/Footer.vue'


export default {
  name: 'reserver',
  components: {
    Nav,
    ReservationArtiste,
    Footer,
  },
}
</script>