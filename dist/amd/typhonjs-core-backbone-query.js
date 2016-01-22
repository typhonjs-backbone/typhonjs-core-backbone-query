!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], ["7"], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('2');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('3'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('4')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('1', ['5', '6', '7'], function (_export) {
   var _createClass, _classCallCheck, _, BackboneQuery, __slice, __hasProp, __indexOf, s_DETECT, s_FILTER, s_GET_CACHE, s_GET_SORTED_MODELS, s_GET_TYPE, s_ITERATOR, s_MAKE_OBJ, s_PAGE_MODELS, s_PARSE_SUB_QUERY, s_PARSE_QUERY, s_PERFORM_QUERY, s_PROCESS_QUERY, s_REJECT, s_RUN_QUERY, s_SORT_MODELS, s_TEST_MODEL_ATTRIBUTE, s_TEST_QUERY_VALUE;

   return {
      setters: [function (_2) {
         _createClass = _2['default'];
      }, function (_3) {
         _classCallCheck = _3['default'];
      }, function (_4) {
         _ = _4['default'];
      }],
      execute: function () {
         /**
          * A fork of Backbone Query...
          *
          * Backbone Query - A lightweight query API for Backbone Collections
          * (c)2012 - Dave Tonge
          * May be freely distributed according to MIT license.
          * https://github.com/davidgtonge/backbone_query
          *
          *
          * (c)2015-present Michael Leahy
          * https://github.com/typhonjs/typhonjs-core-backbone-query
          */

         /**
          * BackboneQuery -- Provides client side sorting based on a query API.
          * -------------
          *
          * Forked from https://github.com/davidgtonge/backbone_query
          *
          * A lightweight (3KB minified) utility for Backbone projects, that works in the Browser and on the Server. Adds the
          * ability to search for models with a Query API similar to MongoDB.
          *
          * The huge benefit of using BackboneQuery is that queries can be stored as JSON.
          *
          * Usage
          * -----
          *
          * The major difference of this implementation is that the API is not attached to a collection, but can be run against
          * any collection by invoking the methods with a target collection.
          *
          * Find
          * -----
          * **_ $equal _**
          *
          * Performs a strict equality test using ===. If no operator is provided and the query value isn't a regex then `$equal`
          * is assumed.
          *
          * If the attribute in the model is an array then the query value is searched for in the array in the same way as
          * `$contains`.
          *
          * If the query value is an object (including array) then a deep comparison is performed using underscores `_.isEqual`.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: "Test" });
          * // Returns all models which have a "title" attribute of "Test"
          *
          *
          * BackboneQuery.find(collection, { title: { $equal: "Test" } }); // Same as above
          * BackboneQuery.find(collection, { colors: "red" });
          * // Returns models which contain the value "red" in a "colors" attribute that is an array.
          *
          *
          * BackboneQuery.find(collection, { colors: ["red", "yellow"] });
          * // Returns models which contain a colors attribute with the array ["red", "yellow"]
          * ```
          *
          * **_ $contains _**
          *
          * Assumes that the model property is an array and searches for the query value in the array.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $contains: "red" } });
          * // Returns models which contain the value "red" in a "colors" attribute that is an array.
          * e.g. a model with this attribute colors:["red", "yellow", "blue"] would be returned.
          * ```
          *
          *
          * **_ $ne _**
          *
          * "Not equal", the opposite of $equal, returns all models which don't have the query value
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $ne: "Test" } });
          * // Returns all models which don't have a "title" attribute of "Test"
          * ```
          *
          *
          * **_ $lt, $lte, $gt, $gte _**
          *
          * These conditional operators can be used for greater than and less than comparisons in queries
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { likes: { $lt:10 } });
          * // Returns all models which have a "likes" attribute of less than 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $lte:10 } });
          * // Returns all models which have a "likes" attribute of less than or equal to 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $gt:10 } });
          * // Returns all models which have a "likes" attribute of greater than 10
          *
          *
          * BackboneQuery.find(collection, { likes: { $gte:10 } });
          * // Returns all models which have a "likes" attribute of greater than or equal to 10
          * ```
          *
          *
          * **_ $between _**
          *
          * To check if a value is in-between 2 query values use the $between operator and supply an array with the min and max
          * value.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { likes: { $between: [5, 15] } });
          * // Returns all models which have a "likes" attribute of greater than 5 and less then 15
          * ```
          *
          *
          * **_ $in _**
          *
          * An array of possible values can be supplied using $in, a model will be returned if any of the supplied values is
          * matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $in: ["About", "Home", "Contact"] } });
          * // Returns all models which have a title attribute of either "About", "Home", or "Contact"
          * ```
          *
          *
          * **_ $nin _**
          *
          * "Not in", the opposite of $in. A model will be returned if none of the supplied values is matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { title: { $nin: ["About", "Home", "Contact"] } });
          * // Returns all models which don't have a title attribute of either "About", "Home", or "Contact"
          * ```
          *
          *
          * **_ $all _**
          *
          * Assumes the model property is an array and only returns models where all supplied values are matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $all: ["red", "yellow"] } });
          * // Returns all models which have "red" and "yellow" in their colors attribute.
          * // A model with the attribute colors:["red","yellow","blue"] would be returned.
          * // But a model with the attribute colors:["red","blue"] would not be returned.
          * ```
          *
          *
          * **_ $any _**
          *
          * Assumes the model property is an array and returns models where any of the supplied values are matched.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $any: ["red", "yellow"] } });
          * // Returns models which have either "red" or "yellow" in their colors attribute.
          * ```
          *
          *
          * **_ $size _**
          *
          * Assumes the model property has a length (i.e. is either an array or a string). Only returns models the model
          * property's length matches the supplied values.
          *
          * ** Example: **
          * ```
          * BackboneQuery.find(collection, { colors: { $size:2 } });
          * // Returns all models which 2 values in the colors attribute
          * ```
          *
          *
          * $exists or $has
          *
          * Checks for the existence of an attribute. Can be supplied either true or false.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $exists: true } });
          *
          * // Returns all models which have a "title" attribute
          *
          * BackboneQuery.find(collection, { title: { $has: false } });
          *
          * // Returns all models which don't have a "title" attribute
          *
          *
          *
          * $like
          *
          * Assumes the model attribute is a string and checks if the supplied query value is a substring of the property.
          * Uses indexOf rather than regex for performance reasons.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $like: "Test" } });
          *
          * //Returns all models which have a "title" attribute that
          *
          * //contains the string "Test", e.g. "Testing", "Tests", "Test", etc.
          *
          *
          *
          * $likeI
          *
          * The same as above but performs a case insensitive search using indexOf and toLowerCase (still faster than Regex).
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $likeI: "Test" } });
          *
          * //Returns all models which have a "title" attribute that
          *
          * //contains the string "Test", "test", "tEst","tesT", etc.
          *
          *
          *
          * $regex
          *
          * Checks if the model attribute matches the supplied regular expression. The regex query can be supplied without
          * the `$regex` keyword.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { content: { $regex: /coffeescript/gi } });
          *
          * // Checks for a regex match in the content attribute
          *
          * BackboneQuery.find(collection, { content: /coffeescript/gi });
          *
          * // Same as above
          *
          *
          *
          * $cb
          *
          * A callback function can be supplied as a test. The callback will receive the attribute and should return either
          * true or false. `this` will be set to the current model, this can help with tests against computed properties.
          *
          * Example:
          *
          * BackboneQuery.find(collection, { title: { $cb: function(attr){ return attr.charAt(0) === "c"; } } });
          *
          * // Returns all models that have a title attribute that starts with "c"
          *
          * BackboneQuery.find(collection, { computed_test: { $cb: function(){ return this.computed_property() > 10; } } });
          *
          * // Returns all models where the computed_property method returns a value greater than 10.
          *
          * For callbacks that use `this` rather than the model attribute, the key name supplied is arbitrary and has no
          * effect on the results. If the only test you were performing was like the above test it would make more sense to
          * simply use `Collection.filter`. However if you are performing other tests or are using the
          * paging / sorting / caching options of backbone query, then this functionality is useful.
          *
          *
          *
          * $elemMatch
          *
          * This operator allows you to perform queries in nested arrays similar to MongoDB For example you may have a
          * collection of models in with this kind of data structure:
          *
          * Example:
          *
          * let posts = new Collection([
          *
          *    {title: "Home", comments:[
          *
          *       {text:"I like this post"},
          *
          *       {text:"I love this post"},
          *
          *       {text:"I hate this post"}
          *
          *    ]},
          *
          *    {title: "About", comments:[
          *
          *       {text:"I like this page"},
          *
          *       {text:"I love this page"},
          *
          *       {text:"I really like this page"}
          *
          *    ]}
          *
          * ]);
          *
          *
          * To search for posts which have the text "really" in any of the comments you could search like this:
          *
          * BackboneQuery.find(posts, {
          *
          *    comments: {
          *
          *       $elemMatch: {
          *
          *          text: /really/i
          *
          *       }
          *
          *    }
          *
          * });
          *
          *
          * All of the operators above can be performed on `$elemMatch` queries, e.g. `$all`, `$size` or `$lt`. `$elemMatch`
          * queries also accept compound operators, for example this query searches for all posts that have at least one
          * comment without the word "really" and with the word "totally".
          *
          * BackboneQuery.find(posts, {
          *
          *    comments: {
          *
          *       $elemMatch: {
          *
          *          $not: {
          *
          *             text: /really/i
          *
          *          },
          *
          *          $and: {
          *
          *             text: /totally/i
          *
          *          }
          *       }
          *
          *    }
          *
          * });
          *
          *
          *
          * $computed
          *
          * This operator allows you to perform queries on computed properties. For example you may want to perform a query
          * for a persons full name, even though the first and last name are stored separately in your db / model. For
          * example:
          *
          * Example:
          *
          * class TestModel extends Backbone.Model {
          *
          *    full_name() {
          *
          *       return (this.get('first_name')) + " " + (this.get('last_name'));
          *
          *    }
          *
          * });
          *
          * let a = new TestModel({
          *
          *    first_name: "Dave",
          *
          *    last_name: "Tonge"
          *
          * });
          *
          * let b = new TestModel({
          *
          *    first_name: "John",
          *
          *    last_name: "Smith"
          *
          * });
          *
          * let collection = new Collection([a, b]);
          *
          * BackboneQuery.find(collection, { full_name: { $computed: "Dave Tonge" } });
          *
          * // Returns the model with the computed `full_name` equal to Dave Tonge
          *
          * BackboneQuery.find(collection, { full_name: { $computed: { $likeI: "john smi" } } });
          *
          * // Any of the previous operators can be used (including elemMatch is required)
          *
          *
          *
          * Combined Queries
          * ----------------
          * Multiple queries can be combined together. By default all supplied queries use the `$and` operator. However it is
          * possible to specify either `$or`, `$nor`, `$not` to implement alternate logic.
          *
          *
          * $and
          *
          * BackboneQuery.find(collection, { $and: { title: { $like: "News" }, likes: { $gt: 10 }}});
          *
          * // Returns all models that contain "News" in the title and have more than 10 likes.
          *
          * BackboneQuery.find(collection, { title: { $like: "News" }, likes: { $gt: 10 } });
          *
          * // Same as above as $and is assumed if not supplied
          *
          *
          *
          * $or
          *
          * BackboneQuery.find(collection, { $or: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that contain "News" in the title OR have more than 10 likes.
          *
          *
          * $nor
          *
          * The opposite of `$or`
          *
          * BackboneQuery.find(collection, { $nor: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that don't contain "News" in the title NOR have more than 10 likes.
          *
          *
          * $not
          *
          * The opposite of `$and`
          *
          * BackboneQuery.find(collection, { $not: { title: { $like: "News" }, likes: { $gt: 10 } } });
          *
          * // Returns all models that don't contain "News" in the title AND DON'T have more than 10 likes.
          *
          *
          * If you need to perform multiple queries on the same key, then you can supply the query as an array:
          *
          * BackboneQuery.find(collection, {
          *
          *    $or:[
          *
          *       {title:"News"},
          *
          *       {title:"About"}
          *
          *    ]
          *
          * });
          *
          * // Returns all models with the title "News" or "About".
          *
          *
          * Compound Queries
          * ----------------
          * It is possible to use multiple combined queries, for example searching for models that have a specific title
          * attribute, and either a category of "abc" or a tag of "xyz".
          *
          * BackboneQuery.find(collection, {
          *
          *    $and: { title: { $like: "News" } },
          *
          *    $or: {likes: { $gt: 10 }, color: { $contains:"red" } }
          *
          * });
          *
          * //Returns models that have "News" in their title and either have more than 10 likes or contain the color red.
          *
          *
          * Sorting
          * -------
          * Optional `sortBy` and `order` attributes can be supplied as part of an options object. `sortBy` can either be a
          * model key or a callback function which will be called with each model in the array.
          *
          * BackboneQuery.find(collection, { title: { $like: "News" } }, { sortBy: "likes" });
          *
          * // Returns all models that contain "News" in the title, sorted according to their "likes" attribute (ascending)
          *
          * BackboneQuery.find(collection, { title: { $like: "News" } }, { sortBy: "likes", order: "desc" });
          *
          * // Same as above, but "descending"
          *
          * BackboneQuery.find(collection,
          *
          *    { title: { $like: "News" } },
          *
          *    { sortBy: function(model){ return model.get("title").charAt(1); } }
          *
          * );
          *
          * // Results sorted according to 2nd character of the title attribute
          *
          *
          *
          * Paging
          * ------
          * To return only a subset of the results paging properties can be supplied as part of an options object. A limit
          * property must be supplied and optionally a offset or a page property can be supplied.
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10 });
          *
          * // Returns the first 10 models that have more than 10 likes.
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10, offset: 5 });
          *
          * // Returns 10 models that have more than 10 likes starting at the 6th model in the results.
          *
          * BackboneQuery.find(collection, { likes: { $gt: 10 } }, { limit: 10, page: 2 });
          *
          * // Returns 10 models that have more than 10 likes starting at the 11th model in the results (page 2).
          *
          *
          * When using the paging functionality, you will normally need to know the number of pages so that you can render
          * the correct interface for the user. Backbone Query can send the number of pages of results to a supplied callback.
          * The callback should be passed as a pager property on the options object. This callback will also receive the
          * sliced models as a second variable.
          *
          * Here is an example of a simple paging setup using the pager callback option:
          *
          * TODO Provide example!
          *
          * Caching Results
          * ---------------
          * To enable caching set the cache flag to true in the options object. This can greatly improve performance when
          * paging through results as the unpaged results will be saved. This options is not enabled by default as if models
          * are changed, added to, or removed from the collection, then the query cache will be out of date. If you know that
          * your data is static and won't change then caching can be enabled without any problems. If your data is dynamic
          * (as in most Backbone Apps) then a helper cache reset method is provided: `reset_query_cache`. This method should
          * be bound to your collections change, add and remove events (depending on how your data can be changed).
          *
          * Cache will be saved in a `_query_cache` property on each collection where a cache query is performed.
          *
          * @example
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit: 10, page: 1, cache: true });
          * //The first query will operate as normal and return the first page of results
          *
          * BackboneQuery.find(collection, { likes:{ $gt: 10 } }, { limit:10, page: 2, cache: true });
          * //The second query has an identical query object to the first query, so therefore the results will be retrieved
          * //from the cache, before the paging parameters are applied.
          *
          * // Binding the reset_query_cache method
          * MyCollection extends Backbone.Collection {
          *    initialize() {
          *       this.bind("change", () => { BackboneQuery.resetQueryCache(this) }, this);
          *    }
          * });
          */
         'use strict';

         BackboneQuery = (function () {
            function BackboneQuery() {
               _classCallCheck(this, BackboneQuery);
            }

            // Private / internal methods ---------------------------------------------------------------------------------------

            _createClass(BackboneQuery, null, [{
               key: 'find',

               /**
                * Returns a sorted array of models from the collection that match the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @param {Object}      options     - Optional parameters
                * @returns {*}
                */
               value: function find(collection, query) {
                  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                  var models = undefined;

                  if (options.cache) {
                     models = s_GET_CACHE(collection, query, options);
                  } else {
                     models = s_GET_SORTED_MODELS(collection, query, options);
                  }

                  if (options.limit) {
                     models = s_PAGE_MODELS(models, options);
                  }

                  return models;
               }

               /**
                * Returns the first model that matches the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @returns {*}
                */
            }, {
               key: 'findOne',
               value: function findOne(collection, query) {
                  return BackboneQuery.find(collection, query)[0];
               }

               /**
                * Resets the query cache of the target collection.
                *
                * @param {Collection}  collection  - Target collection
                */
            }, {
               key: 'resetQueryCache',
               value: function resetQueryCache(collection) {
                  collection._queryCache = {};
               }

               /**
                * Returns a sorted array of all models from the collection that match the query.
                *
                * @param {Collection}  collection  - Target collection
                * @param {string}      query       - Query string
                * @returns {Array<*>}
                */
            }, {
               key: 'sortAll',
               value: function sortAll(collection, query) {
                  return s_SORT_MODELS(collection.models, query);
               }

               /**
                * Runs a query and returns a new collection with the results. Useful for chaining.
                *
                * @param {Collection}  collection     - Target collection
                * @param {string}      query          - Query string
                * @param {Object}      queryOptions   - Optional parameters for query.
                * @param {Object}      options        - Optional parameters (used to construct the new collection).
                * @returns {Collection}
                */
            }, {
               key: 'whereBy',
               value: function whereBy(collection, query) {
                  var queryOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

                  return new collection.constructor(BackboneQuery.find(collection, query, queryOptions), options);
               }
            }]);

            return BackboneQuery;
         })();

         _export('default', BackboneQuery);

         __slice = [].slice;
         __hasProp = ({}).hasOwnProperty;

         __indexOf = [].indexOf || function (item) {
            for (var i = 0, l = this.length; i < l; i++) {
               if (i in this && this[i] === item) {
                  return i;
               }
            }

            return -1;
         };

         /**
          * Detects if any value in the array matches a test.
          *
          * @param {Array<*>} array - An array to detect.
          * @param {function} test  - A test function.
          * @returns {boolean}
          */

         s_DETECT = function s_DETECT(array, test) {
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (test(val)) {
                  return true;
               }
            }

            return false;
         };

         /**
          * Filters an array only adding results that `test` passes.
          *
          * @param {Array<*>} array - An array to filter.
          * @param {function} test  - A test function.
          * @returns {Array<*>}
          */

         s_FILTER = function s_FILTER(array, test) {
            var _results = [];
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (test(val)) {
                  _results.push(val);
               }
            }

            return _results;
         };

         /**
          * Gets the query cache from a collection.
          *
          * @param {Collection}  collection  - Target collection
          * @param {string}      query       - A query
          * @param {Object}      options     - Optional parameters
          * @returns {*}
          */

         s_GET_CACHE = function s_GET_CACHE(collection, query, options) {
            var _ref = undefined,
                cache = undefined,
                models = undefined,
                queryString = undefined;
            queryString = JSON.stringify(query);
            cache = (_ref = collection._queryCache) !== null ? _ref : collection._queryCache = {};
            models = cache[queryString];

            if (!models) {
               models = s_GET_SORTED_MODELS(collection, query, options);
               cache[queryString] = models;
            }

            return models;
         };

         /**
          * Runs a query then sorts the models.
          *
          * @param {Collection}  collection  - Target collection
          * @param {string}      query       - A query
          * @param {Object}      options     - Optional parameters
          * @returns {*}
          */

         s_GET_SORTED_MODELS = function s_GET_SORTED_MODELS(collection, query, options) {
            var models = undefined;
            models = s_RUN_QUERY(collection.models, query);

            if (options.sortBy) {
               models = s_SORT_MODELS(models, options);
            }

            return models;
         };

         /**
          * Tests an item and returns a string representation of the type or `false` if no type matched.
          *
          * @param {*}  item  - Item to test.
          * @returns {string|boolean}
          */

         s_GET_TYPE = function s_GET_TYPE(item) {
            if (_.isRegExp(item)) {
               return '$regex';
            }

            if (_.isDate(item)) {
               return '$date';
            }

            if (_.isObject(item) && !_.isArray(item)) {
               return 'object';
            }

            if (_.isArray(item)) {
               return 'array';
            }

            if (_.isString(item)) {
               return 'string';
            }

            if (_.isNumber(item)) {
               return 'number';
            }

            if (_.isBoolean(item)) {
               return 'boolean';
            }

            if (_.isFunction(item)) {
               return 'function';
            }

            return false;
         };

         /**
          *
          * @param {Array<Model>}   models         -
          * @param {Array<*>}       query          - An array of sub-queries.
          * @param {boolean}        andOr          -
          * @param {function}       filterFunction -
          * @param {string}         itemType       -
          * @returns {*}
          */

         s_ITERATOR = function s_ITERATOR(models, query, andOr, filterFunction, itemType) {
            if (itemType === null) {
               itemType = false;
            }

            return filterFunction(models, function (model) {
               var _i = undefined,
                   _len = undefined,
                   attr = undefined,
                   q = undefined,
                   test = undefined;

               for (_i = 0, _len = query.length; _i < _len; _i++) {
                  q = query[_i];

                  attr = (function () {
                     switch (itemType) {
                        case 'elemMatch':
                           return model[q.key];
                        case 'computed':
                           return model[q.key]();
                        default:
                           return model.get(q.key);
                     }
                  })();

                  test = s_TEST_MODEL_ATTRIBUTE(q.type, attr);

                  if (test) {
                     test = s_PERFORM_QUERY(q.type, q.value, attr, model, q.key);
                  }

                  if (andOr === test) {
                     return andOr;
                  }
               }
               return !andOr;
            });
         };

         /**
          * @returns {{}|*}
          */

         s_MAKE_OBJ = function s_MAKE_OBJ() {
            var args = undefined,
                current = undefined,
                key = undefined,
                o = undefined,
                val = undefined;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            o = {};
            current = o;

            while (args.length) {
               key = args.shift();
               val = args.length === 1 ? args.shift() : {};
               current = current[key] = val;
            }

            return o;
         };

         /**
          * Pages models
          *
          * @param {Array<Model>}   models   - Array of models to page.
          * @param {Object}         options  - Optional parameters
          * @returns {*}
          */

         s_PAGE_MODELS = function s_PAGE_MODELS(models, options) {
            var end = undefined,
                sliced_models = undefined,
                start = undefined,
                total_pages = undefined;

            if (options.offset) {
               start = options.offset;
            } else if (options.page) {
               start = (options.page - 1) * options.limit;
            } else {
               start = 0;
            }

            end = start + options.limit;
            sliced_models = models.slice(start, end);

            if (options.pager && _.isFunction(options.pager)) {
               total_pages = Math.ceil(models.length / options.limit);
               options.pager(total_pages, sliced_models);
            }

            return sliced_models;
         };

         /**
          * Function to parse raw queries
          *
          * Allows queries of the following forms:
          * query
          * name: "test"
          * id: $gte: 10
          *
          * query [
          *    {name:"test"}
          *    {id:$gte:10}
          * ]
          *
          * @param {*}  rawQuery - raw query
          * @return {array} parsed query
          */

         s_PARSE_SUB_QUERY = function s_PARSE_SUB_QUERY(rawQuery) {
            var _i = undefined,
                _len = undefined,
                _results = undefined,
                key = undefined,
                o = undefined,
                paramType = undefined,
                q = undefined,
                query = undefined,
                queryArray = undefined,
                queryParam = undefined,
                type = undefined,
                val = undefined,
                value = undefined;

            if (_.isArray(rawQuery)) {
               queryArray = rawQuery;
            } else {
               queryArray = (function () {
                  var _results = undefined;
                  _results = [];
                  for (key in rawQuery) {
                     if (!__hasProp.call(rawQuery, key)) {
                        continue;
                     }
                     val = rawQuery[key];
                     _results.push(s_MAKE_OBJ(key, val));
                  }
                  return _results;
               })();
            }

            _results = [];

            for (_i = 0, _len = queryArray.length; _i < _len; _i++) {
               query = queryArray[_i];
               for (key in query) {
                  if (!__hasProp.call(query, key)) {
                     continue;
                  }

                  queryParam = query[key];
                  o = { key: key };

                  paramType = s_GET_TYPE(queryParam);
                  switch (paramType) {
                     case '$regex':
                     case '$date':
                        o.type = paramType;
                        o.value = queryParam;
                        break;
                     case 'object':
                        if (key === '$and' || key === '$or' || key === '$nor' || key === '$not') {
                           o.value = s_PARSE_SUB_QUERY(queryParam);
                           o.type = key;
                           o.key = null;
                        } else {
                           for (type in queryParam) {
                              value = queryParam[type];
                              if (s_TEST_QUERY_VALUE(type, value)) {
                                 o.type = type;
                                 switch (type) {
                                    case '$elemMatch':
                                    case '$relationMatch':
                                       o.value = s_PARSE_QUERY(value);
                                       break;
                                    case '$computed':
                                       q = s_MAKE_OBJ(key, value);
                                       o.value = s_PARSE_SUB_QUERY(q);
                                       break;
                                    default:
                                       o.value = value;
                                 }
                              }
                           }
                        }
                        break;
                     default:
                        o.type = '$equal';
                        o.value = queryParam;
                  }

                  if (o.type === '$equal' && (paramType === 'object' || paramType === 'array')) {
                     o.type = '$oEqual';
                  }
               }
               _results.push(o);
            }

            return _results;
         };

         /**
          * Parses query string.
          *
          * @param {string}   query - A query
          * @returns {*[]}
          */

         s_PARSE_QUERY = function s_PARSE_QUERY(query) {
            var compoundKeys = undefined,
                compoundQuery = undefined,
                key = undefined,
                queryKeys = undefined,
                type = undefined,
                val = undefined;
            queryKeys = _(query).keys();
            compoundKeys = ["$and", "$not", "$or", "$nor"];
            compoundQuery = _.intersection(compoundKeys, queryKeys);

            if (compoundQuery.length === 0) {
               return [{
                  type: "$and",
                  parsedQuery: s_PARSE_SUB_QUERY(query)
               }];
            } else {
               if (compoundQuery.length !== queryKeys.length) {
                  if (__indexOf.call(compoundQuery, "$and") < 0) {
                     query.$and = {};
                     compoundQuery.unshift("$and");
                  }
                  for (key in query) {
                     if (!__hasProp.call(query, key)) {
                        continue;
                     }
                     val = query[key];

                     if (!(__indexOf.call(compoundKeys, key) < 0)) {
                        continue;
                     }

                     query.$and[key] = val;
                     delete query[key];
                  }
               }

               return (function () {
                  var _i = undefined,
                      _len = undefined,
                      _results = undefined;
                  _results = [];

                  for (_i = 0, _len = compoundQuery.length; _i < _len; _i++) {
                     type = compoundQuery[_i];
                     _results.push({
                        type: type,
                        parsedQuery: s_PARSE_SUB_QUERY(query[type])
                     });
                  }
                  return _results;
               })();
            }
         };

         /**
          * Performs a query
          *
          * @param {string}   type  -
          * @param {*}        value -
          * @param {*}        attr  -
          * @param {*}        model -
          * @returns {*}
          */

         s_PERFORM_QUERY = function s_PERFORM_QUERY(type, value, attr, model) {
            switch (type) {
               case '$equal':
                  if (_(attr).isArray()) {
                     return __indexOf.call(attr, value) >= 0;
                  } else {
                     return attr === value;
                  }
                  break;
               case '$oEqual':
                  return _(attr).isEqual(value);
               case '$contains':
                  return __indexOf.call(attr, value) >= 0;
               case '$ne':
                  return attr !== value;
               case '$lt':
                  return attr < value;
               case '$gt':
                  return attr > value;
               case '$lte':
                  return attr <= value;
               case '$gte':
                  return attr >= value;
               case '$between':
                  return value[0] < attr && attr < value[1];
               case '$in':
                  return __indexOf.call(value, attr) >= 0;
               case '$nin':
                  return __indexOf.call(value, attr) < 0;
               case '$all':
                  return _(value).all(function (item) {
                     return __indexOf.call(attr, item) >= 0;
                  });
               case '$any':
                  return _(attr).any(function (item) {
                     return __indexOf.call(value, item) >= 0;
                  });
               case '$size':
                  return attr.length === value;
               case '$exists':
               case '$has':
                  return attr !== null === value;
               case '$like':
                  return attr.includes(value);
               case '$likeI':
                  return attr.toLowerCase().includes(value.toLowerCase());
               case '$regex':
                  return value.test(attr);
               case '$cb':
                  return value.call(model, attr);
               case '$elemMatch':
                  return s_RUN_QUERY(attr, value, 'elemMatch').length > 0;
               case '$relationMatch':
                  return s_RUN_QUERY(attr.models, value, 'relationMatch').length > 0;
               case '$computed':
                  return s_ITERATOR([model], value, false, s_DETECT, 'computed');
               case '$and':
               case '$or':
               case '$nor':
               case '$not':
                  return s_PROCESS_QUERY[type]([model], value).length === 1;
               default:
                  return false;
            }
         };

         /**
          * @type {{$and: Function, $or: Function, $nor: Function, $not: Function}}
          */
         s_PROCESS_QUERY = {
            $and: function $and(models, query, itemType) {
               return s_ITERATOR(models, query, false, s_FILTER, itemType);
            },
            $or: function $or(models, query, itemType) {
               return s_ITERATOR(models, query, true, s_FILTER, itemType);
            },
            $nor: function $nor(models, query, itemType) {
               return s_ITERATOR(models, query, true, s_REJECT, itemType);
            },
            $not: function $not(models, query, itemType) {
               return s_ITERATOR(models, query, false, s_REJECT, itemType);
            }
         };

         /**
          * Creates an array of rejected values of an array that doesn't match a test function.
          *
          * @param {Array<*>} array - An array to reject.
          * @param {function} test  - A test function.
          * @returns {Array<*>}
          */

         s_REJECT = function s_REJECT(array, test) {
            var _results = [];
            var _i = undefined,
                _len = undefined,
                val = undefined;

            for (_i = 0, _len = array.length; _i < _len; _i++) {
               val = array[_i];
               if (!test(val)) {
                  _results.push(val);
               }
            }

            return _results;
         };

         /**
          * Runs a query.
          *
          * @param {*}        items    -
          * @param {string}   query    - A query
          * @param {*}        itemType -
          * @returns {*}
          */

         s_RUN_QUERY = function s_RUN_QUERY(items, query, itemType) {
            var reduceIterator = undefined;

            if (!itemType) {
               query = s_PARSE_QUERY(query);
            }

            reduceIterator = function (memo, queryItem) {
               return s_PROCESS_QUERY[queryItem.type](memo, queryItem.parsedQuery, itemType);
            };

            return _.reduce(query, reduceIterator, items);
         };

         /**
          * Sorts models.
          *
          * @param {Array<Model>}   models   -
          * @param {string}         query    - A query
          * @returns {*}
          */

         s_SORT_MODELS = function s_SORT_MODELS(models, query) {
            if (_(query.sortBy).isString()) {
               var first = _(models).first();
               if (_.isUndefined(first) || first === null) {
                  return [];
               }

               var firstValue = first.get(query.sortBy);

               if (_.isString(firstValue)) {
                  models = _(models).sortBy(function (model) {
                     return model.get(query.sortBy).toLocaleLowerCase();
                  });
               } else {
                  models = _(models).sortBy(function (model) {
                     return model.get(query.sortBy);
                  });
               }
            } else if (_(query.sortBy).isFunction()) {
               models = _(models).sortBy(query.sortBy);
            }

            if (query.order === 'desc') {
               models = models.reverse();
            } else if (query.order === false) {
               models = models.reverse();
            }

            return models;
         };

         /**
          * Tests a model attribute based on the query type.
          *
          * @param {string}   type  - Query type
          * @param {*}        value - A value
          * @returns {*}
          */

         s_TEST_MODEL_ATTRIBUTE = function s_TEST_MODEL_ATTRIBUTE(type, value) {
            switch (type) {
               case '$like':
               case '$likeI':
               case '$regex':
                  return _(value).isString();
               case '$contains':
               case '$all':
               case '$any':
               case '$elemMatch':
                  return _(value).isArray();
               case '$size':
                  return _(value).isArray() || _(value).isString();
               case '$in':
               case '$nin':
                  return value !== null;
               case '$relationMatch':
                  return value !== null && value.models;
               default:
                  return true;
            }
         };

         /**
          * Tests a value based on the query type.
          *
          * @param {string}   type  - Query type
          * @param {*}        value - A value
          * @returns {*}
          */

         s_TEST_QUERY_VALUE = function s_TEST_QUERY_VALUE(type, value) {
            switch (type) {
               case '$in':
               case '$nin':
               case '$all':
               case '$any':
                  return _(value).isArray();
               case '$size':
                  return _(value).isNumber();
               case '$regex':
                  return _(value).isRegExp();
               case '$like':
               case '$likeI':
                  return _(value).isString();
               case '$between':
                  return _(value).isArray() && value.length === 2;
               case '$cb':
                  return _(value).isFunction();
               default:
                  return true;
            }
         };
      }
   };
});

})
(function(factory) {
  define(["underscore"], factory);
});