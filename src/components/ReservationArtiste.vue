<template>
    <div class="containerConcert">
      <div class="placeEnd">
        <h3 class="placeConcert">{{concerts.find(x => x.id == selectedConcertId).place}}</h3>
      </div>
      <img class="imageBckgConcert" :src="concerts.find(x => x.id === selectedConcertId).urlImg">
      <div class="containerBas">
        <div class="textLeft">
          <h2 class="nameDate">{{concerts.find(x => x.id == selectedConcertId).artist}}</h2>
          <p class="nameDate">Le {{concerts.find(x => x.id == selectedConcertId).date}}, de {{concerts.find(x => x.id == selectedConcertId).hour}}</p>
        </div>
        <div class="textRight">
          <h2 class="priceBook">Prix: {{concerts.find(x => x.id == selectedConcertId).price}}</h2>
          <div class="divBtnReserver">
                <router-link class="btnReserver" :to="`/concerts/${selectedConcertId}`">Réserver</router-link>
          </div>
        </div>
      </div>
        

    </div>
</template>

<script>
export default {
  name: 'ReservationArtiste',
  mounted() {
    this.selectedConcertId = this.$route.params.concerts_id
  },
  data() {
    return {
        selectedConcertId: "1",
        concerts: [
            {id:"1", date: "21 décembre 2020",hour:"21h à 23h", place: "Lyon, Palais des sports", artist: "Angèle", urlImg: "/images/angele.png", price:"45€"},
            {id:"2", date: "22 décembre 2020",hour:"21h à 23h", place: "Lyon, Palais des sports", artist: "Damso", urlImg:"/images/damso.jpg", price:"45€"},
            {id:"3", date: "23 décembre 2020",hour:"21h à 23h", place: "Lyon, Palais des sports", artist: "Laylow", urlImg:"/images/angele.png", price:"45€"},
            {id:"4", date: "24 décembre 2020",hour:"21h à 23h", place: "Lyon, Palais des sports", artist: "Rihanna", urlImg:"/images/damso.jpg", price:"45€"},
            {id:"5", date: "25 décembre 2020",hour:"21h à 23h", place: "Lyon, Palais des sports", artist: "Amir", urlImg:"/images/angele.png", price:"45€"}
        ]
    }
    
  }
}
</script>

<style>
.containerConcert {
  color: white;
}
.imageBckgConcert {
    width: 100%;
}
.placeEnd {
  display: flex;
  justify-content: flex-end;
}
.placeConcert {
  position: relative;
  top: 100px;
  right: 50px;
  background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.containerBas {
  display: flex;
  justify-content: space-between;
}
.textLeft {
  position: relative;
  top: -150px;
  left: 50px;
}
.textRight {
  position: relative;
  top: -150px;
  right: 50px;
}
.divBtnReserver {
    font-family: 'Sora', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 150px;
    border-radius: 10px;
    border-color: transparent;
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
}
.btnReserver {
    text-decoration: none;
    color: white;
}
</style>