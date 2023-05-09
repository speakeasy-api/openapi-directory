# TimelineWeatherAPI15DayForecastRequest

### Available Operations

* [GetVisualCrossingWebServicesRestServicesTimelineLocation](#getvisualcrossingwebservicesrestservicestimelinelocation) - Historical and Forecast Weather API

## GetVisualCrossingWebServicesRestServicesTimelineLocation

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
    res, err := s.TimelineWeatherAPI15DayForecastRequest.GetVisualCrossingWebServicesRestServicesTimelineLocation(ctx, operations.GetVisualCrossingWebServicesRestServicesTimelineLocationRequest{
        ContentType: sdk.String("suscipit"),
        Include: sdk.String("molestiae"),
        Key: "minus",
        Lang: sdk.String("placeat"),
        Location: "voluptatum",
        UnitGroup: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
