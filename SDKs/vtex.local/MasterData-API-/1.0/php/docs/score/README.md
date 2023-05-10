# score

## Overview

It allows to record and remove points in the` Score2` fields.

### Available Operations

* [deletescorebyfield](#deletescorebyfield) - Delete score by field
* [putscorebyfield](#putscorebyfield) - Put score by field
* [putscores](#putscores) - Put scores

## deletescorebyfield

Allows you to remove a key from a specific field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletescorebyfieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletescorebyfieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletescorebyfieldRequest();
    $request->accept = 'odit';
    $request->deletescorebyfieldRequest = new DeletescorebyfieldRequest();
    $request->deletescorebyfieldRequest->key = 'ea';
    $request->acronym = 'accusantium';
    $request->fieldName = 'ab';
    $request->id = 'fb576b0d-5f0d-430c-9fbb-2587053202c7';

    $response = $sdk->score->deletescorebyfield($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putscorebyfield

It allows to punctuate in a specific field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutscorebyfieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutscorebyfieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutscorebyfieldRequest();
    $request->accept = 'dolor';
    $request->putscorebyfieldRequest = new PutscorebyfieldRequest();
    $request->putscorebyfieldRequest->key = 'vero';
    $request->putscorebyfieldRequest->point = 345352;
    $request->putscorebyfieldRequest->until = 'hic';
    $request->acronym = 'recusandae';
    $request->fieldName = 'omnis';
    $request->id = 'b90c2890-9b3f-4e49-a8d9-cbf48633323f';

    $response = $sdk->score->putscorebyfield($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putscores

It allows punctuate in more than one field and more than one key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutscoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutscoresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutscoresRequest();
    $request->accept = 'excepturi';
    $request->requestBody = [
        new PutscoresRequest(),
        new PutscoresRequest(),
        new PutscoresRequest(),
    ];
    $request->acronym = 'voluptate';
    $request->id = '7f3a4100-674e-4bf6-9280-d1ba77a89ebf';

    $response = $sdk->score->putscores($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
