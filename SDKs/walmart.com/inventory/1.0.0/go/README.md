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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetInventoryRequest{
        WmConsumerChannelType: "corrupti",
        WmQosCorrelationID: "provident",
        WmSecAccessToken: "distinctio",
        WmSvcName: "quibusdam",
        ShipNode: "unde",
        Sku: "nulla",
    }

    ctx := context.Background()
    res, err := s.Inventory.GetInventory(ctx, req)
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


### Inventory

* `GetInventory` - Inventory
* `GetMultiNodeInventoryForAllSkuAndAllShipNodes` - Multiple Item Inventory for All Ship Nodes
* `GetMultiNodeInventoryForSkuAndAllShipnodes` - Single Item Inventory by Ship Node
* `GetWFSInventory` - WFS Inventory
* `UpdateBulkInventory` - Bulk Item Inventory Update
* `UpdateInventoryForAnItemJSON` - Update inventory
* `UpdateInventoryForAnItemRaw` - Update inventory
* `UpdateMultiNodeInventory` - Update Item Inventory per Ship Node
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
