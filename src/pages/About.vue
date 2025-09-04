<template>
  <div class="about">
    <h1>About</h1>
    <p>This is a placeholder for your content.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class About extends Vue {
    
}
</script>

<style scoped>
.about {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>