<template>
    <nav-bar></nav-bar>
    <v-container class="mt-12">    
        <home-lunch></home-lunch>
        <about-web></about-web>
    </v-container>

</template>
<script>
import AboutWeb from './AboutViz.vue';
import HomeLunch from './HomeViz.vue';
import NavBar from '../Navbar/NavBar.vue';
export default {
    components: {
        'home-lunch': HomeLunch,
        'about-web': AboutWeb,
        'nav-bar': NavBar
  }
}
</script>