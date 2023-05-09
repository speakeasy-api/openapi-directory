# TimelineWeatherAPIDateRangeRequest

### Available Operations

* [GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdateenddate) - Historical and Forecast Weather API

## GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate

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
    res, err := s.TimelineWeatherAPIDateRangeRequest.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate(ctx, operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest{
        ContentType: sdk.String("excepturi"),
        Enddate: "nisi",
        Include: sdk.String("recusandae"),
        Key: "temporibus",
        Lang: sdk.String("ab"),
        Location: "quis",
        Startdate: "veritatis",
        UnitGroup: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
