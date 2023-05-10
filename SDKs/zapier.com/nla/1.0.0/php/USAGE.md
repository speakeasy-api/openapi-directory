<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CheckSecurity();
    $requestSecurity->accessPointApiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->check($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->