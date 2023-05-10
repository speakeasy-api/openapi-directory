# polygons

### Available Operations

* [createUpdatePolygon](#createupdatepolygon) - Create/update polygon
* [deletePolygon](#deletepolygon) - Delete polygon
* [pagedPolygons](#pagedpolygons) - List paged polygons
* [polygonbyId](#polygonbyid) - List polygon by ID

## createUpdatePolygon

Creates or updates your store's polygons by geoshape coordinates and polygon name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePolygonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePolygonCreateUpdatePolygonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatePolygonRequest();
    $request->accept = 'facilis';
    $request->contentType = 'tempore';
    $request->requestBody = new CreateUpdatePolygonCreateUpdatePolygonRequest();
    $request->requestBody->geoShape = new CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape();
    $request->requestBody->geoShape->coordinates = [
        [
            4332.88,
            2487.53,
            7561.07,
            5761.57,
        ],
        [
            5920.42,
            8960.39,
        ],
    ];
    $request->requestBody->name = 'Luke Fadel';

    $response = $sdk->polygons->createUpdatePolygon($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePolygon

Deletes polygon set up in your store, by polygon name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolygonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolygonRequest();
    $request->accept = 'dolorum';
    $request->contentType = 'in';
    $request->polygonName = 'in';

    $response = $sdk->polygons->deletePolygon($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pagedPolygons

Lists stored polygons.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PagedPolygonsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PagedPolygonsRequest();
    $request->accept = 'illum';
    $request->contentType = 'maiores';
    $request->page = '{{page}}';
    $request->perPage = '{{perPage}}';

    $response = $sdk->polygons->pagedPolygons($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## polygonbyId

Lists your store's polygons by searching through polygon name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PolygonbyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolygonbyIdRequest();
    $request->accept = 'rerum';
    $request->contentType = 'dicta';
    $request->polygonName = 'magnam';

    $response = $sdk->polygons->polygonbyId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
