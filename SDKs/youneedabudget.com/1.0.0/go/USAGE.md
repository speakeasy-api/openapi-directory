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