<template>
    <div class="tousLesConcerts">
        <li class="containerCat liSlider" v-for="categorie in CategorieRap">
            <div class="boxRap">
                <div class="nameCategorie">
                    <h2 class="catName">{{categorie.nomCategorie}}</h2>
                </div>
                <div class="artists">
                    <li class="listArtists" v-for="artiste in artisteCat.filter(item => categorie.nomCategorie === item.categorieArtiste)" >
                        <div class="dateConcert"><p class="txtDate mReset">{{artiste.date}}</p></div>
                        <router-link v-on:click="selectedArtisteId = artisteCat.id"  :to="`/concerts/${selectedArtisteId}`"><img class="imgArtist" :src="artiste.image"></router-link>
                        <h4 class="nameArtist">{{artiste.nomArtiste}}</h4>
                        <p class="lieuConcert mReset">{{artiste.place}}</p>
                    </li>
                </div>
                
            </div>
        </li>
    </div>
</template>


<script>
export default {
  name: 'CategorieRap',
  data() {
    return {
        selectedArtisteId: "1",
        CategorieRap: [
            {id:"1", nomCategorie:"Rap/Rnb"},
            {id:"2", nomCategorie:"Variété française"},
            {id:"3", nomCategorie:"Electro"}
        ],
        artisteCat: [
            {id:"1", nomArtiste:"Dadju", place:"Velodrome, Marseille", date:"29/11/2022", image:"/images/dadju.png", categorieArtiste: "Rap/Rnb"},
            {id:"2", nomArtiste:"Damso", place:"Velodrome, Marseille", date:"30/11/2022", image:"/images/dadju.png", categorieArtiste: "Rap/Rnb"},
            {id:"3", nomArtiste:"Angèle", place:"Velodrome, Marseille", date:"01/12/2022", image:"/images/dadju.png", categorieArtiste: "Rap/Rnb"},
            {id:"4", nomArtiste:"Louane", place:"Velodrome, Marseille", date:"02/12/2022", image:"/images/dadju.png", categorieArtiste: "Rap/Rnb"},
            {id:"5", nomArtiste:"Amir", place:"Velodrome, Marseille", date:"03/12/2022", image:"/images/dadju.png", categorieArtiste: "Rap/Rnb"},
            {id:"6", nomArtiste:"Garou", place:"Velodrome, Marseille", date:"04/12/2022", image:"/images/dadju.png", categorieArtiste: "Variété française"},
            {id:"7", nomArtiste:"Vitaa", place:"Velodrome, Marseille", date:"05/12/2022", image:"/images/dadju.png", categorieArtiste: "Variété française"},
            {id:"8", nomArtiste:"Patrick Bruel", place:"Velodrome, Marseille", date:"06/12/2022", image:"/images/dadju.png", categorieArtiste: "Variété française"},
            {id:"9", nomArtiste:"Julien Clerc", place:"Velodrome, Marseille", date:"07/12/2022", image:"/images/dadju.png", categorieArtiste: "Variété française"},
            {id:"10", nomArtiste:"Slimane", place:"Velodrome, Marseille", date:"08/12/2022", image:"/images/dadju.png", categorieArtiste: "Variété française"},
            {id:"11", nomArtiste:"Vladimir Cauch.", place:"Velodrome, Marseille", date:"09/12/2022", image:"/images/dadju.png", categorieArtiste: "Electro"},
            {id:"12", nomArtiste:"David Guetta", place:"Velodrome, Marseille", date:"10/12/2022", image:"/images/dadju.png", categorieArtiste: "Electro"},
            {id:"13", nomArtiste:"Kygo", place:"Velodrome, Marseille", date:"11/12/2022", image:"/images/dadju.png", categorieArtiste: "Electro"},
            {id:"14", nomArtiste:"One Republic", place:"Velodrome, Marseille", date:"12/12/2022", image:"/images/dadju.png", categorieArtiste: "Electro"},
            {id:"15", nomArtiste:"Afrojack", place:"Velodrome, Marseille", date:"13/12/2022", image:"/images/dadju.png", categorieArtiste: "Electro"}
        ]
    }
}
}
</script>

<style>
.tousLesConcerts {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.containerCat {
    width: 95%;
    background-color: pink;
    border-radius: 50px;
    margin: 20px;
    padding: 20px;
}
.boxRap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
}
.artists {
    display: flex;
    justify-content: center;
    align-items: center;
}
.listArtists {
    display: flex;
    flex-direction: column;
    margin: 5px;
}
.imgArtist {
    height: 330px;
}
.nameArtist {
    margin: 0;
    position: relative;
    top: -60px;
    left: 15px;
}
.lieuConcert {
    position: relative;
    top: -60px;
    left: 15px;
}
.mReset {
    margin: 0;
}
.dateConcert {
    display: flex;
    justify-content: flex-end;
    margin: 0;
}
.txtDate {
    position: relative;
    top: 30px;
    right: 10px;
}
.catName {
    background: linear-gradient(90deg, rgba(33,28,57,1) 0%, rgba(146,123,249,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>