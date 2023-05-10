# months

## Overview

Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.

### Available Operations

* [getBudgetMonth](#getbudgetmonth) - Single budget month
* [getBudgetMonths](#getbudgetmonths) - List budget months

## getBudgetMonth

Returns a single budget month

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBudgetMonthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBudgetMonthRequest();
    $request->budgetId = 'perferendis';
    $request->month = DateTime::createFromFormat('Y-m-d', '2022-05-20');

    $response = $sdk->months->getBudgetMonth($request);

    if ($response->monthDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBudgetMonths

Returns all budget months

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBudgetMonthsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBudgetMonthsRequest();
    $request->budgetId = 'sed';
    $request->lastKnowledgeOfServer = 612096;

    $response = $sdk->months->getBudgetMonths($request);

    if ($response->monthSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
