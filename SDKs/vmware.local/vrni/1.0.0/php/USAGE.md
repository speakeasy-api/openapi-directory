<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationRequest();
    $request->name = 'Terrence Rau';

    $requestSecurity = new AddApplicationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->addApplication($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->