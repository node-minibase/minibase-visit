/*!
 * minibase-visit <https://github.com/node-minibase/minibase-visit>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var collectionVisit = require('collection-visit')
var isRegistered = require('minibase-is-registered')

module.exports = function minibaseVisit (opts) {
  return function minibaseVisit (self) {
    self.use(isRegistered())
    /* istanbul ignore next */
    if (self.isRegistered('visit')) return

    self.define('visit', function visit (method, value) {
      collectionVisit(self, method, value)
      return self
    })
  }
}
