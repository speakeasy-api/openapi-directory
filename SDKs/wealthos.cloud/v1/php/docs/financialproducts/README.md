# financialProducts

## Overview

Financial Products are the tax wrapper investment vehicles offered by the Wealth Manager (e.g. General Investment Accounts, Stocks and Shares ISAs, SIPPs, LISAs etc.). Currently WealthOS supports General Investment Accounts (GIAs). 

The Financial Products endpoint returns all financial products and their configurations setup by the Wealth Manager via the WealthOS Admin UI.

### Available Operations

* [getAllFinancialProducts](#getallfinancialproducts) - Get All Financial Products

## getAllFinancialProducts

Returns all the financial products setup for the tenant in an array

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllFinancialProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllFinancialProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllFinancialProductsRequest();
    $request->productTypes = 'hic';
    $request->xApiKey = 'optio';

    $requestSecurity = new GetAllFinancialProductsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->financialProducts->getAllFinancialProducts($request, $requestSecurity);

    if ($response->getAllFinancialProducts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
