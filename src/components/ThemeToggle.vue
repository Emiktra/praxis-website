<template>
  <button type="button" class="theme-toggle" @click.stop="toggleTheme">
    <span v-if="isDarkMode">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { STRINGS } from "@/constants";

@Options({})
export default class ThemeToggle extends Vue {
  STRINGS = STRINGS;

  isDarkMode = false;

  created() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      this.isDarkMode = savedTheme === "dark";
    } else {
      this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    this.applyTheme(this.isDarkMode ? "dark" : "light");

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.isDarkMode = e.matches;
        this.applyTheme(this.isDarkMode ? "dark" : "light");
      }
    });
  }

  applyTheme(mode: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme(this.isDarkMode ? "dark" : "light");
  }
}
</script>

<style scoped>
.theme-toggle {
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: var(--color-background-alt);
  color: var(--color-text-default);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: background 0.3s ease, color 0.3s ease;
  width: 50px;
}

.theme-toggle:hover {
  background: var(--color-text-hover);
  color: var(--color-background);
}
</style>
