/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2020-04-15 14:22:31
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2020-04-15 14:59:31
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true
})
