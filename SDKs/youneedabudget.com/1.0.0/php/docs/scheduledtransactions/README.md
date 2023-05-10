# scheduledTransactions

## Overview

The scheduled transactions for a budget

### Available Operations

* [getScheduledTransactionById](#getscheduledtransactionbyid) - Single scheduled transaction
* [getScheduledTransactions](#getscheduledtransactions) - List scheduled transactions

## getScheduledTransactionById

Returns a single scheduled transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduledTransactionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduledTransactionByIdRequest();
    $request->budgetId = 'iure';
    $request->scheduledTransactionId = 'saepe';

    $response = $sdk->scheduledTransactions->getScheduledTransactionById($request);

    if ($response->scheduledTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScheduledTransactions

Returns all scheduled transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduledTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduledTransactionsRequest();
    $request->budgetId = 'quidem';
    $request->lastKnowledgeOfServer = 99280;

    $response = $sdk->scheduledTransactions->getScheduledTransactions($request);

    if ($response->scheduledTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
