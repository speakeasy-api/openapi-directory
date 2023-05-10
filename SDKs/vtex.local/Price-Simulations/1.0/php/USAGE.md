<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVCustomPricesSessionSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVCustomPricesSessionSchemaRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';

    $response = $sdk->customPrices->getVCustomPricesSessionSchema($request);

    if ($response->requestBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->