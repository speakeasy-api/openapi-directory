# history

### Available Operations

* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

## getGetCurationTagHistory

getCurationTagHistory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagHistoryRequest();
    $request->format = GetGetCurationTagHistoryFormatEnum::JPG;
    $request->pwId = 'enim';
    $request->timestamp = 'accusamus';

    $response = $sdk->history->getGetCurationTagHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayHistory

getPathwayHistoryGet the revision history of a pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayHistoryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayHistoryRequest();
    $request->format = GetGetPathwayHistoryFormatEnum::HTML;
    $request->pwId = 'repudiandae';
    $request->timestamp = 'quae';

    $response = $sdk->history->getGetPathwayHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetRecentChanges

getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetRecentChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetRecentChangesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetRecentChangesRequest();
    $request->format = GetGetRecentChangesFormatEnum::XML;
    $request->timestamp = 'quidem';

    $response = $sdk->history->getGetRecentChanges($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
