# applications

### Available Operations

* [applicationGet](#applicationget) - Gets information about the specified application.
* [applicationList](#applicationlist) - Lists all of the applications available in the specified account.

## applicationGet

Gets information about the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApplicationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationGetRequest();
    $request->apiVersion = 'iure';
    $request->applicationId = 'magnam';
    $request->clientRequestId = 'debitis';
    $request->ocpDate = 'ipsa';
    $request->returnClientRequestId = false;
    $request->timeout = 963663;

    $response = $sdk->applications->applicationGet($request);

    if ($response->applicationSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applicationList

Lists all of the applications available in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApplicationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationListRequest();
    $request->apiVersion = 'tempora';
    $request->clientRequestId = 'suscipit';
    $request->maxresults = 477665;
    $request->ocpDate = 'minus';
    $request->returnClientRequestId = false;
    $request->timeout = 812169;

    $response = $sdk->applications->applicationList($request);

    if ($response->applicationListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
