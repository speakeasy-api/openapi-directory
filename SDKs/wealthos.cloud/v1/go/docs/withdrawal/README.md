# Withdrawal

## Overview

The Withdrawal endpoint allows an investor to withdraw money from one of his/her pots.

### Available Operations

* [CreateWithdrawal](#createwithdrawal) - Create Withdrawal

## CreateWithdrawal

This endpoint supports the creation of a single withdrawal from an investor's pot. A sucessful withdrawal creation will result in the creation of a withdrawal transaction and updates to holdings. The system will return the `transaction_id`, `transaction_value`, `pot_id`, `sub_transaction_type` and `transaction_status` of the withdrawal transaction.

### Example Usage

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
    res, err := s.Withdrawal.CreateWithdrawal(ctx, operations.CreateWithdrawalRequest{
        RequestBody: operations.CreateWithdrawalRootTypeForWithdrawal{
            BankAccountID: "ba-example-bank-account",
            Currency: "USD",
            PotID: "pt-example-house-pot",
            RequestID: "f222e981-7ee1-47cb-a61e-6b7b95bc0ab3",
            SubTransactionType: operations.CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnumWithdrawal,
            TransactionValue: "123.45",
        },
        XAPIKey: "cumque",
    }, operations.CreateWithdrawalSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForWithdrawalCreationResponse != nil {
        // handle response
    }
}
```
