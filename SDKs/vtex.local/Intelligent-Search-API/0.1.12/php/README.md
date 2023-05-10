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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [autocomplete](docs/autocomplete/README.md)

* [getAutocompleteSuggestions](docs/autocomplete/README.md#getautocompletesuggestions) - Get list of suggested terms and attributes similar to the search term
* [getTopSearches](docs/autocomplete/README.md#gettopsearches) - Get list of the 10 most searched terms

### [productListPage](docs/productlistpage/README.md)

* [getBannersFacets](docs/productlistpage/README.md#getbannersfacets) - Get list of banners registered for query
* [getCorrectionSearch](docs/productlistpage/README.md#getcorrectionsearch) - Get attempt of correction of a misspelled term
* [getFacetsFacets](docs/productlistpage/README.md#getfacetsfacets) - Get list of the possible facets for a given query
* [getProductSearchFacets](docs/productlistpage/README.md#getproductsearchfacets) - Get list of products for a query
* [getSearchSuggestions](docs/productlistpage/README.md#getsearchsuggestions) - Get list of suggested terms similar to the search term
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
