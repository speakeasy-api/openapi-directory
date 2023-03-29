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
    s := sdk.New()

    req := operations.UpdateBankAccountRequest{
        Security: operations.UpdateBankAccountSecurity{
            APISecretKey: shared.SchemeAPISecretKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.UpdateBankAccountPathParams{
            BankAccountID: "unde",
        },
        Headers: operations.UpdateBankAccountHeaders{
            XAPIKey: "deserunt",
        },
        Request: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: "porro",
            AccountStatus: "inactive",
            DefaultAccount: "no",
            ReferenceVersion: 1,
        },
    }

    ctx := context.Background()
    res, err := s.BankAccounts.UpdateBankAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBankAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->