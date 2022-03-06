<template>
  <div class="home">
    <NavbarView></NavbarView>
    <section class="main-image">
      <div
        class="main-txt d-flex align-items-center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        ~好眠~<br />讓您一夜好眠
      </div>
    </section>
    <section style="height:3vh;width:100%;background:#ccc"></section>
    <section class="main-banner">
      <div class="banner-txt">
        <h1>滿意您的睡眠品質嗎?</h1>
      </div>
      <div class="banner-img"></div>
    </section>
    <section class="info-part">
      <div
        class="info"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="info-img">
          <img class="img-1" src="@/assets/pic/main-page/info-img.png" alt="使用枕頭目的" />
        </div>
        <div class="info-txt">
          <h3>使用枕頭的目的</h3>
          <p>
            使用枕頭的目的，就是在睡覺時，能保持身體與脊椎呈現最自然、水平的姿勢。讓頭不會過度前傾和後仰，讓頸椎處於最放鬆舒適的角度，我們也能輕鬆無負擔的入眠。因此枕頭最主要的功用，即是在睡眠中能支撐頸椎與頭部，不論是仰睡或是側睡時，都能讓頭、頸、脊椎維持一條水平的直線最自然的角度。
          </p>
        </div>
      </div>
      <div
        class="info"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="info-txt">
          <h3>該如何挑選適合自己的枕頭？</h3>
          <p>
            枕頭的高度是影響睡眠舒適度的一大關鍵，過高或是過低的枕頭都會讓頸椎產生龐大的負擔，且由於每個人生理構造不盡相同，每個人適合的枕頭高度與形狀也會不同。
            <br />
            <span>平躺時</span
            >：下巴保持水平狀態，枕頭下沉的幅度約等於自己拳頭高度
            <br />
            <span>側躺時</span>：枕頭高度約等於一側肩寬，使身體保持水平
          </p>
        </div>
        <div class="info-img">
          <img class="img-2" src="@/assets/pic/main-page/info-img2.png" alt="如何挑選枕頭" />
        </div>
      </div>
    </section>
    <section class="product-view">
      <h2>產品一覽</h2>
    </section>
    <section class="product-type">
      <div class="items">
        <a href="#" class="item">
          <img src="@/assets/pic/機能枕/頂級機能枕.png" alt="機能枕" />
          <div class="txt">
            <h3>機能枕</h3>
          </div>
        </a>
        <a href="#" class="item">
          <img src="@/assets/pic/乳膠枕/頂級好眠乳膠枕.png" alt="乳膠枕" />
          <div class="txt">
            <h3>乳膠枕</h3>
          </div>
        </a>
        <a href="#" class="item">
          <img src="@/assets/pic/絲絨枕/頂級羊毛枕.png" alt="絲絨枕" />
          <div class="txt">
            <h3>絲絨枕</h3>
          </div>
        </a>
        <a href="#" class="item">
          <img src="@/assets/pic/兒童枕/卡納赫拉兒童枕.png" alt="兒童枕" />
          <div class="txt">
            <h3>兒童枕</h3>
          </div>
        </a>
      </div>
    </section>
    <FooterView></FooterView>
  </div>
</template>
<script>
import FooterView from '@/components/FooterView.vue'
import NavbarView from '@/components/NavbarView.vue'

export default {
  name: 'Home',
  components: {
    FooterView,
    NavbarView
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";
@import "aos/src/sass/aos.scss";

.home {
  width: 100%;
  height: 100%;
}

.main-image {
  background: url(../assets/pic/main-page/main-img.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 90vh;
  z-index: -1;
  position: relative;
  .main-txt {
    background: $base-color;
    border-radius: 50%;
    color: #fff;
    height: 30%;
    width: 60%;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    font-size: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
}
.main-banner {
  .banner-txt {
    background: url(../assets/pic/main-page/main-img2.png);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
    width: 100%;
    height: 60vh;
    position: relative;
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 60px;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }
}
.info-part {
  padding: 1.5rem;
  background: #ccc;
  z-index: -1;
  .info {
    margin: auto;
    justify-content: center;
    display: flex;
    width: 80%;
    font-size: 25px;
    background: #fff;
    border-radius: 10px;
    &:first-child {
      margin-bottom: 15vh;
    }
    .info-img {
      width: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .img-1{
        border-radius: 10px 0 0 10px;
      }
      .img-2{
        border-radius: 0 10px 10px 0;
      }
    }
    .info-txt {
      width: 900px;
      text-align: center;
      line-height: 50px;
      padding: 15px;
      p {
        margin-top: 10px;
        color: #aaa;
        text-align: start;
      }
      span {
        color: #f00;
      }
    }
  }
}
.product-view {
  text-align: center;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $base-color;
  color: #fff;
  padding: 10px;
  h2{
    font-size: 55px;
  }
}
.product-type {
  // padding: 1.5rem;
  width: 100%;
  background: #ccc;
  .items {
    width: 70%;
    padding: 1.5rem;
    // padding-top: 10vh;
    // padding-bottom: 10vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    .item {
      width: 40%;
      margin: 40px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
      .txt {
        top: 0;
        left: 0;
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.6s;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
          text-align: center;
          font-size: 50px;
          color: #ccc;
        }
      }
      &:hover .txt {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 900px) {
  .info-part {
    .info {
      display: block;
      .info-img {
        width: 100%;
        img {
          vertical-align: middle;
        }
      }
      .info-txt {
        width: 100%;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
      }
    }
  }
}
@media (max-width: 550px) {
  .info-part {
    .info {
      display: block;
      .info-img {
        width: 100%;
        img {
          vertical-align: middle;
        }
      }
      .info-txt {
        width: 100%;
        font-size: 10px;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
        p{
          line-height: 1.2rem;
        }
      }
    }
  }
}
@media (max-width: 1160px) {
  .product-type {
    .items {
      width: 100%;
      .item {
        width: 50%;
      }
    }
  }
}
@media (max-width: 700px) {
  .product-type {
    .items {
      width: 100%;
      .item {
        width: 100%;
      }
    }
  }
}
@media (max-width: 830px) {
  .main-header {
    .container {
      .main-nav {
        height: 0;
        width: 0;
        overflow: hidden;
      }
    }
    .icon {
      .bar-icon i {
        display: block;
      }
    }
  }
}
</style>
