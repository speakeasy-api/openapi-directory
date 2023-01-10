<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BasicScheme: shared.SchemeBasicScheme{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.OptCapProgramInPriceRequest{
        Headers: operations.OptCapProgramInPriceHeaders{
            Authorization: "harum",
            WMCONSUMERCHANNELTYPE: "ad",
            WMQOSCORRELATIONID: "aut",
            WMSECACCESSTOKEN: "ut",
            WMSVCNAME: "eius",
        },
        Request: operations.OptCapProgramInPriceRequestBody{
            SubsidyEnrolled: true,
            SubsidyPreference: false,
        },
    }
    
    res, err := s.Prices.OptCapProgramInPrice(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OptCapProgramInPrice200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->