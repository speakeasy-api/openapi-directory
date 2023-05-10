# rating

### Available Operations

* [getProductRating](#getproductrating) - Get Product Rating

## getProductRating

Retrieves the rating of a specific product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductRatingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductRatingRequest();
    $request->accept = 'distinctio';
    $request->contentType = 'quibusdam';
    $request->productId = '1';

    $response = $sdk->rating->getProductRating($request);

    if ($response->getProductRating200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
