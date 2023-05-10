# organismList

### Available Operations

* [getListOrganisms](#getlistorganisms) - listOrganisms

## getListOrganisms

listOrganisms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListOrganismsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListOrganismsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListOrganismsRequest();
    $request->format = GetListOrganismsFormatEnum::JPG;

    $response = $sdk->organismList->getListOrganisms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
