# Months

## Overview

Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.

### Available Operations

* [GetBudgetMonth](#getbudgetmonth) - Single budget month
* [GetBudgetMonths](#getbudgetmonths) - List budget months

## GetBudgetMonth

Returns a single budget month

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Months.GetBudgetMonth(ctx, operations.GetBudgetMonthRequest{
        BudgetID: "occaecati",
        Month: types.MustDateFromString("2022-03-25"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonthDetailResponse != nil {
        // handle response
    }
}
```

## GetBudgetMonths

Returns all budget months

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
    res, err := s.Months.GetBudgetMonths(ctx, operations.GetBudgetMonthsRequest{
        BudgetID: "explicabo",
        LastKnowledgeOfServer: sdk.Int64(376226),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonthSummariesResponse != nil {
        // handle response
    }
}
```
