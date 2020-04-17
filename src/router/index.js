/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2020-04-15 14:22:31
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2020-04-17 18:59:41
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: () => import('@/components/manage.vue')
    }
  ]
})
