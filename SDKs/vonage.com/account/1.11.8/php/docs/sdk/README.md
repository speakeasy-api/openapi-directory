# SDK

## Overview

The Vonage Business Cloud Account API enables you to retrieve information about accounts.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [accountCtrlGetAccountServicesByAccountID](#accountctrlgetaccountservicesbyaccountid) - Get account data by ID
* [accountCtrlGetLocationByID](#accountctrlgetlocationbyid) - Get location data by account ID and location ID
* [accountCtrlGetLocationsByAccountID](#accountctrlgetlocationsbyaccountid) - Get account locations data by account ID

## accountCtrlGetAccountServicesByAccountID

Get account data by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetAccountServicesByAccountIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetAccountServicesByAccountIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCtrlGetAccountServicesByAccountIDRequest();
    $request->accountId = 5928.45;

    $requestSecurity = new AccountCtrlGetAccountServicesByAccountIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->accountCtrlGetAccountServicesByAccountID($request, $requestSecurity);

    if ($response->accountHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountCtrlGetLocationByID

Get location data by account ID and location ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetLocationByIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetLocationByIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCtrlGetLocationByIDRequest();
    $request->accountId = 7151.9;
    $request->locationId = 8442.66;

    $requestSecurity = new AccountCtrlGetLocationByIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->accountCtrlGetLocationByID($request, $requestSecurity);

    if ($response->locationHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountCtrlGetLocationsByAccountID

Get account locations data by account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetLocationsByAccountIDRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountCtrlGetLocationsByAccountIDSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCtrlGetLocationsByAccountIDRequest();
    $request->accountId = 6027.63;

    $requestSecurity = new AccountCtrlGetLocationsByAccountIDSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->sdk->accountCtrlGetLocationsByAccountID($request, $requestSecurity);

    if ($response->locationsHalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
