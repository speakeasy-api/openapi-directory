# investmentProductTransactions

## Overview

The Transactions endpoint allows you to buy or sell Investment Products. The endpoint supports single or bulk transactions. 

A transaction to buy or sell an investment product can be specified in units (i.e. buy/sell n number of units of the investment product) or as a value (i.e. buy/sell up to n value of the investment product).


### Available Operations

* [executeBuyTrasaction](#executebuytrasaction) - Execute Buy Transaction(s)
* [executeSellTrasaction](#executeselltrasaction) - Execute Sell Transaction(s)

## executeBuyTrasaction

Invoke execution of one or more buy transactions as defined in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBuyTrasactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBuyTrasactionBuyTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteBuyTrasactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteBuyTrasactionRequest();
    $request->requestBody = new ExecuteBuyTrasactionBuyTransactionRequest();
    $request->requestBody->investmentInstructions = [
        new ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell(),
        new ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell(),
        new ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell(),
    ];
    $request->requestBody->potId = 'beatae';
    $request->requestBody->requestId = '6742cb73-9205-4929-b96f-ea7596eb10fa';
    $request->xApiKey = 'mollitia';

    $requestSecurity = new ExecuteBuyTrasactionSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProductTransactions->executeBuyTrasaction($request, $requestSecurity);

    if ($response->executeBuyTrasaction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeSellTrasaction

Invoke execution of one or more Sell transactions as defined in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionSellTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionSellTransactionRequestInstructionBuySell;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSellTrasactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteSellTrasactionRequest();
    $request->requestBody = new ExecuteSellTrasactionSellTransactionRequest();
    $request->requestBody->potId = 'laborum';
    $request->requestBody->requestId = '2352c595-5907-4aff-9a3a-2fa946773925';
    $request->requestBody->sellInstructions = [
        new ExecuteSellTrasactionSellTransactionRequestInstructionBuySell(),
    ];
    $request->xApiKey = 'laborum';

    $requestSecurity = new ExecuteSellTrasactionSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investmentProductTransactions->executeSellTrasaction($request, $requestSecurity);

    if ($response->executeSellTrasaction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
