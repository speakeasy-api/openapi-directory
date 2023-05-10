# SDK

## Overview

This API provides XML to JSON, JSON to XML transformations.

### Available Operations

* [postJsontoxml](#postjsontoxml)
* [postXmltojson](#postxmltojson)

## postJsontoxml

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'provident'

    $response = $sdk->sdk->postJsontoxml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postXmltojson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'distinctio'

    $response = $sdk->sdk->postXmltojson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
