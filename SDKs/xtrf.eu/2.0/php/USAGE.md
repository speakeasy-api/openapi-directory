<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BrowseCSVRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseCSVRequest();
    $request->additionalOrder = 'corrupti';
    $request->secondarySeparator = 'provident';
    $request->separator = 'distinctio';
    $request->viewId = 844266;

    $response = $sdk->browser->browseCSV($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->