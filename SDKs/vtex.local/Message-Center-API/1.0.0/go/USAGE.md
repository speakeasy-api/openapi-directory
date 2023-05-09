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
    res, err := s.DKIMConfiguration.CreateDKIM(ctx, operations.CreateDKIMRequest{
        EmailProvider: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredOK != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->