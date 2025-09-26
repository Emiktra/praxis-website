<template>
  <div class="contact-container">
    <p>
      {{ STRINGS.PRAXIS_NAME }}<br>
      {{ STRINGS.STREET }}<br>
      {{ STRINGS.CITY }}<br>
      Tel. <a :href="`tel:${STRINGS.PHONE_NUM}`">{{ STRINGS.PHONE_NUM }}</a><br>
      <a :href="`mailto:${STRINGS.EMAIL}`">{{ STRINGS.EMAIL }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { STRINGS } from '@/constants';

@Options({})
export default class ContactComp extends Vue {
  STRINGS = STRINGS;
}
</script>

<style>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  line-height: 1.5;
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