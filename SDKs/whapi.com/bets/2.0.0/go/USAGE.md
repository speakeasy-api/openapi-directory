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
            BetID: "molestiae",
        },
        QueryParams: operations.CashinQueryParams{
            CashInValue: 99.099998,
            CashinBetDelayID: "vel",
        },
        Headers: operations.CashinHeaders{
            APIKey: "officia",
            APISecret: "facere",
            APITicket: "at",
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