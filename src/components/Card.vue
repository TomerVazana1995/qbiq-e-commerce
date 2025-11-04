<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { product } = defineProps(['product'])

const navigateToProduct = () => {
  router.push(`/details/${product.id}`)
}
</script>

<template>
  <div class="card" @click="navigateToProduct">
    <img :src="product.thumbnailUrl" :alt="product.name" />
    <div class="card-text">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <p>{{ product.shortDescription }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 285px;
  overflow: hidden;
  border-radius: 2%;
  background-color: rgba(47, 47, 47);
  box-shadow: 1px 1px 10px rgba(47, 47, 47, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
