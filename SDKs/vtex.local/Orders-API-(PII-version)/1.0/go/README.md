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
    res, err := s.Invoice.InvoiceNotification2(ctx, operations.InvoiceNotification2Request{
        Accept: "application/json",
        ContentType: "application/json",
        InvoiceNotificationRequest: shared.InvoiceNotificationRequest{
            Cfop: sdk.String("6.104"),
            Courier: sdk.String("corrupti"),
            ExtraValue: sdk.Int64(100),
            InvoiceKey: sdk.String("provident"),
            InvoiceNumber: "123456789",
            InvoiceURL: sdk.String("distinctio"),
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
            TrackingNumber: sdk.String("unde"),
            TrackingURL: sdk.String("nulla"),
            Type: "Output",
            Volumes: sdk.Int64(3),
        },
        OrderID: "70caf3941s6df1",
    })
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


### [Invoice](docs/invoice/README.md)

* [InvoiceNotification2](docs/invoice/README.md#invoicenotification2) - Order invoice notification

### [Orders](docs/orders/README.md)

* [CancelOrder2](docs/orders/README.md#cancelorder2) - Cancel order
* [GetOrder2](docs/orders/README.md#getorder2) - Get order
* [ListOrders2](docs/orders/README.md#listorders2) - List orders
* [StartHandling2](docs/orders/README.md#starthandling2) - Start handling order

### [Payment](docs/payment/README.md)

* [SendPaymentNotification2](docs/payment/README.md#sendpaymentnotification2) - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
