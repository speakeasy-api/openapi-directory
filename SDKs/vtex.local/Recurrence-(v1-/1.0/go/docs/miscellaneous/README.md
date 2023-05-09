# Miscellaneous

### Available Operations

* [Addrecurrenceitem](#addrecurrenceitem) - Add Subscription item
* [GetRecurrencebyemail](#getrecurrencebyemail) - Get Subscriptions
* [GetRecurrencebyrecurrenceID](#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [Getpaymentaccounts](#getpaymentaccounts) - Get payment accounts
* [Getrecurrenceaddresses](#getrecurrenceaddresses) - Get Subscription addresses
* [Getrecurrencesettings](#getrecurrencesettings) - Get Subscription settings
* [Getselfrecurrence](#getselfrecurrence) - Get self Subscription
* [Reindexrecurrence](#reindexrecurrence) - Reindex Subscription
* [Updatepartialrecurrence](#updatepartialrecurrence) - Update partial Subscription
* [Updaterecurrence](#updaterecurrence) - Update Subscription
* [Updaterecurrencesettings](#updaterecurrencesettings) - Update Subscription settings

## Addrecurrenceitem

Adds an item to a Subscription (formerly Recurrence).

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
    res, err := s.Miscellaneous.Addrecurrenceitem(ctx, operations.AddrecurrenceitemRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: []shared.AddrecurrenceitemRequest{
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 812169,
                    Periodicity: "voluptatum",
                },
                Quantity: 479977,
                Seller: "excepturi",
                ShippingAddressID: "nisi",
                Sku: "recusandae",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 836079,
                    Periodicity: "ab",
                },
                Quantity: 337396,
                Seller: "veritatis",
                ShippingAddressID: "deserunt",
                Sku: "perferendis",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 368241,
                    Periodicity: "repellendus",
                },
                Quantity: 957156,
                Seller: "quo",
                ShippingAddressID: "odit",
                Sku: "at",
            },
            shared.AddrecurrenceitemRequest{
                Frequency: shared.Frequency{
                    Interval: 870088,
                    Periodicity: "maiores",
                },
                Quantity: 473608,
                Seller: "quod",
                ShippingAddressID: "quod",
                Sku: "esse",
            },
        },
        RecurrenceID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRecurrencebyemail

Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.

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
    res, err := s.Miscellaneous.GetRecurrencebyemail(ctx, operations.GetRecurrencebyemailRequest{
        Accept: "application/json",
        ContentType: "application/json",
        CycleStatus: sdk.String("{{cycleStatus}}"),
        Email: sdk.String("{{email}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRecurrencebyrecurrenceID

Retrieves a given Subscription (formerly recurrence) by recurrenceId.

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
    res, err := s.Miscellaneous.GetRecurrencebyrecurrenceID(ctx, operations.GetRecurrencebyrecurrenceIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RecurrenceID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getpaymentaccounts

Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.

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
    res, err := s.Miscellaneous.Getpaymentaccounts(ctx, operations.GetpaymentaccountsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Recurrenceid: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getrecurrenceaddresses

Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.

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
    res, err := s.Miscellaneous.Getrecurrenceaddresses(ctx, operations.GetrecurrenceaddressesRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RecurrenceID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getrecurrencesettings

Retrieves your store's Subscriptions' (formerly recurrence) settings.

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
    res, err := s.Miscellaneous.Getrecurrencesettings(ctx, operations.GetrecurrencesettingsRequest{
        Accept: "application/json",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getselfrecurrence

Lists details of your self Subscription (formerly Recurrence).

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
    res, err := s.Miscellaneous.Getselfrecurrence(ctx, operations.GetselfrecurrenceRequest{
        Accept: "application/json",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Reindexrecurrence

Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.

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
    res, err := s.Miscellaneous.Reindexrecurrence(ctx, operations.ReindexrecurrenceRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: []shared.ReindexrecurrenceRequest{
            shared.ReindexrecurrenceRequest{
                Frequency: shared.Frequency{
                    Interval: 639921,
                    Periodicity: "occaecati",
                },
            },
            shared.ReindexrecurrenceRequest{
                Frequency: shared.Frequency{
                    Interval: 143353,
                    Periodicity: "deleniti",
                },
            },
            shared.ReindexrecurrenceRequest{
                Frequency: shared.Frequency{
                    Interval: 944669,
                    Periodicity: "optio",
                },
            },
        },
        RecurrenceID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Updatepartialrecurrence

Updates partial information of a given subscription (formerly Recurrence).

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
    res, err := s.Miscellaneous.Updatepartialrecurrence(ctx, operations.UpdatepartialrecurrenceRequest{
        Accept: "application/json",
        ContentType: "application/json",
        UpdatepartialrecurrenceRequest: shared.UpdatepartialrecurrenceRequest{
            DeliveryDay: 105907,
            DeliveryWeekday: "commodi",
            Status: "molestiae",
        },
        RecurrenceID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Updaterecurrence

Updates details of a given Subscription (formerly recurrence).

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
    res, err := s.Miscellaneous.Updaterecurrence(ctx, operations.UpdaterecurrenceRequest{
        Accept: "application/json",
        ContentType: "application/json",
        UpdaterecurrenceRequest: shared.UpdaterecurrenceRequest{
            DeliveryDay: 186332,
            DeliveryWeekday: "impedit",
            Email: "Jacky.Emmerich@hotmail.com",
            Items: []shared.Item{
                shared.Item{
                    Frequency: shared.Frequency{
                        Interval: 324141,
                        Periodicity: "natus",
                    },
                    Quantity: 149675,
                    Seller: "iste",
                    ShippingAddressID: "dolor",
                    Sku: "natus",
                },
            },
            PaymentAccountID: "laboriosam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Updaterecurrencesettings

Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.

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
    res, err := s.Miscellaneous.Updaterecurrencesettings(ctx, operations.UpdaterecurrencesettingsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        UpdaterecurrencesettingsRequest: shared.UpdaterecurrencesettingsRequest{
            DefaultSLA: "hic",
            SalesChannel: "saepe",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
