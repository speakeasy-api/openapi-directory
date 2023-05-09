# Invoice

### Available Operations

* [InvoiceNotification2](#invoicenotification2) - Order invoice notification

## InvoiceNotification2

Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

### Example Usage

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
            InvoiceKey: sdk.String("illum"),
            InvoiceNumber: "123456789",
            InvoiceURL: sdk.String("vel"),
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
            },
            TrackingNumber: sdk.String("deserunt"),
            TrackingURL: sdk.String("suscipit"),
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
