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