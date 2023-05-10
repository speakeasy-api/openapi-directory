# dkimConfiguration

### Available Operations

* [createDKIM](#createdkim) - Generate DKIM keys

## createDKIM

Create DKIM keys for sender that was setup in VTEX mail servers

### Example Usage

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
    $request->emailProvider = 'provident';

    $response = $sdk->dkimConfiguration->createDKIM($request);

    if ($response->twoHundredOK !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
