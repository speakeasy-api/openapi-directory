# plugins

### Available Operations

* [getProvider](#getprovider) - List all the Wellknown AI Plugins.

## getProvider

List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->plugins->getProvider();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
