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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [autocomplete](docs/autocomplete/README.md)

* [autoComplete](docs/autocomplete/README.md#autocomplete) - Product Search Autocomplete

### [crossSelling](docs/crossselling/README.md)

* [productSearchAccessories](docs/crossselling/README.md#productsearchaccessories) - Get Product Search of Accessories
* [productSearchShowTogether](docs/crossselling/README.md#productsearchshowtogether) - Get Product Search of Show Together
* [productSearchSimilars](docs/crossselling/README.md#productsearchsimilars) - Get Product Search of Similars
* [productSearchSuggestions](docs/crossselling/README.md#productsearchsuggestions) - Get Product Search of Suggestions
* [productSearchWhoBoughtAlsoBought](docs/crossselling/README.md#productsearchwhoboughtalsobought) - Get Product Search of Who Bought Also Bought
* [productSearchWhoSawAlsoBought](docs/crossselling/README.md#productsearchwhosawalsobought) - Get Product Search of Who Saw Also Bought
* [productSearchWhoSawAlsoSaw](docs/crossselling/README.md#productsearchwhosawalsosaw) - Get Product Search of Who Saw Also Saw

### [facets](docs/facets/README.md)

* [facetscategory](docs/facets/README.md#facetscategory) - Search by Store Facets
* [getApiCatalogSystemPubFacetsCategoryCategoryId](docs/facets/README.md#getapicatalogsystempubfacetscategorycategoryid) - Get Category Facets

### [offers](docs/offers/README.md)

* [getApiCatalogSystemPubProductsOffersProductId](docs/offers/README.md#getapicatalogsystempubproductsoffersproductid) - Search Product offers
* [getApiCatalogSystemPubProductsOffersProductIdSkuSkuId](docs/offers/README.md#getapicatalogsystempubproductsoffersproductidskuskuid) - Search SKU offers

### [search](docs/search/README.md)

* [productSearch](docs/search/README.md#productsearch) - Search for Products
* [productSearchFilteredandOrdered](docs/search/README.md#productsearchfilteredandordered) - Search for Products with Filter, Order and Pagination
* [searchbyproducturl](docs/search/README.md#searchbyproducturl) - Search Product by Product URL
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
