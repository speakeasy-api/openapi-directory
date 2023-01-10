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
            BudgetID: "quo",
        },
        Request: shared.SaveAccountWrapper{
            Account: shared.SaveAccount{
                Balance: 1779878049279090778,
                Name: "quos",
                Type: "otherAsset",
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