# timelineWeatherAPIDateRangeRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdateenddate) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest();
    $request->contentType = 'excepturi';
    $request->enddate = 'nisi';
    $request->include = 'recusandae';
    $request->key = 'temporibus';
    $request->lang = 'ab';
    $request->location = 'quis';
    $request->startdate = 'veritatis';
    $request->unitGroup = 'deserunt';

    $response = $sdk->timelineWeatherAPIDateRangeRequest->getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
