<template>
<Loading :active="isLoading"></Loading>
  <div class="container">
    <div id="app">
      <div class="container">
        <div class="row py-3">
          <div class="col-md-8">
            <div class="d-flex">
              <h2>產品列表</h2>
              <button
                type="button"
                class="btn btn-primary mx-4"
                @click="openModal('new')"
              >
                新增產品
              </button>
            </div>
            <table class="table table-hover mt-4">
              <thead>
                <tr>
                  <th width="200">產品名稱</th>
                  <th width="120">
                    原價
                  </th>
                  <th width="120">
                    售價
                  </th>
                  <th width="120">
                    是否啟用
                  </th>
                  <th width="120">
                    查看細節
                  </th>
                  <th width="120">
                    編輯
                  </th>
                  <th width="120"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in showProducts" :key="item.id">
                  <td width="200">{{ item.title }}</td>
                  <td width="120">
                    {{ item.origin_price }}
                  </td>
                  <td width="120">
                    {{ item.price }}
                  </td>
                  <td width="120">
                    <span class="text-success" v-if="item.is_enabled"
                      >啟用</span
                    >
                    <span v-else>未啟用</span>
                  </td>
                  <td width="120">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="showOneProduct = item"
                    >
                      查看細節
                    </button>
                  </td>
                  <td width="120">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="openModal('edit', item)"
                    >
                      編輯
                    </button>
                  </td>
                  <td width="120">
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="openModal('delete', item)"
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>此頁有 <span>{{ showProducts.length }}</span> 項產品</p>
            <PaginationView
              class="d-flex justify-content-center"
              :pages="pagination"
              @emit-pages="showProduct"
            ></PaginationView>
            <!--新增、編輯-->
            <ProductModal
              :product="tempProduct"
              :is-new="isNew"
              @update="showProduct"
              ref="modal"
            ></ProductModal>
            <!--刪除-->
            <DeleteProductModal
              :item="tempProduct"
              @del-item="delProduct"
              ref="delModal"
            ></DeleteProductModal>
          </div>
          <div class="col-md-4">
            <h2>單一產品細節</h2>
            <template v-if="showOneProduct.id">
              <div class="card mb-3">
                <img
                  :src="showOneProduct.imageUrl"
                  class="card-img-top primary-image"
                  alt="主圖"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {{ showOneProduct.title }}
                    <span class="badge bg-primary ms-2"
                      >{{ showOneProduct.category }}</span
                    >
                  </h5>
                  <p class="card-text">
                    商品描述：{{ showOneProduct.description }}
                  </p>
                  <p class="card-text">
                    商品內容：{{ showOneProduct.content }}
                  </p>
                  <div class="d-flex">
                    <p class="card-text me-2">{{ showOneProduct.price }}</p>
                    <p class="card-text text-secondary">
                      <del>{{ showOneProduct.origin_price }}</del>
                    </p>
                    {{ showOneProduct.unit }} / 元
                  </div>
                </div>
              </div>
              <template v-if="showOneProduct.imagesUrl">
                <div v-for="item in showOneProduct.imagesUrl" :key="item.id">
                  <img
                    :src="item"
                    alt="productImg"
                    class="images m-2"
                    v-if="item"
                  />
                </div>
              </template>
            </template>
            <p class="text-secondary" v-else>請選擇一個商品查看</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationView from '@/components/PaginationView.vue'
import ProductModal from '@/components/admin/ProductModal.vue'
import DeleteProductModal from '@/components/admin/DeleteProductModal.vue'

export default {
  data () {
    return {
      isNew: false,
      showProducts: [], // 渲染商品表格用
      showOneProduct: [], // 查詢特定商品細節用
      pagination: {},
      isLoading: false,
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  components: {
    PaginationView,
    ProductModal,
    DeleteProductModal
  },
  methods: {
    showProduct (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          const { products, pagination } = res.data
          this.showProducts = products
          this.pagination = pagination
          this.isLoading = false
          this.showOneProduct = ''
        })
        .catch((error) => {
          alert(error.response.data.message)
          this.$router.push('/')
        })
    },

    // 新增、編輯、刪除
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.modal.openModal()
      } else if (isNew === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(item))
        this.isNew = false
        this.$refs.modal.openModal() // show出modal，hide隱藏
      } else if (isNew === 'delete') {
        this.tempProduct = JSON.parse(JSON.stringify(item))
        this.$refs.delModal.openModal()
      }
    },
    delProduct () {
      this.$http.delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then((response) => {
          this.$refs.delModal.hideModal()
          this.showProduct(this.pagination.current_page)
        }).catch((error) => {
          alert(error.data.message)
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    if (token) this.showProduct()
  }
}
</script>
