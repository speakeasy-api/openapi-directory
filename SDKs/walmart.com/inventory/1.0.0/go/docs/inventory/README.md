# Inventory

### Available Operations

* [GetInventory](#getinventory) - Inventory
* [GetMultiNodeInventoryForAllSkuAndAllShipNodes](#getmultinodeinventoryforallskuandallshipnodes) - Multiple Item Inventory for All Ship Nodes
* [GetMultiNodeInventoryForSkuAndAllShipnodes](#getmultinodeinventoryforskuandallshipnodes) - Single Item Inventory by Ship Node
* [GetWFSInventory](#getwfsinventory) - WFS Inventory
* [UpdateBulkInventory](#updatebulkinventory) - Bulk Item Inventory Update
* [UpdateInventoryForAnItemJSON](#updateinventoryforanitemjson) - Update inventory
* [UpdateInventoryForAnItemRaw](#updateinventoryforanitemraw) - Update inventory
* [UpdateMultiNodeInventory](#updatemultinodeinventory) - Update Item Inventory per Ship Node

## GetInventory

You can use this API to get the inventory for a given item.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.GetInventory(ctx, operations.GetInventoryRequest{
        WmConsumerChannelType: sdk.String("corrupti"),
        WmQosCorrelationID: "illum",
        WmSecAccessToken: "vel",
        WmSvcName: "error",
        ShipNode: sdk.String("deserunt"),
        Sku: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMultiNodeInventoryForAllSkuAndAllShipNodes

This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.GetMultiNodeInventoryForAllSkuAndAllShipNodes(ctx, operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest{
        WmConsumerChannelType: sdk.String("iure"),
        WmQosCorrelationID: "magnam",
        WmSecAccessToken: "debitis",
        WmSvcName: "ipsa",
        Limit: sdk.String("delectus"),
        NextCursor: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMultiNodeInventoryForSkuAndAllShipnodes

This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.GetMultiNodeInventoryForSkuAndAllShipnodes(ctx, operations.GetMultiNodeInventoryForSkuAndAllShipnodesRequest{
        WmConsumerChannelType: sdk.String("suscipit"),
        WmQosCorrelationID: "molestiae",
        WmSecAccessToken: "minus",
        WmSvcName: "placeat",
        ShipNode: sdk.String("voluptatum"),
        Sku: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWFSInventory

You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.GetWFSInventory(ctx, operations.GetWFSInventoryRequest{
        WmConsumerChannelType: sdk.String("excepturi"),
        WmQosCorrelationID: "nisi",
        WmSecAccessToken: "recusandae",
        WmSvcName: "temporibus",
        FromModifiedDate: sdk.String("ab"),
        Limit: sdk.String("quis"),
        Offset: sdk.String("veritatis"),
        Sku: sdk.String("deserunt"),
        ToModifiedDate: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWFSInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateBulkInventory

Updates inventory for items in bulk. 
Seller Can either use feed type "inventory" or "MP_INVENTORY" 
* Inventory spec 1.4 feed type: inventory 
* Inventory spec 1.5 feed type: MP_INVENTORY 

Please Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses. Refer to "MultiNode_Bulk_Inventory_Update_Request.json" for the corresponding request sample 
 
Refer to the <a href="https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/">guide section</a> for more detailed guide around each of the feed types 

 Refer to the throttling limits before uploading the Feed Files.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.UpdateBulkInventory(ctx, operations.UpdateBulkInventoryRequest{
        RequestBody: &operations.UpdateBulkInventoryRequestBody{
            File: operations.UpdateBulkInventoryRequestBodyFile{
                Content: []byte("ipsam"),
                File: "repellendus",
            },
        },
        WmConsumerChannelType: sdk.String("sapiente"),
        WmQosCorrelationID: "quo",
        WmSecAccessToken: "odit",
        WmSvcName: "at",
        FeedType: operations.UpdateBulkInventoryFeedTypeEnumMpInventory,
        ShipNode: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBulkInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateInventoryForAnItemJSON

Updates the inventory for a given item.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.UpdateInventoryForAnItemJSON(ctx, operations.UpdateInventoryForAnItemJSONRequest{
        RequestBody: operations.UpdateInventoryForAnItemApplicationJSON{
            Quantity: operations.UpdateInventoryForAnItemApplicationJSONQuantity{
                Amount: 4736.08,
                Unit: operations.UpdateInventoryForAnItemApplicationJSONQuantityUnitEnumEach,
            },
            Sku: "quod",
        },
        WmConsumerChannelType: sdk.String("quod"),
        WmQosCorrelationID: "esse",
        WmSecAccessToken: "totam",
        WmSvcName: "porro",
        ShipNode: sdk.String("dolorum"),
        Sku: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInventoryForAnItemJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateInventoryForAnItemRaw

Updates the inventory for a given item.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.UpdateInventoryForAnItemRaw(ctx, operations.UpdateInventoryForAnItemRawRequest{
        RequestBody: []byte("nam"),
        WmConsumerChannelType: sdk.String("officia"),
        WmQosCorrelationID: "occaecati",
        WmSecAccessToken: "fugit",
        WmSvcName: "deleniti",
        ShipNode: sdk.String("hic"),
        Sku: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInventoryForAnItemRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateMultiNodeInventory

This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Inventory.UpdateMultiNodeInventory(ctx, operations.UpdateMultiNodeInventoryRequest{
        RequestBody: operations.UpdateMultiNodeInventoryRequestBody{
            Inventories: operations.UpdateMultiNodeInventoryRequestBodyInventories{
                Nodes: []UpdateMultiNodeInventoryRequestBodyInventoriesNodes{
                    operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes{
                        InputQty: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty{
                            Amount: 1059.07,
                            Unit: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnumEach,
                        },
                        ShipNode: "commodi",
                    },
                    operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes{
                        InputQty: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty{
                            Amount: 4736,
                            Unit: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnumEach,
                        },
                        ShipNode: "modi",
                    },
                    operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes{
                        InputQty: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty{
                            Amount: 1863.32,
                            Unit: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnumEach,
                        },
                        ShipNode: "impedit",
                    },
                },
            },
        },
        WmConsumerChannelType: sdk.String("cum"),
        WmQosCorrelationID: "esse",
        WmSecAccessToken: "ipsum",
        WmSvcName: "excepturi",
        Sku: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMultiNodeInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
