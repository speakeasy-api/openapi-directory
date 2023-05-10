<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategies;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesStrategyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStrategyRequest();
    $request->requestBody = new CreateStrategyRequestBody();
    $request->requestBody->enableRepricerForPromotion = true;
    $request->requestBody->enabled = true;
    $request->requestBody->repricerStrategy = 'Buy Box Strategy For testing';
    $request->requestBody->strategies = [
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
    ];
    $request->wmConsumerChannelType = 'provident';
    $request->wmQosCorrelationId = 'distinctio';
    $request->wmSecAccessToken = 'quibusdam';
    $request->wmSvcName = 'unde';

    $response = $sdk->prices->createStrategy($request);

    if ($response->createStrategy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->