<template>
  <NavbarView></NavbarView>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <img :src="product.imageUrl" alt="">
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'

export default {
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  components: {
    NavbarView
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params // 取出params
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          this.product = response.data.product
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
