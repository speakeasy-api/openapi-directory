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
            BetID: "error",
        },
        QueryParams: operations.CashinQueryParams{
            CashInValue: 63.200001,
            CashinBetDelayID: "ut",
        },
        Headers: operations.CashinHeaders{
            APIKey: "necessitatibus",
            APISecret: "aut",
            APITicket: "cum",
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