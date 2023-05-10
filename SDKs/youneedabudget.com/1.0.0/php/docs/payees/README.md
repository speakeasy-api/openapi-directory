# payees

## Overview

The payees for a budget

### Available Operations

* [getPayeeById](#getpayeebyid) - Single payee
* [getPayees](#getpayees) - List payees

## getPayeeById

Returns a single payee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeByIdRequest();
    $request->budgetId = 'fuga';
    $request->payeeId = 'in';

    $response = $sdk->payees->getPayeeById($request);

    if ($response->payeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayees

Returns all payees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeesRequest();
    $request->budgetId = 'corporis';
    $request->lastKnowledgeOfServer = 613064;

    $response = $sdk->payees->getPayees($request);

    if ($response->payeesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
