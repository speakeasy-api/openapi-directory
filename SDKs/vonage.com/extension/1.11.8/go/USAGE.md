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
    res, err := s.ExtensionCtrlGetAccountExtensionByID(ctx, operations.ExtensionCtrlGetAccountExtensionByIDRequest{
        AccountID: "corrupti",
        ExtensionNumber: 5928.45,
    }, operations.ExtensionCtrlGetAccountExtensionByIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->