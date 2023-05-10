# selectedHTML

## Overview

Get HTML content of selected page areas (like price, search results, page title, etc.)

### Available Operations

* [getSelected](#getselected) - HTML of a selected page area by URL and CSS selector
* [getSelectedMultiple](#getselectedmultiple) - HTML of multiple page areas by URL and CSS selectors

## getSelected

Returns just HTML on success, JSON on error

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSelectedRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSelectedRequest();
    $request->country = CountryEnum::DE;
    $request->device = DeviceEnum::TABLET;
    $request->errorOn404 = false;
    $request->errorOnRedirect = false;
    $request->headers = [
        'delectus' => 'tempora',
    ];
    $request->js = false;
    $request->jsTimeout = 383441;
    $request->proxy = ProxyEnum::DATACENTER;
    $request->selector = 'minus';
    $request->timeout = 812169;
    $request->url = 'voluptatum';

    $response = $sdk->selectedHTML->getSelected($request);

    if ($response->getSelected200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSelectedMultiple

Always returns JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSelectedMultipleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProxyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSelectedMultipleRequest();
    $request->country = CountryEnum::FR;
    $request->device = DeviceEnum::MOBILE;
    $request->errorOn404 = false;
    $request->errorOnRedirect = false;
    $request->headers = [
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->js = false;
    $request->jsTimeout = 87129;
    $request->proxy = ProxyEnum::RESIDENTIAL;
    $request->selectors = [
        'ipsam',
    ];
    $request->timeout = 832620;
    $request->url = 'sapiente';

    $response = $sdk->selectedHTML->getSelectedMultiple($request);

    if ($response->selectedAreas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
