# timelineWeatherAPISingleDateRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdate) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocationStartdate

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest();
    $request->contentType = 'perferendis';
    $request->include = 'ipsam';
    $request->key = 'repellendus';
    $request->lang = 'sapiente';
    $request->location = 'quo';
    $request->startdate = 'odit';
    $request->unitGroup = 'at';

    $response = $sdk->timelineWeatherAPISingleDateRequest->getVisualCrossingWebServicesRestServicesTimelineLocationStartdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
