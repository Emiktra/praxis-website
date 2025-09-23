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
    { path: ROUTES.IMPRESSUM, name: STRINGS.IMPRESSIUM },
    { path: ROUTES.PRIVACY_POLICY, name: STRINGS.PRIVACY_POLICY },
  ];
}
</script>

<style scoped>
.footer {
  background: var(--color-footer-bg);
  color: var(--color-text-link);
  padding: 1.5rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-content p {
  user-select: none;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--color-text-link);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-text-hover);
}
</style>