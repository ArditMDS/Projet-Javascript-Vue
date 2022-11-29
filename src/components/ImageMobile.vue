<template>
    <div class="imageMobile">
        <div class="texteTitre">
            <h2 class="titreMobile">buuk, aussi sur ton téléphone</h2>
            <p class="paragrapheMobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo
            </p>
        </div>
        <div class="imageApp">
            <img class="hImgA" src="../../public/images/image 6mobile.png" alt="">
            <img class="hImgS" src="../../public/images/image 7mobile.png" alt="">
        </div>
    </div> 
</template>

<script lang="ts">
export default {
  name: 'ImageMobile',
}
</script>

<style>
.imageMobile {
    margin: 100px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.texteTitre {
    color: black;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.titreMobile {
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 30px;
}
.imageApp {
    display: flex;
    
    justify-content: center;
    align-items: center;
}
.hImgS {
    height: 50px;
}
.hImgA {
    height: 70px;
}
</style>