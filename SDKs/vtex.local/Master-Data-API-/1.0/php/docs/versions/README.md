# versions

## Overview

Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.

### Available Operations

* [getversion](#getversion) - Get version
* [listversions](#listversions) - List versions
* [putversion](#putversion) - Put version

## getversion

Returns the version of a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetversionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetversionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';
    $request->versionId = 'perferendis';

    $response = $sdk->versions->getversion($request);

    if ($response->getversion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listversions

Allows to list the versions of a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListversionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListversionsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->fields = 'ad';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';
    $request->load = false;

    $response = $sdk->versions->listversions($request);

    if ($response->listversions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putversion

Updates document with version values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutversionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutversionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';
    $request->versionId = 'natus';

    $response = $sdk->versions->putversion($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
