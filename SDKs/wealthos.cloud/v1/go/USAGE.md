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
    
    req := operations.UpdateBankAccountRequest{
        Security: operations.UpdateBankAccountSecurity{
            APISecretKey: shared.SchemeAPISecretKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.UpdateBankAccountPathParams{
            BankAccountID: "magnam",
        },
        Headers: operations.UpdateBankAccountHeaders{
            XAPIKey: "quia",
        },
        Request: "consequuntur",
    }
    
    res, err := s.BankAccounts.UpdateBankAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBankAccount201ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->