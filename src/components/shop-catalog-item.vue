<template>

  <div class="shop-catalog-item">
    <img :src=" require('../assets/images/' + goodData.image)" :alt="goodData.name" />
    <div class="catalog-item-name">{{goodData.name}}</div>
    <div class="catalog-item-price">{{goodData.price}}</div>
    <button @click="addToCart" class="catalog-item-button"> {{ buttonBuyText }}
      </button>
  </div>

</template>

<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'shop-catalog-item',
    components: {},
    props: {
      goodData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        inCart: false
      }
    },
    methods: {
      addToCart() {
        this.inCart = !this.inCart
        if (this.inCart == true) {
          this.$emit('addToCart', this.goodData.id)
        } else {
          this.$emit('removeInCart', this.goodData.id)
        }
      }
    },
    computed: {
      ...mapGetters(['CARTNUMBERITEMS']),
      buttonBuyText() {
        return this.inCart ? 'Убрать из корзины' : 'В корзину'
      }
    },
    mounted: function() {
      const index = this.CARTNUMBERITEMS.indexOf(this.goodData.id)
      if (index > -1) {
        this.inCart = !this.inCart
      }
    },
    watch: {
      CARTNUMBERITEMS: function() {
        const index = this.CARTNUMBERITEMS.indexOf(this.goodData.id)
        if (index > -1) {
          this.inCart = true
        } else {
          this.inCart = false
        }
      }
    }
  }

</script>

<style>

  .shop-catalog-item {
    width: 20%;
    padding: 15px;
    margin: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .catalog-item-name {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .catalog-item-button {
    margin-top:10px;
    padding:10px 20px;
  }

  .shop-catalog-item img {
    width: 100%;
  }

</style>
