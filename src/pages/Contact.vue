<template>
  <div class="contanct">
    <h1>Contanct</h1>
    <p>This is a placeholder for your content.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Contanct extends Vue {
    
}
</script>

<style scoped>
.contanct {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>