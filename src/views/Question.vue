<template>
    <Loading :active="isLoading"></Loading>
    <NavbarView class="w-100"></NavbarView>
    <MainImage :title="MainTitle"></MainImage>
    <FooterView></FooterView>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
import MainImage from '@/components/MainImage.vue'
import NavbarView from '@/components/NavbarView.vue'

export default {
  name: 'Question',
  data () {
    return {
      MainTitle: '常見問答',
      isLoading: false
    }
  },
  components: {
    FooterView,
    NavbarView,
    MainImage
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";

</style>
