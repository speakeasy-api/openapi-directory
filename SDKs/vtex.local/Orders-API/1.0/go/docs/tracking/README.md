# Tracking

### Available Operations

* [UpdateTrackingStatus](#updatetrackingstatus) - Update order tracking status

## UpdateTrackingStatus

This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.

This request is not meant to send tracking number and URL to the invoice. If you wish to send tracking number and URL to an order, use the [Update order's partial invoice API request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). You can also learn more about [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios. 

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
    res, err := s.Tracking.UpdateTrackingStatus(ctx, operations.UpdateTrackingStatusRequest{
        Accept: "qui",
        ContentType: "ipsum",
        UpdateTrackingStatusRequest: shared.UpdateTrackingStatusRequest{
            DeliveredDate: "hic",
            Events: []shared.Event{
                shared.Event{
                    City: "Kleinmouth",
                    Date: "reiciendis",
                    Description: "amet",
                    State: "dolorum",
                },
                shared.Event{
                    City: "North Anderson",
                    Date: "ipsa",
                    Description: "iure",
                    State: "odio",
                },
                shared.Event{
                    City: "Fort Maurine",
                    Date: "voluptatibus",
                    Description: "voluptas",
                    State: "natus",
                },
            },
            IsDelivered: false,
        },
        InvoiceNumber: "000030711",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrackingStatus != nil {
        // handle response
    }
}
```
