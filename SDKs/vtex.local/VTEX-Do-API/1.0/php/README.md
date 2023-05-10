# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [note](docs/note/README.md)

* [getNote](docs/note/README.md#getnote) - Retrieve Note
* [getNotesbyorderId](docs/note/README.md#getnotesbyorderid) - Get Notes by orderId
* [newNote](docs/note/README.md#newnote) - Create Note

### [task](docs/task/README.md)

* [addComment](docs/task/README.md#addcomment) - Add Comment on a Task
* [editTask](docs/task/README.md#edittask) - Update Task
* [getTask](docs/task/README.md#gettask) - Retrieve Task
* [listtasksbyassignee](docs/task/README.md#listtasksbyassignee) - List tasks
* [newTask](docs/task/README.md#newtask) - Create Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
