# download

### Available Operations

* [getGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetXrefList](#getgetxreflist) - getXrefList

## getGetColoredPathway

getColoredPathwayGet a colored image version of the pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetColoredPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetColoredPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetColoredPathwayRequest();
    $request->color = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->fileType = 'voluptatibus';
    $request->format = GetGetColoredPathwayFormatEnum::JSON;
    $request->graphId = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->pwId = 'doloremque';
    $request->revision = 'reprehenderit';

    $response = $sdk->download->getGetColoredPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayAs

getPathwayAsDownload a pathway in the specified file format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayAsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayAsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayAsRequest();
    $request->fileType = 'ut';
    $request->format = GetGetPathwayAsFormatEnum::PDF;
    $request->pwId = 'dicta';
    $request->revision = 359444;

    $response = $sdk->download->getGetPathwayAs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetXrefList

getXrefList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetXrefListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetXrefListFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetXrefListRequest();
    $request->code = 'dolore';
    $request->format = GetGetXrefListFormatEnum::HTML;
    $request->pwId = 'dicta';

    $response = $sdk->download->getGetXrefList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
