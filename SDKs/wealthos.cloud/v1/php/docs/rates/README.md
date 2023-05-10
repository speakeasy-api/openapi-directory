# rates

## Overview

Wealth Managers require various types of rates (e.g. spot fx rates, interest rates) for valuations, currency conversations etc. 

The Rates endpoint returns all the configured rate types along with the latest available rate. 

### Available Operations

* [getRates](#getrates) - Get Configured Rates

## getRates

Returns rate details of the requested rate type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRatesRateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRatesRequest();
    $request->rateType = GetRatesRateTypeEnum::FX_SPOT;
    $request->xApiKey = 'saepe';

    $requestSecurity = new GetRatesSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->rates->getRates($request, $requestSecurity);

    if ($response->getRates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
