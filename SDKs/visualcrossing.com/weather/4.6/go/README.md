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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.HistoricalWeather.GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx, operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest{
        AggregateHours: sdk.String("corrupti"),
        AllowAsynch: sdk.Bool(false),
        CollectStationContributions: sdk.Bool(false),
        ContentType: sdk.String("provident"),
        EndDateTime: sdk.String("distinctio"),
        IncludeNormals: sdk.Bool(false),
        Key: sdk.String("quibusdam"),
        Locations: sdk.String("unde"),
        MaxDistance: sdk.String("nulla"),
        MaxStations: sdk.String("corrupti"),
        ShortColumnNames: sdk.Bool(false),
        StartDateTime: sdk.String("illum"),
        UnitGroup: sdk.String("vel"),
    })
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


### [HistoricalWeather](docs/historicalweather/README.md)

* [GetVisualCrossingWebServicesRestServicesWeatherdataHistory](docs/historicalweather/README.md#getvisualcrossingwebservicesrestservicesweatherdatahistory) - Retrieves hourly or daily historical weather records.

### [TimelineWeatherAPI15DayForecastRequest](docs/timelineweatherapi15dayforecastrequest/README.md)

* [GetVisualCrossingWebServicesRestServicesTimelineLocation](docs/timelineweatherapi15dayforecastrequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocation) - Historical and Forecast Weather API

### [TimelineWeatherAPIDateRangeRequest](docs/timelineweatherapidaterangerequest/README.md)

* [GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate](docs/timelineweatherapidaterangerequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocationstartdateenddate) - Historical and Forecast Weather API

### [TimelineWeatherAPISingleDateRequest](docs/timelineweatherapisingledaterequest/README.md)

* [GetVisualCrossingWebServicesRestServicesTimelineLocationStartdate](docs/timelineweatherapisingledaterequest/README.md#getvisualcrossingwebservicesrestservicestimelinelocationstartdate) - Historical and Forecast Weather API

### [WeatherForecast](docs/weatherforecast/README.md)

* [GetVisualCrossingWebServicesRestServicesWeatherdataForecast](docs/weatherforecast/README.md#getvisualcrossingwebservicesrestservicesweatherdataforecast) - Weather Forecast API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
