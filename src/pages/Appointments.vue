<template>
  <div class="appointments">
    <h1>Appointments</h1>
    <p>This is a placeholder for your content.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Appointments extends Vue {
    
}
</script>

<style scoped>
.appointments {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>