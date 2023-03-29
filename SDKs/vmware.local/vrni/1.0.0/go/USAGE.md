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

    req := operations.AddApplicationRequest{
        Security: operations.AddApplicationSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.ApplicationRequest{
            Name: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Applications.AddApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->