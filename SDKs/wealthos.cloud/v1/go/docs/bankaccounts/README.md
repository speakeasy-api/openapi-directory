# BankAccounts

## Overview

The Bank Account endpoint allows a wealth manager to create, update and retrieve the bank account details of an investor. An investor can have one or more bank accounts within the system and a default bank account should always be configured. 

Every bank account has an account status that represents the `active` or `inactive` status of an account. Only `active` bank accounts can be used for any transactions in the system.

### Available Operations

* [UpdateBankAccount](#updatebankaccount) - Update existing bank account details
* [CreateBankAccount](#createbankaccount) - Create new bank account
* [GetAllBankAccounts](#getallbankaccounts) - Retrieve all the bank accounts of a particular investor
* [GetBankAccount](#getbankaccount) - Retrieve existing bank account from bank account id

## UpdateBankAccount

Update an existing Bank Account. WealthOS will update only the fields sent in the request.

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
    res, err := s.BankAccounts.UpdateBankAccount(ctx, operations.UpdateBankAccountRequest{
        RequestBody: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: sdk.String("nulla"),
            AccountStatus: operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnumInactive.ToPointer(),
            DefaultAccount: operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnumNo.ToPointer(),
            ReferenceVersion: 1,
        },
        BankAccountID: "vel",
        XAPIKey: "error",
    }, operations.UpdateBankAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBankAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateBankAccount

Create new bank account

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
    res, err := s.BankAccounts.CreateBankAccount(ctx, operations.CreateBankAccountRequest{
        RequestBody: &operations.CreateBankAccountRequestBodyInput{
            AccountName: "deserunt",
            AccountStatus: operations.CreateBankAccountRequestBodyAccountStatusEnumActive.ToPointer(),
            BankAccountNumber: "iure",
            BuildingSocietyRollNumber: sdk.String("magnam"),
            DefaultAccount: operations.CreateBankAccountRequestBodyDefaultAccountEnumNo,
            InvestorID: "ipsa",
            SortCode: sdk.String("delectus"),
        },
        XAPIKey: "tempora",
    }, operations.CreateBankAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBankAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllBankAccounts

Retrieve all the bank accounts of a particular investor

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
    res, err := s.BankAccounts.GetAllBankAccounts(ctx, operations.GetAllBankAccountsRequest{
        InvestorID: sdk.String("suscipit"),
        XAPIKey: "molestiae",
    }, operations.GetAllBankAccountsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllBankAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBankAccount

Retrieve existing bank account from bank account id

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
    res, err := s.BankAccounts.GetBankAccount(ctx, operations.GetBankAccountRequest{
        BankAccountID: "minus",
        XAPIKey: "placeat",
    }, operations.GetBankAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBankAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```
