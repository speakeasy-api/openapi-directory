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
        QueryParams: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams{
            AggregateHours: "unde",
            AllowAsynch: false,
            CollectStationContributions: false,
            ContentType: "deserunt",
            EndDateTime: "porro",
            IncludeNormals: false,
            Key: "nulla",
            Locations: "id",
            MaxDistance: "vero",
            MaxStations: "perspiciatis",
            ShortColumnNames: false,
            StartDateTime: "nulla",
            UnitGroup: "nihil",
        },
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