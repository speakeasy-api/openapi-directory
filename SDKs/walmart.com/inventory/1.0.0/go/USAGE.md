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