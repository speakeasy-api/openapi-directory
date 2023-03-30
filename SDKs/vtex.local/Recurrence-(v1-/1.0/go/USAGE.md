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

    req := operations.AddrecurrenceitemRequest{
        PathParams: operations.AddrecurrenceitemPathParams{
            RecurrenceID: "corrupti",
        },
        Headers: operations.AddrecurrenceitemHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
        Request: []shared.AddrecurrenceitemRequest{
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 715190,
                    Periodicity: "quibusdam",
                },
                Quantity: 602763,
                Seller: "nulla",
                ShippingAddressID: "corrupti",
                Sku: "illum",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 423655,
                    Periodicity: "error",
                },
                Quantity: 645894,
                Seller: "suscipit",
                ShippingAddressID: "iure",
                Sku: "magnam",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 891773,
                    Periodicity: "ipsa",
                },
                Quantity: 963663,
                Seller: "tempora",
                ShippingAddressID: "suscipit",
                Sku: "molestiae",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Miscellaneous.Addrecurrenceitem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->