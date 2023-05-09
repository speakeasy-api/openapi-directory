# Autocomplete

### Available Operations

* [AutoComplete](#autocomplete) - Product Search Autocomplete

## AutoComplete

Retrieves product's information related to the searched string.
`{{searchString}} is the part of string the user is looking for.
E.g.: `ref` | `refrig` | `refrigerator`

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
