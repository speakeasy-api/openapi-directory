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
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetWindowToChangeSellerRequest{
        Headers: operations.GetWindowToChangeSellerHeaders{
            Accept: "corrupti",
            ContentType: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.ChangeSeller.GetWindowToChangeSeller(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWindowToChangeSeller200TextPlainInteger != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->