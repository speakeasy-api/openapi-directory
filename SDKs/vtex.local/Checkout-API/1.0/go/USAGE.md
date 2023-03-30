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

    req := operations.AddClientPreferencesRequest{
        PathParams: operations.AddClientPreferencesPathParams{
            OrderFormID: "unde",
        },
        Headers: operations.AddClientPreferencesHeaders{
            Accept: "deserunt",
            ContentType: "porro",
        },
        Request: operations.AddClientPreferencesRequestBody{
            Locale: "nulla",
            OptinNewsLetter: false,
        },
    }

    ctx := context.Background()
    res, err := s.CartAttachments.AddClientPreferences(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddClientPreferences200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->