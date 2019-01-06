# blockmarkets.DefaultApi

All URIs are relative to *https://api.blockmarkets.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**benchmarkRate**](DefaultApi.md#benchmarkRate) | **GET** /v1/rates/benchmark/{symbol} | Returns the latest available benchmark rates for a specific asset.
[**benchmarkRateHistory**](DefaultApi.md#benchmarkRateHistory) | **GET** /v1/rates/benchmark/{symbol}/history | Returns historical benchmark rates for an asset. Requires premium subscription.
[**listAssetMarkets**](DefaultApi.md#listAssetMarkets) | **GET** /v1/assets/{symbol} | Returns a list of all markets (base and quote) for a specific asset.
[**listAssets**](DefaultApi.md#listAssets) | **GET** /v1/assets | Returns a list of supported assets.
[**listBenchmarkRates**](DefaultApi.md#listBenchmarkRates) | **GET** /v1/rates/benchmark | Returns a list of supported USD benchmark rates.
[**listExchangeMarkets**](DefaultApi.md#listExchangeMarkets) | **GET** /v1/exchanges/{exchange} | Returns a list of markets for a specific exchange.
[**listExchanges**](DefaultApi.md#listExchanges) | **GET** /v1/exchanges | Returns a list of supported exchanges.
[**listMarkets**](DefaultApi.md#listMarkets) | **GET** /v1/markets | Returns a list of supported markets.
[**listPairMarkets**](DefaultApi.md#listPairMarkets) | **GET** /v1/pairs/{pair} | Returns a list of markets for a specific asset pair.
[**listPairs**](DefaultApi.md#listPairs) | **GET** /v1/pairs | Returns a list of supported asset pairs.
[**listSpotRates**](DefaultApi.md#listSpotRates) | **GET** /v1/rates/spot | Returns a list of supported USD spot rates.
[**marketBook**](DefaultApi.md#marketBook) | **GET** /v1/markets/{exchange}/{pair}/book | Returns the top 50 bids and asks from the current order book for a market pair. Requires premium subscription.
[**marketOHLCV**](DefaultApi.md#marketOHLCV) | **GET** /v1/markets/{exchange}/{pair}/ohlcv | Returns OHLCV history for a market pair.
[**marketTicker**](DefaultApi.md#marketTicker) | **GET** /v1/markets/{exchange}/{pair} | Returns the latest ticker for a market pair.
[**marketTrades**](DefaultApi.md#marketTrades) | **GET** /v1/markets/{exchange}/{pair}/trades | Returns trades for a market pair. Requires premium subscription.
[**spotRate**](DefaultApi.md#spotRate) | **GET** /v1/rates/spot/{symbol} | Returns the last USD spot rate for an asset.
[**spotRateHistory**](DefaultApi.md#spotRateHistory) | **GET** /v1/rates/spot/{symbol}/history | Returns historical spot rates for an asset. Requires premium subscription.
[**spotRateOHLCV**](DefaultApi.md#spotRateOHLCV) | **GET** /v1/rates/spot/{symbol}/ohlcv | Returns the OHLCV history for a spot rate.


<a name="benchmarkRate"></a>
# **benchmarkRate**
> Empty benchmarkRate(symbol)

Returns the latest available benchmark rates for a specific asset.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
apiInstance.benchmarkRate(symbol).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="benchmarkRateHistory"></a>
# **benchmarkRateHistory**
> Empty benchmarkRateHistory(symbol, opts)

Returns historical benchmark rates for an asset. Requires premium subscription.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
var opts = {
  'close': "close_example" // String | The closing time. Options - 4pm-gmt-close, 4pm-est-close, 0-utc-close
};
apiInstance.benchmarkRateHistory(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 
 **close** | **String**| The closing time. Options - 4pm-gmt-close, 4pm-est-close, 0-utc-close | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssetMarkets"></a>
# **listAssetMarkets**
> Empty listAssetMarkets(symbol)

Returns a list of all markets (base and quote) for a specific asset.

### Example
```javascript
var blockmarkets = require('blockmarkets');

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
apiInstance.listAssetMarkets(symbol).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssets"></a>
# **listAssets**
> Empty listAssets()

Returns a list of supported assets.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listAssets().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listBenchmarkRates"></a>
# **listBenchmarkRates**
> Empty listBenchmarkRates()

Returns a list of supported USD benchmark rates.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listBenchmarkRates().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listExchangeMarkets"></a>
# **listExchangeMarkets**
> Empty listExchangeMarkets(exchange)

Returns a list of markets for a specific exchange.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var exchange = "exchange_example"; // String | The 4-char exchange code (see /exchanges)
apiInstance.listExchangeMarkets(exchange).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| The 4-char exchange code (see /exchanges) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listExchanges"></a>
# **listExchanges**
> Empty listExchanges()

Returns a list of supported exchanges.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listExchanges().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMarkets"></a>
# **listMarkets**
> Empty listMarkets()

Returns a list of supported markets.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listMarkets().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPairMarkets"></a>
# **listPairMarkets**
> Empty listPairMarkets(pair)

Returns a list of markets for a specific asset pair.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var pair = "pair_example"; // String | The asset pair (see /pairs)
apiInstance.listPairMarkets(pair).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| The asset pair (see /pairs) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPairs"></a>
# **listPairs**
> Empty listPairs()

Returns a list of supported asset pairs.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listPairs().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSpotRates"></a>
# **listSpotRates**
> Empty listSpotRates()

Returns a list of supported USD spot rates.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
apiInstance.listSpotRates().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketBook"></a>
# **marketBook**
> Empty marketBook(exchange, pair)

Returns the top 50 bids and asks from the current order book for a market pair. Requires premium subscription.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var exchange = "exchange_example"; // String | The 4-char exchange code (see /exchanges)
var pair = "pair_example"; // String | The asset pair (see /pairs)
apiInstance.marketBook(exchange, pair).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| The 4-char exchange code (see /exchanges) | 
 **pair** | **String**| The asset pair (see /pairs) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketOHLCV"></a>
# **marketOHLCV**
> Empty marketOHLCV(exchange, pair, opts)

Returns OHLCV history for a market pair.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var exchange = "exchange_example"; // String | The 4-char exchange code (see /exchanges)
var pair = "pair_example"; // String | The asset pair (see /pairs)
var opts = {
  'limit': 56, // Number | Number of records to retrieve (default=100, max=1000)
  'interval': 56, // Number | Interval period in minutes. Supported - 1,3,5,15,30,60,1440 (default=1440)
  'start': "start_example", // String | Start datetime in ISO 8601
  'end': "end_example" // String | End datetime in ISO 8601
};
apiInstance.marketOHLCV(exchange, pair, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| The 4-char exchange code (see /exchanges) | 
 **pair** | **String**| The asset pair (see /pairs) | 
 **limit** | **Number**| Number of records to retrieve (default&#x3D;100, max&#x3D;1000) | [optional] 
 **interval** | **Number**| Interval period in minutes. Supported - 1,3,5,15,30,60,1440 (default&#x3D;1440) | [optional] 
 **start** | **String**| Start datetime in ISO 8601 | [optional] 
 **end** | **String**| End datetime in ISO 8601 | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketTicker"></a>
# **marketTicker**
> Empty marketTicker(exchange, pair)

Returns the latest ticker for a market pair.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var exchange = "exchange_example"; // String | The 4-char exchange code (see /exchanges)
var pair = "pair_example"; // String | The asset pair (see /pairs)
apiInstance.marketTicker(exchange, pair).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| The 4-char exchange code (see /exchanges) | 
 **pair** | **String**| The asset pair (see /pairs) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="marketTrades"></a>
# **marketTrades**
> Empty marketTrades(exchange, pair, opts)

Returns trades for a market pair. Requires premium subscription.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var exchange = "exchange_example"; // String | The 4-char exchange code (see /exchanges)
var pair = "pair_example"; // String | The asset pair (see /pairs)
var opts = {
  'limit': 56, // Number | Number of records to retrieve (default=100, max=1000)
  'start': "start_example", // String | Start datetime in ISO 8601
  'end': "end_example" // String | End datetime in ISO 8601
};
apiInstance.marketTrades(exchange, pair, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| The 4-char exchange code (see /exchanges) | 
 **pair** | **String**| The asset pair (see /pairs) | 
 **limit** | **Number**| Number of records to retrieve (default&#x3D;100, max&#x3D;1000) | [optional] 
 **start** | **String**| Start datetime in ISO 8601 | [optional] 
 **end** | **String**| End datetime in ISO 8601 | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spotRate"></a>
# **spotRate**
> Empty spotRate(symbol)

Returns the last USD spot rate for an asset.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
apiInstance.spotRate(symbol).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spotRateHistory"></a>
# **spotRateHistory**
> Empty spotRateHistory(symbol, opts)

Returns historical spot rates for an asset. Requires premium subscription.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
var opts = {
  'limit': 56, // Number | Number of records to retrieve (default=100, max=1000)
  'start': "start_example", // String | Start datetime in ISO 8601
  'end': "end_example" // String | End datetime in ISO 8601
};
apiInstance.spotRateHistory(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 
 **limit** | **Number**| Number of records to retrieve (default&#x3D;100, max&#x3D;1000) | [optional] 
 **start** | **String**| Start datetime in ISO 8601 | [optional] 
 **end** | **String**| End datetime in ISO 8601 | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spotRateOHLCV"></a>
# **spotRateOHLCV**
> Empty spotRateOHLCV(symbol, opts)

Returns the OHLCV history for a spot rate.

### Example
```javascript
var blockmarkets = require('blockmarkets');
var defaultClient = blockmarkets.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new blockmarkets.DefaultApi();
var symbol = "symbol_example"; // String | The asset symbol (see /assets)
var opts = {
  'limit': 56, // Number | Number of records to retrieve (default=100, max=1000)
  'interval': 56, // Number | Interval period in minutes. Supported -  1,3,5,15,30,60,1440 (default=1440)
  'start': "start_example", // String | Start datetime in ISO 8601
  'end': "end_example" // String | End datetime in ISO 8601
};
apiInstance.spotRateOHLCV(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The asset symbol (see /assets) | 
 **limit** | **Number**| Number of records to retrieve (default&#x3D;100, max&#x3D;1000) | [optional] 
 **interval** | **Number**| Interval period in minutes. Supported -  1,3,5,15,30,60,1440 (default&#x3D;1440) | [optional] 
 **start** | **String**| Start datetime in ISO 8601 | [optional] 
 **end** | **String**| End datetime in ISO 8601 | [optional] 

### Return type

[**Empty**](Empty.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

