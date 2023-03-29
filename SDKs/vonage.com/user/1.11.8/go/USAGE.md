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

    req := operations.UserCtrlGetUserByIDRequest{
        Security: operations.UserCtrlGetUserByIDSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.UserCtrlGetUserByIDPathParams{
            AccountID: "unde",
            UserID: 5928.45,
        },
    }

    ctx := context.Background()
    res, err := s.UserCtrlGetUserByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->