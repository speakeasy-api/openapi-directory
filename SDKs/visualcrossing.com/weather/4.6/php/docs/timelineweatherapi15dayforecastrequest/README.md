# timelineWeatherAPI15DayForecastRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocation](#getvisualcrossingwebservicesrestservicestimelinelocation) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocation

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVisualCrossingWebServicesRestServicesTimelineLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisualCrossingWebServicesRestServicesTimelineLocationRequest();
    $request->contentType = 'suscipit';
    $request->include = 'molestiae';
    $request->key = 'minus';
    $request->lang = 'placeat';
    $request->location = 'voluptatum';
    $request->unitGroup = 'iusto';

    $response = $sdk->timelineWeatherAPI15DayForecastRequest->getVisualCrossingWebServicesRestServicesTimelineLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
