/*
 * @Author: Howie 
 * @Date: 2019-10-11 11:22:47 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-12 17:01:16
 */
<template>
  <div id="contactus">
    <Header />
    <div class="container df">
      <div class="wrap df ac">
        <img class="titleImg" src="http://image.rovostudios.com/img/pc/titleContact.png" alt="">
        <div class="contactBox">
          <div class="left df ac mb50">
            <div class="iconWrap mr15 df ac jsc">
              <img src="http://image.rovostudios.com/img/pc/phoneIcon.png" alt="">
            </div>
            <p v-if="language === 'en'">weChat: ROVODORIS</p>
            <p v-else>微信: ROVODORIS</p>
          </div>
          <div class="right df ac">
            <div class="iconWrap mr15 df ac jsc">
              <img src="http://image.rovostudios.com/img/pc/mailIcon.png" alt="">
            </div>
            <p v-if="language === 'en'">E-mail: 1187370088@qq.com</p>
            <p v-else>邮箱: 1187370088@qq.com</p>
          </div>
        </div>
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
  computed: {
    language () {
      return this.$store.getters.getLanguage
    }
  }
}
</script>

<style scoped>
#contactus {
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
  align-items: center;
}

.wrap {
  width: 100%;
}

.titleImg {
  width: auto;
  height: 45px;
  margin-right: 20%;
}

.contactBox {
  width: 100%;
}

.contactBox .iconWrap {
  width: 35px;
  /* height: 20px; */
}

.contactBox .iconWrap img {
  width: auto;
  height: 20px;
  margin: 0 auto;
}

.contactBox p {
  font-size: 20px;
  font-weight: 300;
  color: #fff;
}
</style>