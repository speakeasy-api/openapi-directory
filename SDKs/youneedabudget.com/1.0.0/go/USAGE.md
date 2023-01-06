<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAccountRequest{
        PathParams: operations.CreateAccountPathParams{
            BudgetID: "repellat",
        },
        Request: shared.SaveAccountWrapper{
            Account: shared.SaveAccount{
                Balance: 2062512057044578664,
                Name: "praesentium",
                Type: "savings",
            },
        },
    }
    
    res, err := s.Accounts.CreateAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->