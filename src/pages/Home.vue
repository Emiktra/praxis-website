<template>
  <div class="home">
    <h1>Home</h1>
    <p>This is a placeholder for your content.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Home extends Vue {

}
</script>

<style scoped>
.home {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
}
</style>