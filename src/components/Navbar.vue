<template>
  <header class="navbar">
    <div class="logo">Praxis</div>

    <button class="hamburger" @click="toggleMenu" :class="{ open: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav :class="['nav-links', { open: isMenuOpen }]">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/impressium">Impressium</router-link>
      <router-link to="/appointments" class="cta">Book Appointment</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Navbar extends Vue {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.cta {
  background: #0077cc;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}
.cta:hover {
  background: #005fa3;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger span {
  display: block;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}

/* Animate into X when open */
.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    border-top: 1px solid #ddd;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 1rem;
    text-align: center;
  }
}
</style>