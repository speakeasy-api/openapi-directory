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

    req := operations.CreateDKIMRequest{
        PathParams: operations.CreateDKIMPathParams{
            EmailProvider: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.DKIMConfiguration.CreateDKIM(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredOK != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->