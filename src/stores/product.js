import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'tramontina', price: 79.9, qty: 100 },
    { id: 2, name: 'facasguinço', price: 79.9, qty: 100 },
    { id: 3, name: 'liquidificador', price: 79.9, qty: 100 },
    { id: 4, name: 'batedeira', price: 79.9, qty: 100 }
  ])

  function getProductById(id) {
  //   for (let product of products.value) {
  //     if (product.id == id) {
  //       return product
  //     }
  //   }
  //   return null
  // }
  
  return products.value.find((product) => product.id == id)
  }


function deleteProductById(id) {
  const pos = products.value.findIndex((product) => product.id == id)
  products.value.splice(pos, 1)
}

return { products, getProductById, deleteProductById  }
})
