# matchReceivedSKUs

## Overview

Match SKU suggestions received in the marketplace

### Available Operations

* [match](#match) - Match Received SKUs individually
* [matchMultiple](#matchmultiple) - Match Multiple Received SKUs

## match

All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `itemMatch`: associate the received SKU to an existing SKU. 

3. `productMatch`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU. 

5. `pending`: the received SKU requires attention. 

6. `incomplete`: the received SKU is lacking information to be matched. 

7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\MatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Sku;
use \OpenAPI\OpenAPI\Models\Shared\Specifications;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MatchRequest();
    $request->accept = 'qui';
    $request->contentType = 'impedit';
    $request->matchRequest = new MatchRequest();
    $request->matchRequest->matchType = 'cum';
    $request->matchRequest->matcherId = 'esse';
    $request->matchRequest->product = new Product();
    $request->matchRequest->product->brandId = 216550;
    $request->matchRequest->product->categoryId = 568434;
    $request->matchRequest->product->description = 'aspernatur';
    $request->matchRequest->product->name = 'Cathy Mosciski';
    $request->matchRequest->product->specifications = 'dolor';
    $request->matchRequest->productRef = 'natus';
    $request->matchRequest->score = 'laboriosam';
    $request->matchRequest->sku = new Sku();
    $request->matchRequest->sku->eans = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->matchRequest->sku->height = 613064;
    $request->matchRequest->sku->images = [
        'saepe',
        'quidem',
    ];
    $request->matchRequest->sku->length = 99280;
    $request->matchRequest->sku->measurementUnit = 'ipsa';
    $request->matchRequest->sku->name = 'Carlton O'Hara';
    $request->matchRequest->sku->refId = 'dolorem';
    $request->matchRequest->sku->specifications = new Specifications();
    $request->matchRequest->sku->specifications->embalagem = 'corporis';
    $request->matchRequest->sku->unitMultiplier = 128926;
    $request->matchRequest->sku->weight = 750686;
    $request->matchRequest->sku->width = 315428;
    $request->matchRequest->skuRef = 'omnis';
    $request->accountName = 'nemo';
    $request->matchid = 'minima';
    $request->sellerId = 'excepturi';
    $request->sellerskuid = 'accusantium';
    $request->version = 'iure';

    $response = $sdk->matchReceivedSKUs->match($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## matchMultiple

This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.

Through the `actionName` attribute you can select the operation you want to apply to the received SKU. 

Actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `skuassociation`: associate the received SKU to an existing SKU. 

3. `productassociation`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MatchMultipleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MatchMultipleRequest();
    $request->accept = 'culpa';
    $request->contentType = 'doloribus';
    $request->requestBody = [
        [
            'mollitia',
        ],
        [
            'culpa',
        ],
        [
            'repellat',
        ],
        [
            'occaecati',
            'numquam',
            'commodi',
        ],
    ];
    $request->accountName = 'quam';
    $request->actionName = 'molestiae';

    $response = $sdk->matchReceivedSKUs->matchMultiple($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
