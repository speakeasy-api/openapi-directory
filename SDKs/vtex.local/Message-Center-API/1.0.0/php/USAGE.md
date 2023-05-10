<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDKIMRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDKIMRequest();
    $request->emailProvider = 'corrupti';

    $response = $sdk->dkimConfiguration->createDKIM($request);

    if ($response->twoHundredOK !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->