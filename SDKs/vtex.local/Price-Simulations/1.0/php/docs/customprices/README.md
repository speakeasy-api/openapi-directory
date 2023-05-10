# customPrices

### Available Operations

* [getVCustomPricesSessionSchema](#getvcustompricessessionschema) - Get custom prices schema
* [postVCustomPricesSessionSchema](#postvcustompricessessionschema) - Create or Update custom prices schema

## getVCustomPricesSessionSchema

Retrieves all custom price for all shopping scenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVCustomPricesSessionSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVCustomPricesSessionSchemaRequest();
    $request->accept = 'distinctio';
    $request->contentType = 'quibusdam';

    $response = $sdk->customPrices->getVCustomPricesSessionSchema($request);

    if ($response->requestBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVCustomPricesSessionSchema

Creates a new custom price for a shopping scenario or updates an existing one

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVCustomPricesSessionSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVCustomPricesSessionSchemaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostVCustomPricesSessionSchemaRequestBodyFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVCustomPricesSessionSchemaRequest();
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->requestBody = new PostVCustomPricesSessionSchemaRequestBody();
    $request->requestBody->fields = [
        new PostVCustomPricesSessionSchemaRequestBodyFields(),
        new PostVCustomPricesSessionSchemaRequestBodyFields(),
        new PostVCustomPricesSessionSchemaRequestBodyFields(),
    ];
    $request->requestBody->useEmail = false;

    $response = $sdk->customPrices->postVCustomPricesSessionSchema($request);

    if ($response->requestBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
