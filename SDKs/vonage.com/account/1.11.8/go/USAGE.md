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
        Security: operations.AccountCtrlGetAccountServicesByAccountIDSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.AccountCtrlGetAccountServicesByAccountIDPathParams{
            AccountID: 5488.14,
        },
    }

    ctx := context.Background()
    res, err := s.AccountCtrlGetAccountServicesByAccountID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->