# Fees

## Overview

<!-- <div class="warning" style='padding:0.1em; background-color:#FEEFB3; color:#9F6000;'>
    <span>
        <p style='margin-top:0.9em;margin-bottom:0.9em;margin-left:1em; text-align:left'>
            <b>ⓘ</b> This feature is currently in BETA mode
        </p>
    </span>
</div>

The Fees endpoints allow a wealth manager to manage fees in terms of creating and charging an external fee or retrieving information on fee configurations setup in the system for recurring fee computations. -->

The Fees endpoint allows a wealth manager to charge an externally calculated or derived fee from an investor's pot.

### Available Operations

* [CreateFee](#createfee) - Create Fee

## CreateFee

This endpoint supports the creation of a single fee deduction from an investor's pot. A sucessful fee creation will result in the creation of a fee transaction and updates to holdings. The system will return the `transaction_id` of the fee transaction.

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
    res, err := s.Fees.CreateFee(ctx, operations.CreateFeeRequest{
        RequestBody: operations.CreateFeeRootTypeForFee{
            Currency: "USD",
            PotID: "pt-example-house-pot",
            RequestID: "8796ed15-1a05-4dfc-addf-7cc78ca1ba92",
            SubTransactionType: operations.CreateFeeRootTypeForFeeSubTransactionTypeEnumCustodyFees,
            TransactionValue: "123.45",
        },
        XAPIKey: "deleniti",
    }, operations.CreateFeeSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RootTypeForFeeCreationResponse != nil {
        // handle response
    }
}
```
