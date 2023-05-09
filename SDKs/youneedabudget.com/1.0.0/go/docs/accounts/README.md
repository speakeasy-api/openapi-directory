# Accounts

## Overview

The accounts for a budget

### Available Operations

* [CreateAccount](#createaccount) - Create a new account
* [GetAccountByID](#getaccountbyid) - Single account
* [GetAccounts](#getaccounts) - Account list

## CreateAccount

Creates a new account

### Example Usage

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
                Balance: 423655,
                Name: "Doug Hoppe",
                Type: shared.AccountTypeEnumMedicalDebt,
            },
        },
        BudgetID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```

## GetAccountByID

Returns a single account

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
    res, err := s.Accounts.GetAccountByID(ctx, operations.GetAccountByIDRequest{
        AccountID: "f467cc87-96ed-4151-a05d-fc2ddf7cc78c",
        BudgetID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```

## GetAccounts

Returns all accounts

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
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        BudgetID: "dicta",
        LastKnowledgeOfServer: sdk.Int64(720633),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsResponse != nil {
        // handle response
    }
}
```
