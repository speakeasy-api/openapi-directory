# payment

### Available Operations

* [getPaymenttransaction](#getpaymenttransaction) - Retrieve payment transaction
* [sendPaymentNotification](#sendpaymentnotification) - Send payment notification

## getPaymenttransaction

Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body. 

In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymenttransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymenttransactionRequest();
    $request->accept = 'occaecati';
    $request->contentType = 'numquam';
    $request->orderId = '1172452900788-01';

    $response = $sdk->payment->getPaymenttransaction($request);

    if ($response->getPaymenttransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendPaymentNotification

Send a payment notification of a given order, by order ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendPaymentNotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendPaymentNotificationRequest();
    $request->accept = 'commodi';
    $request->contentType = 'quam';
    $request->orderId = '1172452900788-01';
    $request->paymentId = 'F5C1A4E20D3B4E07B7E871F5B5BC9F91';

    $response = $sdk->payment->sendPaymentNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
