<template>
  <div class="impressium">
    <section class="impressium-header">
      <h1>{{ STRINGS.IMPRESSIUM }}</h1>
    </section>

    <section class="main-section">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {{ STRINGS.PRAXIS_NAME_OFFICIAL }}<br />
        {{ STRINGS.STREET }}<br />
        {{ STRINGS.CITY }}<br />
        {{ STRINGS.COUNTRY }}
      </p>

      <h2>{{ STRINGS.CONTACT }}</h2>
      
      <ContactComp />
      <p>Website: {{ STRINGS.WEBSITE_URL }}</p>


      <h2>Vertreten durch</h2>
      <p>{{ STRINGS.DOCTOR_NAME }}</p>

      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister.<br />
        Registergericht: {{ STRINGS.COMMERCIAL_REGISTER }}<br />
        Registernummer: {{ STRINGS.COMMERCIAL_REGISTER_NUM }}
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        {{ STRINGS.VAT_ID }}
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
        die Inhalte externer Links...
      </p>
    </section>
    <div class="divider"></div>
  </div>
</template>

<script lang="ts">
import { STRINGS, ROUTES } from "@/constants";
import { Options, Vue } from "vue-class-component";
import ContactComp from "@/components/ContactComp.vue";

@Options({
  components: {
    ContactComp
  }
})
export default class Impressium extends Vue {
  STRINGS = STRINGS;
  ROUTES = ROUTES;
}
</script>

<style scoped>
.impressium {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.impressium-header {
  max-width: 1000px;
  width: 90%;
  text-align: left;
  padding: 1rem;
  box-sizing: border-box;
}

.impressium-header h1 {
  font-size: 40px;
  margin: 0;
  margin-top: 2rem;
  color: var(--color-text-default);
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  max-width: 1000px;
  width: 90%;
}

.main-section h2 {
  padding: 0 1rem;
  margin: 0;
  margin-top: 2rem;
}

.main-section p {
  padding: 0 1rem;
  margin: 0;
  margin-top: 0.5rem;
  line-height: 1.5;
}
.divider {
  height: 50px;
}
</style>
