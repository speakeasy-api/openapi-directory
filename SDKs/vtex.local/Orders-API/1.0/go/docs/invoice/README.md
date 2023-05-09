# Invoice

### Available Operations

* [InvoiceNotification](#invoicenotification) - Order invoice notification
* [UpdatepartialinvoiceSendTrackingNumber](#updatepartialinvoicesendtrackingnumber) - Update order's partial invoice (send tracking number)

## InvoiceNotification

Entering the [invoice in the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) is a required step for its [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#order-status-details) to change to Invoiced - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed. 

The total value of the order will be updated after the insertion of the invoice, even when there's a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. 

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided. 

When returning items, an input invoice must be sent through this call. For that, the `type` field should be filled in with `input`. 

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

For marketplace integrations: once the order is invoiced, the seller should use this request to send the invoice information to the marketplace. Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.  

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



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
    res, err := s.Invoice.InvoiceNotification(ctx, operations.InvoiceNotificationRequest{
        Accept: "maiores",
        ContentType: "molestiae",
        InvoiceNotificationRequest: shared.InvoiceNotificationRequest{
            Courier: sdk.String("quod"),
            DispatchedDate: sdk.String("quod"),
            EmbeddedInvoice: sdk.String("esse"),
            InvoiceKey: sdk.String("totam"),
            InvoiceNumber: "porro",
            InvoiceURL: sdk.String("dolorum"),
            InvoiceValue: "dicta",
            IssuanceDate: "2019-01-31T18:25:43-05:00",
            Items: []shared.Item1{
                shared.Item1{
                    Description: sdk.String("officia"),
                    ID: "928fc816-742c-4b73-9205-929396fea759",
                    Price: 437032,
                    Quantity: 902349,
                },
                shared.Item1{
                    Description: sdk.String("quidem"),
                    ID: "10faaa23-52c5-4955-907a-ff1a3a2fa946",
                    Price: 466311,
                    Quantity: 474697,
                },
                shared.Item1{
                    Description: sdk.String("velit"),
                    ID: "9251aa52-c3f5-4ad0-99da-1ffe78f097b0",
                    Price: 39187,
                    Quantity: 441711,
                },
            },
            TrackingNumber: sdk.String("ut"),
            TrackingURL: sdk.String("maiores"),
            Type: "dicta",
        },
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceNotification200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatepartialinvoiceSendTrackingNumber

Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).

After using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) API request to add tracking events.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

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
    res, err := s.Invoice.UpdatepartialinvoiceSendTrackingNumber(ctx, operations.UpdatepartialinvoiceSendTrackingNumberRequest{
        Accept: "corporis",
        ContentType: "dolore",
        UpdatepartialinvoiceSendTrackingNumberRequest: shared.UpdatepartialinvoiceSendTrackingNumberRequest{
            Courier: "iusto",
            DispatchedDate: "dicta",
            TrackingNumber: "harum",
            TrackingURL: "enim",
        },
        InvoiceNumber: "000030711",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatepartialinvoiceSendTrackingNumber != nil {
        // handle response
    }
}
```
