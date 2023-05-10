# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [historicalWeather](docs/historicalweather/README.md)

* [getVisualCrossingWebServicesRestServicesWeatherdataHistory](docs/historicalweather/README.md#getvisualcrossingwebservicesrestservicesweatherdatahistory) - Retrieves hourly or daily historical weather records.

### [timelineWeatherAPI15DayForecastRequest](docs/timelineweatherapi15dayforecastrequest/README.md)

* [getVisualCrossingWebServicesRestServicesTimelineLocation](docs/timelineweatherapi15dayforecastrequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocation) - Historical and Forecast Weather API

### [timelineWeatherAPIDateRangeRequest](docs/timelineweatherapidaterangerequest/README.md)

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate](docs/timelineweatherapidaterangerequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocationstartdateenddate) - Historical and Forecast Weather API

### [timelineWeatherAPISingleDateRequest](docs/timelineweatherapisingledaterequest/README.md)

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdate](docs/timelineweatherapisingledaterequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocationstartdate) - Historical and Forecast Weather API

### [weatherForecast](docs/weatherforecast/README.md)

* [getVisualCrossingWebServicesRestServicesWeatherdataForecast](docs/weatherforecast/README.md#getvisualcrossingwebservicesrestservicesweatherdataforecast) - Weather Forecast API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
