# DKIMConfiguration

### Available Operations

* [CreateDKIM](#createdkim) - Generate DKIM keys

## CreateDKIM

Create DKIM keys for sender that was setup in VTEX mail servers

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
    res, err := s.DKIMConfiguration.CreateDKIM(ctx, operations.CreateDKIMRequest{
        EmailProvider: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredOK != nil {
        // handle response
    }
}
```
