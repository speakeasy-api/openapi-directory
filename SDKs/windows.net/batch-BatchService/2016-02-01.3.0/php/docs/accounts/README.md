# accounts

### Available Operations

* [accountListNodeAgentSkus](#accountlistnodeagentskus) - Lists all node agent SKUs supported by the Azure Batch service.

## accountListNodeAgentSkus

Lists all node agent SKUs supported by the Azure Batch service.

### Example Usage

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
    $request->apiVersion = 'illum';
    $request->clientRequestId = 'vel';
    $request->maxresults = 623564;
    $request->ocpDate = 'deserunt';
    $request->returnClientRequestId = false;
    $request->timeout = 384382;

    $response = $sdk->accounts->accountListNodeAgentSkus($request);

    if ($response->accountListNodeAgentSkusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
