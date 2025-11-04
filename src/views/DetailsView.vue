<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router'
import products from '../data/products.json'

const route = useRoute()
const router = useRouter()
const product = products.find((p) => p.id.toString() === route.params.id)

const navigateToList = () => {
  router.push('/')
}
</script>

<template>
  <button @click="navigateToList">Back to Products</button>
  <div v-if="product" class="product-view">
    <div class="product-info">
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p class="product-description font-bold">{{ product.shortDescription }}</p>
      <p class="product-description">{{ product.longDescription }}</p>
      <p class="product-category"><strong>Category:</strong> {{ product.category }}</p>

      <div v-if="product.reviews?.length" class="reviews">
        <h3>Customer Reviews</h3>
        <ul>
          <li v-for="(review, index) in product.reviews" :key="index">
            <strong>{{ review.username }}</strong
            >: {{ review.comment }}
          </li>
        </ul>
      </div>
      <p v-else class="no-reviews">No reviews yet.</p>
    </div>

    <div class="product-image">
      <img :src="product.thumbnailUrl" :alt="product.name" />
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Product not found</h2>
  </div>
</template>

<style scoped>
button {
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: #f9f9f9;
  text-transform: uppercase;
  font-weight: bold;
  font-size: large;
  padding: 5px 10px;
  margin: 20px;
  cursor: pointer;
}

.product-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e7d32;
}

.product-description {
  line-height: 1.6;
  color: #666;
}

.product-category {
  font-size: 0.95rem;
  color: #666;
}

.reviews {
  margin-top: 1.5rem;
}

.reviews h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #666;
}

.reviews ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.reviews li {
  background: #f9f9f9;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.reviews strong {
  color: #2c3e50;
}

.no-reviews {
  color: #999;
  font-style: italic;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .product-view {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .product-image {
    order: -1;
  }

  .product-title {
    font-size: 1.75rem;
  }

  .reviews ul {
    text-align: left;
  }
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
  color: #444;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 500px;
}

.not-found h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #e74c3c;
  text-transform: capitalize;
}

.router-link {
  color: #999;
  text-decoration: none;
  font-size: 2rem;
}
</style>
