# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/visualcrossing.com/weather/4.6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest{
        AggregateHours: "corrupti",
        AllowAsynch: false,
        CollectStationContributions: false,
        ContentType: "provident",
        EndDateTime: "distinctio",
        IncludeNormals: false,
        Key: "quibusdam",
        Locations: "unde",
        MaxDistance: "nulla",
        MaxStations: "corrupti",
        ShortColumnNames: false,
        StartDateTime: "illum",
        UnitGroup: "vel",
    }

    ctx := context.Background()
    res, err := s.HistoricalWeather.GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### HistoricalWeather

* `GetVisualCrossingWebServicesRestServicesWeatherdataHistory` - Retrieves hourly or daily historical weather records.

### TimelineWeatherAPI15DayForecastRequest

* `GetVisualCrossingWebServicesRestServicesTimelineLocation` - Historical and Forecast Weather API

### TimelineWeatherAPIDateRangeRequest

* `GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate` - Historical and Forecast Weather API

### TimelineWeatherAPISingleDateRequest

* `GetVisualCrossingWebServicesRestServicesTimelineLocationStartdate` - Historical and Forecast Weather API

### WeatherForecast

* `GetVisualCrossingWebServicesRestServicesWeatherdataForecast` - Weather Forecast API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
