# Categories

## Overview

The categories for a budget

### Available Operations

* [GetCategories](#getcategories) - List categories
* [GetCategoryByID](#getcategorybyid) - Single category
* [GetMonthCategoryByID](#getmonthcategorybyid) - Single category for a specific budget month
* [UpdateMonthCategory](#updatemonthcategory) - Update a category for a specific month

## GetCategories

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

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
    res, err := s.Categories.GetCategories(ctx, operations.GetCategoriesRequest{
        BudgetID: "deleniti",
        LastKnowledgeOfServer: sdk.Int64(944669),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoriesResponse != nil {
        // handle response
    }
}
```

## GetCategoryByID

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

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
    res, err := s.Categories.GetCategoryByID(ctx, operations.GetCategoryByIDRequest{
        BudgetID: "optio",
        CategoryID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryResponse != nil {
        // handle response
    }
}
```

## GetMonthCategoryByID

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

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
    res, err := s.Categories.GetMonthCategoryByID(ctx, operations.GetMonthCategoryByIDRequest{
        BudgetID: "beatae",
        CategoryID: "commodi",
        Month: types.MustDateFromString("2022-09-26"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryResponse != nil {
        // handle response
    }
}
```

## UpdateMonthCategory

Update a category for a specific month.  Only `budgeted` amount can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.UpdateMonthCategory(ctx, operations.UpdateMonthCategoryRequest{
        PatchMonthCategoryWrapper: shared.PatchMonthCategoryWrapper{
            Category: shared.SaveMonthCategory{
                Budgeted: 186332,
            },
        },
        BudgetID: "impedit",
        CategoryID: "cum",
        Month: types.MustDateFromString("2022-10-13"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveCategoryResponse != nil {
        // handle response
    }
}
```
