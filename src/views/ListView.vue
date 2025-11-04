<script setup lang="ts">
import { ref, watch } from 'vue'
import p from '../data/products.json'
import type { Product } from '@/types/product'
import Card from '@/components/Card.vue'

const products = ref<Product[]>(p)
const search = ref('')

watch(search, () => {
  products.value = p.filter((product) =>
    product.name.toLowerCase().includes(search.value.toLowerCase()),
  )
})
</script>

<template>
  <div>
    <header>
      <h1 class="text-2xl">E-commerce</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="list-container">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
  padding: 10px;
}

header input {
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: grey;
  padding: 10px;
  border-radius: 5px;
}

.list-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
