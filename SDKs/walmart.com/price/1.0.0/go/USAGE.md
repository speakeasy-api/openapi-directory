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

    req := operations.OptCapProgramInPriceRequest{
        Headers: operations.OptCapProgramInPriceHeaders{
            WmConsumerChannelType: "unde",
            WmQosCorrelationID: "deserunt",
            WmSecAccessToken: "porro",
            WmSvcName: "nulla",
        },
        Request: operations.OptCapProgramInPriceRequestBody{
            SubsidyEnrolled: false,
            SubsidyPreference: false,
        },
    }

    ctx := context.Background()
    res, err := s.Prices.OptCapProgramInPrice(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OptCapProgramInPrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->