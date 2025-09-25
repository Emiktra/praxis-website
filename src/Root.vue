<template>
  <Navbar />

  <main class="content">
    <router-view />
  </main>

  <Footer />
  
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

import { COLORS } from '@/constants';

@Options({
  components: {
    Navbar,
    Footer,
  }
})
export default class Root extends Vue {
  mounted() {
    const root = document.documentElement; // reference to <html>
    root.style.setProperty('--color-text-default', COLORS.TEXT_DEFAULT);
    root.style.setProperty('--color-text-hover', COLORS.TEXT_HOVER);
    root.style.setProperty('--color-text-link', COLORS.LINK);
    root.style.setProperty('--color-text-link-dark', COLORS.LINK_DARK);
    root.style.setProperty('--color-text-secondary', COLORS.SECONDARY);
    root.style.setProperty('--color-background', COLORS.BACKGROUND);
    root.style.setProperty('--color-background-alt', COLORS.BACKGROUND_ALT);
    root.style.setProperty('--color-footer-bg', COLORS.FOOTER_BG);
    root.style.setProperty('--color-footer-text', COLORS.FOOTER_TEXT);
    root.style.setProperty('--color-border', COLORS.BORDER_COLOR);
    root.style.setProperty('--color-asset-bg', COLORS.ASSET_BG);
  }
}
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
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main.content {
  flex: 1;
}
</style>
