# transactionFlow

## Overview

After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.

### Available Operations

* [cancelthetransaction](#cancelthetransaction) - Cancel the transaction
* [refundthetransaction](#refundthetransaction) - Refund the transaction
* [settlethetransaction](#settlethetransaction) - Settle the transaction

## cancelthetransaction

Cancel's transaction that was previously approved, but not settled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelthetransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelthetransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelthetransactionRequestMinicart;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelthetransactionRequest();
    $request->accept = 'application/json';
    $request->cancelthetransactionRequest = new CancelthetransactionRequest();
    $request->cancelthetransactionRequest->minicart = new CancelthetransactionRequestMinicart();
    $request->cancelthetransactionRequest->minicart->freight = 55714;
    $request->cancelthetransactionRequest->minicart->items = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->cancelthetransactionRequest->minicart->tax = 39187;
    $request->cancelthetransactionRequest->value = 441711;
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'ut';

    $response = $sdk->transactionFlow->cancelthetransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refundthetransaction

Refunds transaction's value that was previously settled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefundthetransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RefundthetransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RefundthetransactionRequestMinicart;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefundthetransactionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->refundthetransactionRequest = new RefundthetransactionRequest();
    $request->refundthetransactionRequest->minicart = new RefundthetransactionRequestMinicart();
    $request->refundthetransactionRequest->minicart->freight = 979587;
    $request->refundthetransactionRequest->minicart->items = [
        'corporis',
    ];
    $request->refundthetransactionRequest->minicart->tax = 296140;
    $request->refundthetransactionRequest->value = 480894;
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'dicta';

    $response = $sdk->transactionFlow->refundthetransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## settlethetransaction

Settles transaction's value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SettlethetransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettlethetransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SettlethetransactionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->settlethetransactionRequest = new SettlethetransactionRequest();
    $request->settlethetransactionRequest->value = 688661;
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->transactionId = 'enim';

    $response = $sdk->transactionFlow->settlethetransaction($request);

    if ($response->settleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
