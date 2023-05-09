# Accounts

### Available Operations

* [AccountListNodeAgentSkus](#accountlistnodeagentskus) - Lists all node agent SKUs supported by the Azure Batch service.

## AccountListNodeAgentSkus

Lists all node agent SKUs supported by the Azure Batch service.

### Example Usage

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
    res, err := s.Accounts.AccountListNodeAgentSkus(ctx, operations.AccountListNodeAgentSkusRequest{
        DollarFilter: sdk.String("corrupti"),
        APIVersion: "illum",
        ClientRequestID: sdk.String("vel"),
        Maxresults: sdk.Int(623564),
        OcpDate: sdk.String("deserunt"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(384382),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountListNodeAgentSkusResult != nil {
        // handle response
    }
}
```
