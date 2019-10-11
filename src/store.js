/*
 * @Author: Howie 
 * @Date: 2019-10-09 18:58:55 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-09 18:59:45
 */

import Vue from 'vue'
import Vuex from 'vuex'

import state from './vuex/state.js'
import mutations from './vuex/mutations.js'
import actions from './vuex/actions.js'
import getters from './vuex/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
