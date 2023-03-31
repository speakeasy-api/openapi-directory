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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAutocompleteSuggestionsRequest{
        Locale: "corrupti",
        Query: "provident",
    }

    ctx := context.Background()
    res, err := s.Autocomplete.GetAutocompleteSuggestions(ctx, req)
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


### Autocomplete

* `GetAutocompleteSuggestions` - Get list of suggested terms and attributes similar to the search term
* `GetTopSearches` - Get list of the 10 most searched terms

### ProductListPage

* `GetBannersFacets` - Get list of banners registered for query
* `GetCorrectionSearch` - Get attempt of correction of a misspelled term
* `GetFacetsFacets` - Get list of the possible facets for a given query
* `GetProductSearchFacets` - Get list of products for a query
* `GetSearchSuggestions` - Get list of suggested terms similar to the search term
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
