/*!
 * minibase-visit <https://github.com/node-minibase/minibase-visit>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var visit = require('./index')
var MiniBase = require('minibase').MiniBase

test('should have `.visit` method', function (done) {
  var app = new MiniBase()
  app.use(visit())
  test.strictEqual(typeof app.visit, 'function')
  done()
})

test('should visit method', function (done) {
  var ctx = {}
  var base = new MiniBase()
  base.use(visit())

  base.foobar = function foobar (key, val) {
    ctx[key] = val
  }

  base.visit('foobar', { aaa: 123, deep: { bb: 'cc' } })
  test.strictEqual(ctx.aaa, 123)
  test.strictEqual(ctx.deep.bb, 'cc')
  done()
})
