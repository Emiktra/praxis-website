<template>
  <div class="home">
    <section class="hero" :style="{ backgroundImage: `url(${ASSETS.HERO_BG})` }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img :src="ASSETS.MAIN_LOGO" alt="logo">
        <h1>{{ STRINGS.PRAXIS_NAME }}</h1>
        <h2>{{ STRINGS.DOCTOR_NAME }}</h2>
      </div>
    </section>

    <section class="about-section">
      <div class="about-image">
        <img :src="ASSETS.DOCTOR_PORTRAIT" alt="Doctor">
      </div>
      <div class="about-text">
        <h2>Über {{ STRINGS.DOCTOR_NAME }}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean
          sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa
          nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosq
          ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis
          dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis
          scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra
          vestibulum fusce dictum risus.
        </p>
      </div>
    </section>

    <section class="team">
      <h2>Unser PraxisTeam</h2>
      <div class="team-grid">
        <div class="team-member" v-for="member in TEAM" :key="member.name">
          <router-link v-if="member.link" :to="member.link">
            <img :src="member.image" :alt="member.name" />
          </router-link>
          <img v-else :src="member.image" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.title }}</p>
        </div>
      </div>
    </section>

    <OpeningHours />

    <section class="contact">
      <div class="contact-section">
        <h2>{{ STRINGS.CONTACT }}</h2>
        
        <ContactComp />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ASSETS, STRINGS, ROUTES } from '@/constants';
import { TEAM } from '@/constants/team';
import ContactComp from '@/components/ContactComp.vue';
import OpeningHours from '@/components/OpeningHours.vue';

@Options({
  components: {
    ContactComp,
    OpeningHours,
  }
})
export default class Home extends Vue {
  ASSETS = ASSETS;
  STRINGS = STRINGS;
  TEAM = TEAM;
  ROUTES = ROUTES;
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  height: 700px;
  width: 100%;
  box-sizing: border-box;
  background-size: cover;
  position: relative;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 1;
}

.hero-content img {
  width: 300px;
  height: auto;
}

.about-section {
  display: flex;
  align-items: stretch;
  gap: 2rem;
  padding: 4rem 2rem;
  width: 90%;
  max-width: 1000px;
}

.about-image img {
  width: auto;
  height: 400px;
  border-radius: 4px;
}

.about-text {
  flex: 1;
  font-size: 20px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

@media (max-width: 1050px) {
  .about-section {
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-flow: column;
  }

  .about-text {
    text-align: left;
  }
}

@media (max-width: 420px) {
  .about-image img {
    width: 90%;
    height: auto;
  }
}

.team {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 4rem 2rem;
  align-items: stretch;
  width: 90%;
  max-width: 1000px;
}

.team h2 {
  text-align: left;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
}

.team-member {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.team-member p {
  margin: 0;
  padding: 0;
}

.team-member h3 {
  margin: 0.5rem;
}

.team-member img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.contact {
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--color-background-alt);
}

.contact-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  max-width: 1000px;
  width: 90%;
}

.contact-section h2 {
  padding: 0 1rem;
  margin: 0;
  margin-top: 2rem;
}
</style>