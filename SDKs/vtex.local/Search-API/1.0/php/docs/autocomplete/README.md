# autocomplete

### Available Operations

* [autoComplete](#autocomplete) - Product Search Autocomplete

## autoComplete

Retrieves product's information related to the searched string.
`{{searchString}} is the part of string the user is looking for.
E.g.: `ref` | `refrig` | `refrigerator`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AutoCompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoCompleteRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productNameContains = 'jeans';

    $response = $sdk->autocomplete->autoComplete($request);

    if ($response->theRootSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
