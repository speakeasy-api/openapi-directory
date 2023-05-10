# deprecated

### Available Operations

* [bulkCreateTransactions](#bulkcreatetransactions) - Bulk create transactions

## bulkCreateTransactions

Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BulkTransactions;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransaction;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionClearedEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionFlagColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveSubTransaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCreateTransactionsRequest();
    $request->bulkTransactions = new BulkTransactions();
    $request->bulkTransactions->transactions = [
        new SaveTransaction(),
        new SaveTransaction(),
        new SaveTransaction(),
    ];
    $request->budgetId = 'aspernatur';

    $response = $sdk->deprecated->bulkCreateTransactions($request);

    if ($response->bulkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
