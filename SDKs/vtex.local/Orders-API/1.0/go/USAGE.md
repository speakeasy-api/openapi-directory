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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetWindowToChangeSellerRequest{
        Accept: "corrupti",
        ContentType: "provident",
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