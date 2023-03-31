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
        DollarFilter: "corrupti",
        APIVersion: "provident",
        ClientRequestID: "distinctio",
        Maxresults: 844266,
        OcpDate: "unde",
        ReturnClientRequestID: false,
        Timeout: 857946,
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