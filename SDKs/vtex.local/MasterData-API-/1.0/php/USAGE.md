<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveattachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveattachmentRequest();
    $request->acronym = 'corrupti';
    $request->field = 'provident';
    $request->fileName = 'distinctio';
    $request->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';

    $response = $sdk->attachments->retrieveattachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->