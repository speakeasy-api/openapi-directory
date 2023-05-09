# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Orders-API/1.0/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ChangeSeller.GetWindowToChangeSeller(ctx, operations.GetWindowToChangeSellerRequest{
        Accept: "corrupti",
        ContentType: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWindowToChangeSeller200TextPlainInteger != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ChangeSeller](docs/changeseller/README.md)

* [GetWindowToChangeSeller](docs/changeseller/README.md#getwindowtochangeseller) - Get window to change seller
* [UpdateWindowToChangeSeller](docs/changeseller/README.md#updatewindowtochangeseller) - Update window to change seller

### [Conversation](docs/conversation/README.md)

* [GetConversation](docs/conversation/README.md#getconversation) - Retrieve order conversation

### [ExportOrderReport](docs/exportorderreport/README.md)

* [StatusCompleted](docs/exportorderreport/README.md#statuscompleted) - Export order report with status 'Completed'
* [StatusInProgress](docs/exportorderreport/README.md#statusinprogress) - Export order report with status 'In Progress'

### [FeedV2Deprecated](docs/feedv2deprecated/README.md)

* [Getfeedorderstatus](docs/feedv2deprecated/README.md#getfeedorderstatus) - Get feed order status

### [FeedV3](docs/feedv3/README.md)

* [Commititemfeedorderstatus](docs/feedv3/README.md#commititemfeedorderstatus) - Commit feed items
* [FeedConfiguration](docs/feedv3/README.md#feedconfiguration) - Create or update feed configuration
* [FeedConfigurationDelete](docs/feedv3/README.md#feedconfigurationdelete) - Delete feed configuration
* [GetFeedConfiguration](docs/feedv3/README.md#getfeedconfiguration) - Get feed configuration
* [Getfeedorderstatus1](docs/feedv3/README.md#getfeedorderstatus1) - Retrieve feed items
* [TestJSONataExpression](docs/feedv3/README.md#testjsonataexpression) - Test JSONata expression

### [Invoice](docs/invoice/README.md)

* [InvoiceNotification](docs/invoice/README.md#invoicenotification) - Order invoice notification
* [UpdatepartialinvoiceSendTrackingNumber](docs/invoice/README.md#updatepartialinvoicesendtrackingnumber) - Update order's partial invoice (send tracking number)

### [OrderHook](docs/orderhook/README.md)

* [DeleteHookConfiguration](docs/orderhook/README.md#deletehookconfiguration) - Delete hook configuration
* [GetHookConfiguration](docs/orderhook/README.md#gethookconfiguration) - Get hook configuration
* [HookConfiguration](docs/orderhook/README.md#hookconfiguration) - Create or update hook configuration

### [Orders](docs/orders/README.md)

* [AddLog](docs/orders/README.md#addlog) - Add log in orders
* [CancelOrder](docs/orders/README.md#cancelorder) - Cancel order
* [GetOrder](docs/orders/README.md#getorder) - Get order
* [ListOrders](docs/orders/README.md#listorders) - List orders
* [RegisterChange](docs/orders/README.md#registerchange) - Register change on order
* [StartHandling](docs/orders/README.md#starthandling) - Start handling order

### [Payment](docs/payment/README.md)

* [GetPaymenttransaction](docs/payment/README.md#getpaymenttransaction) - Retrieve payment transaction
* [SendPaymentNotification](docs/payment/README.md#sendpaymentnotification) - Send payment notification

### [Tracking](docs/tracking/README.md)

* [UpdateTrackingStatus](docs/tracking/README.md#updatetrackingstatus) - Update order tracking status

### [UserOrders](docs/userorders/README.md)

* [Userorderdetails](docs/userorders/README.md#userorderdetails) - Retrieve user order details
* [Userorderslist](docs/userorders/README.md#userorderslist) - Retrieve user's orders
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
