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
    $request->apiVersion = 'nulla';
    $request->applicationId = 'corrupti';
    $request->clientRequestId = 'illum';
    $request->ocpDate = 'vel';
    $request->returnClientRequestId = false;
    $request->timeout = 623564;

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
    $request->apiVersion = 'deserunt';
    $request->clientRequestId = 'suscipit';
    $request->maxresults = 437587;
    $request->ocpDate = 'magnam';
    $request->returnClientRequestId = false;
    $request->timeout = 891773;

    $response = $sdk->applications->applicationList($request);

    if ($response->applicationListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
