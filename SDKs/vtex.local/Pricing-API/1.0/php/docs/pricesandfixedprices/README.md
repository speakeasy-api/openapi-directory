# pricesAndFixedPrices

### Available Operations

* [createUpdatePriceOrFixedPrice](#createupdatepriceorfixedprice) - Create or Update Base Price or Fixed Prices
* [deletePrice](#deleteprice) - Delete Price
* [deletefixedpricesonapricetableortradepolicy](#deletefixedpricesonapricetableortradepolicy) - Delete Fixed Prices on a price table or trade policy
* [getComputedPricebypricetable](#getcomputedpricebypricetable) - Get Computed Price by price table or trade policy
* [getFixedPrices](#getfixedprices) - Get Fixed Prices
* [getFixedPricesonapricetable](#getfixedpricesonapricetable) - Get Fixed Prices on a price table or trade policy
* [getPrice](#getprice) - Get Price
* [createorupdatefixedpricesonpricetableortradepolicy](#createorupdatefixedpricesonpricetableortradepolicy) - Create or Update Fixed Prices on a price table or trade policy

## createUpdatePriceOrFixedPrice

Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.

 <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>

```json
{
    "markup": 30,
    "basePrice": 100,
    "listPrice": 35,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 31,
            "listPrice": 32,
            "minQuantity": 1,
            "dateRange": {
                "from": "2022-05-21T22:00:00Z",
                "to": "2023-05-28T22:00:00Z"
            }
        },
        {
            "tradePolicyId": "1",
            "value": 31.5,
            "listPrice": 33,
            "minQuantity": 2
        }
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePriceOrFixedPriceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePriceOrFixedPriceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatePriceOrFixedPriceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'illum';
    $request->requestBody = new CreateUpdatePriceOrFixedPriceRequestBody();
    $request->requestBody->basePrice = 4236.55;
    $request->requestBody->costPrice = 6235.64;
    $request->requestBody->fixedPrices = [
        new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(),
        new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(),
        new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(),
    ];
    $request->requestBody->listPrice = 3843.82;
    $request->requestBody->markup = 437587;
    $request->itemId = 1;

    $response = $sdk->pricesAndFixedPrices->createUpdatePriceOrFixedPrice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePrice

Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePriceRequest();
    $request->accept = 'magnam';
    $request->contentType = 'debitis';
    $request->itemId = 1;

    $response = $sdk->pricesAndFixedPrices->deletePrice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletefixedpricesonapricetableortradepolicy

Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletefixedpricesonapricetableortradepolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletefixedpricesonapricetableortradepolicyRequest();
    $request->accept = 'application/json';
    $request->contentType = 'ipsa';
    $request->itemId = 1;
    $request->priceTableId = 'gold';

    $response = $sdk->pricesAndFixedPrices->deletefixedpricesonapricetableortradepolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComputedPricebypricetable

Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy. 

## Response body example

```json
{
    "tradePolicyId": "1",
    "listPrice": 30,
    "costPrice": 76.92,
    "sellingPrice": 18.9,
    "priceValidUntil": "2018-12-20T18:12:14Z"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComputedPricebypricetableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComputedPricebypricetableRequest();
    $request->accept = 'application/json';
    $request->contentType = 'delectus';
    $request->brandId = 3;
    $request->categoryIds = 1;
    $request->itemId = 1;
    $request->priceTableId = 'gold';
    $request->quantity = 2;

    $response = $sdk->pricesAndFixedPrices->getComputedPricebypricetable($request);

    if ($response->getcomputedprice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFixedPrices

The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.

 The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.

 Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).

 Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).

 ## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFixedPricesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFixedPricesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'tempora';
    $request->itemId = 1;

    $response = $sdk->pricesAndFixedPrices->getFixedPrices($request);

    if ($response->fixedPrices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFixedPricesonapricetable

Retrieves all Fixed Prices on a price table or trade policy. 

## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-04:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1
    }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFixedPricesonapricetableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFixedPricesonapricetableRequest();
    $request->accept = 'application/json';
    $request->contentType = 'suscipit';
    $request->itemId = 1;
    $request->priceTableId = 'gold';

    $response = $sdk->pricesAndFixedPrices->getFixedPricesonapricetable($request);

    if ($response->fixedPrices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrice

Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.

 ## Response body example

```json
{
    "itemId": "1",
    "listPrice": 50,
    "costPrice": 90,
    "markup": 30,
    "basePrice": 117,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 50.5,
            "listPrice": 50.5,
            "minQuantity": 2,
            "dateRange": {
                "from": "2021-12-31T01:00:00Z",
                "to": "2022-12-31T01:00:00Z"
            }
        },
        {
            "tradePolicyId": "2",
            "value": 30,
            "listPrice": 50,
            "minQuantity": 2
        }
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPriceRequest();
    $request->accept = 'application/json';
    $request->contentType = 'molestiae';
    $request->itemId = 1;

    $response = $sdk->pricesAndFixedPrices->getPrice($request);

    if ($response->getprice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createorupdatefixedpricesonpricetableortradepolicy

Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.

 ## Request body example

```json
[
  {
    "value": 50.5,
    "listPrice": 50.5,
    "minQuantity": 2,
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    }
  }
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateorupdatefixedpricesonpricetableortradepolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateorupdatefixedpricesonpricetableortradepolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateorupdatefixedpricesonpricetableortradepolicyRequest();
    $request->accept = 'minus';
    $request->contentType = 'placeat';
    $request->requestBody = [
        new CreateorupdatefixedpricesonpricetableortradepolicyRequestBody(),
        new CreateorupdatefixedpricesonpricetableortradepolicyRequestBody(),
        new CreateorupdatefixedpricesonpricetableortradepolicyRequestBody(),
    ];
    $request->itemId = 1;
    $request->priceTableId = 'priceTableA';

    $response = $sdk->pricesAndFixedPrices->createorupdatefixedpricesonpricetableortradepolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
