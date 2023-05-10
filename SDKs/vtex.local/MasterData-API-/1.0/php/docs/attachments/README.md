# attachments

## Overview

The `attachments` API allows you to upload and download files. 

In case of images, the `content-type` header is filled with` image/jpg`.

### Available Operations

* [retrieveattachment](#retrieveattachment) - Retrieve attachment
* [saveattachment](#saveattachment) - Save attachment

## retrieveattachment

Use this API to retrieve a file.

Be sure to include the file extension in the name. Like in this example:
```
/dataentities/CL/documents/123/file/attachments/image.png
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveattachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveattachmentRequest();
    $request->acronym = 'repellendus';
    $request->field = 'sapiente';
    $request->fileName = 'quo';
    $request->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';

    $response = $sdk->attachments->retrieveattachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveattachment

This API allows you to save a file in a field of type `File`.

When using in javascript, you must add the header `content-type` with value `multipart/form-data;`

You can upload more than one file. Just add a new field in the `form-data` with type `File`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveattachmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\SaveattachmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveattachmentRequest();
    $request->requestBody = new SaveattachmentRequestBody();
    $request->requestBody->file = [
        'ad',
    ];
    $request->acronym = 'natus';
    $request->field = 'sed';
    $request->id = '9396fea7-596e-4b10-baaa-2352c5955907';

    $response = $sdk->attachments->saveattachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
