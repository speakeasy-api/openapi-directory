# productListPage

### Available Operations

* [getBannersFacets](#getbannersfacets) - Get list of banners registered for query
* [getCorrectionSearch](#getcorrectionsearch) - Get attempt of correction of a misspelled term
* [getFacetsFacets](#getfacetsfacets) - Get list of the possible facets for a given query
* [getProductSearchFacets](#getproductsearchfacets) - Get list of products for a query
* [getSearchSuggestions](#getsearchsuggestions) - Get list of suggested terms similar to the search term

## getBannersFacets

Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBannersFacetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBannersFacetsRequest();
    $request->facets = 'nulla';
    $request->locale = 'corrupti';
    $request->query = 'illum';

    $response = $sdk->productListPage->getBannersFacets($request);

    if ($response->banners !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorrectionSearch

Tries to correct a misspelled term from the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCorrectionSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorrectionSearchRequest();
    $request->locale = 'vel';
    $request->query = 'error';

    $response = $sdk->productListPage->getCorrectionSearch($request);

    if ($response->correction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFacetsFacets

Lists the possible facets for a given query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFacetsFacetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFacetsFacetsRequest();
    $request->facets = 'deserunt';
    $request->hideUnavailableItems = false;
    $request->locale = 'suscipit';
    $request->query = 'iure';

    $response = $sdk->productListPage->getFacetsFacets($request);

    if ($response->facets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductSearchFacets

Lists the products for a given query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductSearchFacetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductSearchFacetsSimulationBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProductSearchFacetsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductSearchFacetsRequest();
    $request->count = 2975.34;
    $request->facets = 'debitis';
    $request->hideUnavailableItems = false;
    $request->locale = 'ipsa';
    $request->page = 9636.63;
    $request->query = 'tempora';
    $request->simulationBehavior = GetProductSearchFacetsSimulationBehaviorEnum::SKIP;
    $request->sort = GetProductSearchFacetsSortEnum::NAME_DESC;

    $response = $sdk->productListPage->getProductSearchFacets($request);

    if ($response->productSearch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchSuggestions

Lists suggested terms similar to the search term.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchSuggestionsRequest();
    $request->locale = 'minus';
    $request->query = 'placeat';

    $response = $sdk->productListPage->getSearchSuggestions($request);

    if ($response->searchSuggestions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
