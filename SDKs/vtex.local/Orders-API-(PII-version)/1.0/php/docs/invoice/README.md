# invoice

### Available Operations

* [invoiceNotification2](#invoicenotification2) - Order invoice notification

## invoiceNotification2

Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

### Example Usage

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
    $request->invoiceNotificationRequest->invoiceKey = 'illum';
    $request->invoiceNotificationRequest->invoiceNumber = '123456789';
    $request->invoiceNotificationRequest->invoiceUrl = 'vel';
    $request->invoiceNotificationRequest->invoiceValue = '2499';
    $request->invoiceNotificationRequest->issuedDate = '2020-07-15';
    $request->invoiceNotificationRequest->items = [
        new Item1(),
        new Item1(),
        new Item1(),
    ];
    $request->invoiceNotificationRequest->trackingNumber = 'deserunt';
    $request->invoiceNotificationRequest->trackingUrl = 'suscipit';
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
