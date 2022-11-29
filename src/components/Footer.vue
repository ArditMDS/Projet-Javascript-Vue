<template>
    <div class="footer">
        <div class="titreCouleur">
            <routeur-link class="footerTexte nomSite" to="/">buuk</routeur-link>
        </div>
        <div class="resteFooter">
            <routeur-link class="footerTexte" to="/">Conditions de ventes</routeur-link>
            <routeur-link class="footerTexte" to="/">Mentions légales</routeur-link>
            <routeur-link class="footerTexte" to="/"><strong>Un problème ? +33 4 50 44 56 03</strong></routeur-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>
<style>
.footer {
    display: flex;
    background: #dfdfdf;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    
}
.footerTexte {
    padding: 30px;
    color: black;
}
.nomSite {
    background: linear-gradient(90deg, rgba(217,156,240,1) 0%, rgba(146,123,249,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 50px;
    padding: 0 0 0 ;
}
</style>