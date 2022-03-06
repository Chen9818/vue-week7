<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="logo" />
      </a>
      <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/coupon">優惠券列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/orders">後台訂單</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">回前台首頁</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="$emit('signOut')">登出</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ['signOut']
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";
.navbar {
  background-color: $base-color;
  .navbar-brand img {
    width: 80px;
    height: 80px;
  }
  .navbar-toggler {
    border-color: #fff;
    color: #fff;
  }
  .nav-link {
    color: #fff;
  }
}
</style>
