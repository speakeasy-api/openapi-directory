# indices

## Overview

Create alternative keys for data entities.

### Available Operations

* [deleteindexbyname](#deleteindexbyname) - Delete index by name
* [getindexbyname](#getindexbyname) - Get index by name
* [getindices](#getindices) - Get indices
* [putindices](#putindices) - Put indices

## deleteindexbyname

Delete an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteindexbynameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteindexbynameRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->indexName = '{{index_name}}';

    $response = $sdk->indices->deleteindexbyname($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getindexbyname

Returns an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetindexbynameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetindexbynameRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->indexName = '{{index_name}}';

    $response = $sdk->indices->getindexbyname($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getindices

Returns the list of indices by data entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetindicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetindicesRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';

    $response = $sdk->indices->getindices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putindices

Create an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutindicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutindicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutindicesRequest();
    $request->putindicesRequest = new PutindicesRequest();
    $request->putindicesRequest->fields = 'totam';
    $request->putindicesRequest->multiple = false;
    $request->putindicesRequest->name = 'Lucy Krajcik';
    $request->dataEntityName = 'Client';

    $response = $sdk->indices->putindices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
