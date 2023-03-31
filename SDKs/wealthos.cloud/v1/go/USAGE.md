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
        RequestBody: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: "corrupti",
            AccountStatus: "inactive",
            DefaultAccount: "no",
            ReferenceVersion: 1,
        },
        BankAccountID: "quibusdam",
        XAPIKey: "unde",
    }

    ctx := context.Background()
    res, err := s.BankAccounts.UpdateBankAccount(ctx, req, operations.UpdateBankAccountSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBankAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->