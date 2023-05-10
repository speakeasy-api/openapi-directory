# dataEntities

## Overview

Set of APIs that returns the structure of the data entities.

### Available Operations

* [getdataentitystructure](#getdataentitystructure) - Get data entity structure
* [listdataentities](#listdataentities) - List data entities

## getdataentitystructure

Returns the data entity structure with its respective fields and data type.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity structure

> All headers listed below are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetdataentitystructureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetdataentitystructureRequest();
    $request->accept = 'vero';
    $request->contentType = 'nihil';
    $request->acronym = 'praesentium';

    $response = $sdk->dataEntities->getdataentitystructure($request);

    if ($response->getdataentityfields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listdataentities

Retrieves the list of existing data entities in the store.

### Response status code

1. Status Code `403`: Access not allowed
2. Status Code `200`: Retrieves data entity list

> All headers listed below are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListdataentitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListdataentitiesRequest();
    $request->accept = 'voluptatibus';
    $request->contentType = 'ipsa';

    $response = $sdk->dataEntities->listdataentities($request);

    if ($response->listdataentities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
