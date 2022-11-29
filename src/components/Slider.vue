<template>
    <div class="slider">
        <li class="liSlider" v-for="concert in concerts"><button class="sliderBtn" :class="{ active: selectedConcertId == concert.id }"  v-on:click="selectedConcertId = concert.id">{{concert.artist}}</button></li> 
    </div>
    <div v-if="concerts" class="divImage">
        <img class="imageBckg" :src="concerts.find(x => x.id === selectedConcertId).urlImg">
        <div class="infoArtiste">
            <div class="date">
                <h3 class="date">{{concerts.find(y => y.id === selectedConcertId).date}}</h3>
                <p class="place">{{concerts.find(y => y.id === selectedConcertId).place}}</p>
            </div>
            <div class="divBtnReserver">
                <router-link class="btnReserver" :to="`/concerts/${selectedConcertId}`">Réserver</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
        selectedConcertId: "1",
        concerts: [
            {id:"1", date: "21 décembre 2020", place: "Lyon, Palais des sports", artist: "Angèle", urlImg: "/images/angele.png"},
            {id:"2", date: "22 décembre 2020", place: "Lyon, Palais des sports", artist: "Damso", urlImg:"/images/damso.jpg"},
            {id:"3", date: "23 décembre 2020", place: "Lyon, Palais des sports", artist: "Laylow", urlImg:"/images/angele.png"},
            {id:"4", date: "24 décembre 2020", place: "Lyon, Palais des sports", artist: "Rihanna", urlImg:"/images/damso.jpg"},
            {id:"5", date: "25 décembre 2020", place: "Lyon, Palais des sports", artist: "Amir", urlImg:"/images/angele.png"}
        ]
    }
    
  }
}
</script>
<style>
.slider {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.sliderBtn {
    font-family: 'Sora', sans-serif;

    width: 100%;
    height: 70px;
    color: white;
    text-decoration: none;
    background: transparent;
    border: none;
    border-radius: 30px 30px 0 0;
    transition: all 3s;
}
button:hover{
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
}
.active {
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
}
.liSlider {
    list-style-type: none ;
    width: calc(90% / 5);
}
li.active {
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
}
.divImage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.imageBckg {
    width: 90%;
    border-radius: 0 0 75px 75px;
}
.infoArtiste {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: -120px;
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