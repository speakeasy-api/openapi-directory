# clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [validateDocumentbyClusters](#validatedocumentbyclusters) - Validate Document by Clusters

## validateDocumentbyClusters

Validate Document by Clusters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateDocumentbyClustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateDocumentbyClustersRequest();
    $request->accept = 'culpa';
    $request->requestBody = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->acronym = 'culpa';
    $request->id = '2fa94677-3925-41aa-92c3-f5ad019da1ff';

    $response = $sdk->clusters->validateDocumentbyClusters($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
