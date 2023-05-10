# license

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [getLicense](#getlicense) - Returns license content.
* [refresh](#refresh) - Refreshes license content.

## getLicense

Returns license content.

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
    $response = $sdk->license->getLicense();

    if ($response->getLicenseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refresh

Refreshes license content. This method returns OK immediately and license is refreshed asynchronously. It takes a while (usually a few seconds) for the license to be actually refreshed.

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
    $response = $sdk->license->refresh();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
