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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.CreateAccount(ctx, operations.CreateAccountRequest{
        PostAccountWrapper: shared.PostAccountWrapper{
            Account: shared.SaveAccount{
                Balance: 548814,
                Name: "Kelvin Sporer",
                Type: shared.AccountTypeEnumMortgage,
            },
        },
        BudgetID: "illum",
    })
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


### [Accounts](docs/accounts/README.md)

* [CreateAccount](docs/accounts/README.md#createaccount) - Create a new account
* [GetAccountByID](docs/accounts/README.md#getaccountbyid) - Single account
* [GetAccounts](docs/accounts/README.md#getaccounts) - Account list

### [Budgets](docs/budgets/README.md)

* [GetBudgetByID](docs/budgets/README.md#getbudgetbyid) - Single budget
* [GetBudgetSettingsByID](docs/budgets/README.md#getbudgetsettingsbyid) - Budget Settings
* [GetBudgets](docs/budgets/README.md#getbudgets) - List budgets

### [Categories](docs/categories/README.md)

* [GetCategories](docs/categories/README.md#getcategories) - List categories
* [GetCategoryByID](docs/categories/README.md#getcategorybyid) - Single category
* [GetMonthCategoryByID](docs/categories/README.md#getmonthcategorybyid) - Single category for a specific budget month
* [UpdateMonthCategory](docs/categories/README.md#updatemonthcategory) - Update a category for a specific month

### [Deprecated](docs/deprecated/README.md)

* [BulkCreateTransactions](docs/deprecated/README.md#bulkcreatetransactions) - Bulk create transactions

### [Months](docs/months/README.md)

* [GetBudgetMonth](docs/months/README.md#getbudgetmonth) - Single budget month
* [GetBudgetMonths](docs/months/README.md#getbudgetmonths) - List budget months

### [PayeeLocations](docs/payeelocations/README.md)

* [GetPayeeLocationByID](docs/payeelocations/README.md#getpayeelocationbyid) - Single payee location
* [GetPayeeLocations](docs/payeelocations/README.md#getpayeelocations) - List payee locations
* [GetPayeeLocationsByPayee](docs/payeelocations/README.md#getpayeelocationsbypayee) - List locations for a payee

### [Payees](docs/payees/README.md)

* [GetPayeeByID](docs/payees/README.md#getpayeebyid) - Single payee
* [GetPayees](docs/payees/README.md#getpayees) - List payees

### [ScheduledTransactions](docs/scheduledtransactions/README.md)

* [GetScheduledTransactionByID](docs/scheduledtransactions/README.md#getscheduledtransactionbyid) - Single scheduled transaction
* [GetScheduledTransactions](docs/scheduledtransactions/README.md#getscheduledtransactions) - List scheduled transactions

### [Transactions](docs/transactions/README.md)

* [CreateTransaction](docs/transactions/README.md#createtransaction) - Create a single transaction or multiple transactions
* [DeleteTransaction](docs/transactions/README.md#deletetransaction) - Deletes an existing transaction
* [GetTransactionByID](docs/transactions/README.md#gettransactionbyid) - Single transaction
* [GetTransactions](docs/transactions/README.md#gettransactions) - List transactions
* [GetTransactionsByAccount](docs/transactions/README.md#gettransactionsbyaccount) - List account transactions
* [GetTransactionsByCategory](docs/transactions/README.md#gettransactionsbycategory) - List category transactions
* [GetTransactionsByPayee](docs/transactions/README.md#gettransactionsbypayee) - List payee transactions
* [ImportTransactions](docs/transactions/README.md#importtransactions) - Import transactions
* [UpdateTransaction](docs/transactions/README.md#updatetransaction) - Updates an existing transaction
* [UpdateTransactions](docs/transactions/README.md#updatetransactions) - Update multiple transactions

### [User](docs/user/README.md)

* [GetUser](docs/user/README.md#getuser) - User info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
