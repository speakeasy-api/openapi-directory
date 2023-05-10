# clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [validatedocumentbyclusters](#validatedocumentbyclusters) - Validate document by clusters

## validatedocumentbyclusters

Check if a document is present in one or more clusters (specific set of field values).

> There is a limit of five rules per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidatedocumentbyclustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidatedocumentbyclustersRequest();
    $request->accept = 'application/json';
    $request->requestBody = '{"foo":"XcoYpSoHZ]","bar":43758,"bike":89177,"a":96366,"b":38344,"name":79172,"prop":"RMUEwn'@)]"}';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->clusters->validatedocumentbyclusters($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
