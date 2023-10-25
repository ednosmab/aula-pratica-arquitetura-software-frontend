<template>
    <h1>Olá Api</h1>
    <h2>Esta área irá mostrar os itens de retorno da api do backend</h2>
    <h3>Listando itens da Api:</h3>
    <ul v-for="product of products" :key="product.id">
        <li>{{ product.name }}</li>
    </ul>
</template>

<script>

  import Product from '../services/products'

  export default{
    data(){
        return{
            products: []
        }
    },

    mounted(){
        Product.list().then(response => {
            console.log(response.data)
            this.products = response.data
        })
    }
  }

</script>