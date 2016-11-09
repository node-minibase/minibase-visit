<p align="center">
  <a href="https://github.com/node-minibase">
    <img height="250" width="250" src="https://avatars1.githubusercontent.com/u/23032863?v=3&s=250">
  </a>
</p>

# [minibase-visit][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Plugin for [minibase][] and [base][], that adds `.visit` method to your application to visit a method over the items in an object, or map visit over the objects in an array. Using using [collection-visit][] package.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i minibase-visit --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const minibaseVisit = require('minibase-visit')
```

## API

### [minibaseVisit](index.js#L39)
> Adds `.visit` method to your application. That `opts` option is optional and does nothing. It is just convention each plugin to export function that returns a plugin.

**Params**

* `opts` **{Object}**: optional, no options currently    
* `returns` **{Function}**: plugin that can be pass to [base][]/[minibase][]'s `.use` method  

**Example**

```js
var visit = require('minibase-visit')

var MiniBase = require('minibase').MiniBase
var app = new MiniBase()
app.use(visit())

// or as Base plugin

var Base = require('base')
var base = new Base()
base.use(visit())
```

### [.visit](index.js#L80)
> Visit `method` over the properties in the [base][]/[minibase][] instance or map visit over the object-elements in an array. More info can see on [collection-visit][] to understand how this works.

**Params**

* `method` **{String}**: method to be called on each item in `value`, recursively    
* `value` **{Array|Object}**: object/array to be visited    
* `returns` **{Object}**: MiniBase/Base instance for chaining  

**Example**

```js
var visit = require('minibase-visit')
var app = require('minibase')

app.use(visit())

var context = {}

app.foobar = function foobar (key, value) {
  context[key] = value
}

app.visit('foobar', {
  aa: 123,
  cc: {
    dd: 'bbb'
  }
})

console.log(context.aa) // => 123
console.log(context.cc) // => { dd: 'bbb' }
console.log(context.dd) // => 'bbb'
```

## Related
- [base-task-alias](https://www.npmjs.com/package/base-task-alias): Plugin that adds `.taskAlias` method to your @node-base application. Creating alias task for some task. | [homepage](https://github.com/tunnckocore/base-task-alias#readme "Plugin that adds `.taskAlias` method to your @node-base application. Creating alias task for some task.")
- [minibase-assert](https://www.npmjs.com/package/minibase-assert): Plugin for [minibase][] and [base][], that adds assertion methods - most of [assert-kindof][] methods and built-ins assert module. | [homepage](https://github.com/node-minibase/minibase-assert#readme "Plugin for [minibase][] and [base][], that adds assertion methods - most of [assert-kindof][] methods and built-ins assert module.")
- [minibase-is-registered](https://www.npmjs.com/package/minibase-is-registered): Plugin for [minibase][] and [base][], that adds `isRegistered` method to your application to detect if plugin is already registered and returns true or false if… [more](https://github.com/node-minibase/minibase-is-registered#readme) | [homepage](https://github.com/node-minibase/minibase-is-registered#readme "Plugin for [minibase][] and [base][], that adds `isRegistered` method to your application to detect if plugin is already registered and returns true or false if named plugin is already registered on the instance.")
- [minibase-results](https://www.npmjs.com/package/minibase-results): Plugin for [minibase][] that adds useful initial properties for test results | [homepage](https://github.com/node-minibase/minibase-results#readme "Plugin for [minibase][] that adds useful initial properties for test results")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-minibase/minibase-visit/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[always-done]: https://github.com/hybridables/always-done
[base]: https://github.com/node-base/base
[collection-visit]: https://github.com/jonschlinkert/collection-visit
[dezalgo]: https://github.com/npm/dezalgo
[minibase]: https://github.com/node-minibase/minibase
[once]: https://github.com/isaacs/once

[npmjs-url]: https://www.npmjs.com/package/minibase-visit
[npmjs-img]: https://img.shields.io/npm/v/minibase-visit.svg?label=minibase-visit

[license-url]: https://github.com/node-minibase/minibase-visit/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/minibase-visit.svg

[downloads-url]: https://www.npmjs.com/package/minibase-visit
[downloads-img]: https://img.shields.io/npm/dm/minibase-visit.svg

[codeclimate-url]: https://codeclimate.com/github/node-minibase/minibase-visit
[codeclimate-img]: https://img.shields.io/codeclimate/github/node-minibase/minibase-visit.svg

[travis-url]: https://travis-ci.org/node-minibase/minibase-visit
[travis-img]: https://img.shields.io/travis/node-minibase/minibase-visit/master.svg

[coveralls-url]: https://coveralls.io/r/node-minibase/minibase-visit
[coveralls-img]: https://img.shields.io/coveralls/node-minibase/minibase-visit.svg

[david-url]: https://david-dm.org/node-minibase/minibase-visit
[david-img]: https://img.shields.io/david/node-minibase/minibase-visit.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[assert-kindof]: https://github.com/tunnckocore/assert-kindof