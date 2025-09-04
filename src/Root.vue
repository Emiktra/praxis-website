<template>
  <Navbar />

  <main>
    <router-view />
  </main>

  <Footer />
  
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

@Options({
  components: {
    Navbar,
    Footer
  }
})
export default class Root extends Vue {}
</script>


<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
