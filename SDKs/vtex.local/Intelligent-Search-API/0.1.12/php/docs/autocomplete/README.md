# autocomplete

### Available Operations

* [getAutocompleteSuggestions](#getautocompletesuggestions) - Get list of suggested terms and attributes similar to the search term
* [getTopSearches](#gettopsearches) - Get list of the 10 most searched terms

## getAutocompleteSuggestions

Lists the suggested terms and attributes similar to the search term.

### Example Usage

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
    $request->locale = 'distinctio';
    $request->query = 'quibusdam';

    $response = $sdk->autocomplete->getAutocompleteSuggestions($request);

    if ($response->autocompleteSearchSuggestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTopSearches

Lists the 10 most searched terms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTopSearchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTopSearchesRequest();
    $request->locale = 'unde';

    $response = $sdk->autocomplete->getTopSearches($request);

    if ($response->topSearches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
