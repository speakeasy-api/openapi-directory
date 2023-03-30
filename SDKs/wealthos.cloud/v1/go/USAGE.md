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
            BankAccountID: "corrupti",
        },
        Headers: operations.UpdateBankAccountHeaders{
            XAPIKey: "provident",
        },
        Request: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: "distinctio",
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