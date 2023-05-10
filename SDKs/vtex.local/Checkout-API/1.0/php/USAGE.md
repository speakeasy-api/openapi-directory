<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddClientPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddClientPreferencesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClientPreferencesRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->requestBody = new AddClientPreferencesRequestBody();
    $request->requestBody->locale = 'distinctio';
    $request->requestBody->optinNewsLetter = false;
    $request->orderFormId = 'quibusdam';

    $response = $sdk->cartAttachments->addClientPreferences($request);

    if ($response->addClientPreferences200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->