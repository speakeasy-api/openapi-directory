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
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetrulesforapricetableRequest{
        PathParams: operations.GetrulesforapricetablePathParams{
            PriceTableID: "b2c",
        },
        Headers: operations.GetrulesforapricetableHeaders{
            Accept: "application/json",
            ContentType: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.PriceTables.Getrulesforapricetable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getrulesforapricetable200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->