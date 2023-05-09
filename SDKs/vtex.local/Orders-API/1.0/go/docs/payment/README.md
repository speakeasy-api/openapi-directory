# Payment

### Available Operations

* [GetPaymenttransaction](#getpaymenttransaction) - Retrieve payment transaction
* [SendPaymentNotification](#sendpaymentnotification) - Send payment notification

## GetPaymenttransaction

Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body. 

In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.

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
    res, err := s.Payment.GetPaymenttransaction(ctx, operations.GetPaymenttransactionRequest{
        Accept: "aliquid",
        ContentType: "dolorem",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymenttransaction != nil {
        // handle response
    }
}
```

## SendPaymentNotification

Send a payment notification of a given order, by order ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

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
    res, err := s.Payment.SendPaymentNotification(ctx, operations.SendPaymentNotificationRequest{
        Accept: "dolorem",
        ContentType: "dolor",
        OrderID: "1172452900788-01",
        PaymentID: "F5C1A4E20D3B4E07B7E871F5B5BC9F91",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
