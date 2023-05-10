# withdrawal

## Overview

The Withdrawal endpoint allows an investor to withdraw money from one of his/her pots.

### Available Operations

* [createWithdrawal](#createwithdrawal) - Create Withdrawal

## createWithdrawal

This endpoint supports the creation of a single withdrawal from an investor's pot. A sucessful withdrawal creation will result in the creation of a withdrawal transaction and updates to holdings. The system will return the `transaction_id`, `transaction_value`, `pot_id`, `sub_transaction_type` and `transaction_status` of the withdrawal transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWithdrawalRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWithdrawalRootTypeForWithdrawal;
use \OpenAPI\OpenAPI\Models\Operations\CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWithdrawalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWithdrawalRequest();
    $request->requestBody = new CreateWithdrawalRootTypeForWithdrawal();
    $request->requestBody->bankAccountId = 'ba-example-bank-account';
    $request->requestBody->currency = 'USD';
    $request->requestBody->potId = 'pt-example-house-pot';
    $request->requestBody->requestId = '89ebf737-ae42-403c-a5e6-a95d8a0d446c';
    $request->requestBody->subTransactionType = CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum::WITHDRAWAL;
    $request->requestBody->transactionValue = '123.45';
    $request->xApiKey = 'officiis';

    $requestSecurity = new CreateWithdrawalSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->withdrawal->createWithdrawal($request, $requestSecurity);

    if ($response->rootTypeForWithdrawalCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
