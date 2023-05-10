# payment

### Available Operations

* [sendPaymentNotification2](#sendpaymentnotification2) - Send payment notification

## sendPaymentNotification2

Send a payment notification of a given order, by order ID and payment ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).


## Request body properties

| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `orderId` | string | Order Id |
| `paymentId` | string | Payment ID |

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendPaymentNotification2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendPaymentNotification2Request();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->orderId = '70caf3941s6df1';
    $request->paymentId = '45hsfg5jkyu1384jdsfgh654sfgj1';

    $response = $sdk->payment->sendPaymentNotification2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
