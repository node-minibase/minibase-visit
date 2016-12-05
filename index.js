/*!
 * minibase-visit <https://github.com/node-minibase/minibase-visit>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var collectionVisit = require('collection-visit')
var createPlugin = require('minibase-create-plugin')

/**
 * > Adds `.visit` method to your application. That
 * `opts` option is optional and does nothing. It is just convention
 * each plugin to export function that returns a plugin.
 *
 * **Example**
 *
 * ```js
 * var visit = require('minibase-visit')
 *
 * var MiniBase = require('minibase').MiniBase
 * var app = new MiniBase()
 * app.use(visit())
 *
 * // or as Base plugin
 *
 * var Base = require('base')
 * var base = new Base()
 * base.use(visit())
 * ```
 *
 * @param  {Object} `opts` optional, no options currently
 * @return {Function} plugin that can be pass to [base][]/[minibase][]'s `.use` method
 * @api public
 */

module.exports = function minibaseVisit (opts) {
  return createPlugin('minibase-visit', function minibaseVisit (self) {
    /**
     * > Visit `method` over the properties in the [base][]/[minibase][]
     * instance or map visit over the object-elements in an array.
     * More info can see on [collection-visit][] to understand how
     * this works.
     *
     * **Example**
     *
     * ```js
     * var visit = require('minibase-visit')
     * var app = require('minibase')
     *
     * app.use(visit())
     *
     * var context = {}
     *
     * app.foobar = function foobar (key, value) {
     *   context[key] = value
     * }
     *
     * app.visit('foobar', {
     *   aa: 123,
     *   cc: {
     *     dd: 'bbb'
     *   }
     * })
     *
     * console.log(context.aa) // => 123
     * console.log(context.cc) // => { dd: 'bbb' }
     * console.log(context.dd) // => 'bbb'
     * ```
     *
     * @name   .visit
     * @param  {String} `method` method to be called on each item in `value`, recursively
     * @param  {Array|Object} `value` object/array to be visited
     * @return {Object} MiniBase/Base instance for chaining
     * @api public
     */

    self.define('visit', function visit (method, value) {
      collectionVisit(self, method, value)
      return self
    })
  })
}
