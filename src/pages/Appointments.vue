<template>
  <div class="appointments">
    <section  class="appointments-header">
      <h1>{{ STRINGS.APPOINTMENTS }}</h1>
    </section>

    <OpeningHours />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { STRINGS } from '@/constants';
import OpeningHours from '@/components/OpeningHours.vue';

@Options({
  components: {
    OpeningHours
  }
})
export default class Appointments extends Vue {
  STRINGS = STRINGS;
}
</script>

<style scoped>
.appointments {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.appointments-header {
  max-width: 1000px;
  width: 90%;
  text-align: left;
  padding: 1rem;
  box-sizing: border-box;
}

.appointments h1 {
  font-size: 40px;
  margin: 0;
  margin-top: 2rem;
  color: var(--color-text-default);
}
</style>