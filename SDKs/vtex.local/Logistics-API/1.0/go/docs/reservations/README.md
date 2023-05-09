# Reservations

### Available Operations

* [AcknowledgmentReservation](#acknowledgmentreservation) - Acknowledgment reservation
* [CancelReservation](#cancelreservation) - Cancel reservation
* [ConfirmReservation](#confirmreservation) - Confirm reservation
* [CreateReservation](#createreservation) - Create reservation
* [ReservationByID](#reservationbyid) - List reservation by ID
* [ReservationbyWarehouseandSku](#reservationbywarehouseandsku) - List reservation by warehouse and SKU

## AcknowledgmentReservation

Acknowledges reservations made by reservation ID.

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
    res, err := s.Reservations.AcknowledgmentReservation(ctx, operations.AcknowledgmentReservationRequest{
        Accept: "id",
        ContentType: "blanditiis",
        ReservationID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelReservation

Cancels reservation by reservation ID.

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
    res, err := s.Reservations.CancelReservation(ctx, operations.CancelReservationRequest{
        Accept: "sapiente",
        ContentType: "amet",
        ReservationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmReservation

Confirms reservation by reservation ID.

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
    res, err := s.Reservations.ConfirmReservation(ctx, operations.ConfirmReservationRequest{
        Accept: "nisi",
        ContentType: "vel",
        ReservationID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateReservation

Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).

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
    res, err := s.Reservations.CreateReservation(ctx, operations.CreateReservationRequest{
        Accept: "omnis",
        ContentType: "molestiae",
        RequestBody: operations.CreateReservationCreateReservationRequest{
            AutorizationExpirationTTL: "perferendis",
            DeliveryItemOptions: []CreateReservationCreateReservationRequestDeliveryItemOption{
                operations.CreateReservationCreateReservationRequestDeliveryItemOption{
                    AditionalTimeBlockedDays: "magnam",
                    DeliveryWindows: []string{
                        "id",
                        "labore",
                        "labore",
                    },
                    DockID: "suscipit",
                    DockTime: "natus",
                    Item: operations.CreateReservationCreateReservationRequestDeliveryItemOptionItem{
                        AdditionalHandlingTime: "nobis",
                        Dimension: operations.CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension{
                            Height: 428769,
                            Length: 878453,
                            Weight: 135474,
                            Width: 102863,
                        },
                        GroupItemID: "magnam",
                        ID: "1959890a-fa56-43e2-916f-e4c8b711e5b7",
                        KitItem: []string{
                            "quibusdam",
                            "sed",
                            "saepe",
                            "pariatur",
                        },
                        Price: 37559,
                        Quantity: 162493,
                    },
                    ListPrice: 5083.15,
                    Location: operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocation{
                        Country: "Nauru",
                        InStore: operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore{
                            IsCheckedIn: false,
                            StoreID: "magni",
                        },
                        ZipCode: "78884",
                    },
                    PromotionalPrice: 5691.01,
                    SLAType: "odit",
                    SLATypeName: "ea",
                    TimeToDockPlusDockTime: "accusantium",
                    TotalTime: "ab",
                    TransitTime: "maiores",
                    WareHouseID: "quidem",
                },
                operations.CreateReservationCreateReservationRequestDeliveryItemOption{
                    AditionalTimeBlockedDays: "ipsam",
                    DeliveryWindows: []string{
                        "autem",
                        "nam",
                    },
                    DockID: "eaque",
                    DockTime: "pariatur",
                    Item: operations.CreateReservationCreateReservationRequestDeliveryItemOptionItem{
                        AdditionalHandlingTime: "nemo",
                        Dimension: operations.CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension{
                            Height: 975522,
                            Length: 16627,
                            Weight: 855804,
                            Width: 230742,
                        },
                        GroupItemID: "aut",
                        ID: "c5fbb258-7053-4202-873d-5fe9b90c2890",
                        KitItem: []string{
                            "rerum",
                            "adipisci",
                            "asperiores",
                        },
                        Price: 934214,
                        Quantity: 267262,
                    },
                    ListPrice: 6139.66,
                    Location: operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocation{
                        Country: "Palau",
                        InStore: operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore{
                            IsCheckedIn: false,
                            StoreID: "deleniti",
                        },
                        ZipCode: "57793-5322",
                    },
                    PromotionalPrice: 2224.43,
                    SLAType: "qui",
                    SLATypeName: "ipsum",
                    TimeToDockPlusDockTime: "hic",
                    TotalTime: "excepturi",
                    TransitTime: "cum",
                    WareHouseID: "voluptate",
                },
            },
            LockID: "dignissimos",
            SalesChannel: "reiciendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReservation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReservationByID

Lists reservation's information by ID.

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
    res, err := s.Reservations.ReservationByID(ctx, operations.ReservationByIDRequest{
        Accept: "amet",
        ContentType: "dolorum",
        ReservationID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReservationByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ReservationbyWarehouseandSku

Lists reservations in your store, by searching through warehouse and SKU.

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
    res, err := s.Reservations.ReservationbyWarehouseandSku(ctx, operations.ReservationbyWarehouseandSkuRequest{
        Accept: "veritatis",
        ContentType: "ipsa",
        SkuID: "ipsa",
        WarehouseID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
