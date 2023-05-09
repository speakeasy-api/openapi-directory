# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/walmart.com/inventory/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        WmQosCorrelationID: "provident",
        WmSecAccessToken: "distinctio",
        WmSvcName: "quibusdam",
        ShipNode: sdk.String("unde"),
        Sku: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Inventory](docs/inventory/README.md)

* [GetInventory](docs/inventory/README.md#getinventory) - Inventory
* [GetMultiNodeInventoryForAllSkuAndAllShipNodes](docs/inventory/README.md#getmultinodeinventoryforallskuandallshipnodes) - Multiple Item Inventory for All Ship Nodes
* [GetMultiNodeInventoryForSkuAndAllShipnodes](docs/inventory/README.md#getmultinodeinventoryforskuandallshipnodes) - Single Item Inventory by Ship Node
* [GetWFSInventory](docs/inventory/README.md#getwfsinventory) - WFS Inventory
* [UpdateBulkInventory](docs/inventory/README.md#updatebulkinventory) - Bulk Item Inventory Update
* [UpdateInventoryForAnItemJSON](docs/inventory/README.md#updateinventoryforanitemjson) - Update inventory
* [UpdateInventoryForAnItemRaw](docs/inventory/README.md#updateinventoryforanitemraw) - Update inventory
* [UpdateMultiNodeInventory](docs/inventory/README.md#updatemultinodeinventory) - Update Item Inventory per Ship Node
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
