<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest();
    $request->aggregateHours = 'corrupti';
    $request->allowAsynch = false;
    $request->collectStationContributions = false;
    $request->contentType = 'provident';
    $request->endDateTime = 'distinctio';
    $request->includeNormals = false;
    $request->key = 'quibusdam';
    $request->locations = 'unde';
    $request->maxDistance = 'nulla';
    $request->maxStations = 'corrupti';
    $request->shortColumnNames = false;
    $request->startDateTime = 'illum';
    $request->unitGroup = 'vel';

    $response = $sdk->historicalWeather->getVisualCrossingWebServicesRestServicesWeatherdataHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->