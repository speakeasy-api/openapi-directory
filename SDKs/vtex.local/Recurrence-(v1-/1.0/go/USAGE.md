<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Miscellaneous.Addrecurrenceitem(ctx, operations.AddrecurrenceitemRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: []shared.AddrecurrenceitemRequest{
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 592845,
                    Periodicity: "distinctio",
                },
                Quantity: 844266,
                Seller: "unde",
                ShippingAddressID: "nulla",
                Sku: "corrupti",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 847252,
                    Periodicity: "vel",
                },
                Quantity: 623564,
                Seller: "deserunt",
                ShippingAddressID: "suscipit",
                Sku: "iure",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 297534,
                    Periodicity: "debitis",
                },
                Quantity: 56713,
                Seller: "delectus",
                ShippingAddressID: "tempora",
                Sku: "suscipit",
            },
        },
        RecurrenceID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->