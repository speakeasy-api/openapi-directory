<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AffiliationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AffiliationByIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->affiliationId = 'e046d326-5421-45ab-95ae-f13d37f260b5';

    $response = $sdk->configuration->affiliationById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->