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
            DollarFilter: "ullam",
            APIVersion: "molestiae",
            Maxresults: 5455421402781199366,
            Timeout: 5856774363804732947,
        },
        Headers: operations.AccountListNodeAgentSkusHeaders{
            ClientRequestID: "et",
            OcpDate: "ab",
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