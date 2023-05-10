<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddrecurrenceitemRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
    ];
    $request->recurrenceId = 'provident';

    $response = $sdk->miscellaneous->addrecurrenceitem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->