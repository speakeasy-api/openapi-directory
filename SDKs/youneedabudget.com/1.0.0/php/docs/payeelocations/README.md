# payeeLocations

## Overview

When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.

### Available Operations

* [getPayeeLocationById](#getpayeelocationbyid) - Single payee location
* [getPayeeLocations](#getpayeelocations) - List payee locations
* [getPayeeLocationsByPayee](#getpayeelocationsbypayee) - List locations for a payee

## getPayeeLocationById

Returns a single payee location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeLocationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeLocationByIdRequest();
    $request->budgetId = 'dolor';
    $request->payeeLocationId = 'natus';

    $response = $sdk->payeeLocations->getPayeeLocationById($request);

    if ($response->payeeLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayeeLocations

Returns all payee locations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeLocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeLocationsRequest();
    $request->budgetId = 'laboriosam';

    $response = $sdk->payeeLocations->getPayeeLocations($request);

    if ($response->payeeLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayeeLocationsByPayee

Returns all payee locations for a specified payee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayeeLocationsByPayeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayeeLocationsByPayeeRequest();
    $request->budgetId = 'hic';
    $request->payeeId = 'saepe';

    $response = $sdk->payeeLocations->getPayeeLocationsByPayee($request);

    if ($response->payeeLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
