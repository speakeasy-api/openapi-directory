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
            RecurrenceID: "unde",
        },
        Headers: operations.AddrecurrenceitemHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
        Request: []shared.AddrecurrenceitemRequest{
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 715190,
                    Periodicity: "nulla",
                },
                Quantity: 602763,
                Seller: "vero",
                ShippingAddressID: "perspiciatis",
                Sku: "nulla",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 423655,
                    Periodicity: "fuga",
                },
                Quantity: 645894,
                Seller: "eum",
                ShippingAddressID: "iusto",
                Sku: "ullam",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 891773,
                    Periodicity: "inventore",
                },
                Quantity: 963663,
                Seller: "enim",
                ShippingAddressID: "eum",
                Sku: "voluptatum",
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