# fees

## Overview

<!-- <div class="warning" style='padding:0.1em; background-color:#FEEFB3; color:#9F6000;'>
    <span>
        <p style='margin-top:0.9em;margin-bottom:0.9em;margin-left:1em; text-align:left'>
            <b>ⓘ</b> This feature is currently in BETA mode
        </p>
    </span>
</div>

The Fees endpoints allow a wealth manager to manage fees in terms of creating and charging an external fee or retrieving information on fee configurations setup in the system for recurring fee computations. -->

The Fees endpoint allows a wealth manager to charge an externally calculated or derived fee from an investor's pot.

### Available Operations

* [createFee](#createfee) - Create Fee

## createFee

This endpoint supports the creation of a single fee deduction from an investor's pot. A sucessful fee creation will result in the creation of a fee transaction and updates to holdings. The system will return the `transaction_id` of the fee transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeeRootTypeForFee;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeeRootTypeForFeeSubTransactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFeeRequest();
    $request->requestBody = new CreateFeeRootTypeForFee();
    $request->requestBody->currency = 'USD';
    $request->requestBody->potId = 'pt-example-house-pot';
    $request->requestBody->requestId = '8796ed15-1a05-4dfc-addf-7cc78ca1ba92';
    $request->requestBody->subTransactionType = CreateFeeRootTypeForFeeSubTransactionTypeEnum::CUSTODY_FEES;
    $request->requestBody->transactionValue = '123.45';
    $request->xApiKey = 'deleniti';

    $requestSecurity = new CreateFeeSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->fees->createFee($request, $requestSecurity);

    if ($response->rootTypeForFeeCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
