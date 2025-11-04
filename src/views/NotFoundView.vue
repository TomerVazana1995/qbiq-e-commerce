<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you’re looking for doesn’t exist or has been moved.</p>
    <RouterLink to="/" class="home-button">Go Back Home</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #333;
  padding: 2rem;
}

.not-found h1 {
  font-size: 6rem;
  font-weight: 800;
  color: #2e7d32;
  margin: 0;
}

.not-found h2 {
  font-size: 1.75rem;
  margin-top: 0.5rem;
  color: #444;
}

.not-found p {
  color: #666;
  margin: 1rem 0 2rem;
  max-width: 400px;
  line-height: 1.5;
}

.home-button {
  display: inline-block;
  background-color: #2e7d32;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
}
</style>
