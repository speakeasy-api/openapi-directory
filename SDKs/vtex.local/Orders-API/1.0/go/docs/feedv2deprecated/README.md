# FeedV2Deprecated

### Available Operations

* [Getfeedorderstatus](#getfeedorderstatus) - Get feed order status

## Getfeedorderstatus

Get feed order status (deprecated)

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
    res, err := s.FeedV2Deprecated.Getfeedorderstatus(ctx, operations.GetfeedorderstatusRequest{
        Accept: "magnam",
        ContentType: "debitis",
        MaxLot: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
