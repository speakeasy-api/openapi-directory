# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Search-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Autocomplete.AutoComplete(ctx, operations.AutoCompleteRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductNameContains: "jeans",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TheRootSchema != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Autocomplete](docs/autocomplete/README.md)

* [AutoComplete](docs/autocomplete/README.md#autocomplete) - Product Search Autocomplete

### [CrossSelling](docs/crossselling/README.md)

* [ProductSearchAccessories](docs/crossselling/README.md#productsearchaccessories) - Get Product Search of Accessories
* [ProductSearchShowTogether](docs/crossselling/README.md#productsearchshowtogether) - Get Product Search of Show Together
* [ProductSearchSimilars](docs/crossselling/README.md#productsearchsimilars) - Get Product Search of Similars
* [ProductSearchSuggestions](docs/crossselling/README.md#productsearchsuggestions) - Get Product Search of Suggestions
* [ProductSearchWhoBoughtAlsoBought](docs/crossselling/README.md#productsearchwhoboughtalsobought) - Get Product Search of Who Bought Also Bought
* [ProductSearchWhoSawAlsoBought](docs/crossselling/README.md#productsearchwhosawalsobought) - Get Product Search of Who Saw Also Bought
* [ProductSearchWhoSawAlsoSaw](docs/crossselling/README.md#productsearchwhosawalsosaw) - Get Product Search of Who Saw Also Saw

### [Facets](docs/facets/README.md)

* [Facetscategory](docs/facets/README.md#facetscategory) - Search by Store Facets
* [GetAPICatalogSystemPubFacetsCategoryCategoryID](docs/facets/README.md#getapicatalogsystempubfacetscategorycategoryid) - Get Category Facets

### [Offers](docs/offers/README.md)

* [GetAPICatalogSystemPubProductsOffersProductID](docs/offers/README.md#getapicatalogsystempubproductsoffersproductid) - Search Product offers
* [GetAPICatalogSystemPubProductsOffersProductIDSkuSkuID](docs/offers/README.md#getapicatalogsystempubproductsoffersproductidskuskuid) - Search SKU offers

### [Search](docs/search/README.md)

* [ProductSearch](docs/search/README.md#productsearch) - Search for Products
* [ProductSearchFilteredandOrdered](docs/search/README.md#productsearchfilteredandordered) - Search for Products with Filter, Order and Pagination
* [Searchbyproducturl](docs/search/README.md#searchbyproducturl) - Search Product by Product URL
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
