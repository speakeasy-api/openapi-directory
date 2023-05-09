<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CartAttachments.AddClientPreferences(ctx, operations.AddClientPreferencesRequest{
        Accept: "corrupti",
        ContentType: "provident",
        RequestBody: operations.AddClientPreferencesRequestBody{
            Locale: sdk.String("distinctio"),
            OptinNewsLetter: sdk.Bool(false),
        },
        OrderFormID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddClientPreferences200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->