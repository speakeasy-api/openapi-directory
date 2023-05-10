<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountListNodeAgentSkusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountListNodeAgentSkusRequest();
    $request->dollarFilter = 'corrupti';
    $request->apiVersion = 'provident';
    $request->clientRequestId = 'distinctio';
    $request->maxresults = 844266;
    $request->ocpDate = 'unde';
    $request->returnClientRequestId = false;
    $request->timeout = 857946;

    $response = $sdk->accounts->accountListNodeAgentSkus($request);

    if ($response->accountListNodeAgentSkusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->