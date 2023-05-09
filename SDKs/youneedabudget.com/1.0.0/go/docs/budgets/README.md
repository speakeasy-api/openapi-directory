# Budgets

### Available Operations

* [GetBudgetByID](#getbudgetbyid) - Single budget
* [GetBudgetSettingsByID](#getbudgetsettingsbyid) - Budget Settings
* [GetBudgets](#getbudgets) - List budgets

## GetBudgetByID

Returns a single budget with all related entities.  This resource is effectively a full budget export.

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
    res, err := s.Budgets.GetBudgetByID(ctx, operations.GetBudgetByIDRequest{
        BudgetID: "officia",
        LastKnowledgeOfServer: sdk.Int64(582020),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetDetailResponse != nil {
        // handle response
    }
}
```

## GetBudgetSettingsByID

Returns settings for a budget

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
    res, err := s.Budgets.GetBudgetSettingsByID(ctx, operations.GetBudgetSettingsByIDRequest{
        BudgetID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetSettingsResponse != nil {
        // handle response
    }
}
```

## GetBudgets

Returns budgets list with summary information

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
    res, err := s.Budgets.GetBudgets(ctx, operations.GetBudgetsRequest{
        IncludeAccounts: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BudgetSummaryResponse != nil {
        // handle response
    }
}
```
