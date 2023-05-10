# switchInstruction

## Overview

The Switch Instruction endpoints allow you to switch existing holdings (cash and investment products) to a new set of investment products via a single instruction. You can specify the holdings you want to sell along with a `mode` and `value` (e.g. number of units to be sold, total value of holding to be sold or % of holding to be sold) and the investment products you want to buy (using the proceeds of the sales and and/or free cash available in the pot). The buy instructions can also be specified with a `mode` and `value` (e.g. number of units to buy, total value of holding to be bought or % of proceeds to be used to buy specific investment product). 

You can view the status of your switch instruction at any point through the API (both the overall 'parent' switch instruction as well as the individual 'child' buy/sell transactions).

### Available Operations

* [executeSwitchTrasaction](#executeswitchtrasaction) - Execute Switch Instruction
* [getSwitch](#getswitch) - Retrieve Switch instruction from Switch ID

## executeSwitchTrasaction

Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSwitchTrasactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSwitchTrasactionSwitchInstructionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSwitchTrasactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteSwitchTrasactionRequest();
    $request->requestBody = new ExecuteSwitchTrasactionSwitchInstructionRequest();
    $request->requestBody->buyInstructions = [
        new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest(),
        new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest(),
        new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest(),
        new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest(),
    ];
    $request->requestBody->potId = 'quaerat';
    $request->requestBody->requestId = '8633323f-9b77-4f3a-8100-674ebf69280d';
    $request->requestBody->sellInstructions = [
        new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest(),
    ];
    $request->xApiKey = 'soluta';

    $requestSecurity = new ExecuteSwitchTrasactionSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->switchInstruction->executeSwitchTrasaction($request, $requestSecurity);

    if ($response->executeSwitchTrasaction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwitch

Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSwitchRequest();
    $request->includeDetails = false;
    $request->switchTransactionId = 'dolorum';
    $request->xApiKey = 'iusto';

    $requestSecurity = new GetSwitchSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->switchInstruction->getSwitch($request, $requestSecurity);

    if ($response->getSwitch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
