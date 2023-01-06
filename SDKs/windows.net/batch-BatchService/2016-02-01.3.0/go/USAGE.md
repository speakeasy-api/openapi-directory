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
            DollarFilter: "suscipit",
            APIVersion: "aut",
            Maxresults: 7399819931934343852,
            Timeout: 2948604740844354809,
        },
        Headers: operations.AccountListNodeAgentSkusHeaders{
            ClientRequestID: "officiis",
            OcpDate: "explicabo",
            ReturnClientRequestID: false,
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