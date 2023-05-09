# InvestorAccounts

## Overview

An investor account is designed to manage a group of pots attached to a single financial product. A user can maintain multiple accounts for a given financial product if the product regulations support this setup.

### Available Operations

* [GetAllinvestorAccounts](#getallinvestoraccounts) - Retrieve all the investor accounts
* [GetinvestorAccount](#getinvestoraccount) - Retrieve existing investor account from account id

## GetAllinvestorAccounts

Retrieve all the investor accounts

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
    res, err := s.InvestorAccounts.GetAllinvestorAccounts(ctx, operations.GetAllinvestorAccountsRequest{
        AccountID: sdk.String("dicta"),
        FinancialProductID: sdk.String("corporis"),
        InvestorID: sdk.String("dolore"),
        PageNumber: sdk.String("iusto"),
        PageSize: sdk.String("dicta"),
        Status: sdk.String("harum"),
        XAPIKey: "enim",
    }, operations.GetAllinvestorAccountsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllinvestorAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetinvestorAccount

Retrieve existing investor account from account id

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
    res, err := s.InvestorAccounts.GetinvestorAccount(ctx, operations.GetinvestorAccountRequest{
        AccountID: "accusamus",
        XAPIKey: "commodi",
    }, operations.GetinvestorAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetinvestorAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```
