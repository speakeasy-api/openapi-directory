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
            AggregateHours: "suscipit",
            AllowAsynch: false,
            CollectStationContributions: false,
            ContentType: "ut",
            EndDateTime: "non",
            IncludeNormals: false,
            Key: "nam",
            Locations: "cum",
            MaxDistance: "error",
            MaxStations: "quia",
            ShortColumnNames: false,
            StartDateTime: "natus",
            UnitGroup: "nisi",
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