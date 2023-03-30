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

    req := operations.AffiliationByIDRequest{
        PathParams: operations.AffiliationByIDPathParams{
            AffiliationID: "e046d326-5421-45ab-95ae-f13d37f260b5",
        },
        Headers: operations.AffiliationByIDHeaders{
            Accept: "application/json",
            ContentType: "application/json",
            XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
            XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        },
    }

    ctx := context.Background()
    res, err := s.Configuration.AffiliationByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->