# Transaction

### Available Operations

* [CancelGiftCardTransaction](#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [CreateGiftCardTransaction](#creategiftcardtransaction) - Create GiftCard Transaction
* [GetGiftCardTransactionbyID](#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [GetGiftCardTransactions](#getgiftcardtransactions) - Get GiftCard Transactions
* [GetTransactionAuthorizations](#gettransactionauthorizations) - Get Transaction Authorizations
* [GetTransactionCancellations](#gettransactioncancellations) - Get Transaction Cancellations
* [GetTransactionSettlements](#gettransactionsettlements) - Get Transaction Settlements
* [SettleGiftCardTransaction](#settlegiftcardtransaction) - Settle GiftCard Transaction

## CancelGiftCardTransaction

Creates a cancellation in the transaction. Cancel a item reservation or create a refund.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.CancelGiftCardTransaction(ctx, operations.CancelGiftCardTransactionRequest{
        Accept: "minima",
        CancelGiftCardTransactionRequest: shared.CancelGiftCardTransactionRequest{
            RequestID: "excepturi",
            Value: 384.25,
        },
        ContentType: "iure",
        GiftCardID: "culpa",
        TransactionID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response6 != nil {
        // handle response
    }
}
```

## CreateGiftCardTransaction

Register a new giftcard transaction and authorize the item reservation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.CreateGiftCardTransaction(ctx, operations.CreateGiftCardTransactionRequest{
        Accept: "sapiente",
        ContentType: "architecto",
        CreateGiftCardTransactionRequest: &shared.CreateGiftCardTransactionRequest{
            Description: "mollitia",
            Operation: "dolorem",
            OrderInfo: &shared.OrderInfo{
                Cart: &shared.Cart1{
                    Discounts: 6350.59,
                    GrandTotal: 161309,
                    Items: []shared.Item2{
                        shared.Item2{
                            Discount: 6531.08,
                            ID: "94677392-51aa-452c-bf5a-d019da1ffe78",
                            Name: "Jose Moen",
                            Price: 199.87,
                            PriceTags: []shared.PriceTag{
                                shared.PriceTag{
                                    Name: "Mrs. April Wuckert",
                                    Value: 480894,
                                },
                            },
                            ProductID: "dicta",
                            Quantity: 688661,
                            RefID: "enim",
                            ShippingDiscount: 880476,
                            Value: 4142.63,
                        },
                        shared.Item2{
                            Discount: 9182.36,
                            ID: "13b99d48-8e1e-491e-850a-d2abd4426980",
                            Name: "Mr. Nadine Hills",
                            Price: 5696.18,
                            PriceTags: []shared.PriceTag{
                                shared.PriceTag{
                                    Name: "Geoffrey Green",
                                    Value: 248753,
                                },
                                shared.PriceTag{
                                    Name: "Sergio Hyatt",
                                    Value: 572252,
                                },
                            },
                            ProductID: "officia",
                            Quantity: 223081,
                            RefID: "debitis",
                            ShippingDiscount: 952749,
                            Value: 6800.56,
                        },
                        shared.Item2{
                            Discount: 4471.25,
                            ID: "7dfb14cd-66ae-4395-afb9-ba88f3a66997",
                            Name: "Marcia Gutkowski",
                            Price: 2879.91,
                            PriceTags: []shared.PriceTag{
                                shared.PriceTag{
                                    Name: "Ada Rohan",
                                    Value: 135474,
                                },
                                shared.PriceTag{
                                    Name: "Danielle Bosco",
                                    Value: 590873,
                                },
                            },
                            ProductID: "quos",
                            Quantity: 574325,
                            RefID: "accusantium",
                            ShippingDiscount: 653201,
                            Value: 9689.62,
                        },
                        shared.Item2{
                            Discount: 6521.03,
                            ID: "563e2516-fe4c-48b7-91e5-b7fd2ed02892",
                            Name: "Angelica Stanton",
                            Price: 4113.97,
                            PriceTags: []shared.PriceTag{
                                shared.PriceTag{
                                    Name: "Dr. Rosemary Bartoletti",
                                    Value: 373291,
                                },
                                shared.PriceTag{
                                    Name: "Dr. Stacey Reichert",
                                    Value: 975522,
                                },
                                shared.PriceTag{
                                    Name: "Miss Ginger Feeney",
                                    Value: 944124,
                                },
                            },
                            ProductID: "libero",
                            Quantity: 749999,
                            RefID: "dolores",
                            ShippingDiscount: 339404,
                            Value: 5210.37,
                        },
                    },
                    ItemsTotal: 4895.49,
                    Shipping: 543.38,
                    Taxes: 338985,
                },
                ClientProfile: &shared.ClientProfile{
                    BirthDate: "nesciunt",
                    Document: "eos",
                    Email: "Cecilia.Schimmel@gmail.com",
                    FirstName: "Seamus",
                    IsCorporate: false,
                    LastName: "Hegmann",
                    Phone: "967.607.1560 x56299",
                },
                OrderID: sdk.String("modi"),
                Sequence: sdk.Int(613966),
                Shipping: &shared.Shipping{
                    City: "Leuschkehaven",
                    Complement: "provident",
                    Country: "Saint Kitts and Nevis",
                    Neighborhood: "libero",
                    Number: "delectus",
                    PostalCode: "53222",
                    ReceiverName: "qui",
                    Reference: "ipsum",
                    State: "hic",
                    Street: "7449 Marina Flat",
                },
            },
            RedemptionCode: "veritatis",
            RedemptionToken: "ipsa",
            RequestID: "ipsa",
            Value: 4344.17,
        },
        GiftCardID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response3 != nil {
        // handle response
    }
}
```

## GetGiftCardTransactionbyID

Get GiftCard Transaction by ID

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.GetGiftCardTransactionbyID(ctx, operations.GetGiftCardTransactionbyIDRequest{
        Accept: "quaerat",
        ContentType: "accusamus",
        GiftCardID: "quidem",
        TransactionID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response5 != nil {
        // handle response
    }
}
```

## GetGiftCardTransactions

Returns all transaction of a giftcard.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.GetGiftCardTransactions(ctx, operations.GetGiftCardTransactionsRequest{
        Accept: "voluptas",
        ContentType: "natus",
        GiftCardID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response3s != nil {
        // handle response
    }
}
```

## GetTransactionAuthorizations

Returns the giftcard transaction authorizations.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.GetTransactionAuthorizations(ctx, operations.GetTransactionAuthorizationsRequest{
        Accept: "atque",
        ContentType: "sit",
        GiftCardID: "fugiat",
        TransactionID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response6 != nil {
        // handle response
    }
}
```

## GetTransactionCancellations

Returns the giftcard transaction cancellations.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.GetTransactionCancellations(ctx, operations.GetTransactionCancellationsRequest{
        Accept: "soluta",
        ContentType: "dolorum",
        GiftCardID: "iusto",
        TransactionID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response7s != nil {
        // handle response
    }
}
```

## GetTransactionSettlements

Returns the giftcard transaction settlements.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.GetTransactionSettlements(ctx, operations.GetTransactionSettlementsRequest{
        Accept: "dolorum",
        ContentType: "deleniti",
        GiftCardID: "omnis",
        TransactionID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response6s != nil {
        // handle response
    }
}
```

## SettleGiftCardTransaction

Creates a giftcard transaction settlement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transaction.SettleGiftCardTransaction(ctx, operations.SettleGiftCardTransactionRequest{
        Accept: "distinctio",
        ContentType: "asperiores",
        SettleGiftCardTransactionRequest: shared.SettleGiftCardTransactionRequest{
            RequestID: "nihil",
            Value: 2168.97,
        },
        GiftCardID: "voluptate",
        TransactionID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response6 != nil {
        // handle response
    }
}
```
