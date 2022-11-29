<template>
    <div class="noReservation">
        <div class="fondRose">
            <h2 class="noReservTxt">Aucune réservation enregistrée pour le moment</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NoReservation',
}
</script>

<style>
.noReservation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 150px 0;
}
.fondRose {
    display: flex;
    justify-content: center;
    border-radius: 30px;
    background-color: #F3EEFF;
    width: 90%;
}
.noReservTxt {
    
  background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>