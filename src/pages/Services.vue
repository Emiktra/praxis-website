<template>
  <div class="services-page">
    <div class="services-header">
      <h1>{{ STRINGS.SERVICES }}</h1>
    </div>

    <div class="parallax" :style="{ backgroundImage: `url(${ASSETS.SERVICES_BG})` }"></div>

    <nav class="toc">
      <ul>
        <li><router-link to="#termin">Digitale Terminvereinbarung</router-link></li>
        <li><router-link to="#beratung">Beratung und Aufklärung</router-link></li>
        <li><router-link to="#behandlungen">Behandlungen</router-link></li>
      </ul>
    </nav>

    <section id="termin" class="service">
      <h2>Digitale Terminvereinbarung</h2>
      <p>
        Hier kommt der Text zur digitalen Terminvereinbarung. 
        Einfacher Zugang, schnell und unkompliziert.
      </p>
    </section>

    <section id="beratung" class="service">
      <h2>Beratung und Aufklärung</h2>
      <p>
        Informationen und Aufklärungsgespräche über Behandlungsmöglichkeiten 
        und psychische Gesundheit.
      </p>
    </section>

    <section id="behandlungen" class="service">
      <h2>Weitere Behandlungen</h2>
      <ul>
        <li>Beispiel-Behandlung A</li>
        <li>Beispiel-Behandlung B</li>
        <li>Beispiel-Behandlung C</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ASSETS, STRINGS } from '@/constants';

@Options({})
export default class Services extends Vue {
  ASSETS = ASSETS;
  STRINGS = STRINGS;
}
</script>

<style scoped>
.services-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-header {
  text-align: left;
  padding: 2rem 1rem;
  max-width: 1000px;
  width: 90%;
  box-sizing: border-box;
}

.services-header h1{
  color: var(--color-text-default);
}

.parallax {
  min-height: 300px;
  width: 100%;
  box-sizing: border-box;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.toc {
  max-width: 1000px;
  width: 90%;
  margin: 2rem 0;
  padding: 0 1rem;
  box-sizing: border-box;
}
.toc ul {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1.5rem;
  padding: 0 1rem;
  list-style: disc;
  font-size: 18px;
}
.toc a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 0.5s ease;
}
.toc a:hover {
  transition: color 0.2s ease;
  color: var(--color-text-hover);
}

.service {
  max-width: 1000px;
  width: 90%;
  text-align: left;
  margin: 3rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
}
</style>
