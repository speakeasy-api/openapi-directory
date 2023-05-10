# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWindowToChangeSellerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWindowToChangeSellerRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';

    $response = $sdk->changeSeller->getWindowToChangeSeller($request);

    if ($response->getWindowToChangeSeller200TextPlainInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [changeSeller](docs/changeseller/README.md)

* [getWindowToChangeSeller](docs/changeseller/README.md#getwindowtochangeseller) - Get window to change seller
* [updateWindowToChangeSeller](docs/changeseller/README.md#updatewindowtochangeseller) - Update window to change seller

### [conversation](docs/conversation/README.md)

* [getConversation](docs/conversation/README.md#getconversation) - Retrieve order conversation

### [exportOrderReport](docs/exportorderreport/README.md)

* [statusCompleted](docs/exportorderreport/README.md#statuscompleted) - Export order report with status 'Completed'
* [statusInProgress](docs/exportorderreport/README.md#statusinprogress) - Export order report with status 'In Progress'

### [feedV2Deprecated](docs/feedv2deprecated/README.md)

* [getfeedorderstatus](docs/feedv2deprecated/README.md#getfeedorderstatus) - Get feed order status

### [feedV3](docs/feedv3/README.md)

* [commititemfeedorderstatus](docs/feedv3/README.md#commititemfeedorderstatus) - Commit feed items
* [feedConfiguration](docs/feedv3/README.md#feedconfiguration) - Create or update feed configuration
* [feedConfigurationDelete](docs/feedv3/README.md#feedconfigurationdelete) - Delete feed configuration
* [getFeedConfiguration](docs/feedv3/README.md#getfeedconfiguration) - Get feed configuration
* [getfeedorderstatus1](docs/feedv3/README.md#getfeedorderstatus1) - Retrieve feed items
* [testJSONataExpression](docs/feedv3/README.md#testjsonataexpression) - Test JSONata expression

### [invoice](docs/invoice/README.md)

* [invoiceNotification](docs/invoice/README.md#invoicenotification) - Order invoice notification
* [updatepartialinvoiceSendTrackingNumber](docs/invoice/README.md#updatepartialinvoicesendtrackingnumber) - Update order's partial invoice (send tracking number)

### [orderHook](docs/orderhook/README.md)

* [deleteHookConfiguration](docs/orderhook/README.md#deletehookconfiguration) - Delete hook configuration
* [getHookConfiguration](docs/orderhook/README.md#gethookconfiguration) - Get hook configuration
* [hookConfiguration](docs/orderhook/README.md#hookconfiguration) - Create or update hook configuration

### [orders](docs/orders/README.md)

* [addLog](docs/orders/README.md#addlog) - Add log in orders
* [cancelOrder](docs/orders/README.md#cancelorder) - Cancel order
* [getOrder](docs/orders/README.md#getorder) - Get order
* [listOrders](docs/orders/README.md#listorders) - List orders
* [registerChange](docs/orders/README.md#registerchange) - Register change on order
* [startHandling](docs/orders/README.md#starthandling) - Start handling order

### [payment](docs/payment/README.md)

* [getPaymenttransaction](docs/payment/README.md#getpaymenttransaction) - Retrieve payment transaction
* [sendPaymentNotification](docs/payment/README.md#sendpaymentnotification) - Send payment notification

### [tracking](docs/tracking/README.md)

* [updateTrackingStatus](docs/tracking/README.md#updatetrackingstatus) - Update order tracking status

### [userOrders](docs/userorders/README.md)

* [userorderdetails](docs/userorders/README.md#userorderdetails) - Retrieve user order details
* [userorderslist](docs/userorders/README.md#userorderslist) - Retrieve user's orders
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
