<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryRequest();
    $request->wmConsumerChannelType = 'corrupti';
    $request->wmQosCorrelationId = 'provident';
    $request->wmSecAccessToken = 'distinctio';
    $request->wmSvcName = 'quibusdam';
    $request->shipNode = 'unde';
    $request->sku = 'nulla';

    $response = $sdk->inventory->getInventory($request);

    if ($response->getInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->