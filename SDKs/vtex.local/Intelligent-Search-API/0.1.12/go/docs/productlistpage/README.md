# ProductListPage

### Available Operations

* [GetBannersFacets](#getbannersfacets) - Get list of banners registered for query
* [GetCorrectionSearch](#getcorrectionsearch) - Get attempt of correction of a misspelled term
* [GetFacetsFacets](#getfacetsfacets) - Get list of the possible facets for a given query
* [GetProductSearchFacets](#getproductsearchfacets) - Get list of products for a query
* [GetSearchSuggestions](#getsearchsuggestions) - Get list of suggested terms similar to the search term

## GetBannersFacets

Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.

### Example Usage

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
    res, err := s.ProductListPage.GetBannersFacets(ctx, operations.GetBannersFacetsRequest{
        Facets: "nulla",
        Locale: sdk.String("corrupti"),
        Query: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Banners != nil {
        // handle response
    }
}
```

## GetCorrectionSearch

Tries to correct a misspelled term from the search.

### Example Usage

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
    res, err := s.ProductListPage.GetCorrectionSearch(ctx, operations.GetCorrectionSearchRequest{
        Locale: sdk.String("vel"),
        Query: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Correction != nil {
        // handle response
    }
}
```

## GetFacetsFacets

Lists the possible facets for a given query

### Example Usage

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
    res, err := s.ProductListPage.GetFacetsFacets(ctx, operations.GetFacetsFacetsRequest{
        Facets: "deserunt",
        HideUnavailableItems: sdk.Bool(false),
        Locale: sdk.String("suscipit"),
        Query: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Facets != nil {
        // handle response
    }
}
```

## GetProductSearchFacets

Lists the products for a given query.

### Example Usage

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
    res, err := s.ProductListPage.GetProductSearchFacets(ctx, operations.GetProductSearchFacetsRequest{
        Count: sdk.Float64(2975.34),
        Facets: "debitis",
        HideUnavailableItems: sdk.Bool(false),
        Locale: sdk.String("ipsa"),
        Page: sdk.Float64(9636.63),
        Query: sdk.String("tempora"),
        SimulationBehavior: operations.GetProductSearchFacetsSimulationBehaviorEnumSkip.ToPointer(),
        Sort: operations.GetProductSearchFacetsSortEnumNameDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSearch != nil {
        // handle response
    }
}
```

## GetSearchSuggestions

Lists suggested terms similar to the search term.

### Example Usage

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
    res, err := s.ProductListPage.GetSearchSuggestions(ctx, operations.GetSearchSuggestionsRequest{
        Locale: sdk.String("minus"),
        Query: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchSuggestions != nil {
        // handle response
    }
}
```
