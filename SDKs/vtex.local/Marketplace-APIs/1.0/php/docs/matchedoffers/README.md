# matchedOffers

### Available Operations

* [getProductoffers](#getproductoffers) - Get Matched Offer's Data by Product ID
* [getSKUoffers](#getskuoffers) - Get Matched Offer's Data by SKU ID
* [getofferslist](#getofferslist) - Get Matched Offers List

## getProductoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductoffersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductoffersRequest();
    $request->accept = 'nulla';
    $request->contentType = 'corrupti';
    $request->accountName = 'illum';
    $request->environment = 'vel';
    $request->productId = 'error';

    $response = $sdk->matchedOffers->getProductoffers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSKUoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSKUoffersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSKUoffersRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->accountName = 'iure';
    $request->environment = 'magnam';
    $request->productId = 'debitis';
    $request->skuId = 'ipsa';

    $response = $sdk->matchedOffers->getSKUoffers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getofferslist

Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

 This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog. 

It is possible to filter the search through the following parameters: 

- rows 
- sort 

- start 

- fq

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetofferslistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetofferslistRequest();
    $request->accept = 'delectus';
    $request->contentType = 'tempora';
    $request->accountName = 'suscipit';
    $request->environment = 'molestiae';
    $request->fq = 'skuId:172';
    $request->rows = 791725;
    $request->sort = 'availability,desc';
    $request->start = 812169;

    $response = $sdk->matchedOffers->getofferslist($request);

    if ($response->getMatchedOffersResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
