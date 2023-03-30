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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AutoCompleteRequest{
        QueryParams: operations.AutoCompleteQueryParams{
            ProductNameContains: "jeans",
        },
        Headers: operations.AutoCompleteHeaders{
            Accept: "application/json",
            ContentType: "application/json",
        },
    }

    ctx := context.Background()
    res, err := s.Autocomplete.AutoComplete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TheRootSchema != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->