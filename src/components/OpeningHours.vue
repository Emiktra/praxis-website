<template>
  <div class="opening-hours">
    <h2>{{ STRINGS.OPENING_HOURS }}</h2>
    <ul>
      <li v-for="entry in OPENING_HOURS" :key="entry.days">
        <span class="days">{{ entry.days }}:</span>
        <span class="hours">{{ entry.hours }}</span>
      </li>
    </ul>
    <br>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
import { STRINGS } from "@/constants";

export default class OpeningHours extends Vue {
  STRINGS = STRINGS;

  OPENING_HOURS = [
    { days: "Montag–Donnerstag", hours: "09:00–12:00 und 14:00–16:00" },
    { days: "Freitag–Sonntag", hours: "geschlossen" },
  ];
}
</script>

<style>
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
</style>
