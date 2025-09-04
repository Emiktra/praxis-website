<template>
  <div class="impressium">
    <h1>Impressium</h1>
    <p>This is a placeholder for your content.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Impressium extends Vue {
    
}
</script>

<style scoped>
.impressium {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>