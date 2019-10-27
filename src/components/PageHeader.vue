/*
 * @Author: Howie 
 * @Date: 2019-10-07 13:21:32 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-26 15:30:45
 */

<template>
  <div id="pageHeader">
    <div class="container df ac jsb pl40 pr40">
      <img class="logo cp" src="@/assets/img/logo.png" alt="" @click="backHome">
      <div class="nav df ac">
        <div 
        :class="[index >= navArr.length - 1 ? 'navItem pr mr20' : 'navItem pr mr60']"
        v-for="(item, index) in navArr"
        :key="index"
        @click="navClicked(item)"
        @mouseenter="navItemOver(item)"
        @mouseleave="navItemOut(item)">
          <div class="navItemBtn cp">{{item.words[language]}}</div>
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
  data () {
    return {
      navArr: this.$store.getters.getNavArr
    }
  },
  methods: {
    navClicked (o) {
      if (o.name === 'en_zh') {
        if (this.$store.state.language === 'zh') {
          this.$store.commit('changeLanguage', 'en')
        } else {
          this.$store.commit('changeLanguage', 'zh')
        }
      } else if (o.path === this.$router.history.current.path) {
        return
      } else {
        this.$router.push({path: o.path})
      }
    },
    backHome () {
      this.$router.push({path: '/'})
    },
    navItemOver (o) {
      this.$emit('navTagOver', o)
    },
    navItemOut (o) {
      this.$emit('navTagOut', o)
    }
  }
}
</script>

<style scoped>
#pageHeader {
  width: 100%;
  height: 60px;
  background-image: url(../assets/img/headerBg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

.container {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  box-sizing: border-box;
}

.container .logo {
  width: 41px;
  height: 45px;
  margin-top: 10px;
}

.nav {
  height: 100%;
}

.navItem {
  height: 100%;
}

.navItemPic {
  width: 63px;
  height: 15px;
}

.navItemPic1 {
  width: 75px;
  height: 20px;
  margin-top: 3px;
}

.navItemBtn {
  height: 100%;
  font-weight: 200;
  font-size: 18px;
  color: #fff;
  line-height: 60px;
}

.navItem::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background-color: #fff;
  transition:all 0.2s ease-in-out;
  position: absolute;
  left: -5%;
  bottom: 50%;
}

.navItem:hover::after {
  width: 110%;
}
</style>