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