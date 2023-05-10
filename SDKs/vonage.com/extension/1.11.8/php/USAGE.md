<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtensionCtrlGetAccountExtensionByIDRequest();
    $request->accountId = 'corrupti';
    $request->extensionNumber = 5928.45;

    $requestSecurity = new ExtensionCtrlGetAccountExtensionByIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->extensionCtrlGetAccountExtensionByID($request, $requestSecurity);

    if ($response->endUserRouteHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->