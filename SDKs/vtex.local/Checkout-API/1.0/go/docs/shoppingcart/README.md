# ShoppingCart

### Available Operations

* [AddCoupons](#addcoupons) - Add coupons to the cart
* [CartSimulation](#cartsimulation) - Cart simulation
* [CreateANewCart](#createanewcart) - Get current or create a new cart
* [GetCartInformationByID](#getcartinformationbyid) - Get cart information by ID
* [GetCartInstallments](#getcartinstallments) - Cart installments
* [IgnoreProfileData](#ignoreprofiledata) - Ignore profile data
* [Items](#items) - Add cart items
* [ItemsUpdate](#itemsupdate) - Update cart items
* [PriceChange](#pricechange) - Change price
* [RemoveAllItems](#removeallitems) - Remove all items
* [Removeallpersonaldata](#removeallpersonaldata) - Remove all personal data

## AddCoupons

Use this request to add coupons to a given shopping cart.

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
    res, err := s.ShoppingCart.AddCoupons(ctx, operations.AddCouponsRequest{
        Accept: "hic",
        ContentType: "excepturi",
        RequestBody: operations.AddCouponsRequestBody{
            Text: sdk.String("cum"),
        },
        OrderFormID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCoupons200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CartSimulation

This endpoint is used to simulate a cart in VTEX Checkout.

It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.

It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.

This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.

**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.

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
    res, err := s.ShoppingCart.CartSimulation(ctx, operations.CartSimulationRequest{
        Accept: "dignissimos",
        ContentType: "reiciendis",
        RequestBody: &operations.CartSimulationRequestBody{
            Country: sdk.String("BRA"),
            GeoCoordinates: []float64{
                -47.924747467041016,
            },
            Items: []CartSimulationRequestBodyItems{
                operations.CartSimulationRequestBodyItems{
                    ID: sdk.String("1"),
                    Quantity: sdk.Int(1),
                    Seller: sdk.String("1"),
                },
                operations.CartSimulationRequestBodyItems{
                    ID: sdk.String("1"),
                    Quantity: sdk.Int(1),
                    Seller: sdk.String("1"),
                },
                operations.CartSimulationRequestBodyItems{
                    ID: sdk.String("1"),
                    Quantity: sdk.Int(1),
                    Seller: sdk.String("1"),
                },
            },
            PostalCode: sdk.String("12345-000"),
        },
        RnbBehavior: sdk.Int64(254356),
        Sc: sdk.Int64(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CartSimulation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateANewCart

You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.

**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.

> This request has a time out of 45 seconds.

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
    res, err := s.ShoppingCart.CreateANewCart(ctx, operations.CreateANewCartRequest{
        Accept: "veritatis",
        ContentType: "ipsa",
        ForceNewCart: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCartInformationByID

Use this request to get all information associated to a given shopping  cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

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
    res, err := s.ShoppingCart.GetCartInformationByID(ctx, operations.GetCartInformationByIDRequest{
        Accept: "ipsa",
        ContentType: "iure",
        OrderFormID: "odio",
        RefreshOutdatedData: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCartInstallments

Retrieves possible amount of installments and respective values for a given cart with a given payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

This endpoint can be used to get the installment options for only one payment method at a time.

This endpoint should be called only after the selected `orderForm` already has a `paymentData`.

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
    res, err := s.ShoppingCart.GetCartInstallments(ctx, operations.GetCartInstallmentsRequest{
        Accept: "quaerat",
        ContentType: "accusamus",
        OrderFormID: "quidem",
        PaymentSystem: 976405,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IgnoreProfileData

When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.

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
    res, err := s.ShoppingCart.IgnoreProfileData(ctx, operations.IgnoreProfileDataRequest{
        Accept: "voluptas",
        ContentType: "natus",
        RequestBody: operations.IgnoreProfileDataRequestBody{
            IgnoreProfileData: sdk.Bool(false),
        },
        OrderFormID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Items

Use this request to add a new item to the shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

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
    res, err := s.ShoppingCart.Items(ctx, operations.ItemsRequest{
        Accept: "atque",
        ContentType: "sit",
        RequestBody: operations.ItemsRequestBody{
            OrderItems: []ItemsRequestBodyOrderItems{
                operations.ItemsRequestBodyOrderItems{
                    ID: "2005",
                    Index: 67249,
                    Price: sdk.Int64(1099),
                    Quantity: 3,
                    Seller: "1",
                },
                operations.ItemsRequestBodyOrderItems{
                    ID: "2005",
                    Index: 743835,
                    Price: sdk.Int64(1099),
                    Quantity: 3,
                    Seller: "1",
                },
                operations.ItemsRequestBodyOrderItems{
                    ID: "2005",
                    Index: 679393,
                    Price: sdk.Int64(1099),
                    Quantity: 3,
                    Seller: "1",
                },
                operations.ItemsRequestBodyOrderItems{
                    ID: "2005",
                    Index: 478596,
                    Price: sdk.Int64(1099),
                    Quantity: 3,
                    Seller: "1",
                },
            },
        },
        AllowedOutdatedData: []interface{}{
            "dolorum",
            "deleniti",
        },
        OrderFormID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Items200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ItemsUpdate

You can use this request to:

1. Change the quantity of one or more items in a specific cart.
2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).

**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

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
    res, err := s.ShoppingCart.ItemsUpdate(ctx, operations.ItemsUpdateRequest{
        Accept: "necessitatibus",
        ContentType: "distinctio",
        RequestBody: operations.ItemsUpdateRequestBody{
            OrderItems: []ItemsUpdateRequestBodyOrderItems{
                operations.ItemsUpdateRequestBodyOrderItems{
                    Index: 469497,
                    Quantity: 3,
                },
                operations.ItemsUpdateRequestBodyOrderItems{
                    Index: 216897,
                    Quantity: 3,
                },
                operations.ItemsUpdateRequestBodyOrderItems{
                    Index: 456015,
                    Quantity: 3,
                },
                operations.ItemsUpdateRequestBodyOrderItems{
                    Index: 663078,
                    Quantity: 3,
                },
            },
        },
        AllowedOutdatedData: []interface{}{
            "eius",
            "aspernatur",
            "perferendis",
            "amet",
        },
        OrderFormID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PriceChange

This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.

You also need to pass the new price value in the body.

Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.

> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.

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
    res, err := s.ShoppingCart.PriceChange(ctx, operations.PriceChangeRequest{
        Accept: "accusamus",
        ContentType: "ad",
        PriceChangeRequest: shared.PriceChangeRequest{
            Price: 904425,
        },
        ItemIndex: "suscipit",
        OrderFormID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAllItems

This request removes all items from a given cart, leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

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
    res, err := s.ShoppingCart.RemoveAllItems(ctx, operations.RemoveAllItemsRequest{
        Accept: "provident",
        ContentType: "minima",
        RequestBody: map[string]interface{}{
            "totam": "similique",
            "alias": "at",
            "quaerat": "tempora",
            "vel": "quod",
        },
        OrderFormID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveAllItems200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Removeallpersonaldata

This call removes all user information, making a cart anonymous while leaving the items.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.

This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).

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
    res, err := s.ShoppingCart.Removeallpersonaldata(ctx, operations.RemoveallpersonaldataRequest{
        Accept: "qui",
        ContentType: "dolorum",
        OrderFormID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Removeallpersonaldata200TextPlainObject != nil {
        // handle response
    }
}
```
