# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Intelligent-Search-API/0.1.12/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Autocomplete.GetAutocompleteSuggestions(ctx, operations.GetAutocompleteSuggestionsRequest{
        Locale: sdk.String("corrupti"),
        Query: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutocompleteSearchSuggestions != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Autocomplete](docs/autocomplete/README.md)

* [GetAutocompleteSuggestions](docs/autocomplete/README.md#getautocompletesuggestions) - Get list of suggested terms and attributes similar to the search term
* [GetTopSearches](docs/autocomplete/README.md#gettopsearches) - Get list of the 10 most searched terms

### [ProductListPage](docs/productlistpage/README.md)

* [GetBannersFacets](docs/productlistpage/README.md#getbannersfacets) - Get list of banners registered for query
* [GetCorrectionSearch](docs/productlistpage/README.md#getcorrectionsearch) - Get attempt of correction of a misspelled term
* [GetFacetsFacets](docs/productlistpage/README.md#getfacetsfacets) - Get list of the possible facets for a given query
* [GetProductSearchFacets](docs/productlistpage/README.md#getproductsearchfacets) - Get list of products for a query
* [GetSearchSuggestions](docs/productlistpage/README.md#getsearchsuggestions) - Get list of suggested terms similar to the search term
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
