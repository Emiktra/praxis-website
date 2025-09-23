<template>
  <footer class="footer">
    <div class="footer-content">
      <p>{{ STRINGS.COPYRIGHT + " " + STRINGS.PRAXIS_NAME }}</p>

      <nav class="footer-links">
        <router-link v-for="route in ROUTES_ARRAY"
          :key="route.path"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ROUTES, STRINGS } from '@/constants';

@Options({})
export default class Footer extends Vue {
  ROUTES = ROUTES;
  STRINGS = STRINGS;

  ROUTES_ARRAY = [
    { path: ROUTES.ABOUT, name: STRINGS.ABOUT },
    { path: ROUTES.SERVICES, name: STRINGS.SERVICES },
    { path: ROUTES.CONTACT, name: STRINGS.CONTACT },
    { path: ROUTES.IMPRESSUM, name: STRINGS.IMPRESSUM },
  ];
}
</script>

<style scoped>
.footer {
  background: var(--color-footer-bg);
  color: var(--color-text-default);
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