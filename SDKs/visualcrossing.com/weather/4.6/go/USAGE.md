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