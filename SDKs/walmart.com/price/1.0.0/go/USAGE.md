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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicScheme: shared.SchemeBasicScheme{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.OptCapProgramInPriceRequest{
        Headers: operations.OptCapProgramInPriceHeaders{
            Authorization: "unde",
            WmConsumerChannelType: "deserunt",
            WmQosCorrelationID: "porro",
            WmSecAccessToken: "nulla",
            WmSvcName: "id",
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