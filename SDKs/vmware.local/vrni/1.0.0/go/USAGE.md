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

    req := shared.ApplicationRequest{
        Name: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Applications.AddApplication(ctx, req, operations.AddApplicationSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->