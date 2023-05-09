# Subscriptions

### Available Operations

* [CancelSubscriptionsbySubscriptionID](#cancelsubscriptionsbysubscriptionid) - Cancel Subscriptions by SubscriptionId
* [GetSubscriptionList](#getsubscriptionlist) - Get Subscription List
* [GetfrequencyoptionsbysubscriptionID](#getfrequencyoptionsbysubscriptionid) - Get frequency options by subscriptionId
* [GetsubscriptionbyID](#getsubscriptionbyid) - Retrieve subscription by ID
* [Getsubscriptionstocustomer](#getsubscriptionstocustomer) - Retrieve customer's subscriptions
* [InsertAddressesforSubscription](#insertaddressesforsubscription) - Insert Addresses for Subscription
* [UpdateSubscriptionsbySubscriptionID](#updatesubscriptionsbysubscriptionid) - Update Subscriptions by SubscriptionId

## CancelSubscriptionsbySubscriptionID

Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated

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
    res, err := s.Subscriptions.CancelSubscriptionsbySubscriptionID(ctx, operations.CancelSubscriptionsbySubscriptionIDRequest{
        Accept: "accusantium",
        ContentType: "consequuntur",
        SubscriptionID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubscriptionList

Retrieves a list of Subscriptions linked to your store.

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
    res, err := s.Subscriptions.GetSubscriptionList(ctx, operations.GetSubscriptionListRequest{
        Accept: "praesentium",
        ContentType: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetfrequencyoptionsbysubscriptionID

Lists frequency options for the Subscription, filtering by `subscriptionId`.

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
    res, err := s.Subscriptions.GetfrequencyoptionsbysubscriptionID(ctx, operations.GetfrequencyoptionsbysubscriptionIDRequest{
        Accept: "magni",
        ContentType: "sunt",
        SubscriptionID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetsubscriptionbyID

Lists Subscription's details, searching by `subscriptionId`.

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
    res, err := s.Subscriptions.GetsubscriptionbyID(ctx, operations.GetsubscriptionbyIDRequest{
        Accept: "quo",
        ContentType: "illum",
        SubscriptionID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getsubscriptionstocustomer

Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.

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
    res, err := s.Subscriptions.Getsubscriptionstocustomer(ctx, operations.GetsubscriptionstocustomerRequest{
        Accept: "pariatur",
        ContentType: "maxime",
        CustomerID: "user@vtex.com.br",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InsertAddressesforSubscription

Inserts address's information to complement the Subscription details.

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
    res, err := s.Subscriptions.InsertAddressesforSubscription(ctx, operations.InsertAddressesforSubscriptionRequest{
        Accept: "ea",
        ContentType: "excepturi",
        RequestBody: []shared.InsertAddressesforSubscriptionRequest{
            shared.InsertAddressesforSubscriptionRequest{
                AdditionalComponents: "ea",
                AddressID: "accusantium",
                AddressName: "ab",
                AddressType: "maiores",
                City: "Hintzport",
                Complement: "autem",
                Country: "Qatar",
                FormattedAddress: "eaque",
                GeoCoordinate: "pariatur",
                Neighborhood: "nemo",
                Number: "voluptatibus",
                PostalCode: "82073",
                ReceiverName: "hic",
                Reference: "libero",
                State: "nobis",
                Street: "35403 Chelsea Bridge",
            },
        },
        SubscriptionID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSubscriptionsbySubscriptionID

Update, add or alter information of a given Subscription, filtering by `subscriptionId`.

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
    res, err := s.Subscriptions.UpdateSubscriptionsbySubscriptionID(ctx, operations.UpdateSubscriptionsbySubscriptionIDRequest{
        Accept: "dolores",
        ContentType: "minus",
        UpdateSubscriptionsbySubscriptionIDRequest: shared.UpdateSubscriptionsbySubscriptionIDRequest{
            IsSkipped: false,
            Item: shared.Item{
                Endpoint: "quam",
                PriceAtSubscriptionDate: 223924,
                Quantity: 874573,
                SellingPrice: 345352,
                Sku: shared.Sku{
                    DetailURL: "hic",
                    ID: "e9b90c28-909b-43fe-89a8-d9cbf4863332",
                    ImageURL: "ipsum",
                    Name: "Marshall Ritchie",
                    NameComplete: "reiciendis",
                    ProductName: "amet",
                },
            },
            Metadata: []shared.Metadatum{
                shared.Metadatum{
                    Name: "Ms. Christine Beer",
                    Properties: shared.Properties{
                        AdditionalProp1: "quaerat",
                        AdditionalProp2: "accusamus",
                        AdditionalProp3: "quidem",
                    },
                },
                shared.Metadatum{
                    Name: "Hector Mosciski",
                    Properties: shared.Properties{
                        AdditionalProp1: "sit",
                        AdditionalProp2: "fugiat",
                        AdditionalProp3: "ab",
                    },
                },
                shared.Metadatum{
                    Name: "Omar Kris",
                    Properties: shared.Properties{
                        AdditionalProp1: "deleniti",
                        AdditionalProp2: "omnis",
                        AdditionalProp3: "necessitatibus",
                    },
                },
            },
            Plan: shared.Plan{
                Frequency: shared.Frequency{
                    Interval: 714697,
                    Periodicity: "asperiores",
                },
                Type: "nihil",
                Validity: shared.Validity{
                    Begin: "ipsum",
                    End: "voluptate",
                },
            },
            PurchaseSettings: shared.PurchaseSettings{
                CurrencyCode: "id",
                PaymentMethod: shared.PaymentMethod{
                    PaymentAccountID: "saepe",
                    PaymentSystem: "eius",
                },
                PurchaseDay: "aspernatur",
                SalesChannel: "perferendis",
                SelectedSLA: "amet",
                Seller: "optio",
            },
            ShippingAddress: shared.ShippingAddress{
                AdditionalComponents: []shared.AdditionalComponent{
                    shared.AdditionalComponent{
                        LongName: "ad",
                        ShortName: "saepe",
                        Types: []string{
                            "deserunt",
                            "provident",
                        },
                    },
                    shared.AdditionalComponent{
                        LongName: "minima",
                        ShortName: "repellendus",
                        Types: []string{
                            "similique",
                            "alias",
                            "at",
                        },
                    },
                    shared.AdditionalComponent{
                        LongName: "quaerat",
                        ShortName: "tempora",
                        Types: []string{
                            "quod",
                            "officiis",
                        },
                    },
                    shared.AdditionalComponent{
                        LongName: "qui",
                        ShortName: "dolorum",
                        Types: []string{
                            "esse",
                            "harum",
                            "iusto",
                            "ipsum",
                        },
                    },
                },
                AddressID: "quisquam",
                AddressName: "tenetur",
                AddressType: "amet",
                City: "Thompsonburgh",
                Complement: "enim",
                Country: "Croatia",
                FormattedAddress: "sapiente",
                GeoCoordinate: []int{
                    471752,
                    25662,
                    711584,
                },
                Neighborhood: "neque",
                Number: "sed",
                PostalCode: "73642",
                ReceiverName: "incidunt",
                Reference: "qui",
                State: "cupiditate",
                Street: "871 Larson Forest",
            },
            Status: "aspernatur",
        },
        SubscriptionID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
