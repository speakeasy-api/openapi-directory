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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicScheme: shared.SchemeBasicScheme{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.GetInventoryRequest{
        QueryParams: operations.GetInventoryQueryParams{
            ShipNode: "unde",
            Sku: "deserunt",
        },
        Headers: operations.GetInventoryHeaders{
            Authorization: "porro",
            WmConsumerChannelType: "nulla",
            WmQosCorrelationID: "id",
            WmSecAccessToken: "vero",
            WmSvcName: "perspiciatis",
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