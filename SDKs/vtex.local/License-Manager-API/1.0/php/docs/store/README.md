# store

### Available Operations

* [getByAccount](#getbyaccount) - Get Stores

## getByAccount

Gets the stores and respective hosts of the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->store->getByAccount();

    if ($response->storeItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
