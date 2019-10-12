/*
 * @Author: Howie 
 * @Date: 2019-10-07 17:44:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-12 17:02:14
 */

<template>
  <div id="home">
    <Header 
    @navTagOver="navTagOver"
    @navTagOut="navTagOut"/>
    <!-- banner -->
    <div class="pr">
      <template v-for="(img, imgIndex) in bannerArr">
        <img
        v-show="activeBanner === imgIndex" 
        :key="imgIndex"
        :src="img.bgPath" 
        alt="" 
        class="homeImg opacityAnimate">
      </template>
      <div class="rovoContainer tc cp" @click="scrollToAbout">
        <img src="@/assets/img/homeRovo.png" alt="" class="rovo mb15">
        <img src="@/assets/img/downArrow.png" alt="" class="rovoArrow">
      </div>
    </div>
    <!-- 内容 -->
    <div class="container">
      <div class="aboutContent">
        <!-- 关于我们 -->
        <div v-if="opcityShow" class="pr opacityAnimate" ref="about">
          <img class="mb20" src="@/assets/img/titleAbout.png" alt="">
          <div class="titleWords pr">关于我们</div>
          <div class="aboutWords tl">
            <p class="title mb35">
              <span v-show="language === 'zh'">洛弗影业 </span>
              <span>ROVO PICTURES</span>
            </p>
            <div class="content" v-html="aboutContent[language]"></div>
          </div>
          <img src="@/assets/img/rightArrow.png" alt="" class="rightArrow cp">
        </div>
        <!-- 加入我们 -->
        <div v-if="opcityShow" class="pr opacityAnimate">
          <img class="mb20" src="@/assets/img/titleJoin.png" alt="">
          <div class="titleWords pr">加入我们</div>
          <div class="aboutWords tl">
            <p class="title mb35">
              <span v-show="language === 'zh'">洛弗影业 </span>
              <span>ROVO PICTURES</span>
            </p>
            <div class="content" v-html="joinContent[language]"></div>
          </div>
          <img src="@/assets/img/rightArrow.png" alt="" class="rightArrow cp">
        </div>
        <!-- 联系我们 -->
        <div v-if="opcityShow" class="opacityAnimate">
          <img class="contactTitlePic mb20" src="@/assets/img/titleContact.png" alt="">
          <div class="titleWords pr">联系我们</div>
          <div class="contactBox df ac jsb">
            <div class="left df ac">
              <img class="mr15" src="@/assets/img/phoneIcon.png" alt="">
              <p v-if="language === 'en'">weChat: ROVODORIS</p>
              <p v-else>微信: ROVODORIS</p>
            </div>
            <div class="right df ac">
              <img class="mr15"  src="@/assets/img/mailIcon.png" alt="">
              <p v-if="language === 'en'">E-mail: 1187370088@qq.com</p>
              <p v-else>邮箱: 1187370088@qq.com</p>
            </div>
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
    },
    swiper() {
      return this.$refs.swiper.swiper
    }
  },
  watch: {
    language () {
      clearTimeout()
      this.opcityShow = false
      setTimeout(() => {
        this.opcityShow = true
      }, 0)
    }
  },
  data () {
    return {
      aboutContent: this.$store.getters.getAboutText,
      joinContent: this.$store.getters.getJoinText,
      opcityShow: true,
      bgSrc: require('@/assets/img/banner.png'),
      bannerArr: [],
      activeBanner: 0
    }
  },
  created () {
    this.initBanner()
  },
  mounted () {
    this.init()
  },
  methods: {
    initBanner () {
      this.bannerArr = this.$store.getters.getNavArr.slice(0)
      this.bannerArr.unshift({
        index: 0,
        bgPath: this.bgSrc
      })
    },
    init () {
      document.title = 'Rovonew | 洛弗影业'
    },
    scrollToAbout () {
      let distance = this.$refs.about.offsetTop - 60
      window.scrollTo({"behavior": "smooth", "top": distance})
    },
    navTagOver (o) {
      this.activeBanner = o.index
    },
    navTagOut (o) {
      this.activeBanner = 0
    }
  }
}
</script>

<style scoped>
.homeImg {
  display: block;
  width: 100%;
  height: auto;
}

.rovoContainer {
  width: 20%;
  height: auto;
  position: absolute;
  right: 7%;
  bottom: 4%;
  z-index: 9;
}

.rovo {
  width: 100%;
}

@keyframes upDown{
  from{transform:translate(0, 0)}
  to{transform:translate(0, 12px)}
}

.rovoArrow {
  width: 15%;
  height: auto;
  margin: 0 auto;
  animation: upDown 1.3s ease-in-out 2.7s infinite alternate;
}

.container {
  width: 100%;
  height: auto;
  min-height: 300px;
  background-color: rgb(4, 0, 0);
  box-sizing: border-box;
  padding: 200px 0;
}

.aboutContent {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.aboutContent > .pr > img, .aboutContent > img, .contactTitlePic {
  width: auto;
  height: 40px;
}

.titleWords {
  width: fit-content;
  font-size: 25px;
  font-weight: 100;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 40px;
}

.titleWords::after {
  content: '';
  display: block;
  width: 110%;
  height: 1px;
  background-color: #fff;
  transition:all 0.2s ease-in-out;
  position: absolute;
  left: -5%;
  bottom: 50%;
}

.aboutWords {
  width: 100%;
  margin-bottom: 150px;
}

.aboutWords > .title, .aboutWords > .content {
  font-size: 20px;
  font-weight: 100;
  color: #fff;
  white-space: pre-wrap;
  letter-spacing: 1.5px;
}

.contactBox {
  width: 100%;
}

.contactBox img {
  width: auto;
  height: 20px;
}

.contactBox p {
  font-size: 20px;
  font-weight: 100;
  color: #fff;
}

@keyframes leftRight{
  from{transform:translate(0, 0)}
  to{transform:translate(12px, 0)}
}

.rightArrow {
  width: auto;
  height: 60px;
  position: absolute;
  right: -15%;
  top: 60%;
  animation: leftRight 1.3s ease-in-out 2.7s infinite alternate;
}

</style>