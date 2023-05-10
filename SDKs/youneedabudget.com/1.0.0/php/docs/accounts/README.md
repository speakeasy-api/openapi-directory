# accounts

## Overview

The accounts for a budget

### Available Operations

* [createAccount](#createaccount) - Create a new account
* [getAccountById](#getaccountbyid) - Single account
* [getAccounts](#getaccounts) - Account list

## createAccount

Creates a new account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostAccountWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveAccount;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountRequest();
    $request->postAccountWrapper = new PostAccountWrapper();
    $request->postAccountWrapper->account = new SaveAccount();
    $request->postAccountWrapper->account->balance = 423655;
    $request->postAccountWrapper->account->name = 'Doug Hoppe';
    $request->postAccountWrapper->account->type = AccountTypeEnum::MEDICAL_DEBT;
    $request->budgetId = 'ipsa';

    $response = $sdk->accounts->createAccount($request);

    if ($response->accountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountById

Returns a single account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountByIdRequest();
    $request->accountId = 'f467cc87-96ed-4151-a05d-fc2ddf7cc78c';
    $request->budgetId = 'dolorum';

    $response = $sdk->accounts->getAccountById($request);

    if ($response->accountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccounts

Returns all accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->budgetId = 'dicta';
    $request->lastKnowledgeOfServer = 720633;

    $response = $sdk->accounts->getAccounts($request);

    if ($response->accountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
