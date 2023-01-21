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
    
    req := operations.AccountListNodeAgentSkusRequest{
        QueryParams: operations.AccountListNodeAgentSkusQueryParams{
            DollarFilter: "sit",
            APIVersion: "voluptas",
            Maxresults: 6050128673802995827,
            Timeout: 501233450539197794,
        },
        Headers: operations.AccountListNodeAgentSkusHeaders{
            ClientRequestID: "consequuntur",
            OcpDate: "dolor",
            ReturnClientRequestID: true,
        },
    }
    
    res, err := s.Accounts.AccountListNodeAgentSkus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountListNodeAgentSkusResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->