# offers

### Available Operations

* [getApiCatalogSystemPubProductsOffersProductId](#getapicatalogsystempubproductsoffersproductid) - Search Product offers
* [getApiCatalogSystemPubProductsOffersProductIdSkuSkuId](#getapicatalogsystempubproductsoffersproductidskuskuid) - Search SKU offers

## getApiCatalogSystemPubProductsOffersProductId

Retrieves existing offers of a specific product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiCatalogSystemPubProductsOffersProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiCatalogSystemPubProductsOffersProductIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = '3';

    $response = $sdk->offers->getApiCatalogSystemPubProductsOffersProductId($request);

    if ($response->getApiCatalogSystemPubProductsOffersProductId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiCatalogSystemPubProductsOffersProductIdSkuSkuId

Retrieves existing offers of a specific SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = '3';
    $request->skuId = '5';

    $response = $sdk->offers->getApiCatalogSystemPubProductsOffersProductIdSkuSkuId($request);

    if ($response->getApiCatalogSystemPubProductsOffersProductIdSkuSkuId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
