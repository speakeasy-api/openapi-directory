# user

### Available Operations

* [getUser](#getuser) - User info

## getUser

Returns authenticated user information

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
    $response = $sdk->user->getUser();

    if ($response->userResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
