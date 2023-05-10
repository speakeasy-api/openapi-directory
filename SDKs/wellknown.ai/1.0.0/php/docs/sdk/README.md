# SDK

## Overview

A registry of AI Plugins.

### Available Operations

* [getApiPlugins](#getapiplugins) - Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

## getApiPlugins

Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getApiPlugins();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
