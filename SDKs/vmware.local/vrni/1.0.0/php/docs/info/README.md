# info

## Overview

Info APIs

### Available Operations

* [getVersion](#getversion) - Show version info

## getVersion

Show version info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetVersionSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->info->getVersion($requestSecurity);

    if ($response->versionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
