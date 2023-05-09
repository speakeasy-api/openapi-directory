# PickupPoints

### Available Operations

* [CreateUpdatePickupPoint](#createupdatepickuppoint) - Create/Update Pickup Point
* [Delete](#delete) - Delete Pickup Point
* [GetByID](#getbyid) - List Pickup Point By ID
* [Getpaged](#getpaged) - List paged Pickup Points
* [ListAllPickupPpoints](#listallpickupppoints) - List all pickup points

## CreateUpdatePickupPoint

Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.

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
    res, err := s.PickupPoints.CreateUpdatePickupPoint(ctx, operations.CreateUpdatePickupPointRequest{
        Accept: "sint",
        ContentType: "veritatis",
        RequestBody: operations.CreateUpdatePickupPointRequestBody{
            Address: operations.CreateUpdatePickupPointRequestBodyAddress{
                City: "Rio de Janeiro",
                Complement: "3rd floor",
                Country: operations.CreateUpdatePickupPointRequestBodyAddressCountry{
                    Acronym: "BRA",
                    Name: "Brasil",
                },
                Location: operations.CreateUpdatePickupPointRequestBodyAddressLocation{
                    Latitude: -22.974477767944336,
                    Longitude: -43.18672561645508,
                },
                Neighborhood: "Botafogo",
                Number: "200",
                PostalCode: "23068-1678",
                Reference: "Grey building",
                State: "RJ",
                Street: "Praia de botafogo.",
            },
            BusinessHours: []CreateUpdatePickupPointRequestBodyBusinessHour{
                operations.CreateUpdatePickupPointRequestBodyBusinessHour{
                    ClosingTime: "modi",
                    DayOfWeek: 183191,
                    OpeningTime: "aliquid",
                },
                operations.CreateUpdatePickupPointRequestBodyBusinessHour{
                    ClosingTime: "cupiditate",
                    DayOfWeek: 552822,
                    OpeningTime: "perferendis",
                },
            },
            Description: "Pickup your items in our store.",
            FormattedAddress: "magni",
            ID: "123456789",
            Instructions: "Bring your ID in order to pickup your order.",
            IsActive: false,
            IsThirdPartyPickup: sdk.Bool(false),
            Name: "Pickup store.",
            TagsLabel: []string{
                "ipsam",
                "alias",
                "fugit",
                "dolorum",
            },
        },
        PickupPointID: "123456789",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUpdate != nil {
        // handle response
    }
}
```

## Delete

Deletes a given pickup point for your store, by pickup point ID.

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
    res, err := s.PickupPoints.Delete(ctx, operations.DeleteRequest{
        Accept: "excepturi",
        ContentType: "tempora",
        PickupPointID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID

Lists your store's pickup points while searching by ID.

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
    res, err := s.PickupPoints.GetByID(ctx, operations.GetByIDRequest{
        Accept: "tempore",
        ContentType: "labore",
        PickupPointID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetByID != nil {
        // handle response
    }
}
```

## Getpaged

Lists paged pickup points in your store.

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
    res, err := s.PickupPoints.Getpaged(ctx, operations.GetpagedRequest{
        Accept: "eum",
        ContentType: "non",
        Keyword: "eligendi",
        Page: "{{pageNumber}}",
        PageSize: "{{pageSize}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListAllPickupPpoints

Lists all of your store's pickup points.

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
    res, err := s.PickupPoints.ListAllPickupPpoints(ctx, operations.ListAllPickupPpointsRequest{
        Accept: "sint",
        ContentType: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllPickupPpoints200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
