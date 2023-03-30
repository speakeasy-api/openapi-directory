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
        QueryParams: operations.GetInventoryQueryParams{
            ShipNode: "unde",
            Sku: "deserunt",
        },
        Headers: operations.GetInventoryHeaders{
            WmConsumerChannelType: "porro",
            WmQosCorrelationID: "nulla",
            WmSecAccessToken: "id",
            WmSvcName: "vero",
        },
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