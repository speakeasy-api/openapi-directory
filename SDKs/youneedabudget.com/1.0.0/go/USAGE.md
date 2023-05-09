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