# GiftCard

### Available Operations

* [CreateGiftCard](#creategiftcard) - Create GiftCard
* [GetGiftCardbyID](#getgiftcardbyid) - Get GiftCard by ID
* [GetGiftCardusingJSON](#getgiftcardusingjson) - Get GiftCard using JSON

## CreateGiftCard

Creates a GiftCard for a specific user

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
    res, err := s.GiftCard.CreateGiftCard(ctx, operations.CreateGiftCardRequest{
        Accept: "unde",
        ContentType: "nulla",
        CreateGiftCardRequest: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: sdk.Bool(false),
            MultipleRedemptions: sdk.Bool(false),
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: sdk.Bool(false),
        },
        XVTEXAPIAppKey: "corrupti",
        XVTEXAPIAppToken: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## GetGiftCardbyID

Returns associated data for a specified giftcardId.

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
    res, err := s.GiftCard.GetGiftCardbyID(ctx, operations.GetGiftCardbyIDRequest{
        Accept: "vel",
        ContentType: "error",
        GiftCardID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## GetGiftCardusingJSON

Returns the giftcards based on the cart data.

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
    res, err := s.GiftCard.GetGiftCardusingJSON(ctx, operations.GetGiftCardusingJSONRequest{
        Accept: "suscipit",
        ContentType: "iure",
        GetGiftCardusingJSONRequest: shared.GetGiftCardusingJSONRequest{
            Cart: shared.Cart{
                Discounts: 297534,
                GrandTotal: 8917.73,
                Items: []shared.Item{
                    shared.Item{
                        ID: "f467cc87-96ed-4151-a05d-fc2ddf7cc78c",
                        Name: "Samuel Reichel",
                        Price: 143353,
                        ProductID: "deleniti",
                        Quantity: 944669,
                        RefID: "optio",
                    },
                },
                ItemsTotal: 521848,
                RedemptionCode: "beatae",
                RelationName: "commodi",
                Shipping: 473600,
                Taxes: 264555,
            },
            Client: shared.Client{
                Document: "qui",
                Email: "Myra56@hotmail.com",
                ID: "20592939-6fea-4759-aeb1-0faaa2352c59",
            },
        },
        RESTRange: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response2 != nil {
        // handle response
    }
}
```
