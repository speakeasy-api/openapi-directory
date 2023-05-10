# utility

## Overview

The utility endpoint allows the Wealth Manager to upload information required by the system to support the daily operations (e.g. file uploads for daily jobs, calendar updates etc.)

### Available Operations

* [copyFileToS3](#copyfiletos3) - Upload a file

## copyFileToS3

Copy a file from the Wealth Manager's data store (system must have read permission for this store) to an internal data store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopyFileToS3Request;
use \OpenAPI\OpenAPI\Models\Operations\CopyFileToS3RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CopyFileToS3RequestBodyFilePaths;
use \OpenAPI\OpenAPI\Models\Operations\CopyFileToS3Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyFileToS3Request();
    $request->requestBody = new CopyFileToS3RequestBody();
    $request->requestBody->filePaths = [
        new CopyFileToS3RequestBodyFilePaths(),
        new CopyFileToS3RequestBodyFilePaths(),
    ];
    $request->xApiKey = 'dolorum';

    $requestSecurity = new CopyFileToS3Security();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->utility->copyFileToS3($request, $requestSecurity);

    if ($response->copyFileToS3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
