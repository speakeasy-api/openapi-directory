# Transactions

## Overview

The transactions for a budget

### Available Operations

* [CreateTransaction](#createtransaction) - Create a single transaction or multiple transactions
* [DeleteTransaction](#deletetransaction) - Deletes an existing transaction
* [GetTransactionByID](#gettransactionbyid) - Single transaction
* [GetTransactions](#gettransactions) - List transactions
* [GetTransactionsByAccount](#gettransactionsbyaccount) - List account transactions
* [GetTransactionsByCategory](#gettransactionsbycategory) - List category transactions
* [GetTransactionsByPayee](#gettransactionsbypayee) - List payee transactions
* [ImportTransactions](#importtransactions) - Import transactions
* [UpdateTransaction](#updatetransaction) - Updates an existing transaction
* [UpdateTransactions](#updatetransactions) - Update multiple transactions

## CreateTransaction

Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.

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
    res, err := s.Transactions.CreateTransaction(ctx, operations.CreateTransactionRequest{
        PostTransactionsWrapper: shared.PostTransactionsWrapper{
            Transaction: &shared.SaveTransaction{
                AccountID: "dac7af51-5cc4-413a-a63a-ae8d67864dbb",
                Amount: 414857,
                Approved: sdk.Bool(false),
                CategoryID: sdk.String("75fd5e60-b375-4ed4-b6fb-ee41f33317fe"),
                Cleared: shared.SaveTransactionClearedEnumCleared.ToPointer(),
                Date: types.MustDateFromString("2022-04-24"),
                FlagColor: shared.SaveTransactionFlagColorEnumYellow.ToPointer(),
                ImportID: sdk.String("ipsa"),
                Memo: sdk.String("voluptates"),
                PayeeID: sdk.String("b1ea4265-55ba-43c2-8744-ed53b88f3a8d"),
                PayeeName: sdk.String("totam"),
                Subtransactions: []shared.SaveSubTransaction{
                    shared.SaveSubTransaction{
                        Amount: 348783,
                        CategoryID: sdk.String("c0b2f2fb-7b19-44a2-b6b2-6916fe1f08f4"),
                        Memo: sdk.String("sed"),
                        PayeeID: sdk.String("94e3698f-447f-4603-a8b4-45e80ca55efd"),
                        PayeeName: sdk.String("magni"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 48690,
                        CategoryID: sdk.String("e457e185-8b6a-489f-be3a-5aa8e4824d0a"),
                        Memo: sdk.String("expedita"),
                        PayeeID: sdk.String("4075088e-5186-4206-9e90-4f3b1194b8ab"),
                        PayeeName: sdk.String("tenetur"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 388867,
                        CategoryID: sdk.String("03a79f9d-fe0a-4b7d-a8a5-0ce187f86bc1"),
                        Memo: sdk.String("esse"),
                        PayeeID: sdk.String("3d689eee-9526-4f8d-986e-881ead4f0e10"),
                        PayeeName: sdk.String("beatae"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 174772,
                        CategoryID: sdk.String("563f94e2-9e97-43e9-a2a5-7a15be3e0608"),
                        Memo: sdk.String("quae"),
                        PayeeID: sdk.String("7e2b6e3a-b884-45f0-997a-60ff2a54a31e"),
                        PayeeName: sdk.String("omnis"),
                    },
                },
            },
            Transactions: []shared.SaveTransaction{
                shared.SaveTransaction{
                    AccountID: "764a3e86-5e79-456f-9251-a5a9da660ff5",
                    Amount: 448143,
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("bfaad4f9-efc1-4b45-92c1-032648dc2f61"),
                    Cleared: shared.SaveTransactionClearedEnumCleared.ToPointer(),
                    Date: types.MustDateFromString("2022-06-02"),
                    FlagColor: shared.SaveTransactionFlagColorEnumBlue.ToPointer(),
                    ImportID: sdk.String("earum"),
                    Memo: sdk.String("soluta"),
                    PayeeID: sdk.String("fd0e9fe6-c632-4ca3-aed0-117996312fde"),
                    PayeeName: sdk.String("ipsa"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 470621,
                            CategoryID: sdk.String("71778ff6-1d01-4747-a360-a15db6a66065"),
                            Memo: sdk.String("iste"),
                            PayeeID: sdk.String("a1adeaab-5851-4d6c-a45b-08b61891baa0"),
                            PayeeName: sdk.String("sapiente"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 889288,
                            CategoryID: sdk.String("1ade008e-6f8c-45f3-90d8-cdb5a3418143"),
                            Memo: sdk.String("consequatur"),
                            PayeeID: sdk.String("10421813-d520-48ec-a7e2-53b668451c6c"),
                            PayeeName: sdk.String("laboriosam"),
                        },
                    },
                },
                shared.SaveTransaction{
                    AccountID: "e205e16d-eab3-4fec-9578-a64584273a84",
                    Amount: 97493,
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("8d162309-fb09-4299-a1ae-fb9f58c4d86e"),
                    Cleared: shared.SaveTransactionClearedEnumUncleared.ToPointer(),
                    Date: types.MustDateFromString("2021-02-16"),
                    FlagColor: shared.SaveTransactionFlagColorEnumOrange.ToPointer(),
                    ImportID: sdk.String("nam"),
                    Memo: sdk.String("vero"),
                    PayeeID: sdk.String("056013f5-9da7-457a-99ec-fef66ef1caa3"),
                    PayeeName: sdk.String("velit"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 216457,
                            CategoryID: sdk.String("c2beb477-373c-48d7-af64-d1db1f2c4310"),
                            Memo: sdk.String("vel"),
                            PayeeID: sdk.String("61e96349-e1cf-49e0-ae3a-437000ae6b6b"),
                            PayeeName: sdk.String("placeat"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 596065,
                            CategoryID: sdk.String("b8f759ea-c55a-4974-9d31-1352965bb8a7"),
                            Memo: sdk.String("fugit"),
                            PayeeID: sdk.String("02611435-e139-4dbc-a259-b1abda8c070e"),
                            PayeeName: sdk.String("inventore"),
                        },
                        shared.SaveSubTransaction{
                            Amount: 49348,
                            CategoryID: sdk.String("84cb0672-d1ad-4879-aeb9-665b85efbd02"),
                            Memo: sdk.String("quidem"),
                            PayeeID: sdk.String("ae0be2d7-8225-49e3-aa4b-5197f92443da"),
                            PayeeName: sdk.String("dignissimos"),
                        },
                    },
                },
            },
        },
        BudgetID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveTransactionsResponse != nil {
        // handle response
    }
}
```

## DeleteTransaction

Deletes a transaction

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.DeleteTransaction(ctx, operations.DeleteTransactionRequest{
        BudgetID: "necessitatibus",
        TransactionID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionResponse != nil {
        // handle response
    }
}
```

## GetTransactionByID

Returns a single transaction

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionByID(ctx, operations.GetTransactionByIDRequest{
        BudgetID: "qui",
        TransactionID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionResponse != nil {
        // handle response
    }
}
```

## GetTransactions

Returns budget transactions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, operations.GetTransactionsRequest{
        BudgetID: "voluptatum",
        LastKnowledgeOfServer: sdk.Int64(587375),
        SinceDate: types.MustDateFromString("2022-03-11"),
        Type: operations.GetTransactionsTypeEnumUncategorized.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsResponse != nil {
        // handle response
    }
}
```

## GetTransactionsByAccount

Returns all transactions for a specified account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionsByAccount(ctx, operations.GetTransactionsByAccountRequest{
        AccountID: "neque",
        BudgetID: "in",
        LastKnowledgeOfServer: sdk.Int64(796397),
        SinceDate: types.MustDateFromString("2022-09-25"),
        Type: operations.GetTransactionsByAccountTypeEnumUncategorized.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsResponse != nil {
        // handle response
    }
}
```

## GetTransactionsByCategory

Returns all transactions for a specified category

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionsByCategory(ctx, operations.GetTransactionsByCategoryRequest{
        BudgetID: "magnam",
        CategoryID: "voluptates",
        LastKnowledgeOfServer: sdk.Int64(978173),
        SinceDate: types.MustDateFromString("2022-11-28"),
        Type: operations.GetTransactionsByCategoryTypeEnumUnapproved.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HybridTransactionsResponse != nil {
        // handle response
    }
}
```

## GetTransactionsByPayee

Returns all transactions for a specified payee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionsByPayee(ctx, operations.GetTransactionsByPayeeRequest{
        BudgetID: "ratione",
        LastKnowledgeOfServer: sdk.Int64(289913),
        PayeeID: "totam",
        SinceDate: types.MustDateFromString("2022-04-01"),
        Type: operations.GetTransactionsByPayeeTypeEnumUnapproved.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HybridTransactionsResponse != nil {
        // handle response
    }
}
```

## ImportTransactions

Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.ImportTransactions(ctx, operations.ImportTransactionsRequest{
        BudgetID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsImportResponse != nil {
        // handle response
    }
}
```

## UpdateTransaction

Updates a single transaction

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
    res, err := s.Transactions.UpdateTransaction(ctx, operations.UpdateTransactionRequest{
        PutTransactionWrapper: shared.PutTransactionWrapper{
            Transaction: shared.SaveTransaction{
                AccountID: "ca5acfbe-2fd5-4707-9779-29177deac646",
                Amount: 888616,
                Approved: sdk.Bool(false),
                CategoryID: sdk.String("cb573409-e3eb-41e5-a2b1-2eb07f116db9"),
                Cleared: shared.SaveTransactionClearedEnumUncleared.ToPointer(),
                Date: types.MustDateFromString("2022-09-11"),
                FlagColor: shared.SaveTransactionFlagColorEnumYellow.ToPointer(),
                ImportID: sdk.String("doloribus"),
                Memo: sdk.String("eligendi"),
                PayeeID: sdk.String("95fa8897-0e18-49db-b30f-cb33ea055b19"),
                PayeeName: sdk.String("molestiae"),
                Subtransactions: []shared.SaveSubTransaction{
                    shared.SaveSubTransaction{
                        Amount: 820023,
                        CategoryID: sdk.String("44e2f52d-82d3-4513-bb6f-48b656bcdb35"),
                        Memo: sdk.String("voluptatibus"),
                        PayeeID: sdk.String("f2e4b275-37a8-4cd9-a731-9c177d525f77"),
                        PayeeName: sdk.String("libero"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 72350,
                        CategoryID: sdk.String("14eeb52f-f785-4fc3-b814-d4c98e0c2bb8"),
                        Memo: sdk.String("provident"),
                        PayeeID: sdk.String("eb75dad6-36c6-4005-83d8-bb31180f739a"),
                        PayeeName: sdk.String("necessitatibus"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 592880,
                        CategoryID: sdk.String("e057eb80-9e28-4103-b1f3-981d4c700b60"),
                        Memo: sdk.String("dignissimos"),
                        PayeeID: sdk.String("f3c93c73-b9da-43f2-8eda-7e23f2257411"),
                        PayeeName: sdk.String("hic"),
                    },
                    shared.SaveSubTransaction{
                        Amount: 644479,
                        CategoryID: sdk.String("f4b7544e-472e-4802-857a-5b40463a7d57"),
                        Memo: sdk.String("veniam"),
                        PayeeID: sdk.String("f1400e76-4ad7-4334-ac1b-781b36a08088"),
                        PayeeName: sdk.String("repellendus"),
                    },
                },
            },
        },
        BudgetID: "veritatis",
        TransactionID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionResponse != nil {
        // handle response
    }
}
```

## UpdateTransactions

Updates multiple transactions, by `id` or `import_id`.

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
    res, err := s.Transactions.UpdateTransactions(ctx, operations.UpdateTransactionsRequest{
        PatchTransactionsWrapper: shared.PatchTransactionsWrapper{
            Transactions: []shared.SaveTransactionWithID{
                shared.SaveTransactionWithID{
                    AccountID: sdk.String("efada200-ef04-422e-b216-4cf9ab8366c7"),
                    Amount: sdk.Int64(140957),
                    Approved: sdk.Bool(false),
                    CategoryID: sdk.String("3ffda9e0-6bee-4482-9c1f-c0e115c80bff"),
                    Cleared: shared.SaveTransactionWithIDClearedEnumUncleared.ToPointer(),
                    Date: types.MustDateFromString("2022-06-13"),
                    FlagColor: shared.SaveTransactionWithIDFlagColorEnumYellow.ToPointer(),
                    ID: sdk.String("44ec42de-fcce-48f1-9777-73e63562a7b4"),
                    ImportID: sdk.String("ipsa"),
                    Memo: sdk.String("rem"),
                    PayeeID: sdk.String("f05e3d48-fdaf-4313-a1f5-fd94259c0b36"),
                    PayeeName: sdk.String("sapiente"),
                    Subtransactions: []shared.SaveSubTransaction{
                        shared.SaveSubTransaction{
                            Amount: 330440,
                            CategoryID: sdk.String("ea944f3b-756c-411f-ac37-a5126243835b"),
                            Memo: sdk.String("facilis"),
                            PayeeID: sdk.String("c05a23a4-5cef-4c5f-9e10-a0ce2169e510"),
                            PayeeName: sdk.String("perferendis"),
                        },
                    },
                },
            },
        },
        BudgetID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveTransactionsResponse != nil {
        // handle response
    }
}
```
