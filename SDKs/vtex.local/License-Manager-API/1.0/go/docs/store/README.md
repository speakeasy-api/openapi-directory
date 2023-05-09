# Store

### Available Operations

* [GetByAccount](#getbyaccount) - Get Stores

## GetByAccount

Gets the stores and respective hosts of the account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Store.GetByAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreItems != nil {
        // handle response
    }
}
```
