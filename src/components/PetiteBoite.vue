<template>
    <div class="petiteBoite">
        <li class="listBox liSlider" v-for="contenu in contenuBoite">
            <h3 class="id">{{contenu.id}}</h3>
            <h3 class="titre">{{contenu.titre}}</h3>
            <p class="paragraphe">{{contenu.paragraphe}}</p>
        </li> 

    </div>
</template>


<script lang="ts">
export default {
  name: 'PetiteBoite',
  data() {
    return {
        contenuBoite: [
            {id:"1", titre:"Choisis ton artiste",paragraphe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui"},
            {id:"2", titre:"Réserve ton billet",paragraphe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui"},
            {id:"3", titre:"Kiffe ton concertx",paragraphe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui"}
        ]
    }
  }
}
</script>
<style>
.petiteBoite {
    display: flex;
    justify-content: space-around;
}
.id {
    position: relative;
    top: -45px;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
}
.titre {
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.paragraphe {
    font-size: 15px;
}
.listBox {
    position: relative;
    background:rgba(0, 0, 0, 0.2);
    border-radius: 37px;
    padding: 0px 30px 30px 30px;
    margin-bottom: 10%;
}
</style>