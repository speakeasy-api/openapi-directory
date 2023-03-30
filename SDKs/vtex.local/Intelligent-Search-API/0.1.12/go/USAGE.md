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
        QueryParams: operations.GetAutocompleteSuggestionsQueryParams{
            Locale: "unde",
            Query: "deserunt",
        },
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