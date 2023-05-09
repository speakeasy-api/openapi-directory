# ScheduledTransactions

## Overview

The scheduled transactions for a budget

### Available Operations

* [GetScheduledTransactionByID](#getscheduledtransactionbyid) - Single scheduled transaction
* [GetScheduledTransactions](#getscheduledtransactions) - List scheduled transactions

## GetScheduledTransactionByID

Returns a single scheduled transaction

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ScheduledTransactions.GetScheduledTransactionByID(ctx, operations.GetScheduledTransactionByIDRequest{
        BudgetID: "aperiam",
        ScheduledTransactionID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledTransactionResponse != nil {
        // handle response
    }
}
```

## GetScheduledTransactions

Returns all scheduled transactions

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ScheduledTransactions.GetScheduledTransactions(ctx, operations.GetScheduledTransactionsRequest{
        BudgetID: "quaerat",
        LastKnowledgeOfServer: sdk.Int64(162954),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledTransactionsResponse != nil {
        // handle response
    }
}
```
