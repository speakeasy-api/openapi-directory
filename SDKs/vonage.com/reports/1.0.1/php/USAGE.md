<!-- Start SDK Example Usage -->
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
    $request->accountId = 'corrupti';
    $request->destinationUser = 'provident';
    $request->direction = GetCallLogsDirectionEnum::OUTBOUND;
    $request->endGte = 'quibusdam';
    $request->endLte = 'unde';
    $request->from = 'nulla';
    $request->page = 5448.83;
    $request->pageSize = 8472.52;
    $request->sourceUser = 'vel';
    $request->startGte = 'error';
    $request->startLte = 'deserunt';
    $request->to = 'suscipit';

    $requestSecurity = new GetCallLogsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->getCallLogs($request, $requestSecurity);

    if ($response->callLogsHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->