<template>
  <header class="navbar">
    <div class="navbar-content">
      <div class="logo_section" @click="goHome">
        <img :src="ASSETS.MAIN_LOGO" alt="logo">
        <h3>{{ STRINGS.PRAXIS_NAME }}</h3>
        <ThemeToggle />
      </div>
  
      <button class="hamburger" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
  
      <nav ref="navLinks" :class="['nav-links', { open: isMenuOpen }]">
        <div class="nav-links-gap"></div>
        <router-link v-for="route in ROUTES_ARRAY"
          :key="route.path"
          :to="route.path"
          @click="toggleMenu"
        >
          {{ route.name }}
        </router-link>
        <div class="nav-links-gap"></div>
      </nav>
    </div>
  </header>
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ROUTES, STRINGS, ASSETS } from '@/constants';
import ThemeToggle from './ThemeToggle.vue';

@Options({
  components: {
    ThemeToggle
  }
})
export default class Navbar extends Vue {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    const nav = this.$refs.navLinks as HTMLElement;
    if (this.isMenuOpen) {
      nav.style.maxHeight = nav.scrollHeight + 'px';
    } else {
      nav.style.maxHeight = '0';
    }
  }
  closeMenu(): void {
    this.isMenuOpen = false;

    const nav = this.$refs.navLinks as HTMLElement;
    nav.style.maxHeight = '0';
  }

  ROUTES = ROUTES;
  ASSETS = ASSETS;
  STRINGS = STRINGS;

  ROUTES_ARRAY = [
    { path: ROUTES.HOME, name: STRINGS.HOME },
    { path: ROUTES.ABOUT, name: STRINGS.ABOUT },
    { path: ROUTES.SERVICES, name: STRINGS.SERVICES },
    { path: ROUTES.CONTACT, name: STRINGS.CONTACT },
    { path: ROUTES.APPOINTMENTS, name: STRINGS.APPOINTMENTS },
  ];

  goHome() {
    this.$router.push(ROUTES.HOME);
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background:var(--color-navbar-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  width: 90%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
}

.logo_section {
  font-size: 1.5rem;
  font-weight: bold;
  display:flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.logo_section h3 {
  transition: color 0.5s ease;
}
.logo_section h3:hover {
  color: var(--color-text-hover);
  transition: color 0.2s ease;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 18px;
}

.nav-links-gap {
  display: none;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.nav-links a {
  color: var(--color-text-default);
  transition: color 0.5s ease;
  text-decoration: none;
}
.nav-links a:hover {
  color: var(--color-text-hover);
  transition: color 0.2s ease;
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
  position: relative;
}
.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--color-asset-bg);
  border-radius: 2px;
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
}

/* Animate into X when open */
.hamburger span:nth-child(1) {
  top: 0;
}
.hamburger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}
.hamburger span:nth-child(3) {
  bottom: 0;
}

.hamburger.open span:nth-child(1) {
  top: 50%;
  transform: rotate(45deg) translateY(-70%);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  bottom: 50%;
  transform: rotate(-45deg) translateY(70%);
}

@media (max-width: 1200px) {
  .hamburger {
    display: inline;
  }

  .nav-links {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    gap: 0;
    flex-direction: column;
    background: var(--color-hamburger-menu-bg);
    border-top: 1px solid var(--color-border);

    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in;
  }

  .nav-links.open {
    transition: max-height 0.2s ease-out;
  }

  .nav-links-gap {
    display: block;
  }

  .nav-links a {
    padding: 0;
    text-align: center;
    width: 100%;
    padding: 1rem;
    font-size: 20px;
  }

  .nav-links a:hover {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    transition: background 0.3s ease, backdrop-filter 0.3s ease;
  }
}
</style>