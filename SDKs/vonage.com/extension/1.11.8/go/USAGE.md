<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AccountID: "officia",
            ExtensionNumber: 28.100000,
        },
    }
    
    res, err := s.ExtensionCtrlGetAccountExtensionByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->