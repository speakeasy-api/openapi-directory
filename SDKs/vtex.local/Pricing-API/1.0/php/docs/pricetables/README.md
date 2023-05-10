# priceTables

### Available Operations

* [getrulesforapricetable](#getrulesforapricetable) - Get rules for a price table
* [listpricetables](#listpricetables) - List price tables
* [getallpricetablesandrules](#getallpricetablesandrules) - Get all price tables and their rules
* [putPricingPipelineCatalogPriceTableId](#putpricingpipelinecatalogpricetableid) - Update rules for a price table

## getrulesforapricetable

This method will retrieve the rules from a specific Price Table.

## Response body example

```json
{
    "tradePolicyId": "b2c",
    "rules": [{
        "id": 0,
        "context": {
            "categories": {},
            "brands": {
                "2000009": "Whiskas"
            },
            "stockStatuses": null,
            "internalCategories": null,
            "markupRange": null,
            "dateRange": null
        },
        "percentualModifier": 15
    }]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetrulesforapricetableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetrulesforapricetableRequest();
    $request->accept = 'application/json';
    $request->contentType = 'provident';
    $request->priceTableId = 'b2c';

    $response = $sdk->priceTables->getrulesforapricetable($request);

    if ($response->getrulesforapricetable200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listpricetables

This method will list all price tables.

## Response body example

```json
[
    "1",
    "2",
    "3",
    "b2c",
    "b2b",
    "gold"
]
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListpricetablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListpricetablesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'distinctio';

    $response = $sdk->priceTables->listpricetables($request);

    if ($response->listpricetables200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getallpricetablesandrules

This method will retrieve all price tables and their rules.

## Response body example

```json
[
    {
        "tradePolicyId": "2",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {},
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 20
            }
        ]
    },
    {
        "tradePolicyId": "b2c",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {
                        "2000009": "Whiskas"
                    },
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 15
            }
        ]
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
use \OpenAPI\OpenAPI\Models\Operations\GetallpricetablesandrulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetallpricetablesandrulesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'quibusdam';

    $response = $sdk->priceTables->getallpricetablesandrules($request);

    if ($response->getallpricetablesandrules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPricingPipelineCatalogPriceTableId

This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.

## Request body example

```json
{
    "rules": [
          {
               "id": 1,
               "context": {
                    "categories": {
                         "Category ID": "1",
                         "Category Name": "Alimentação"
                    },
                    "brands": {
                         "Brand ID": "2000002",
                         "Brand Name": "Whiskas"
                    },
                    "markupRange": {
                         "from": 0,
                         "to": 200
                    },
                    "dateRange": {
                         "from": "2022-01-23T19:00:00.000Z",
                         "to": "2023-10-26T00:00:00.000Z"
                    }
               },
               "percentualModifier": 0
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
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext;
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange;
use \OpenAPI\OpenAPI\Models\Operations\PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPricingPipelineCatalogPriceTableIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'unde';
    $request->requestBody = new PutPricingPipelineCatalogPriceTableIdRequestBody();
    $request->requestBody->rules = [
        new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(),
        new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(),
        new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(),
        new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(),
    ];
    $request->priceTableId = 'corrupti';

    $response = $sdk->priceTables->putPricingPipelineCatalogPriceTableId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
