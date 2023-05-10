<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApplicationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationGetRequest();
    $request->apiVersion = 'corrupti';
    $request->applicationId = 'provident';
    $request->clientRequestId = 'distinctio';
    $request->ocpDate = 'quibusdam';
    $request->returnClientRequestId = false;
    $request->timeout = 602763;

    $response = $sdk->applications->applicationGet($request);

    if ($response->applicationSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->