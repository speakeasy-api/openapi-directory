# SDK

## Overview

The Vonage Business Cloud Extension API enables you to retrieve information about extensions.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [extensionCtrlGetAccountExtensionByID](#extensionctrlgetaccountextensionbyid) - Get extension data by account ID and extension number
* [extensionCtrlGetAccountExtensions](#extensionctrlgetaccountextensions) - Get account extensions data by account ID

## extensionCtrlGetAccountExtensionByID

Get extension data by account ID and extension number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtensionCtrlGetAccountExtensionByIDRequest();
    $request->accountId = 'distinctio';
    $request->extensionNumber = 8442.66;

    $requestSecurity = new ExtensionCtrlGetAccountExtensionByIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->extensionCtrlGetAccountExtensionByID($request, $requestSecurity);

    if ($response->endUserRouteHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## extensionCtrlGetAccountExtensions

Get account extensions data by account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExtensionCtrlGetAccountExtensionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtensionCtrlGetAccountExtensionsRequest();
    $request->accountId = 'unde';
    $request->email = 'Karley_Stamm@hotmail.com';
    $request->locationId = 6458.94;
    $request->loginName = 'suscipit';
    $request->page = 4375.87;
    $request->pageSize = 2975.34;
    $request->phoneNumber = 'debitis';

    $requestSecurity = new ExtensionCtrlGetAccountExtensionsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->extensionCtrlGetAccountExtensions($request, $requestSecurity);

    if ($response->endUserRouteHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
