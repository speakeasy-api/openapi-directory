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

    req := operations.GetProductRatingRequest{
        PathParams: operations.GetProductRatingPathParams{
            ProductID: "1",
        },
        Headers: operations.GetProductRatingHeaders{
            Accept: "unde",
            ContentType: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Rating.GetProductRating(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductRating200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->