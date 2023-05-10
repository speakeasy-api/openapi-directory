# system

## Overview

Global operations

### Available Operations

* [postAdminReset](#postadminreset) - Reset mappings and request journal
* [postAdminSettings](#postadminsettings) - Update global settings
* [postAdminShutdown](#postadminshutdown) - Shutdown the WireMock server

## postAdminReset

Reset mappings to the default state and reset the request journal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->system->postAdminReset();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminSettings

Update global settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAdminSettingsRequestBodyLogNormal();
    $request->fixedDelay = 3738.13;
    $request->median = 69859;
    $request->sigma = 5876;
    $request->type = PostAdminSettingsRequestBodyLogNormalTypeEnum::LOGNORMAL;

    $response = $sdk->system->postAdminSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminShutdown

Shutdown the WireMock server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->system->postAdminShutdown();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
