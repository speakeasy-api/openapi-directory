# bankAccounts

## Overview

The Bank Account endpoint allows a wealth manager to create, update and retrieve the bank account details of an investor. An investor can have one or more bank accounts within the system and a default bank account should always be configured. 

Every bank account has an account status that represents the `active` or `inactive` status of an account. Only `active` bank accounts can be used for any transactions in the system.

### Available Operations

* [updateBankAccount](#updatebankaccount) - Update existing bank account details
* [createBankAccount](#createbankaccount) - Create new bank account
* [getAllBankAccounts](#getallbankaccounts) - Retrieve all the bank accounts of a particular investor
* [getBankAccount](#getbankaccount) - Retrieve existing bank account from bank account id

## updateBankAccount

Update an existing Bank Account. WealthOS will update only the fields sent in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccount;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBankAccountRequest();
    $request->requestBody = new UpdateBankAccountUpdateRequestBodyForBankAccount();
    $request->requestBody->accountName = 'nulla';
    $request->requestBody->accountStatus = UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum::INACTIVE;
    $request->requestBody->defaultAccount = UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum::NO;
    $request->requestBody->referenceVersion = 1;
    $request->bankAccountId = 'vel';
    $request->xApiKey = 'error';

    $requestSecurity = new UpdateBankAccountSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccounts->updateBankAccount($request, $requestSecurity);

    if ($response->updateBankAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBankAccount

Create new bank account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankAccountRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankAccountRequestBodyAccountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankAccountRequestBodyDefaultAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBankAccountRequest();
    $request->requestBody = new CreateBankAccountRequestBodyInput();
    $request->requestBody->accountName = 'deserunt';
    $request->requestBody->accountStatus = CreateBankAccountRequestBodyAccountStatusEnum::ACTIVE;
    $request->requestBody->bankAccountNumber = 'iure';
    $request->requestBody->buildingSocietyRollNumber = 'magnam';
    $request->requestBody->defaultAccount = CreateBankAccountRequestBodyDefaultAccountEnum::NO;
    $request->requestBody->investorId = 'ipsa';
    $request->requestBody->sortCode = 'delectus';
    $request->xApiKey = 'tempora';

    $requestSecurity = new CreateBankAccountSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccounts->createBankAccount($request, $requestSecurity);

    if ($response->createBankAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllBankAccounts

Retrieve all the bank accounts of a particular investor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllBankAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllBankAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllBankAccountsRequest();
    $request->investorId = 'suscipit';
    $request->xApiKey = 'molestiae';

    $requestSecurity = new GetAllBankAccountsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccounts->getAllBankAccounts($request, $requestSecurity);

    if ($response->getAllBankAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBankAccount

Retrieve existing bank account from bank account id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBankAccountRequest();
    $request->bankAccountId = 'minus';
    $request->xApiKey = 'placeat';

    $requestSecurity = new GetBankAccountSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccounts->getBankAccount($request, $requestSecurity);

    if ($response->getBankAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
