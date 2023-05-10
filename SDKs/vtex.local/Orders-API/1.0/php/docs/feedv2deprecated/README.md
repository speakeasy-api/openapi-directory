# feedV2Deprecated

### Available Operations

* [getfeedorderstatus](#getfeedorderstatus) - Get feed order status

## getfeedorderstatus

Get feed order status (deprecated)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetfeedorderstatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfeedorderstatusRequest();
    $request->accept = 'magnam';
    $request->contentType = 'debitis';
    $request->maxLot = 'ipsa';

    $response = $sdk->feedV2Deprecated->getfeedorderstatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
