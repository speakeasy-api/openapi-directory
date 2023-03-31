# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Orders-API-(PII-version)/1.0/go
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

    req := operations.InvoiceNotification2Request{
        Accept: "application/json",
        ContentType: "application/json",
        InvoiceNotificationRequest: shared.InvoiceNotificationRequest{
            Cfop: "6.104",
            Courier: "corrupti",
            ExtraValue: 100,
            InvoiceKey: "provident",
            InvoiceNumber: "123456789",
            InvoiceURL: "distinctio",
            InvoiceValue: "2499",
            IssuedDate: "2020-07-15",
            Items: []shared.Item1{
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
            },
            TrackingNumber: "unde",
            TrackingURL: "nulla",
            Type: "Output",
            Volumes: 3,
        },
        OrderID: "70caf3941s6df1",
    }

    ctx := context.Background()
    res, err := s.Invoice.InvoiceNotification2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceNotification2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Invoice

* `InvoiceNotification2` - Order invoice notification

### Orders

* `CancelOrder2` - Cancel order
* `GetOrder2` - Get order
* `ListOrders2` - List orders
* `StartHandling2` - Start handling order

### Payment

* `SendPaymentNotification2` - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
