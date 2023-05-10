# potsHoldingsAndTransactions

## Overview

Pots allows a wealth manager to compartmentalise investments made by (or on behalf of) an investor to represent different savings goals, risk appetite and investment instructions (e.g. model portfolios). 
An Investor can have multiple pots for a financial product (e.g within the General Investment Account, one pot could be to target a house purchase goal whereas another pot could target savings for school fees etc.). Each pot consists of cash,  investment product holdings, both cash and investments or nothing (empty pot - pending investments). 
<!--Creating or updating a pot with a linked portfolio template - `portfolio_template_id`  will allow WealthOS to carry out actions such as automated investing based on portfolio, portfolio rebalancing etc. for a pot. 
-->
This end point also returns key information related to the pot (e.g. value, total holdings etc.) as well as transaction history for the pot.

### Current Holdings and Transaction History
#### Current Holding
* Cash : `investment_product_id` will be specified as `cash`. For cash holdings, `free_quantity` and `free_value` will return the cash that is settled and available, while `locked_quantity` and `locked_value`  returns the value of cash which is locked (i.e unsettled, ringfenced for a fee deduction etc.) and cannot be used.`total_quantity` and `total_value` will be the total of free and locked. 

* Investment Products : For investment product holdings,  `total_quantity`  return the total number of units held of an investment product within the pot, `locked-quantity` returns the total number of unit which are locked (e.g. ringfenced to be sold) and `free-quantity` returns number of units available for trading. Value of the holdings are calculated using latest available price. So the formula to calculate the value of the investment products holdings will be `quantity`*`price`.

#### Pending Transactions
* Cash : `type : pending`,`direction : in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet).

* Investment products : `type : pending`,`direction : in`(buy instruction) or `out` (sell instruction).

#### Archived Transactions (historical)

* Cash : `type = archived`, `direction= in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet) and `sub-type : "rejected" or "cancelled"`for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction.  

* Investment Products : `type = archived`, `direction= in` (buy instruction) or `out` (sell instruction) and `sub-type = "rejected"or "cancelled"` for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction. 


### Available Operations

* [updatePot](#updatepot) - Update existing Pot details
* [createPot](#createpot) - Create new pot
* [getPot](#getpot) - Retrive existing pot from pot id
* [getPotHoldings](#getpotholdings) - Get current holdings of a pot
* [getPotTransactions](#getpottransactions) - Get pending & past transactions of a pot
* [getPotValue](#getpotvalue) - Get current value of a pot
* [getPots](#getpots) - Get all pots for an investor
* [getTotalPotHoldings](#gettotalpotholdings) - Get total holdings of an Investor
* [getTotalPotValue](#gettotalpotvalue) - Get total value of all pots of an investor

## updatePot

Update an existing Pot. WealthOS will update only the fields sent in the payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePotUpdateRequestBodyForPot;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePotUpdateRequestBodyForPotStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePotRequest();
    $request->requestBody = new UpdatePotUpdateRequestBodyForPot();
    $request->requestBody->custodianAccountReference = 'ea';
    $request->requestBody->custodianClientRef = 'aliquid';
    $request->requestBody->custodianId = 'laborum';
    $request->requestBody->portfolioTemplateId = 'accusamus';
    $request->requestBody->potName = 'non';
    $request->requestBody->referenceVersion = 1;
    $request->requestBody->regulatorAdvisorId = 'occaecati';
    $request->requestBody->status = UpdatePotUpdateRequestBodyForPotStatusEnum::ACTIVE;
    $request->potId = 'accusamus';
    $request->xApiKey = 'delectus';

    $requestSecurity = new UpdatePotSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->updatePot($request, $requestSecurity);

    if ($response->updatePot200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPot

Create new pot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePotRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePotRequestBodyPotCurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePotRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePotRequest();
    $request->requestBody = new CreatePotRequestBodyInput();
    $request->requestBody->custodianAccountReference = 'quidem';
    $request->requestBody->custodianClientRef = 'provident';
    $request->requestBody->custodianId = 'nam';
    $request->requestBody->financialProductId = 'id';
    $request->requestBody->investorId = [
        'string',
        'string',
        'string',
    ];
    $request->requestBody->portfolioTemplateId = 'deleniti';
    $request->requestBody->potCurrency = CreatePotRequestBodyPotCurrencyEnum::USD;
    $request->requestBody->potName = 'amet';
    $request->requestBody->regulatorAdvisorId = 'deserunt';
    $request->requestBody->requestId = '66997074-ba44-469b-ae21-41959890afa5';
    $request->requestBody->status = CreatePotRequestBodyStatusEnum::ACTIVE;
    $request->xApiKey = 'dolor';

    $requestSecurity = new CreatePotSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->createPot($request, $requestSecurity);

    if ($response->createPot201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPot

Retrive existing pot from pot id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotRequest();
    $request->potId = 'necessitatibus';
    $request->xApiKey = 'odit';

    $requestSecurity = new GetPotSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getPot($request, $requestSecurity);

    if ($response->getPot200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPotHoldings

Get a breakdown of all the holdings of a pot (cash and investment product holdings)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotHoldingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotHoldingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotHoldingsRequest();
    $request->potId = 'nemo';
    $request->xApiKey = 'quasi';

    $requestSecurity = new GetPotHoldingsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getPotHoldings($request, $requestSecurity);

    if ($response->getPotHoldings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPotTransactions

Get a list of pending and archived transactions of the pot by date range. Only last 1000 records will be recieved if the result contain more that 1000 transactions. In that case, the pagination should be used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotTransactionsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPotTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotTransactionsRequest();
    $request->from = 'iure';
    $request->pageNumber = 'doloribus';
    $request->pageSize = 'debitis';
    $request->potId = 'eius';
    $request->sort = GetPotTransactionsSortEnum::DESC;
    $request->subTransactionType = 'deleniti';
    $request->to = 'facilis';
    $request->xApiKey = 'in';

    $requestSecurity = new GetPotTransactionsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getPotTransactions($request, $requestSecurity);

    if ($response->getPotTransactions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPotValue

Get the current value of the pot (including cash and investment product holdings)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotValueRequest();
    $request->potId = 'architecto';
    $request->xApiKey = 'architecto';

    $requestSecurity = new GetPotValueSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getPotValue($request, $requestSecurity);

    if ($response->getPotValue200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPots

Get all Investment Pots of the investor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotsRequest();
    $request->financialProductId = 'repudiandae';
    $request->investorId = 'ullam';
    $request->xApiKey = 'expedita';

    $requestSecurity = new GetPotsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getPots($request, $requestSecurity);

    if ($response->getPots200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotalPotHoldings

Get a breakdown of all the holdings(cash and investment product holdings) of an investor organised by the pot they belong to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalPotHoldingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalPotHoldingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotalPotHoldingsRequest();
    $request->investorId = 'nihil';
    $request->xApiKey = 'repellat';

    $requestSecurity = new GetTotalPotHoldingsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getTotalPotHoldings($request, $requestSecurity);

    if ($response->getTotalPotHoldings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotalPotValue

Get the current value of all the investor’s pots broken down by currency (including cash and investment product holdings)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalPotValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalPotValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotalPotValueRequest();
    $request->investorId = 'quibusdam';
    $request->xApiKey = 'sed';

    $requestSecurity = new GetTotalPotValueSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->potsHoldingsAndTransactions->getTotalPotValue($request, $requestSecurity);

    if ($response->getTotalPotValue200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
