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
            AggregateHours: "ut",
            AllowAsynch: true,
            CollectStationContributions: false,
            ContentType: "sit",
            EndDateTime: "et",
            IncludeNormals: true,
            Key: "autem",
            Locations: "et",
            MaxDistance: "repudiandae",
            MaxStations: "debitis",
            ShortColumnNames: true,
            StartDateTime: "officia",
            UnitGroup: "quis",
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