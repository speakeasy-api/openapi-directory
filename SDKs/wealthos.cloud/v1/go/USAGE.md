<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankAccounts.UpdateBankAccount(ctx, operations.UpdateBankAccountRequest{
        RequestBody: operations.UpdateBankAccountUpdateRequestBodyForBankAccount{
            AccountName: sdk.String("corrupti"),
            AccountStatus: operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnumInactive.ToPointer(),
            DefaultAccount: operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnumNo.ToPointer(),
            ReferenceVersion: 1,
        },
        BankAccountID: "quibusdam",
        XAPIKey: "unde",
    }, operations.UpdateBankAccountSecurity{
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