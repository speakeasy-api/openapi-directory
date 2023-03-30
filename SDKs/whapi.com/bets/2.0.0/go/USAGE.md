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
    s := sdk.New()

    req := operations.CashinRequest{
        PathParams: operations.CashinPathParams{
            BetID: "corrupti",
        },
        QueryParams: operations.CashinQueryParams{
            CashInValue: 5928.45,
            CashinBetDelayID: "distinctio",
        },
        Headers: operations.CashinHeaders{
            APIKey: "quibusdam",
            APISecret: "unde",
            APITicket: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.Bets.Cashin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CashInResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->