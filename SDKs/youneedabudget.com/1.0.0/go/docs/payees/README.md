# Payees

## Overview

The payees for a budget

### Available Operations

* [GetPayeeByID](#getpayeebyid) - Single payee
* [GetPayees](#getpayees) - List payees

## GetPayeeByID

Returns a single payee

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
    res, err := s.Payees.GetPayeeByID(ctx, operations.GetPayeeByIDRequest{
        BudgetID: "velit",
        PayeeID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeResponse != nil {
        // handle response
    }
}
```

## GetPayees

Returns all payees

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
    res, err := s.Payees.GetPayees(ctx, operations.GetPayeesRequest{
        BudgetID: "voluptas",
        LastKnowledgeOfServer: sdk.Int64(990345),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeesResponse != nil {
        // handle response
    }
}
```
