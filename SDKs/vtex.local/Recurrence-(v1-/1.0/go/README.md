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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddrecurrenceitemRequest{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Miscellaneous

* `Addrecurrenceitem` - Add Subscription item
* `GetRecurrencebyemail` - Get Subscriptions
* `GetRecurrencebyrecurrenceID` - Get Subscription by recurrenceId
* `Getpaymentaccounts` - Get payment accounts
* `Getrecurrenceaddresses` - Get Subscription addresses
* `Getrecurrencesettings` - Get Subscription settings
* `Getselfrecurrence` - Get self Subscription
* `Reindexrecurrence` - Reindex Subscription
* `Updatepartialrecurrence` - Update partial Subscription
* `Updaterecurrence` - Update Subscription
* `Updaterecurrencesettings` - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
