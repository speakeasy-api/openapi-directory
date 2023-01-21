<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateManualAccountRequest{
        Request: shared.CreateAccountRequest{
            Account: shared.CreateAccountInfo{
                AccountName: "sit",
                AccountNumber: "voluptas",
                AccountType: "culpa",
                Address: &shared.AccountAddress{
                    Address1: "expedita",
                    Address2: "consequuntur",
                    Address3: "dolor",
                    City: "expedita",
                    Country: "voluptas",
                    SourceType: "fugit",
                    State: "et",
                    Street: "nihil",
                    Type: "UNKNOWN",
                    Zip: "dicta",
                },
                AmountDue: &shared.Money{
                    Amount: 48.099998,
                    Currency: "AUD",
                },
                Balance: &shared.Money{
                    Amount: 11.100000,
                    Currency: "CHF",
                },
                DueDate: "voluptate",
                Frequency: "FIRST_DAY_MONTHLY",
                HomeValue: &shared.Money{
                    Amount: 68.099998,
                    Currency: "HKD",
                },
                IncludeInNetWorth: "illum",
                Memo: "debitis",
                Nickname: "vel",
                ValuationType: "SYSTEM",
            },
        },
    }
    
    res, err := s.Accounts.CreateManualAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatedAccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->