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
                AccountName: "aliquam",
                AccountNumber: "est",
                AccountType: "debitis",
                Address: &shared.AccountAddress{
                    Address1: "eligendi",
                    Address2: "vero",
                    Address3: "molestiae",
                    City: "occaecati",
                    Country: "sed",
                    SourceType: "fuga",
                    State: "voluptatum",
                    Street: "aliquam",
                    Type: "OFFICE",
                    Zip: "repellat",
                },
                AmountDue: &shared.Money{
                    Amount: 82.099998,
                    Currency: "INR",
                },
                Balance: &shared.Money{
                    Amount: 24.200001,
                    Currency: "MYR",
                },
                DueDate: "officiis",
                Frequency: "EBILL",
                HomeValue: &shared.Money{
                    Amount: 39.200001,
                    Currency: "CAD",
                },
                IncludeInNetWorth: "tempora",
                Memo: "excepturi",
                Nickname: "voluptatem",
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