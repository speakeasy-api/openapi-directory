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
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.AccountRequest{
        AccountID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Accounts.Account(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->