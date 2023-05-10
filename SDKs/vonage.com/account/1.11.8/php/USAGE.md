<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetAccountServicesByAccountIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetAccountServicesByAccountIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCtrlGetAccountServicesByAccountIDRequest();
    $request->accountId = 5488.14;

    $requestSecurity = new AccountCtrlGetAccountServicesByAccountIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountCtrlGetAccountServicesByAccountID($request, $requestSecurity);

    if ($response->accountHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->