<template>
  <Navbar />

  <main class="content">
    <router-view />
  </main>

  <Footer />
  
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import '@/constants/theme.css';

@Options({
  components: {
    Navbar,
    Footer,
  }
})

export default class Root extends Vue {}
</script>


<style>
body {
  margin: 0;
  padding: 0;
}

#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--color-background);
  color: var(--color-text-default);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main.content {
  flex: 1;
}
</style>
