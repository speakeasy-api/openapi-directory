# investmentProducts

## Overview

Investment products  (e.g. mutual funds, ETFs, stocks etc.) are bought and sold by the investor (or by the wealth manager on the investor’s behalf). 

The Investment Products endpoint returns all the investment products that are offered by the wealth manager, as well as the current market price. The wealth manager must specify the universe of supported investment products via the WealthOS Admin UI. 

### Available Operations

* [getConfiguredInvestmentProductPrices](#getconfiguredinvestmentproductprices) - Get Current Prices of all Investment Products
* [getConfiguredInvestmentProducts](#getconfiguredinvestmentproducts) - Get Configured Investment Products
* [getInvestmentProduct](#getinvestmentproduct) - Get details of a given Investment Product
* [getInvestmentProductPrice](#getinvestmentproductprice) - Get Current Price of an Investment Product

## getConfiguredInvestmentProductPrices

Returns current prices of all the investment products configured for this tenancy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductPricesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductPricesStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductPricesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfiguredInvestmentProductPricesRequest();
    $request->pageNumber = 'animi';
    $request->pageSize = 'enim';
    $request->status = GetConfiguredInvestmentProductPricesStatusEnum::ACTIVE;
    $request->xApiKey = 'quo';

    $requestSecurity = new GetConfiguredInvestmentProductPricesSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProducts->getConfiguredInvestmentProductPrices($request, $requestSecurity);

    if ($response->getConfiguredInvestmentProductPrices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguredInvestmentProducts

Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredInvestmentProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfiguredInvestmentProductsRequest();
    $request->pageNumber = 'sequi';
    $request->pageSize = 'tenetur';
    $request->status = GetConfiguredInvestmentProductsStatusEnum::ACTIVE;
    $request->xApiKey = 'id';

    $requestSecurity = new GetConfiguredInvestmentProductsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProducts->getConfiguredInvestmentProducts($request, $requestSecurity);

    if ($response->getConfiguredInvestmentProducts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvestmentProduct

Returns the requested investment product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductCategoryIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvestmentProductRequest();
    $request->categoryId = GetInvestmentProductCategoryIDEnum::FUNDS;
    $request->investmentProductId = 'possimus';
    $request->xApiKey = 'aut';

    $requestSecurity = new GetInvestmentProductSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProducts->getInvestmentProduct($request, $requestSecurity);

    if ($response->getInvestmentProduct200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvestmentProductPrice

Returns current price of the requested investment product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductPriceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductPriceCategoryIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestmentProductPriceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvestmentProductPriceRequest();
    $request->categoryId = GetInvestmentProductPriceCategoryIDEnum::FUNDS;
    $request->investmentProductId = 'quasi';
    $request->xApiKey = 'error';

    $requestSecurity = new GetInvestmentProductPriceSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProducts->getInvestmentProductPrice($request, $requestSecurity);

    if ($response->getInvestmentProductPrice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
