# Warehouses

### Available Operations

* [ActivateWarehouse](#activatewarehouse) - Activate warehouse
* [AllWarehouses](#allwarehouses) - List all warehouses
* [CreateUpdateWarehouse](#createupdatewarehouse) - Create/update warehouse
* [DeactivateWarehouse](#deactivatewarehouse) - Deactivate warehouse
* [RemoveWarehouse](#removewarehouse) - Remove warehouse
* [WarehouseByID](#warehousebyid) - List warehouse by ID

## ActivateWarehouse

Activates a given warehouse, by warehouse ID.

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
    res, err := s.Warehouses.ActivateWarehouse(ctx, operations.ActivateWarehouseRequest{
        Accept: "repellendus",
        ContentType: "veritatis",
        WarehouseID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AllWarehouses

Lists information about all warehouses set up in your store.

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
    res, err := s.Warehouses.AllWarehouses(ctx, operations.AllWarehousesRequest{
        Accept: "eaque",
        ContentType: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllWarehouses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateUpdateWarehouse

Creates or updates your store's warehouses

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
    res, err := s.Warehouses.CreateUpdateWarehouse(ctx, operations.CreateUpdateWarehouseRequest{
        Accept: "delectus",
        ContentType: "mollitia",
        RequestBody: operations.CreateUpdateWarehouseCreateUpdateWarehouseRequest{
            ID: "da200ef0-422e-4b21-a4cf-9ab8366c723f",
            Name: "Drew Osinski",
            WarehouseDocks: []CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock{
                operations.CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock{
                    Cost: "nisi",
                    CostToDisplay: "rerum",
                    DockID: "recusandae",
                    Name: "Kyle Leffler",
                    Time: "quisquam",
                    TranslateDays: "dicta",
                },
            },
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

## DeactivateWarehouse

Deactivates a given warehouse by warehouse ID.

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
    res, err := s.Warehouses.DeactivateWarehouse(ctx, operations.DeactivateWarehouseRequest{
        Accept: "voluptatibus",
        ContentType: "eligendi",
        WarehouseID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveWarehouse

Deletes given warehouse by warehouse ID.

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
    res, err := s.Warehouses.RemoveWarehouse(ctx, operations.RemoveWarehouseRequest{
        Accept: "officiis",
        ContentType: "architecto",
        WarehouseID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WarehouseByID

Lists the information of a given warehouse, searching by warehouse ID.

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
    res, err := s.Warehouses.WarehouseByID(ctx, operations.WarehouseByIDRequest{
        Accept: "enim",
        ContentType: "optio",
        WarehouseID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WarehouseByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
