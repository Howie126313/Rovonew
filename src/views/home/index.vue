/*
 * @Author: Howie 
 * @Date: 2019-10-07 17:44:22 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-09 19:56:37
 */

<template>
  <div id="home">
    <!-- banner -->
    <div class="pr">
      <img src="@/assets/img/banner.png" alt="" class="homeImg">
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
          <img class="mb20" src="@/assets/img/titleContact.png" alt="">
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
export default {
  computed: {
    language () {
      return this.$store.getters.getLanguage
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
      aboutContent: {
        zh: '是一家全流程影视制作公司，专注开发和制作院线电影。 \n我们致力于制作高美学视觉艺术的国际院线电影，团队集合了国内外众多电影制作人才，制作高水准的院线电影。 \n \n首部影片以科幻、悬疑、动作为题材的电影重工业针对主流年轻人喜爱，并计划在全球上映。公司与中国及好莱坞顶级编剧、导演、摄影师、剪辑师、视觉指导、创意总监、调色师团队合作。秉持“有使命感走向世界”的理念。',
        en: 'ROVO Picture us a full-process film and television production \ncompany that is committed to producing international films of great \nasethetic value and impresing visual arts. \nExcellent film production talents are brought together both at home \nand abroad to produce high-quality films. \nOur first film is base on the theme of science fiction, suspense, and action. It is planned to released globally, taking the young \ngeneration as its target. Our company works with top Chinese and Hollywood screenwriters, directors, photographers, editors, visual effect advisors, creative directors, and colorists. The mission of going global is firmly adhered to.'
      },
      joinContent: {
        zh: '招聘全职英文翻译 \n英语专业硕士毕业 \n翻译能力强，男女不限 \n工作地点：洛杉矶、纽约、北京 \n能适应美国工作，吃苦耐劳，薪资面谈 \n \n欢迎加入我们',
        en: 'We are looking for full-time fashion designers, film and television \ncharacter designers, and stagecraft designers. \nSkills Needed: Strong design capability. \nKey Resonsibilities: Concept clothing design, sci-fi costumes \ndesign, landscapes and props design. \nLocation: Los Angeles, New York, Beijing. \nWe hope you are able to work in the U.S. and bear hardships, \nsalary will be discussed in person. \nResumes and portfolios can be sent to the following mailbox.'
      },
      opcityShow: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      document.title = 'Rovonew | 洛弗影业'
    },
    scrollToAbout () {
      let distance = this.$refs.about.offsetTop - 60
      window.scrollTo({"behavior": "smooth", "top": distance})
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

.aboutContent > .pr > img, .aboutContent > img {
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

@keyframes opacity{
  from{opacity: 0;}
  to{opacity: 1;}
}

.opacityAnimate {
  animation: opacity 1.3s ease-in-out;
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