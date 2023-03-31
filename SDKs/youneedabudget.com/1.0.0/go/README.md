# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/youneedabudget.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAccountRequest{
        PostAccountWrapper: shared.PostAccountWrapper{
            Account: shared.SaveAccount{
                Balance: 548814,
                Name: "provident",
                Type: "studentLoan",
            },
        },
        BudgetID: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.Accounts.CreateAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Accounts

* `CreateAccount` - Create a new account
* `GetAccountByID` - Single account
* `GetAccounts` - Account list

### Budgets

* `GetBudgetByID` - Single budget
* `GetBudgetSettingsByID` - Budget Settings
* `GetBudgets` - List budgets

### Categories

* `GetCategories` - List categories
* `GetCategoryByID` - Single category
* `GetMonthCategoryByID` - Single category for a specific budget month
* `UpdateMonthCategory` - Update a category for a specific month

### Deprecated

* `BulkCreateTransactions` - Bulk create transactions

### Months

* `GetBudgetMonth` - Single budget month
* `GetBudgetMonths` - List budget months

### PayeeLocations

* `GetPayeeLocationByID` - Single payee location
* `GetPayeeLocations` - List payee locations
* `GetPayeeLocationsByPayee` - List locations for a payee

### Payees

* `GetPayeeByID` - Single payee
* `GetPayees` - List payees

### ScheduledTransactions

* `GetScheduledTransactionByID` - Single scheduled transaction
* `GetScheduledTransactions` - List scheduled transactions

### Transactions

* `CreateTransaction` - Create a single transaction or multiple transactions
* `DeleteTransaction` - Deletes an existing transaction
* `GetTransactionByID` - Single transaction
* `GetTransactions` - List transactions
* `GetTransactionsByAccount` - List account transactions
* `GetTransactionsByCategory` - List category transactions
* `GetTransactionsByPayee` - List payee transactions
* `ImportTransactions` - Import transactions
* `UpdateTransaction` - Updates an existing transaction
* `UpdateTransactions` - Update multiple transactions

### User

* `GetUser` - User info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
