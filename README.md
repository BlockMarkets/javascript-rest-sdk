# BlockMarkets REST API - Javascript SDK
This repository contains the released Javascript client SDK for the BlockMarkets RESTful API.

The BlockMarkets API provides real-time and historical cryptocurrency market data from the world's top crypto exchanges. Sign up for a free API key at [BlockMarkets Cryptocurrency API](https://www.blockmarkets.io/cryptocurrency-api).

Check out our [API Documentation](https://docs.blockmarkets.io) for more information.



This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install from the npm package:

```shell
npm install blockmarkets-rest-api
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your blockmarkets from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('blockmarkets')` in javascript files from the directory you ran the last 
command above from.

#### git
#
Install from the git repository using npm.

```shell
    npm install blockmarkets/javascript-rest-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var blockmarkets = require('blockmarkets');

var defaultClient = blockmarkets.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['x-api-key'] = "Token"

var api = new blockmarkets.DefaultApi()
var symbol = "symbol_example"; // {String} The asset symbol (see /assets)
api.benchmarkRate(symbol).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.blockmarkets.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*blockmarkets.DefaultApi* | [**benchmarkRate**](docs/DefaultApi.md#benchmarkRate) | **GET** /v1/rates/benchmark/{symbol} | Returns the latest available benchmark rates for a specific asset.
*blockmarkets.DefaultApi* | [**benchmarkRateHistory**](docs/DefaultApi.md#benchmarkRateHistory) | **GET** /v1/rates/benchmark/{symbol}/history | Returns historical benchmark rates for an asset. Requires premium subscription.
*blockmarkets.DefaultApi* | [**listAssetMarkets**](docs/DefaultApi.md#listAssetMarkets) | **GET** /v1/assets/{symbol} | Returns a list of all markets (base and quote) for a specific asset.
*blockmarkets.DefaultApi* | [**listAssets**](docs/DefaultApi.md#listAssets) | **GET** /v1/assets | Returns a list of supported assets.
*blockmarkets.DefaultApi* | [**listBenchmarkRates**](docs/DefaultApi.md#listBenchmarkRates) | **GET** /v1/rates/benchmark | Returns a list of supported USD benchmark rates.
*blockmarkets.DefaultApi* | [**listExchangeMarkets**](docs/DefaultApi.md#listExchangeMarkets) | **GET** /v1/exchanges/{exchange} | Returns a list of markets for a specific exchange.
*blockmarkets.DefaultApi* | [**listExchanges**](docs/DefaultApi.md#listExchanges) | **GET** /v1/exchanges | Returns a list of supported exchanges.
*blockmarkets.DefaultApi* | [**listMarkets**](docs/DefaultApi.md#listMarkets) | **GET** /v1/markets | Returns a list of supported markets.
*blockmarkets.DefaultApi* | [**listPairMarkets**](docs/DefaultApi.md#listPairMarkets) | **GET** /v1/pairs/{pair} | Returns a list of markets for a specific asset pair.
*blockmarkets.DefaultApi* | [**listPairs**](docs/DefaultApi.md#listPairs) | **GET** /v1/pairs | Returns a list of supported asset pairs.
*blockmarkets.DefaultApi* | [**listSpotRates**](docs/DefaultApi.md#listSpotRates) | **GET** /v1/rates/spot | Returns a list of supported USD spot rates.
*blockmarkets.DefaultApi* | [**marketBook**](docs/DefaultApi.md#marketBook) | **GET** /v1/markets/{exchange}/{pair}/book | Returns the top 50 bids and asks from the current order book for a market pair. Requires premium subscription.
*blockmarkets.DefaultApi* | [**marketOHLCV**](docs/DefaultApi.md#marketOHLCV) | **GET** /v1/markets/{exchange}/{pair}/ohlcv | Returns OHLCV history for a market pair.
*blockmarkets.DefaultApi* | [**marketTicker**](docs/DefaultApi.md#marketTicker) | **GET** /v1/markets/{exchange}/{pair} | Returns the latest ticker for a market pair.
*blockmarkets.DefaultApi* | [**marketTrades**](docs/DefaultApi.md#marketTrades) | **GET** /v1/markets/{exchange}/{pair}/trades | Returns trades for a market pair. Requires premium subscription.
*blockmarkets.DefaultApi* | [**spotRate**](docs/DefaultApi.md#spotRate) | **GET** /v1/rates/spot/{symbol} | Returns the last USD spot rate for an asset.
*blockmarkets.DefaultApi* | [**spotRateHistory**](docs/DefaultApi.md#spotRateHistory) | **GET** /v1/rates/spot/{symbol}/history | Returns historical spot rates for an asset. Requires premium subscription.
*blockmarkets.DefaultApi* | [**spotRateOHLCV**](docs/DefaultApi.md#spotRateOHLCV) | **GET** /v1/rates/spot/{symbol}/ohlcv | Returns the OHLCV history for a spot rate.


## License

```
Copyright 2019 BlockMarkets, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```



