<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest{
        QueryParams: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams{
            AggregateHours: "sit",
            AllowAsynch: false,
            CollectStationContributions: true,
            ContentType: "expedita",
            EndDateTime: "consequuntur",
            IncludeNormals: false,
            Key: "expedita",
            Locations: "voluptas",
            MaxDistance: "fugit",
            MaxStations: "et",
            ShortColumnNames: true,
            StartDateTime: "rerum",
            UnitGroup: "dicta",
        },
    }
    
    res, err := s.HistoricalWeather.GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->