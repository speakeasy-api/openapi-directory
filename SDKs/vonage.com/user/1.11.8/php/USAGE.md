<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUserByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserCtrlGetUserByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCtrlGetUserByIDRequest();
    $request->accountId = 'corrupti';
    $request->userId = 5928.45;

    $requestSecurity = new UserCtrlGetUserByIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->userCtrlGetUserByID($request, $requestSecurity);

    if ($response->userHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->