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

    req := operations.CheckRequest{
        Security: operations.CheckSecurity{
            AccessPointAPIKeyHeader: &shared.SchemeAccessPointAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Check(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->