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

    req := operations.GetProductoffersRequest{
        PathParams: operations.GetProductoffersPathParams{
            ProductID: "unde",
        },
        QueryParams: operations.GetProductoffersQueryParams{
            AccountName: "deserunt",
            Environment: "porro",
        },
        Headers: operations.GetProductoffersHeaders{
            Accept: "nulla",
            ContentType: "id",
        },
    }

    ctx := context.Background()
    res, err := s.MatchedOffers.GetProductoffers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->