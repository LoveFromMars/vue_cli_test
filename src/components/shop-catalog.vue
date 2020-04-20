<template>

  <div class="shop-catalog">
    <shop-catalog-item v-for="good of GOODS" :key="good.id" :goodData="good" @addToCart="addToCart" @removeInCart="removeInCart"
    />
  </div>

</template>

<script>

  import shopCatalogItem from './shop-catalog-item'
  import { mapActions, mapGetters, mapState } from 'vuex'
  export default {
    name: 'shop-catalog',
    components: {
      shopCatalogItem
    },
    props: {},
    data() {
      return {
        title: 'Каталог'
      }
    },
    computed: {
      ...mapGetters(['GOODS', 'CARTNUMBERITEMS']),
      ...mapState(['cartNumberItems'])
    },
    methods: {
      ...mapActions(['ADD_TO_CART', 'REMOVE_IN_CART']),
      addToCart(data) {
        this.ADD_TO_CART(data)
      },
      removeInCart(data) {
        this.REMOVE_IN_CART(data)
      },
      changeChopa: function(data) {
        console.log(data)
      }
    },
    mounted: function() {
      var self = this
      window.addEventListener('storage', function() {
        if (document.visibilityState != 'visible') {
          if (localStorage['lastChangeOperation'] == 'set_cart') {
            self.addToCart(localStorage['lastChangeItem'])
          }
          if (localStorage['lastChangeOperation'] == 'remove_in_cart') {
            self.removeInCart(localStorage['lastChangeItem'])
          }
        }
      })
    }
  }

</script>

<style>

  .shop-catalog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
  }

</style>
