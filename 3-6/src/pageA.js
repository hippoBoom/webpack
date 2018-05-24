// require.include('./moduleA.js')

// require.ensure(['./subPageA.js'], function () {
//     require('./subPageA')
// }, 'subPageA')

// require.ensure(['./subPageB.js'], function () {
//     require('./subPageB')
// }, 'subPageB')


import * as $ from 'jquery'

import(/*webpackChunkName:'subPagheA'*/'./subPageA').then(function () {
    console.log('A')
})

import(/*webpackChunkName:'subPagheB'*/'./subPageB').then(function () {
    console.log('B')
})

export default 'pageA'