<template>

  <div class="shop-cart">
    Корзина {{CARTNUMBERITEMS.length}}
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'
  export default {
    name: 'shop-cart',
    components: {
    },
    props: {},
    data() {
      return {
        numberItems: 0
      }
    },
    computed: {
      ...mapGetters([
        'CARTNUMBERITEMS'
      ])
    }
  }

</script>

<style>

</style>
