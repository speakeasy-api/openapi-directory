# Payment

### Available Operations

* [SendPaymentNotification2](#sendpaymentnotification2) - Send payment notification

## SendPaymentNotification2

Send a payment notification of a given order, by order ID and payment ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).


## Request body properties

| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `orderId` | string | Order Id |
| `paymentId` | string | Payment ID |

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.SendPaymentNotification2(ctx, operations.SendPaymentNotification2Request{
        Accept: "application/json",
        ContentType: "application/json",
        OrderID: "70caf3941s6df1",
        PaymentID: "45hsfg5jkyu1384jdsfgh654sfgj1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
