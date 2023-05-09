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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Applications.ApplicationGet(ctx, operations.ApplicationGetRequest{
        APIVersion: "corrupti",
        ApplicationID: "provident",
        ClientRequestID: sdk.String("distinctio"),
        OcpDate: sdk.String("quibusdam"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(602763),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->