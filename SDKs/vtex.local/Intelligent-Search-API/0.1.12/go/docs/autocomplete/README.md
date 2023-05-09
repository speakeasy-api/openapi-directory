# Autocomplete

### Available Operations

* [GetAutocompleteSuggestions](#getautocompletesuggestions) - Get list of suggested terms and attributes similar to the search term
* [GetTopSearches](#gettopsearches) - Get list of the 10 most searched terms

## GetAutocompleteSuggestions

Lists the suggested terms and attributes similar to the search term.

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
    res, err := s.Autocomplete.GetAutocompleteSuggestions(ctx, operations.GetAutocompleteSuggestionsRequest{
        Locale: sdk.String("distinctio"),
        Query: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutocompleteSearchSuggestions != nil {
        // handle response
    }
}
```

## GetTopSearches

Lists the 10 most searched terms.

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
    res, err := s.Autocomplete.GetTopSearches(ctx, operations.GetTopSearchesRequest{
        Locale: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TopSearches != nil {
        // handle response
    }
}
```
