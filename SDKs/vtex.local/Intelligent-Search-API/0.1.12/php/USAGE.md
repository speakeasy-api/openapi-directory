<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutocompleteSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutocompleteSuggestionsRequest();
    $request->locale = 'corrupti';
    $request->query = 'provident';

    $response = $sdk->autocomplete->getAutocompleteSuggestions($request);

    if ($response->autocompleteSearchSuggestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->