# html

## Overview

Get full HTML content of pages with proxies and Chrome JS rendering

### Available Operations

* [getHTML](#gethtml) - Page HTML by URL

## getHTML

Returns just HTML on success, JSON on error

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHTMLRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHTMLRequest();
    $request->country = CountryEnum::CA;
    $request->device = DeviceEnum::MOBILE;
    $request->errorOn404 = false;
    $request->errorOnRedirect = false;
    $request->headers = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->js = false;
    $request->jsTimeout = 623564;
    $request->proxy = ProxyEnum::RESIDENTIAL;
    $request->timeout = 384382;
    $request->url = 'iure';

    $response = $sdk->html->getHTML($request);

    if ($response->getHTML200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
