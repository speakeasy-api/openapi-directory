# transactions

## Overview

The transactions for a budget

### Available Operations

* [createTransaction](#createtransaction) - Create a single transaction or multiple transactions
* [deleteTransaction](#deletetransaction) - Deletes an existing transaction
* [getTransactionById](#gettransactionbyid) - Single transaction
* [getTransactions](#gettransactions) - List transactions
* [getTransactionsByAccount](#gettransactionsbyaccount) - List account transactions
* [getTransactionsByCategory](#gettransactionsbycategory) - List category transactions
* [getTransactionsByPayee](#gettransactionsbypayee) - List payee transactions
* [importTransactions](#importtransactions) - Import transactions
* [updateTransaction](#updatetransaction) - Updates an existing transaction
* [updateTransactions](#updatetransactions) - Update multiple transactions

## createTransaction

Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostTransactionsWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransaction;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionClearedEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionFlagColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveSubTransaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTransactionRequest();
    $request->postTransactionsWrapper = new PostTransactionsWrapper();
    $request->postTransactionsWrapper->transaction = new SaveTransaction();
    $request->postTransactionsWrapper->transaction->accountId = '0faaa235-2c59-4559-87af-f1a3a2fa9467';
    $request->postTransactionsWrapper->transaction->amount = 474697;
    $request->postTransactionsWrapper->transaction->approved = false;
    $request->postTransactionsWrapper->transaction->categoryId = '39251aa5-2c3f-45ad-819d-a1ffe78f097b';
    $request->postTransactionsWrapper->transaction->cleared = SaveTransactionClearedEnum::CLEARED;
    $request->postTransactionsWrapper->transaction->date = DateTime::createFromFormat('Y-m-d', '2022-07-23');
    $request->postTransactionsWrapper->transaction->flagColor = SaveTransactionFlagColorEnum::ORANGE;
    $request->postTransactionsWrapper->transaction->importId = 'maiores';
    $request->postTransactionsWrapper->transaction->memo = 'dicta';
    $request->postTransactionsWrapper->transaction->payeeId = '5471b5e6-e13b-499d-888e-1e91e450ad2a';
    $request->postTransactionsWrapper->transaction->payeeName = 'distinctio';
    $request->postTransactionsWrapper->transaction->subtransactions = [
        new SaveSubTransaction(),
        new SaveSubTransaction(),
        new SaveSubTransaction(),
        new SaveSubTransaction(),
    ];
    $request->postTransactionsWrapper->transactions = [
        new SaveTransaction(),
        new SaveTransaction(),
    ];
    $request->budgetId = 'modi';

    $response = $sdk->transactions->createTransaction($request);

    if ($response->saveTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTransaction

Deletes a transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionRequest();
    $request->budgetId = 'qui';
    $request->transactionId = 'aliquid';

    $response = $sdk->transactions->deleteTransaction($request);

    if ($response->transactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionById

Returns a single transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionByIdRequest();
    $request->budgetId = 'cupiditate';
    $request->transactionId = 'quos';

    $response = $sdk->transactions->getTransactionById($request);

    if ($response->transactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactions

Returns budget transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->budgetId = 'perferendis';
    $request->lastKnowledgeOfServer = 164940;
    $request->sinceDate = DateTime::createFromFormat('Y-m-d', '2021-11-22');
    $request->type = GetTransactionsTypeEnum::UNCATEGORIZED;

    $response = $sdk->transactions->getTransactions($request);

    if ($response->transactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsByAccount

Returns all transactions for a specified account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByAccountRequest();
    $request->accountId = 'fugit';
    $request->budgetId = 'dolorum';
    $request->lastKnowledgeOfServer = 569618;
    $request->sinceDate = DateTime::createFromFormat('Y-m-d', '2022-04-19');
    $request->type = GetTransactionsByAccountTypeEnum::UNAPPROVED;

    $response = $sdk->transactions->getTransactionsByAccount($request);

    if ($response->transactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsByCategory

Returns all transactions for a specified category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByCategoryTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByCategoryRequest();
    $request->budgetId = 'labore';
    $request->categoryId = 'delectus';
    $request->lastKnowledgeOfServer = 433288;
    $request->sinceDate = DateTime::createFromFormat('Y-m-d', '2022-03-31');
    $request->type = GetTransactionsByCategoryTypeEnum::UNAPPROVED;

    $response = $sdk->transactions->getTransactionsByCategory($request);

    if ($response->hybridTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsByPayee

Returns all transactions for a specified payee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByPayeeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByPayeeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByPayeeRequest();
    $request->budgetId = 'aliquid';
    $request->lastKnowledgeOfServer = 592042;
    $request->payeeId = 'necessitatibus';
    $request->sinceDate = DateTime::createFromFormat('Y-m-d', '2021-09-21');
    $request->type = GetTransactionsByPayeeTypeEnum::UNCATEGORIZED;

    $response = $sdk->transactions->getTransactionsByPayee($request);

    if ($response->hybridTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importTransactions

Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportTransactionsRequest();
    $request->budgetId = 'debitis';

    $response = $sdk->transactions->importTransactions($request);

    if ($response->transactionsImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTransaction

Updates a single transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutTransactionWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransaction;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionClearedEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionFlagColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveSubTransaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTransactionRequest();
    $request->putTransactionWrapper = new PutTransactionWrapper();
    $request->putTransactionWrapper->transaction = new SaveTransaction();
    $request->putTransactionWrapper->transaction->accountId = 'fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66';
    $request->putTransactionWrapper->transaction->amount = 618809;
    $request->putTransactionWrapper->transaction->approved = false;
    $request->putTransactionWrapper->transaction->categoryId = '97074ba4-469b-46e2-9419-59890afa563e';
    $request->putTransactionWrapper->transaction->cleared = SaveTransactionClearedEnum::CLEARED;
    $request->putTransactionWrapper->transaction->date = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->putTransactionWrapper->transaction->flagColor = SaveTransactionFlagColorEnum::GREEN;
    $request->putTransactionWrapper->transaction->importId = 'doloribus';
    $request->putTransactionWrapper->transaction->memo = 'debitis';
    $request->putTransactionWrapper->transaction->payeeId = '4c8b711e-5b7f-4d2e-9028-921cddc69260';
    $request->putTransactionWrapper->transaction->payeeName = 'ab';
    $request->putTransactionWrapper->transaction->subtransactions = [
        new SaveSubTransaction(),
        new SaveSubTransaction(),
        new SaveSubTransaction(),
        new SaveSubTransaction(),
    ];
    $request->budgetId = 'quidem';
    $request->transactionId = 'ipsam';

    $response = $sdk->transactions->updateTransaction($request);

    if ($response->transactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTransactions

Updates multiple transactions, by `id` or `import_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchTransactionsWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionWithId;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionWithIdClearedEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveTransactionWithIdFlagColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveSubTransaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTransactionsRequest();
    $request->patchTransactionsWrapper = new PatchTransactionsWrapper();
    $request->patchTransactionsWrapper->transactions = [
        new SaveTransactionWithId(),
        new SaveTransactionWithId(),
    ];
    $request->budgetId = 'autem';

    $response = $sdk->transactions->updateTransactions($request);

    if ($response->saveTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
