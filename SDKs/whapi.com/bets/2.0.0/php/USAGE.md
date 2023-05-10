<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashinRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashinRequest();
    $request->apiKey = 'corrupti';
    $request->apiSecret = 'provident';
    $request->apiTicket = 'distinctio';
    $request->betId = 'quibusdam';
    $request->cashInValue = 6027.63;
    $request->cashinBetDelayId = 'nulla';

    $response = $sdk->bets->cashin($request);

    if ($response->cashInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->