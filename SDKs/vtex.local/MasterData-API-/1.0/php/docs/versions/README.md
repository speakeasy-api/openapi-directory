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
    $request->accept = 'saepe';
    $request->contentType = 'suscipit';
    $request->acronym = 'deserunt';
    $request->id = '95d8a0d4-46ce-42af-ba73-cf3be453f870';
    $request->versionId = 'expedita';

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
    $request->accept = 'neque';
    $request->contentType = 'sed';
    $request->acronym = 'vel';
    $request->id = 'b5a73429-cdb1-4a84-a2bb-679d2322715b';

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
    $request->accept = 'hic';
    $request->contentType = 'voluptatem';
    $request->acronym = 'cumque';
    $request->id = 'bb1e31b8-b90f-4344-ba11-08e0adcf4b92';
    $request->versionId = 'quae';

    $response = $sdk->versions->putversion($request);

    if ($response->putversion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
