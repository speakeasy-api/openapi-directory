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

    req := operations.AccountListNodeAgentSkusRequest{
        QueryParams: operations.AccountListNodeAgentSkusQueryParams{
            DollarFilter: "unde",
            APIVersion: "deserunt",
            Maxresults: 715190,
            Timeout: 844266,
        },
        Headers: operations.AccountListNodeAgentSkusHeaders{
            ClientRequestID: "id",
            OcpDate: "vero",
            ReturnClientRequestID: false,
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AccountListNodeAgentSkus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountListNodeAgentSkusResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->