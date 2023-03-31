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

    req := operations.AddClientPreferencesRequest{
        Accept: "corrupti",
        ContentType: "provident",
        RequestBody: operations.AddClientPreferencesRequestBody{
            Locale: "distinctio",
            OptinNewsLetter: false,
        },
        OrderFormID: "quibusdam",
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