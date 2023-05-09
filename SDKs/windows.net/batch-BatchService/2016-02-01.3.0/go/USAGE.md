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
    res, err := s.Accounts.AccountListNodeAgentSkus(ctx, operations.AccountListNodeAgentSkusRequest{
        DollarFilter: sdk.String("corrupti"),
        APIVersion: "provident",
        ClientRequestID: sdk.String("distinctio"),
        Maxresults: sdk.Int(844266),
        OcpDate: sdk.String("unde"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountListNodeAgentSkusResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->