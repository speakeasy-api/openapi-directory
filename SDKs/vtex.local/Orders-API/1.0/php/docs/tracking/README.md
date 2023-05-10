# tracking

### Available Operations

* [updateTrackingStatus](#updatetrackingstatus) - Update order tracking status

## updateTrackingStatus

This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.

This request is not meant to send tracking number and URL to the invoice. If you wish to send tracking number and URL to an order, use the [Update order's partial invoice API request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). You can also learn more about [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios. 

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrackingStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrackingStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrackingStatusRequest();
    $request->accept = 'molestiae';
    $request->contentType = 'velit';
    $request->updateTrackingStatusRequest = new UpdateTrackingStatusRequest();
    $request->updateTrackingStatusRequest->deliveredDate = 'error';
    $request->updateTrackingStatusRequest->events = [
        new Event(),
    ];
    $request->updateTrackingStatusRequest->isDelivered = false;
    $request->invoiceNumber = '000030711';
    $request->orderId = '1172452900788-01';

    $response = $sdk->tracking->updateTrackingStatus($request);

    if ($response->updateTrackingStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
