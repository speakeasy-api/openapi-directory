<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                OAuth: shared.SchemeOAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountRequest{
        PathParams: operations.AccountPathParams{
            AccountID: "non",
        },
    }
    
    res, err := s.Accounts.Account(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->