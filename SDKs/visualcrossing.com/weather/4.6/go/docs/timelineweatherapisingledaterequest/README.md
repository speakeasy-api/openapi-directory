# TimelineWeatherAPISingleDateRequest

### Available Operations

* [GetVisualCrossingWebServicesRestServicesTimelineLocationStartdate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdate) - Historical and Forecast Weather API

## GetVisualCrossingWebServicesRestServicesTimelineLocationStartdate

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

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
    res, err := s.TimelineWeatherAPISingleDateRequest.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdate(ctx, operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest{
        ContentType: sdk.String("perferendis"),
        Include: sdk.String("ipsam"),
        Key: "repellendus",
        Lang: sdk.String("sapiente"),
        Location: "quo",
        Startdate: "odit",
        UnitGroup: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
