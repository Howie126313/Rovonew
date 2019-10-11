/*
 * @Author: Howie 
 * @Date: 2019-10-11 14:00:59 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-11 17:49:56
 */

/* eslint-disable */
<template>
  <div id="wordSwiper" class="df ac jsb">
    <div class="leftContainer opacityAnimate tc">
      <img class="titleImg mb50" :src="options.titleImg" alt="">
      <div v-if="opcityShow" class="title opacityAnimate mb30"><span v-show="language === 'zh'">洛弗影业</span> ROVO Picture </div>
      <div v-if="opcityShow" class="content opacityAnimate tl" v-html="options.contentText[language]"></div>
    </div>
    <div class="rightContainer pr">
      <div class="swiperWrap pr">
        <swiper 
        :options="swiperOption" 
        ref="mySwiper" 
        @slideChange="swiperChange">
          <swiper-slide 
          v-for="(item, index) in options.swiperArr"
          :key="index">
            {{item}}
          </swiper-slide>
        </swiper>
        <!-- 切换 -->
        <img src="@/assets/img/rightArrow.png" alt="" class="leftArrow cp" @click="changePic('pre')">
        <img src="@/assets/img/rightArrow.png" alt="" class="rightArrow cp"  @click="changePic('next')">
        <!-- 分页器 -->
        <div class="paginationContain df ac">
          <div 
          :class="[activeBanner === index ? 'paginationItem active mr10' : 'paginationItem mr10']"
          v-for="(item, index) in options.swiperArr"
          :key="index"></div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  computed: {
    language () {
      return this.$store.getters.getLanguage
    },
    swiper() {
      return this.$refs.mySwiper.swiper
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
  props: {
    options: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      opcityShow: true,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //分页器设置         
        pagination: {
            el: '.swiper-pagination',
            clickable : false
        }
      },
      activeBanner: 0
    }
  },
  mounted () {
  },
  methods: {
    swiperChange (o) {
      this.activeBanner = this.swiper.activeIndex
    },
    changePic (s) {
      let num
      if (s === 'pre') {
        num = this.activeBanner - 1
      } else {
        num = this.activeBanner + 1
      }
      this.swiper.slideTo(num, 500, false)
    }
  }
}
</script>

<style scoped>
#wordSwiper {
  width: 100%;
  height: 100%;
}

.leftContainer {
  width: 30%;
  height: auto;
}

.titleImg {
  width: auto;
  height: 40px;
}

.content, .title {
  font-size: 20px;
  font-weight: 100;
  color: #fff;
  white-space: pre-wrap;
  letter-spacing: 1.5px;
}

.rightContainer {
  width: 65%;
  height: 100%;
  box-sizing: border-box;
}

.swiperWrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  box-sizing: border-box;
  border:1px solid gray;
}

.swiper-container, .swiper-container-initialized, .swiper-container-horizontal {
  width: 100%;
  height: 100%;
}

.paginationContain {
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translate(-50%, 0);
}

.paginationItem {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-sizing: border-box;
}

.active {
  background-color: #fff;
}

@keyframes leftRight{
  from{transform:translate(0, -50%)}
  to{transform:translate(12px, -50%)}
}

.rightArrow {
  width: auto;
  height: 60px;
  position: absolute;
  right: -10%;
  top: 50%;
  animation: leftRight 1.3s ease-in-out infinite alternate;  
}

@keyframes rightLeft{
  from{transform:translate(0, -50%) rotateY(180deg)}
  to{transform:translate(-12px, -50%) rotateY(180deg)}
}

.leftArrow {
  width: auto;
  height: 60px;
  position: absolute;
  left: -10%;
  top: 48%;
  animation: rightLeft 1.3s ease-in-out infinite alternate;
}

</style>

