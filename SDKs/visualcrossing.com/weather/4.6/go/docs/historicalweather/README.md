# HistoricalWeather

### Available Operations

* [GetVisualCrossingWebServicesRestServicesWeatherdataHistory](#getvisualcrossingwebservicesrestservicesweatherdatahistory) - Retrieves hourly or daily historical weather records.

## GetVisualCrossingWebServicesRestServicesWeatherdataHistory

The weather history data is suitable for retrieving hourly or daily historical weather records.

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
    res, err := s.HistoricalWeather.GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx, operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest{
        AggregateHours: sdk.String("error"),
        AllowAsynch: sdk.Bool(false),
        CollectStationContributions: sdk.Bool(false),
        ContentType: sdk.String("deserunt"),
        EndDateTime: sdk.String("suscipit"),
        IncludeNormals: sdk.Bool(false),
        Key: sdk.String("iure"),
        Locations: sdk.String("magnam"),
        MaxDistance: sdk.String("debitis"),
        MaxStations: sdk.String("ipsa"),
        ShortColumnNames: sdk.Bool(false),
        StartDateTime: sdk.String("delectus"),
        UnitGroup: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
