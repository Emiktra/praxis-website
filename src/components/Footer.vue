<template>
  <footer class="footer">
    <div class="footer-content">
      <p>{{ STRINGS.COPYRIGHT + " " + STRINGS.PRAXIS_NAME }}</p>

      <nav class="footer-links">
        <router-link :to="ROUTES.HOME">{{ STRINGS.HOME }}</router-link>
        <router-link :to="ROUTES.ABOUT">{{ STRINGS.ABOUT }}</router-link>
        <router-link :to="ROUTES.SERVICES">{{ STRINGS.SERVICES }}</router-link>
        <router-link :to="ROUTES.CONTACT">{{ STRINGS.CONTACT }}</router-link>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ROUTES } from '@/constants';
import { STRINGS } from '@/constants';

@Options({})
export default class Footer extends Vue {
    ROUTES = ROUTES;
    STRINGS = STRINGS;
}
</script>

<style scoped>
.footer {
  background: var(--color-footer-bg);
  color: var(--color-text-primary);
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
  color: var(--color-text-default);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-text-hover);
}
</style>