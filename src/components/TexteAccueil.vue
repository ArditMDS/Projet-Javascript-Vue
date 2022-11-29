<template>
  <div class="accueil">
    <h2 class="titrePrincipale">{{text}}<br><span class="sousTitre"> {{sousText}}</span></h2>
  </div>
  <img class="imageFond" src="../../public/images/VectorimageAcc.png" alt="forme">
</template>

<script>
export default {
  name: 'TexteAccueil',
  props: {
    text: String,
    sousText: String,
  },
}
</script>

<style>
.accueil {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titrePrincipale {
  margin-top: 200px;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  z-index: 1;
}
.sousTitre {
  font-size: 40px;
  line-height: 63px;
  background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.imageFond {
  position: relative;
  top: -120px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>