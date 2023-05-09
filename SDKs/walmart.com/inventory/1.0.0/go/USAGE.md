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