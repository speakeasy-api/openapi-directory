# Inventory

### Available Operations

* [GetSupplyLots](#getsupplylots) - List supply lots
* [Getinventorywithdispatchedreservations](#getinventorywithdispatchedreservations) - List inventory with dispatched reservations
* [InventoryBySku](#inventorybysku) - List inventory by SKU
* [Inventoryperdock](#inventoryperdock) - List inventory per dock
* [Inventoryperdockandwarehouse](#inventoryperdockandwarehouse) - List inventory per dock and warehouse
* [Inventoryperwarehouse](#inventoryperwarehouse) - List inventory per warehouse
* [SaveSupplyLot](#savesupplylot) - Save supply lot
* [TransferSupplyLot](#transfersupplylot) - Transfer supply lot
* [UpdateInventoryBySkuandWarehouse](#updateinventorybyskuandwarehouse) - Update inventory by SKU and warehouse

## GetSupplyLots

Returns a list of the supply lots of an SKU in a specific warehouse.

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
    res, err := s.Inventory.GetSupplyLots(ctx, operations.GetSupplyLotsRequest{
        Accept: "application/json",
        ContentType: "application/json; charset=utf-8",
        SkuID: "temporibus",
        WarehouseID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getinventorywithdispatchedreservations

Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.

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
    res, err := s.Inventory.Getinventorywithdispatchedreservations(ctx, operations.GetinventorywithdispatchedreservationsRequest{
        Accept: "quasi",
        ContentType: "reiciendis",
        ItemID: "voluptatibus",
        WarehouseID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getinventorywithdispatchedreservations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## InventoryBySku

Lists your store's inventory by SKU ID

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
    res, err := s.Inventory.InventoryBySku(ctx, operations.InventoryBySkuRequest{
        Accept: "nihil",
        ContentType: "praesentium",
        SkuID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryBySku200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Inventoryperdock

Lists inventory information per dock set up in your store.

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
    res, err := s.Inventory.Inventoryperdock(ctx, operations.InventoryperdockRequest{
        Accept: "ipsa",
        ContentType: "omnis",
        DockID: "voluptate",
        SkuID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Inventoryperdock200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Inventoryperdockandwarehouse

Lists information of inventory per dock and warehouse.

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
    res, err := s.Inventory.Inventoryperdockandwarehouse(ctx, operations.InventoryperdockandwarehouseRequest{
        Accept: "perferendis",
        ContentType: "doloremque",
        DockID: "reprehenderit",
        SkuID: "ut",
        WarehouseID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Inventoryperdockandwarehouse200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Inventoryperwarehouse

Lists inventory information per warehouse on your store.

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
    res, err := s.Inventory.Inventoryperwarehouse(ctx, operations.InventoryperwarehouseRequest{
        Accept: "dicta",
        ContentType: "corporis",
        SkuID: "dolore",
        WarehouseID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Inventoryperwarehouse200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## SaveSupplyLot

Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.

Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.

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
    res, err := s.Inventory.SaveSupplyLot(ctx, operations.SaveSupplyLotRequest{
        Accept: "dicta",
        ContentType: "harum",
        RequestBody: operations.SaveSupplyLotSaveSupplyLot{
            DateOfSupplyUtc: "enim",
            KeepSellingAfterExpiration: false,
            Quantity: 8804.76,
        },
        SkuID: "commodi",
        SupplyLotID: "repudiandae",
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

## TransferSupplyLot

Transfers an SKU from a Supply Lot to the currently available inventory.

Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.

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
    res, err := s.Inventory.TransferSupplyLot(ctx, operations.TransferSupplyLotRequest{
        Accept: "ipsum",
        ContentType: "quidem",
        SkuID: "molestias",
        SupplyLotID: "excepturi",
        WarehouseID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateInventoryBySkuandWarehouse

Updates inventory for a given SKU and warehouse.

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
    res, err := s.Inventory.UpdateInventoryBySkuandWarehouse(ctx, operations.UpdateInventoryBySkuandWarehouseRequest{
        Accept: "modi",
        ContentType: "praesentium",
        RequestBody: operations.UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest{
            DateUtcOnBalanceSystem: sdk.String("null"),
            Quantity: 523248,
            TimeToRefillDeprecated: "voluptates",
            UnlimitedQuantity: false,
        },
        SkuID: "quasi",
        WarehouseID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
