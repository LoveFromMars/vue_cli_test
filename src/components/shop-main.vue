<template>

  <div class="shop-main">
    <shop-cart/>
    <shop-catalog/>
  </div>

</template>

<script>

  import shopCatalog from './shop-catalog'
  import shopCart from './shop-cart'
  export default {
    name: 'shop-main',
    components: {
      shopCatalog,
      shopCart
    },
    props: {},
    data() {
      return {
        title: 'Main'
      }
    }
  }

</script>

<style>

  .shop-main {
    max-width: 1100px;
    margin: 0 auto;
  }

</style>
