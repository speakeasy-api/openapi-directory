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

    req := operations.ExtensionCtrlGetAccountExtensionByIDRequest{
        Security: operations.ExtensionCtrlGetAccountExtensionByIDSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.ExtensionCtrlGetAccountExtensionByIDPathParams{
            AccountID: "unde",
            ExtensionNumber: 5928.45,
        },
    }

    ctx := context.Background()
    res, err := s.ExtensionCtrlGetAccountExtensionByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->