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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo odit cumque 
          consequuntur tempora ullam doloremque, atque magni necessitatibus assumenda adipisci 
          quos maiores expedita repellendus corrupti esse fugiat nesciunt reiciendis.
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

    <section class="opening-hours">
      <h2>{{ STRINGS.OPENING_HOURS }}</h2>
      <ul>
        <li v-for="entry in OPENING_HOURS" :key="entry.days">
          <span class="days">{{ entry.days }}:</span>
          <span class="hours">{{ entry.hours }}</span>
        </li>
      </ul>
      <br>
    </section>

    <section class="contact">
      <div class="contact-container">
        <h2>{{ STRINGS.CONTACT }}</h2>
        <p>
          {{ STRINGS.PRAXIS_NAME }}<br>
          {{ STRINGS.STREET }}<br>
          {{ STRINGS.CITY }}<br>
          Tel. <a :href="`tel:${STRINGS.PHONE_NUM}`">{{ STRINGS.PHONE_NUM }}</a><br>
          <a :href="`mailto:${STRINGS.EMAIL}`">{{ STRINGS.EMAIL }}</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ASSETS, STRINGS, ROUTES } from '@/constants';
import { TEAM } from '@/constants/team';

@Options({})
export default class Home extends Vue {
  ASSETS = ASSETS;
  STRINGS = STRINGS;
  TEAM = TEAM;
  ROUTES = ROUTES;

  OPENING_HOURS = [
    { days: "Montag–Donnerstag", hours: "09:00–12:00 und 14:00–16:00" },
    { days: "Freitag–Sonntag", hours: "geschlossen" },
  ];
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

.opening-hours {
  width: 90%;
  max-width: 1000px;
}

.opening-hours h2 {
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.opening-hours ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 500px;
  margin-left: 0;
  padding-left: 1rem;
}

.opening-hours li {
  position: relative;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  height: 1.5rem;
}

.opening-hours .days {
  font-weight: bold;
  position: absolute;
  left: 0;
}

.opening-hours .hours {
  position: absolute;
  left: 200px;
  font-style: italic;
}

@media (max-width: 500px) {
  .opening-hours li {
    height: auto;
    padding: 0.25rem 0;
  }

  .opening-hours .days,
  .opening-hours .hours {
    position: static;
    display: block;
    margin-left: 0;
    margin: 4px 0;
  }
}

.contact {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  background: var(--color-background-alt);
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0;
  text-align: left;
  width: 90%;
  max-width: 1000px;
  box-sizing: border-box;
}

.contact-container h2 {
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.contact-container p {
  text-align: left;
  line-height: 1.6;
  padding-left: 1rem;
}

.contact-container p a {
  text-decoration: none;
  color: var(--color-text-link-dark);
  transition: color 0.5s ease;
}

.contact-container p a:hover {
  transition: color 0.2s ease;
  color: var(--color-text-hover);
}
</style>