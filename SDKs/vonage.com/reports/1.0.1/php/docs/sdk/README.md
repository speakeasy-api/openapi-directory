# SDK

## Overview

The Vonage Business Cloud Reports API enables you to retrieve call logs for your account.

Your application must subscribe to the Reports API suite to use this API.


### Available Operations

* [getCallLogs](#getcalllogs) - Retrieve call logs for your account

## getCallLogs

Retrieve call logs for your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallLogsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCallLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallLogsRequest();
    $request->accountId = 'iure';
    $request->destinationUser = 'magnam';
    $request->direction = GetCallLogsDirectionEnum::OUTBOUND;
    $request->endGte = 'ipsa';
    $request->endLte = 'delectus';
    $request->from = 'tempora';
    $request->page = 3834.41;
    $request->pageSize = 4776.65;
    $request->sourceUser = 'minus';
    $request->startGte = 'placeat';
    $request->startLte = 'voluptatum';
    $request->to = 'iusto';

    $requestSecurity = new GetCallLogsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->getCallLogs($request, $requestSecurity);

    if ($response->callLogsHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
