# note

### Available Operations

* [getNote](#getnote) - Retrieve Note
* [getNotesbyorderId](#getnotesbyorderid) - Get Notes by orderId
* [newNote](#newnote) - Create Note

## getNote

Retrieves a given note in VTEX DO, filtering by `noteId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNoteRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->noteId = '654321cba';
    $request->reason = 'data-validation';

    $response = $sdk->note->getNote($request);

    if ($response->getNote200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotesbyorderId

Retrieves notes related to a specific `orderId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNotesbyorderIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotesbyorderIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->page = 3;
    $request->perPage = 20;
    $request->reason = 'data-validation';
    $request->targetId = '1172452900788-01';

    $response = $sdk->note->getNotesbyorderId($request);

    if ($response->getNotesbyorderId200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newNote

This endpoint creates a new note in VTEX DO. Be aware of the following limitations:

- The maximum number of notes for an order is 30.

- The maximum number of characters in a note's description is 2000.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewNoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\NewNoteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\NewNoteRequestBodyTarget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewNoteRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = new NewNoteRequestBody();
    $request->requestBody->description = 'Order ID in the marketplace is 786-09.';
    $request->requestBody->domain = 'oms';
    $request->requestBody->target = new NewNoteRequestBodyTarget();
    $request->requestBody->target->id = 'v964735bdev-01';
    $request->requestBody->target->type = 'order';
    $request->requestBody->target->url = 'https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01';

    $response = $sdk->note->newNote($request);

    if ($response->newNote200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
