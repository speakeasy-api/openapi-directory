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
    res, err := s.Bets.Cashin(ctx, operations.CashinRequest{
        APIKey: "corrupti",
        APISecret: "provident",
        APITicket: "distinctio",
        BetID: "quibusdam",
        CashInValue: 6027.63,
        CashinBetDelayID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashInResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->