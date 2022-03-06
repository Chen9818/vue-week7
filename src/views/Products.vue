<template>
  <div class="products w-100" style="background:#ccc">
    <Loading :active="isLoading"></Loading>
    <NavbarView class="w-100"></NavbarView>
    <MainImage :title="MainTitle"></MainImage>
    <ul class="filter d-flex justify-content-center pt-5">
      <li><button type="button" class="btn btn-base" style="color:#fff;font-size:30px">全部</button></li>
      <li><button type="button" class="btn btn-base" style="color:#fff;font-size:30px">乳膠枕</button></li>
      <li><button type="button" class="btn btn-base" style="color:#fff;font-size:30px">絲絨枕</button></li>
      <li><button type="button" class="btn btn-base" style="color:#fff;font-size:30px">機能枕</button></li>
      <li><button type="button" class="btn btn-base" style="color:#fff;font-size:30px">兒童枕</button></li>
    </ul>
      <div class="container" style="">
        <div class="row ">
          <div class="col-12 col-md-4 d-flex flex-wrap" v-for="item in products" :key="item.id">
            <div class="card mx-auto my-5" style="width: 100%;">
              <img
                :src="item.imageUrl"
                class="card-img-top"
                :alt="item.title"
              />
              <div class="card-body">
                <div class="d-flex">
                  <h4 class="card-title">
                    {{ item.title }}
                  <span class="badge bg-base ms-2">{{ item.category }}</span>
                  </h4>
                </div>
                  <div class="card-text d-flex justify-content-between" style="font-size:1.2rem">
                  <p class="text-decoration-line-through">
                    原價:NT{{ item.origin_price }}
                  </p>
                  <p style="color:#ff0000">
                    特價:NT{{ item.price }}
                  </p>
                  </div>
                <div class="d-flex justify-content-between">
                  <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProduct(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                  >
                    <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                    ></i>
                    查看更多
                  </button>

                  <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addToCart(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                  >
                    <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginationView
      :pages="pagination"
      @emit-pages="getProducts"
      class="d-flex justify-content-center"
      ></PaginationView>
    <FooterView></FooterView>
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'
import MainImage from '@/components/MainImage.vue'
import PaginationView from '@/components/PaginationView.vue'

export default {
  name: 'Products',
  data () {
    return {
      products: [],
      loadingStatus: {
        loadingItem: ''
      },
      isLoading: false,
      product: {},
      pagination: {},
      MainTitle: '產品列表'
    }
  },
  components: {
    FooterView,
    NavbarView,
    PaginationView,
    MainImage
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts (id = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${id}`
      this.$http
        .get(url)
        .then((response) => {
          const { products, pagination } = response.data
          this.products = products
          this.pagination = pagination
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.loadingStatus.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((response) => {
        alert(response.data.message)
        this.loadingStatus.loadingItem = ''
      }).catch((err) => {
        alert(err.data.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";

  .filter{
    width: 50%;
    margin: auto;
    li{
      margin:0 2px 0 2px;
    }
  }
  .card {
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    opacity: 1;
    img {
      border: 10px solid #fff;
    }
  }
}
</style>
