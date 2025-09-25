<template>
  <div class="contanct">
    <section  class="contact-header">
      <h1>{{ STRINGS.CONTACT }}</h1>
    </section>

    <ContactComp />

    <section class="location">
      <div class="location-title">
        <h2>Hier finden Sie uns</h2>
      </div>
      <div class="location-map">
        <iframe
          :src="STRINGS.LOCATION_EMBED"
          width="1000"
          height="600"
          style="border:0;"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <section  class="info-section">
      <h2>HINWEISE ZUR PRAXIS:</h2>
      <p>Hinweise...</p>
      <br>
      <h2>PARKMÖGLICHKEITEN:</h2>
      <p>Parkmöglichkeiten...</p>
      <br>
      <h2>ÖFFENTLICHE VERKEHRSMITTEL:</h2>
      <p>S-Bahn Remscheid Lüttringhausen. Bushaltestelle Eisernstein - Remscheid</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ASSETS, STRINGS } from '@/constants';
import ContactComp from '@/components/ContactComp.vue';

@Options({
  components: {
    ContactComp
  }
})
export default class Contanct extends Vue {
  ASSETS = ASSETS;
  STRINGS = STRINGS;
}
</script>

<style scoped>
.contanct {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-header {
  max-width: 1000px;
  width: 90%;
  text-align: left;
  padding: 1rem;
  box-sizing: border-box;
}

.contanct h1 {
  font-size: 40px;
  margin: 0;
  margin-top: 2rem;
  color: var(--color-text-default);
}

.location {
  width: 90%;
  max-width: 1000px;
}

.location-title {
  text-align: left;
  box-sizing: border-box;
  padding: 1rem;
}

.location-title h2 {
  margin: 0.5rem;
}

.location-map {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.info-section {
  max-width: 1000px;
  width: 90%;
  text-align: left;
  padding: 1rem;
  box-sizing: border-box;
}
</style>