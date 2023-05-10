<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindInteractionsRequest();
    $request->format = GetFindInteractionsFormatEnum::DUMP;
    $request->query = 'provident';

    $response = $sdk->allFunctions->getFindInteractions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->