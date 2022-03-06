<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="logo" />
      </a>

      <div class="d-flex justify-content-end">
        <div class="d-md-block d-lg-none">
          <router-link class="p-4" to="/carts">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style="color:#fff;">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </router-link>
        </div>

        <button class="navbar-toggler navbar-dark d-md-block d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link fs-3 text-center" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 text-center" to="/products">商品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 text-center" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 text-center" to="/question">常見問答</router-link>
          </li>
        </ul>
      </div>
    </div>
      <div class="cart-icon d-none d-lg-block p-4">
        <router-link to="/carts">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style="color:#fff;">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </router-link>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";
.navbar {
  background-color: $base-color;
  z-index: 2;
  .navbar-brand img {
    width: 80px;
    height: 80px;
  }
  .navbar-toggler {
    border-color: #fff;
    color: $text;
  }
  .nav-link {
    color: #efefef;
    transform: translateY(0px);
    transition: 0.3s;
    &:hover {
          transform: translateY(-5px);
        }
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: -5px;
      height: 0;
      border-bottom: 1px solid #fff;
      transition: 0.3s;
    }
    &:hover:after {
      right: 20%;
      left: 20%;
    }
  }
}
</style>
