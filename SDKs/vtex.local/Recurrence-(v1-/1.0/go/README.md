# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Recurrence-(v1-/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Miscellaneous](docs/miscellaneous/README.md)

* [Addrecurrenceitem](docs/miscellaneous/README.md#addrecurrenceitem) - Add Subscription item
* [GetRecurrencebyemail](docs/miscellaneous/README.md#getrecurrencebyemail) - Get Subscriptions
* [GetRecurrencebyrecurrenceID](docs/miscellaneous/README.md#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [Getpaymentaccounts](docs/miscellaneous/README.md#getpaymentaccounts) - Get payment accounts
* [Getrecurrenceaddresses](docs/miscellaneous/README.md#getrecurrenceaddresses) - Get Subscription addresses
* [Getrecurrencesettings](docs/miscellaneous/README.md#getrecurrencesettings) - Get Subscription settings
* [Getselfrecurrence](docs/miscellaneous/README.md#getselfrecurrence) - Get self Subscription
* [Reindexrecurrence](docs/miscellaneous/README.md#reindexrecurrence) - Reindex Subscription
* [Updatepartialrecurrence](docs/miscellaneous/README.md#updatepartialrecurrence) - Update partial Subscription
* [Updaterecurrence](docs/miscellaneous/README.md#updaterecurrence) - Update Subscription
* [Updaterecurrencesettings](docs/miscellaneous/README.md#updaterecurrencesettings) - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
