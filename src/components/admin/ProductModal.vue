<template>
  <div id="productModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-sm-4">
              <div class="form-group mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                    <div class="mb-3">
                      <label for="image" class="form-label">輸入圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        id="image"
                        v-model="editProduct.imageUrl"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="customFile" class="form-label"
                        >或 上傳圖片
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.fileUploading"
                        ></i>
                      </label>
                      <input
                        type="file"
                        id="customFile"
                        class="form-control"
                        ref="fileInput"
                        @change="uploadFile"
                      />
                    </div>
                <img class="img-fluid" :src="editProduct.imageUrl">
              </div>
              <div v-if="Array.isArray(editProduct.imagesUrl)">
                <div class="mb-1" v-for="(image, key) in editProduct.imagesUrl" :key="key">
                  <div class="form-group">
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input v-model="editProduct.imagesUrl[key]" type="text" class="form-control"
                      placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="image">
                </div>
                <div
                  v-if="!editProduct.imagesUrl.length || editProduct.imagesUrl[editProduct.imagesUrl.length - 1]">
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button class="btn btn-outline-danger btn-sm d-block w-100" @click="editProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="createImages">
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" v-model="editProduct.title" type="text" class="form-control" placeholder="請輸入標題">
              </div>

              <div class="row mb-3">
                <div class="form-group col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" v-model="editProduct.category" type="text" class="form-control"
                    placeholder="請輸入分類">
                </div>
                <div class="form-group col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input id="unit" v-model="editProduct.unit" type="text" class="form-control" placeholder="請輸入單位">
                </div>
              </div>

              <div class="row mb-3">
                <div class="form-group col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" v-model.number="editProduct.origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" v-model.number="editProduct.price" type="number" min="0" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>

              <div class="form-group mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" v-model="editProduct.description" type="text" class="form-control"
                  placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="form-group mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" v-model="editProduct.content" type="text" class="form-control"
                  placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="form-group mb-3">
                <div class="form-check">
                  <input id="is_enabled" v-model="editProduct.is_enabled" class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
let productModal = ''

export default {
  props: ['product', 'isNew'],
  data () {
    return {
      modal: null,
      editProduct: {},
      status: {}
    }
  },
  mounted () {
    productModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  watch: {
    product () {
      this.editProduct = this.product
    }
  },
  methods: {
    updateProduct () {
      // 新增商品
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯商品
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](url, { data: this.editProduct })
        .then((response) => {
          alert(response.data.message)
          this.hideModal()
          this.$emit('update')
        }).catch((error) => {
          alert(error.data.message)
        })
    },
    createImages () {
      this.editProduct.imagesUrl = []
      this.editProduct.imagesUrl.push('')
    },
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      // console.log(this.$refs.fileInput)
      console.log(this.$refs.fileInput.files[0]) // 選取第一個已選取資料
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      // console.log(formData)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.status.fileUploading = true
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.status.fileUploading = false
        if (response.data.success) {
          this.editProduct.imageUrl = response.data.imageUrl
          this.$refs.fileInput.value = ''
          // this.emitter.emit('push-message', {
          //   style: 'success',
          //   title: '圖片上傳結果',
          //   content: response.data.message
          // })
        } else {
          this.$refs.fileInput.value = ''
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '圖片上傳結果',
          //   content: response.data.message
          // })
        }
      }).catch((error) => {
        this.status.fileUploading = false
        alert(error)
        // this.$httpMessageState(error.response, '圖片失敗')
      })
    },
    openModal () {
      productModal.show()
    },
    hideModal () {
      productModal.hide()
    }
  }
}
</script>
