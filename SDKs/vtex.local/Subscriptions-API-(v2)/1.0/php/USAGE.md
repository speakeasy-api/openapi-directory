<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetreportstatusbyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetreportstatusbyIDRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->reportId = 'distinctio';

    $response = $sdk->report->getreportstatusbyID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->