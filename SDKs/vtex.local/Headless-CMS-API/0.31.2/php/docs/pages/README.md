# pages

### Available Operations

* [getAllContentTypes](#getallcontenttypes) - Get all Content Types
* [getCMSpage](#getcmspage) - Get CMS page
* [getPagesbyContentType](#getpagesbycontenttype) - Get all CMS pages by Content Type

## getAllContentTypes

Gets data from all Content Types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllContentTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllContentTypesRequest();
    $request->builderId = 'faststore';

    $response = $sdk->pages->getAllContentTypes($request);

    if ($response->getAllContentTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCMSpage

Gets all data from a given page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCMSpageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCMSpageRequest();
    $request->builderId = 'faststore';
    $request->contentType = 'plp';
    $request->documentId = '5af643b5-9a6d-48f2-9b34-919dd762c908';
    $request->releaseId = '6196c277c6dce15f9709a2a7';
    $request->versionId = 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb';

    $response = $sdk->pages->getCMSpage($request);

    if ($response->getCMSpage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPagesbyContentType

Gets data from all pages of a given Content Type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPagesbyContentTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPagesbyContentTypeRequest();
    $request->builderId = 'faststore';
    $request->contentType = 'plp';
    $request->filtersField = 'published';
    $request->releaseId = '6196c277c6dce15f9709a2a7';
    $request->versionId = 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb';

    $response = $sdk->pages->getPagesbyContentType($request);

    if ($response->getPagesbyContentType200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
