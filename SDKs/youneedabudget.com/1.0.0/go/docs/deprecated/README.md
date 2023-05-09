# Deprecated

### Available Operations

* [BulkCreateTransactions](#bulkcreatetransactions) - Bulk create transactions

## BulkCreateTransactions

Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Deprecated.BulkCreateTransactions(ctx, operations.BulkCreateTransactionsRequest{
        BulkTransactions: shared.BulkTransactions{
            Transactions: []shared.SaveTransaction{
                shared.SaveTransaction{
                    AccountID: "20592939-6fea-4759-aeb1-0faaa2352c59",
                    Amount: 363711,
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("5907aff1-a3a2-4fa9-8677-39251aa52c3f"),
                    Cleared: shared.SaveTransactionClearedEnumUncleared.ToPointer(),
                    Date: types.MustDateFromString("2021-05-11"),
                    FlagColor: shared.SaveTransactionFlagColorEnumRed.ToPointer(),
                    ImportID: sdk.String("quasi"),
                    Memo: sdk.String("error"),
                    PayeeID: sdk.String("da1ffe78-f097-4b00-b4f1-5471b5e6e13b"),
                    PayeeName: sdk.String("molestias"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 865103,
                            CategoryID: sdk.String("488e1e91-e450-4ad2-abd4-4269802d502a"),
                            Memo: sdk.String("excepturi"),
                            PayeeID: sdk.String("4bb4f63c-969e-49a3-afa7-7dfb14cd66ae"),
                            PayeeName: sdk.String("non"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 581273,
                            CategoryID: sdk.String("5efb9ba8-8f3a-4669-9707-4ba4469b6e21"),
                            Memo: sdk.String("magnam"),
                            PayeeID: sdk.String("1959890a-fa56-43e2-916f-e4c8b711e5b7"),
                            PayeeName: sdk.String("repellat"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 841140,
                            CategoryID: sdk.String("2ed02892-1cdd-4c69-a601-fb576b0d5f0d"),
                            Memo: sdk.String("amet"),
                            PayeeID: sdk.String("0c5fbb25-8705-4320-ac73-d5fe9b90c289"),
                            PayeeName: sdk.String("eaque"),
                        },
                    },
                },
                shared.SaveTransaction{
                    AccountID: "9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4",
                    Amount: 85295,
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("00674ebf-6928-40d1-ba77-a89ebf737ae4"),
                    Cleared: shared.SaveTransactionClearedEnumCleared.ToPointer(),
                    Date: types.MustDateFromString("2022-10-09"),
                    FlagColor: shared.SaveTransactionFlagColorEnumPurple.ToPointer(),
                    ImportID: sdk.String("accusamus"),
                    Memo: sdk.String("ad"),
                    PayeeID: sdk.String("e6a95d8a-0d44-46ce-aaf7-a73cf3be453f"),
                    PayeeName: sdk.String("totam"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 25662,
                            CategoryID: sdk.String("b326b5a7-3429-4cdb-9a84-22bb679d2322"),
                            Memo: sdk.String("odio"),
                            PayeeID: sdk.String("15bf0cbb-1e31-4b8b-90f3-443a1108e0ad"),
                            PayeeName: sdk.String("porro"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 984330,
                            CategoryID: sdk.String("4b921879-fce9-453f-b3ef-7fbc7abd74dd"),
                            Memo: sdk.String("sequi"),
                            PayeeID: sdk.String("9c0f5d2c-ff7c-470a-8562-6d436813f16d"),
                            PayeeName: sdk.String("excepturi"),
                        },
                    },
                },
                shared.SaveTransaction{
                    AccountID: "f5fce6c5-5614-46c3-a250-fb008c42e141",
                    Amount: 677412,
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("ac366c8d-d6b1-4442-9074-74778a7bd466"),
                    Cleared: shared.SaveTransactionClearedEnumReconciled.ToPointer(),
                    Date: types.MustDateFromString("2022-06-29"),
                    FlagColor: shared.SaveTransactionFlagColorEnumPurple.ToPointer(),
                    ImportID: sdk.String("veritatis"),
                    Memo: sdk.String("ipsa"),
                    PayeeID: sdk.String("ab3cdca4-2519-404e-923c-7e0bc7178e47"),
                    PayeeName: sdk.String("occaecati"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 959434,
                            CategoryID: sdk.String("2a70c688-282a-4a48-a562-f222e9817ee1"),
                            Memo: sdk.String("esse"),
                            PayeeID: sdk.String("cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8"),
                            PayeeName: sdk.String("esse"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 97468,
                            CategoryID: sdk.String("f99dd2ef-d121-4aa6-b1e6-74bdb04f1575"),
                            Memo: sdk.String("nisi"),
                            PayeeID: sdk.String("082d68ea-19f1-4d17-8513-39d08086a184"),
                            PayeeName: sdk.String("voluptatem"),
                        },
                    },
                },
            },
        },
        BudgetID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkResponse != nil {
        // handle response
    }
}
```
