/*
 * @Author: Howie 
 * @Date: 2019-10-11 11:22:47 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-10-15 16:58:09
 */
<template>
  <div id="joinus">
    <Header />
    <div class="container df">
      <img class="titleImg" :src="options.titleImg" alt="">
      <div class="listContainer">
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/PageHeader.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      options: {
        titleImg: 'http://image.rovostudios.com/img/pc/titleJoin.png',
        contentText: this.$store.getters.getJoinText,
        swiperArr: this.$store.getters.getSwiperArr
      }
    }
  }
}
</script>

<style scoped>
/* #joinus {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 40px;
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
} */

.container {
  width: 1180px;
  margin: 0 auto;
  padding-top: 90px;
}

.titleImg {
  width: auto;
  height: 20px;
}
</style>