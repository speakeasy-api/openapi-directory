# notifications

### Available Operations

* [usagenotification](#usagenotification) - Usage notification

## usagenotification

Usage notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsagenotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsagenotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsagenotificationRequest();
    $request->accept = 'molestiae';
    $request->contentType = 'quod';
    $request->usagenotificationRequest = new UsagenotificationRequest();
    $request->usagenotificationRequest->accountId = 'quod';
    $request->usagenotificationRequest->calculatorIds = [
        'totam',
        'porro',
    ];
    $request->usagenotificationRequest->coupon = 'dolorum';
    $request->usagenotificationRequest->itemsCount = 118274;
    $request->usagenotificationRequest->orderId = 'nam';
    $request->usagenotificationRequest->profileId = 'officia';
    $request->usagenotificationRequest->used = false;

    $response = $sdk->notifications->usagenotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
