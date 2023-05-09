# SubscriptionGroup

### Available Operations

* [AdditemsubscriptionGroupID](#additemsubscriptiongroupid) - Add Subscription item by groupId
* [CancelSubscriptionbygroupID](#cancelsubscriptionbygroupid) - Cancel Subscription by groupId
* [GetAllsubscriptiongroup](#getallsubscriptiongroup) - List All subscription groups
* [GetConfigsubscriptionsgroup](#getconfigsubscriptionsgroup) - List Subscription group's Configuration
* [GetConversationMessagebygroupID](#getconversationmessagebygroupid) - Get Conversation Message by groupId
* [GetNextpurchase](#getnextpurchase) - Get Next purchase
* [GetSimulatebysubscriptionGroup](#getsimulatebysubscriptiongroup) - Get Simulation by subscription-group
* [GetSubscriptionbygroupID](#getsubscriptionbygroupid) - Get Subscription by groupId
* [GetaddressesbygroupID](#getaddressesbygroupid) - Get addresses by groupId
* [GetfrequencyoptionsbygroupID](#getfrequencyoptionsbygroupid) - Get frequency options by groupId
* [GetpaymentSystembygroupID](#getpaymentsystembygroupid) - Get payment System by groupId
* [Getsubscriptiongrouplist](#getsubscriptiongrouplist) - Get subscription group list
* [GetwillcreatebygroupID](#getwillcreatebygroupid) - List 'Will create' by groupId
* [InsertAddressesbygroupID](#insertaddressesbygroupid) - Insert Addresses by groupId
* [RetrysubscriptionbygroupID](#retrysubscriptionbygroupid) - Retry subscription by groupId
* [UpdateSubscriptionbygroupID](#updatesubscriptionbygroupid) - Update Subscription by groupId

## AdditemsubscriptionGroupID

Adds an SKU to a given Subscription, filtering by groupId.

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
    res, err := s.SubscriptionGroup.AdditemsubscriptionGroupID(ctx, operations.AdditemsubscriptionGroupIDRequest{
        Accept: "placeat",
        AdditemsubscriptionGroupIDRequest: shared.AdditemsubscriptionGroupIDRequest{
            Endpoint: "voluptatum",
            PriceAtSubscriptionDate: 479977,
            Quantity: 568045,
            SellingPrice: 392785,
            Sku: shared.Sku{
                DetailURL: "recusandae",
                ID: "d151a05d-fc2d-4df7-8c78-ca1ba928fc81",
                ImageURL: "commodi",
                Name: "Pauline Dibbert",
                NameComplete: "esse",
                ProductName: "ipsum",
            },
        },
        ContentType: "excepturi",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelSubscriptionbygroupID

Cancels Subscription by `groupId`

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
    res, err := s.SubscriptionGroup.CancelSubscriptionbygroupID(ctx, operations.CancelSubscriptionbygroupIDRequest{
        Accept: "aspernatur",
        ContentType: "perferendis",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllsubscriptiongroup

Retrieves all subscription groups in your store.

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
    res, err := s.SubscriptionGroup.GetAllsubscriptiongroup(ctx, operations.GetAllsubscriptiongroupRequest{
        Accept: "ad",
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

## GetConfigsubscriptionsgroup

Retrieves details about a given subscription group's configuration, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetConfigsubscriptionsgroup(ctx, operations.GetConfigsubscriptionsgroupRequest{
        Accept: "sed",
        ContentType: "iste",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConversationMessagebygroupID

Retrieves the conversation of a given Subscription group, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetConversationMessagebygroupID(ctx, operations.GetConversationMessagebygroupIDRequest{
        Accept: "dolor",
        ContentType: "natus",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNextpurchase

Lists details of a given subscription group's next purchase, filtering by dateStr.

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
    res, err := s.SubscriptionGroup.GetNextpurchase(ctx, operations.GetNextpurchaseRequest{
        Accept: "laboriosam",
        ContentType: "hic",
        DateStr: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSimulatebysubscriptionGroup

Retrieves Subscription simulations, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetSimulatebysubscriptionGroup(ctx, operations.GetSimulatebysubscriptionGroupRequest{
        Accept: "fuga",
        ContentType: "in",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubscriptionbygroupID

Lists Subscription details, filtering by `groupId`.

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
    res, err := s.SubscriptionGroup.GetSubscriptionbygroupID(ctx, operations.GetSubscriptionbygroupIDRequest{
        Accept: "corporis",
        ContentType: "iste",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetaddressesbygroupID

Lists addresses linked to a given Subscription group, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetaddressesbygroupID(ctx, operations.GetaddressesbygroupIDRequest{
        Accept: "iure",
        ContentType: "saepe",
        GroupID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetfrequencyoptionsbygroupID

Lists frequency options of a given Subscription group, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetfrequencyoptionsbygroupID(ctx, operations.GetfrequencyoptionsbygroupIDRequest{
        Accept: "architecto",
        ContentType: "ipsa",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetpaymentSystembygroupID

Retrieves payment system's information of a given Subscription group, filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetpaymentSystembygroupID(ctx, operations.GetpaymentSystembygroupIDRequest{
        Accept: "reiciendis",
        ContentType: "est",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getsubscriptiongrouplist

Retrieves a list of Subscription groups in your store.

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
    res, err := s.SubscriptionGroup.Getsubscriptiongrouplist(ctx, operations.GetsubscriptiongrouplistRequest{
        Accept: "mollitia",
        ContentType: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetwillcreatebygroupID

Retrieves Subscription groups listed as 'will create', filtering by groupId.

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
    res, err := s.SubscriptionGroup.GetwillcreatebygroupID(ctx, operations.GetwillcreatebygroupIDRequest{
        Accept: "dolores",
        ContentType: "dolorem",
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InsertAddressesbygroupID

Insert address information of a given Subscription group, filtering by groupId.

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
    res, err := s.SubscriptionGroup.InsertAddressesbygroupID(ctx, operations.InsertAddressesbygroupIDRequest{
        Accept: "corporis",
        ContentType: "explicabo",
        InsertAddressesbygroupIDRequest: shared.InsertAddressesbygroupIDRequest{
            AdditionalComponents: []shared.AdditionalComponent{
                shared.AdditionalComponent{
                    LongName: "enim",
                    ShortName: "omnis",
                    Types: []string{
                        "minima",
                        "excepturi",
                    },
                },
                shared.AdditionalComponent{
                    LongName: "accusantium",
                    ShortName: "iure",
                    Types: []string{
                        "doloribus",
                        "sapiente",
                        "architecto",
                    },
                },
                shared.AdditionalComponent{
                    LongName: "mollitia",
                    ShortName: "dolorem",
                    Types: []string{
                        "consequuntur",
                        "repellat",
                        "mollitia",
                    },
                },
                shared.AdditionalComponent{
                    LongName: "occaecati",
                    ShortName: "numquam",
                    Types: []string{
                        "quam",
                        "molestiae",
                    },
                },
            },
            AddressID: "velit",
            AddressName: "error",
            AddressType: "quia",
            City: "North Marguerite",
            Complement: "animi",
            Country: "Georgia",
            FormattedAddress: "odit",
            GeoCoordinate: []int{
                196582,
                949572,
                368725,
                662527,
            },
            Neighborhood: "possimus",
            Number: "aut",
            PostalCode: "68609",
            ReceiverName: "voluptatibus",
            Reference: "vero",
            State: "nihil",
            Street: "9064 Aufderhar Burgs",
        },
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrysubscriptionbygroupID

Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.

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
    res, err := s.SubscriptionGroup.RetrysubscriptionbygroupID(ctx, operations.RetrysubscriptionbygroupIDRequest{
        Accept: "reprehenderit",
        ContentType: "ut",
        Groupid: "1",
        InstanceID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSubscriptionbygroupID

Updates a Subscription by `groupId`.

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
    res, err := s.SubscriptionGroup.UpdateSubscriptionbygroupID(ctx, operations.UpdateSubscriptionbygroupIDRequest{
        UpdateSubscriptionbygroupIDRequest: shared.UpdateSubscriptionbygroupIDRequest{
            IsSkipped: false,
            Item: []shared.Item1{
                shared.Item1{
                    SubscriptionID: "corporis",
                    CreatedAt: "dolore",
                    CycleCount: 480894,
                    Endpoint: "dicta",
                    IsSkipped: false,
                    LastUpdate: "harum",
                    Metadata: []shared.Metadatum{
                        shared.Metadatum{
                            Name: "Mrs. Leslie VonRueden",
                            Properties: shared.Properties{
                                AdditionalProp1: "molestias",
                                AdditionalProp2: "excepturi",
                                AdditionalProp3: "pariatur",
                            },
                        },
                        shared.Metadatum{
                            Name: "Irma Ledner DVM",
                            Properties: shared.Properties{
                                AdditionalProp1: "sint",
                                AdditionalProp2: "veritatis",
                                AdditionalProp3: "itaque",
                            },
                        },
                    },
                    OriginalItemIndex: 277718,
                    OriginalOrderID: "enim",
                    PriceAtSubscriptionDate: 9356,
                    Quantity: 667411,
                    SellingPrice: 842342,
                    Sku: shared.Sku{
                        DetailURL: "explicabo",
                        ID: "abd44269-802d-4502-a94b-b4f63c969e9a",
                        ImageURL: "dolor",
                        Name: "Randal Parisian",
                        NameComplete: "illum",
                        ProductName: "maiores",
                    },
                    Status: "rerum",
                },
            },
            Metadata: []shared.Metadatum{
                shared.Metadatum{
                    Name: "Blanca Schulist",
                    Properties: shared.Properties{
                        AdditionalProp1: "laborum",
                        AdditionalProp2: "accusamus",
                        AdditionalProp3: "non",
                    },
                },
            },
            Plan: shared.Plan{
                Frequency: shared.Frequency{
                    Interval: 581273,
                    Periodicity: "enim",
                },
                Type: "accusamus",
                Validity: shared.Validity{
                    Begin: "delectus",
                    End: "quidem",
                },
            },
            PurchaseSettings: shared.PurchaseSettings{
                CurrencyCode: "provident",
                PaymentMethod: shared.PaymentMethod{
                    PaymentAccountID: "nam",
                    PaymentSystem: "id",
                },
                PurchaseDay: "blanditiis",
                SalesChannel: "deleniti",
                SelectedSLA: "sapiente",
                Seller: "amet",
            },
            ShippingAddress: shared.ShippingAddress{
                AdditionalComponents: []shared.AdditionalComponent{
                    shared.AdditionalComponent{
                        LongName: "nisi",
                        ShortName: "vel",
                        Types: []string{
                            "omnis",
                            "molestiae",
                            "perferendis",
                        },
                    },
                    shared.AdditionalComponent{
                        LongName: "nihil",
                        ShortName: "magnam",
                        Types: []string{
                            "id",
                            "labore",
                            "labore",
                        },
                    },
                    shared.AdditionalComponent{
                        LongName: "suscipit",
                        ShortName: "natus",
                        Types: []string{
                            "eum",
                            "vero",
                            "aspernatur",
                        },
                    },
                },
                AddressID: "architecto",
                AddressName: "magnam",
                AddressType: "et",
                City: "Fernestead",
                Complement: "quos",
                Country: "Micronesia",
                FormattedAddress: "accusantium",
                GeoCoordinate: []int{
                    968962,
                    652103,
                    320997,
                },
                Neighborhood: "eum",
                Number: "dolor",
                PostalCode: "13049-8285",
                ReceiverName: "facilis",
                Reference: "in",
                State: "architecto",
                Street: "93749 Cormier Union",
            },
            Status: "pariatur",
        },
        GroupID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
