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
    s := sdk.New()

    req := operations.AccountCtrlGetAccountServicesByAccountIDRequest{
        AccountID: 5488.14,
    }

    ctx := context.Background()
    res, err := s.AccountCtrlGetAccountServicesByAccountID(ctx, req, operations.AccountCtrlGetAccountServicesByAccountIDSecurity{
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