# Docks

### Available Operations

* [ActivateDock](#activatedock) - Activate dock
* [AllDocks](#alldocks) - List all  docks
* [CreateUpdateDock](#createupdatedock) - Create/update dock
* [DeactivateDock](#deactivatedock) - Deactivate dock
* [Dock](#dock) - Delete dock
* [DockByID](#dockbyid) - List dock by ID

## ActivateDock

Activates dock through dock ID.

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
    res, err := s.Docks.ActivateDock(ctx, operations.ActivateDockRequest{
        Accept: "quibusdam",
        ContentType: "unde",
        DockID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AllDocks

Informs a list of all docks.

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
    res, err := s.Docks.AllDocks(ctx, operations.AllDocksRequest{
        Accept: "corrupti",
        ContentType: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllDocks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateUpdateDock

Creates or updates docks to be used in your logistic operation.

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
    res, err := s.Docks.CreateUpdateDock(ctx, operations.CreateUpdateDockRequest{
        Accept: "vel",
        ContentType: "error",
        RequestBody: operations.CreateUpdateDockCreateUpdateDockRequest{
            Address: operations.CreateUpdateDockCreateUpdateDockRequestAddress1{
                City: "Hoppeport",
                Complement: "magnam",
                Coordinates: [][]float64{
                    []float64{
                        9636.63,
                    },
                    []float64{
                        3834.41,
                        4776.65,
                    },
                    []float64{
                        8121.69,
                        5288.95,
                        4799.77,
                        5680.45,
                    },
                    []float64{
                        9255.97,
                        8360.79,
                    },
                },
                Country: operations.CreateUpdateDockCreateUpdateDockRequestAddress1Country{
                    Acronym: "ab",
                    Name: "Mrs. Marie O'Connell",
                },
                Neighborhood: "sapiente",
                Number: "quo",
                PostalCode: "88947",
                State: "quod",
                Street: "5761 Nikolaus Orchard",
            },
            DockTimeFake: "fugit",
            FreightTableIds: []string{
                "hic",
                "optio",
                "totam",
            },
            ID: "16742cb7-3920-4592-9396-fea7596eb10f",
            Name: "Shaun Osinski",
            Priority: 358152,
            SalesChannel: "explicabo",
            SalesChannels: []string{
                "enim",
                "omnis",
                "nemo",
                "minima",
            },
            TimeFakeOverhead: "excepturi",
            WmsEndPoint: "accusantium",
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

## DeactivateDock

Deactivate dock by dock ID

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
    res, err := s.Docks.DeactivateDock(ctx, operations.DeactivateDockRequest{
        Accept: "iure",
        ContentType: "culpa",
        DockID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Dock

Deletes dock by dock ID.

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
    res, err := s.Docks.Dock(ctx, operations.DockRequest{
        Accept: "sapiente",
        ContentType: "architecto",
        DockID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DockByID

Informs a given dock's information, searching by dock ID.

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
    res, err := s.Docks.DockByID(ctx, operations.DockByIDRequest{
        Accept: "dolorem",
        ContentType: "culpa",
        DockID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DockByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
