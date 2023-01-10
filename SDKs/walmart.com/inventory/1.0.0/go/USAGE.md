<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BasicScheme: shared.SchemeBasicScheme{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetInventoryRequest{
        QueryParams: operations.GetInventoryQueryParams{
            ShipNode: "temporibus",
            Sku: "omnis",
        },
        Headers: operations.GetInventoryHeaders{
            Authorization: "praesentium",
            WMCONSUMERCHANNELTYPE: "reprehenderit",
            WMQOSCORRELATIONID: "nisi",
            WMSECACCESSTOKEN: "vel",
            WMSVCNAME: "aut",
        },
    }
    
    res, err := s.Inventory.GetInventory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInventory200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->