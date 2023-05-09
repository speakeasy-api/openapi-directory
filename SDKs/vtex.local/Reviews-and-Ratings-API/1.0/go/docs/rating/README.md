# Rating

### Available Operations

* [GetProductRating](#getproductrating) - Get Product Rating

## GetProductRating

Retrieves the rating of a specific product.

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
    res, err := s.Rating.GetProductRating(ctx, operations.GetProductRatingRequest{
        Accept: "distinctio",
        ContentType: "quibusdam",
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
