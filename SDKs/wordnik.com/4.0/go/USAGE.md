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

    req := operations.AuthenticateRequest{
        PathParams: operations.AuthenticatePathParams{
            Username: "Katelynn_Medhurst60",
        },
        QueryParams: operations.AuthenticateQueryParams{
            Password: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.Account.Authenticate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->