import * as $ from 'jquery'

import(/*webpackChunkName:'subPagheA'*/'./subPageA').then(function () {
    console.log('A')
})

import(/*webpackChunkName:'subPagheB'*/'./subPageB').then(function () {
    console.log('B')
})

export default 'pageB'