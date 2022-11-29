<template>
    <div class="containerSearchFilter">
        <div class="box searchBar">
            <img class="loupe" src="../../public/images/searchLogo.png" alt="">
            Rechercher un artiste
        </div>
        <div class="box filter">
            Trier par: <strong>Date</strong>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'SearchFilter',
}
</script>

<style>
.containerSearchFilter {
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.loupe {
    height: 20px;
    margin: 0 20px 0 10px;
}
.box {
    background-color: lightgray;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
    margin: 60px;
    text-align: center;
}
</style>