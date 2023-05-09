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