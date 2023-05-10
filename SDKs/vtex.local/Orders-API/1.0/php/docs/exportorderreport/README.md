# exportOrderReport

### Available Operations

* [statusCompleted](#statuscompleted) - Export order report with status 'Completed'
* [statusInProgress](#statusinprogress) - Export order report with status 'In Progress'

## statusCompleted

Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StatusCompletedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusCompletedRequest();
    $request->accept = 'error';
    $request->contentType = 'deserunt';

    $response = $sdk->exportOrderReport->statusCompleted($request);

    if ($response->exportCompletedResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## statusInProgress

Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StatusInProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusInProgressRequest();
    $request->accept = 'suscipit';
    $request->contentType = 'iure';

    $response = $sdk->exportOrderReport->statusInProgress($request);

    if ($response->exportInProgressResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
