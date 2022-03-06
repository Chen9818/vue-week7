<template>
    <Loading :active="isLoading"></Loading>
    <NavbarView class="w-100"></NavbarView>
    <MainImage :title="MainTitle"></MainImage>
    <div style="height:2000px">
      <div class="history">
        <h3>創立宗旨</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quidem dolores! Consectetur, eum! Necessitatibus unde nisi consequatur ut vel aperiam consectetur sit, soluta, libero, esse voluptatem exercitationem labore quia totam.
        </div>
      </div>
      <div class="location">
        <h3>實體店面</h3>
        <div>
          <h4>忠孝店</h4>

        </div>
        <div style="width:1500px;height:80%">
          <!-- <h4>民權店</h4> -->
          <GMapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width:500px;height:80%"
          >
            <GMapCluster>
              <GMapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  style="width:500px;height:80%"
                  @click="center=m.position"
              />
            </GMapCluster>
          </GMapMap>
        </div>
      </div>
      <div style="width:500px;height:80px">1111</div>
    </div>
    <FooterView></FooterView>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
import MainImage from '@/components/MainImage.vue'
import NavbarView from '@/components/NavbarView.vue'

export default {
  name: 'About',
  data () {
    return {
      MainTitle: '關於我們',
      isLoading: false,
      center: { lat: 51.093048, lng: 6.842120 },
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          }
        }
        // {
        //   position: {
        //     lat: 59.093048, lng: 8.842120
        //   }
        // }
        // Along list of clusters
      ]
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
