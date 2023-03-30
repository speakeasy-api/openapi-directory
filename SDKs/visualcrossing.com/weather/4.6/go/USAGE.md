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