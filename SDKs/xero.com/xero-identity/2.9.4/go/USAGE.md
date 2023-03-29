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

    req := operations.DeleteConnectionRequest{
        Security: operations.DeleteConnectionSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteConnectionPathParams{
            ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
    }

    ctx := context.Background()
    res, err := s.Identity.DeleteConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->