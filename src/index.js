/**
 * BlockMarkets Cryptocurrency API
 * The BlockMarkets API provides real-time and historical market data on cryptocurrencies from the world's leading crypto exchanges. Sign up for a free, unlimited API key at [BlockMarkets Cryptocurrency API](https://www.blockmarkets.io/cryptocurrency-api).
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Empty', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Empty'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Empty, DefaultApi) {
  'use strict';

  /**
   * JavaScript client library for the BlockMarkets RESTful API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var blockmarkets = require('index'); // See note below*.
   * var xxxSvc = new blockmarkets.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new blockmarkets.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new blockmarkets.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new blockmarkets.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Empty model constructor.
     * @property {module:model/Empty}
     */
    Empty: Empty,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
