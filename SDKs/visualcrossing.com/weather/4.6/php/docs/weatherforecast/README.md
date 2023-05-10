# weatherForecast

### Available Operations

* [getVisualCrossingWebServicesRestServicesWeatherdataForecast](#getvisualcrossingwebservicesrestservicesweatherdataforecast) - Weather Forecast API

## getVisualCrossingWebServicesRestServicesWeatherdataForecast

Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest();
    $request->aggregateHours = 'at';
    $request->allowAsynch = false;
    $request->contentType = 'maiores';
    $request->key = 'molestiae';
    $request->locations = 'quod';
    $request->sendAsDatasource = false;
    $request->shortColumnNames = false;
    $request->unitGroup = 'quod';

    $response = $sdk->weatherForecast->getVisualCrossingWebServicesRestServicesWeatherdataForecast($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
