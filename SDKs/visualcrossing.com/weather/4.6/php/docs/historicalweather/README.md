# historicalWeather

### Available Operations

* [getVisualCrossingWebServicesRestServicesWeatherdataHistory](#getvisualcrossingwebservicesrestservicesweatherdatahistory) - Retrieves hourly or daily historical weather records.

## getVisualCrossingWebServicesRestServicesWeatherdataHistory

The weather history data is suitable for retrieving hourly or daily historical weather records.

### Example Usage

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
    $request->aggregateHours = 'error';
    $request->allowAsynch = false;
    $request->collectStationContributions = false;
    $request->contentType = 'deserunt';
    $request->endDateTime = 'suscipit';
    $request->includeNormals = false;
    $request->key = 'iure';
    $request->locations = 'magnam';
    $request->maxDistance = 'debitis';
    $request->maxStations = 'ipsa';
    $request->shortColumnNames = false;
    $request->startDateTime = 'delectus';
    $request->unitGroup = 'tempora';

    $response = $sdk->historicalWeather->getVisualCrossingWebServicesRestServicesWeatherdataHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
