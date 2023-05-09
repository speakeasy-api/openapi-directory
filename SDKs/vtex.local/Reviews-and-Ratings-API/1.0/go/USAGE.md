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
    res, err := s.Rating.GetProductRating(ctx, operations.GetProductRatingRequest{
        Accept: "corrupti",
        ContentType: "provident",
        ProductID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductRating200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->