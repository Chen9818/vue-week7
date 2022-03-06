<template>
<Loading :active="isLoading"></Loading>
<table class="table table-hover mt-4">
  <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="(item, id) in orders" :key="id">
      <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td><span v-text="item.user.email" v-if="item.user"></span></td>
        <td>
          <ul class="list-unstyled">
            <li v-for="(product, i) in item.products" :key="i">
              {{ product.product.title }} 數量：{{ product.qty }}
              {{ product.product.unit }}
            </li>
          </ul>
        </td>
        <td class="text-right">{{ item.total }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :id="`paidSwitch${item.id}`"
              v-model="item.is_paid"
              @change="updatePaid(item)"
            />
            <label class="form-check-label" :for="`paidSwitch${item.id}`">
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="openModal(item)"
            >
              檢視
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              @click="openDelOrderModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </template>
  </tbody>
</table>
<OrderModal
  :order="tempOrder"
  ref="orderModal"
  @update-paid="updatePaid"
></OrderModal>
<DeleteProductModal
  :item="tempOrder" ref="delModal"
  @del-item="delOrder"
></DeleteProductModal>
<PaginationView
  class="d-flex justify-content-center"
  :pages="pagination"
  @emitPages="getOrders"
></PaginationView>
</template>

<script>
import DeleteProductModal from '@/components/admin/DeleteProductModal.vue'
import OrderModal from '@/components/admin/OrderModal.vue'
import PaginationView from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    PaginationView,
    DeleteProductModal,
    OrderModal
  },
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      this.isLoading = true
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        this.isLoading = false
      }).catch((error) => {
        this.isLoading = false
        alert(error)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false
        const orderComponent = this.$refs.orderModal
        orderComponent.hideModal()
        this.getOrders(this.currentPage)
      }).catch((error) => {
        this.isLoading = false
        alert(error.data.message)
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then(() => {
        this.isLoading = false
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders(this.currentPage)
      }).catch((error) => {
        this.isLoading = false
        alert(error.data.message)
      })
    }
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    if (token) this.getOrders()
  }
}
</script>
