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
            Bearer: shared.SchemeBearer{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAccountRequest{
        PathParams: operations.CreateAccountPathParams{
            BudgetID: "unde",
        },
        Request: shared.PostAccountWrapper{
            Account: shared.SaveAccount{
                Balance: 592845,
                Name: "porro",
                Type: "personalLoan",
            },
        },
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