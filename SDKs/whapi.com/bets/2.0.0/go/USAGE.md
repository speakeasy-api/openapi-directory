<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CashinRequest{
        PathParams: operations.CashinPathParams{
            BetID: "sit",
        },
        QueryParams: operations.CashinQueryParams{
            CashInValue: 14.200000,
            CashinBetDelayID: "expedita",
        },
        Headers: operations.CashinHeaders{
            APIKey: "consequuntur",
            APISecret: "dolor",
            APITicket: "expedita",
        },
    }
    
    res, err := s.Bets.Cashin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CashInResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->