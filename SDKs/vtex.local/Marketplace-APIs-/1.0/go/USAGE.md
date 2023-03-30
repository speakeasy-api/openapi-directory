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

    req := operations.GetSuggestionRequest{
        PathParams: operations.GetSuggestionPathParams{
            SellerID: "corrupti",
            SellerSkuID: "provident",
        },
        QueryParams: operations.GetSuggestionQueryParams{
            AccountName: "distinctio",
        },
        Headers: operations.GetSuggestionHeaders{
            Accept: "quibusdam",
            ContentType: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.GetSuggestions.GetSuggestion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->