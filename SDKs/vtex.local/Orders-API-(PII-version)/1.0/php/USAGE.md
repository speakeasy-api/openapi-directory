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