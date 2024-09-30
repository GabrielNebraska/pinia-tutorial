<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()

const router = useRouter()

function visualizar(id) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <h1>listagem de protudos:</h1>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
        <button @click="visualizar(product.id)">ver</button>
        <button @click="visualizar(product.id)">excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
