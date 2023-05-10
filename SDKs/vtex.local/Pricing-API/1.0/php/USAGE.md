<!-- Start SDK Example Usage -->
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
    $request->contentType = 'corrupti';
    $request->priceTableId = 'b2c';

    $response = $sdk->priceTables->getrulesforapricetable($request);

    if ($response->getrulesforapricetable200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->