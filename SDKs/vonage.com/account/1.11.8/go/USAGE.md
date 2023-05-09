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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountCtrlGetAccountServicesByAccountID(ctx, operations.AccountCtrlGetAccountServicesByAccountIDRequest{
        AccountID: 5488.14,
    }, operations.AccountCtrlGetAccountServicesByAccountIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->