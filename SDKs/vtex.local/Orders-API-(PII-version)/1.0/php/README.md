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
use \OpenAPI\OpenAPI\Models\Operations\InvoiceNotification2Request;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceNotification2Request();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->invoiceNotificationRequest = new InvoiceNotificationRequest();
    $request->invoiceNotificationRequest->cfop = '6.104';
    $request->invoiceNotificationRequest->courier = 'corrupti';
    $request->invoiceNotificationRequest->extraValue = 100;
    $request->invoiceNotificationRequest->invoiceKey = 'provident';
    $request->invoiceNotificationRequest->invoiceNumber = '123456789';
    $request->invoiceNotificationRequest->invoiceUrl = 'distinctio';
    $request->invoiceNotificationRequest->invoiceValue = '2499';
    $request->invoiceNotificationRequest->issuedDate = '2020-07-15';
    $request->invoiceNotificationRequest->items = [
        new Item1(),
        new Item1(),
        new Item1(),
        new Item1(),
    ];
    $request->invoiceNotificationRequest->trackingNumber = 'unde';
    $request->invoiceNotificationRequest->trackingUrl = 'nulla';
    $request->invoiceNotificationRequest->type = 'Output';
    $request->invoiceNotificationRequest->volumes = 3;
    $request->orderId = '70caf3941s6df1';

    $response = $sdk->invoice->invoiceNotification2($request);

    if ($response->invoiceNotification2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [invoice](docs/invoice/README.md)

* [invoiceNotification2](docs/invoice/README.md#invoicenotification2) - Order invoice notification

### [orders](docs/orders/README.md)

* [cancelOrder2](docs/orders/README.md#cancelorder2) - Cancel order
* [getOrder2](docs/orders/README.md#getorder2) - Get order
* [listOrders2](docs/orders/README.md#listorders2) - List orders
* [startHandling2](docs/orders/README.md#starthandling2) - Start handling order

### [payment](docs/payment/README.md)

* [sendPaymentNotification2](docs/payment/README.md#sendpaymentnotification2) - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
