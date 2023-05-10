<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNoteRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->noteId = '654321cba';
    $request->reason = 'data-validation';

    $response = $sdk->note->getNote($request);

    if ($response->getNote200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->