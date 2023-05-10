# files

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [uploadFile](#uploadfile) - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

## uploadFile

When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
Uploading a file will result in a file token, which can be used to reference this file in other API calls.
 Each file must be uploaded separately.
 Keep in mind that file token has limited validity (ie. 10 minutes).
 Therefore files must be uploaded just before issuing API call which reference them.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDto;
use \OpenAPI\OpenAPI\Models\Shared\FileToUploadDtoFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileToUploadDto();
    $request->file = new FileToUploadDtoFile();
    $request->file->content = 'odio';
    $request->file->file = 'sunt';

    $response = $sdk->files->uploadFile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
