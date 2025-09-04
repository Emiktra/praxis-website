<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 My Praxis. All rights reserved.</p>

      <nav class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {
    
}
</script>

<style scoped>
.footer {
  background: #222;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #fff;
}
</style>