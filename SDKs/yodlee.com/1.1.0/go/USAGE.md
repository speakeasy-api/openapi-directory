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
                AccountName: "quasi",
                AccountNumber: "sit",
                AccountType: "voluptatem",
                Address: &shared.AccountAddress{
                    Address1: "laudantium",
                    Address2: "id",
                    Address3: "id",
                    City: "consequuntur",
                    Country: "eum",
                    SourceType: "ex",
                    State: "numquam",
                    Street: "et",
                    Type: "UNKNOWN",
                    Zip: "delectus",
                },
                AmountDue: &shared.Money{
                    Amount: 53.200001,
                    Currency: "BRL",
                },
                Balance: &shared.Money{
                    Amount: 36.099998,
                    Currency: "VND",
                },
                DueDate: "cumque",
                Frequency: "OTHER",
                HomeValue: &shared.Money{
                    Amount: 31.100000,
                    Currency: "CAD",
                },
                IncludeInNetWorth: "minima",
                Memo: "voluptatem",
                Nickname: "aperiam",
                ValuationType: "MANUAL",
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