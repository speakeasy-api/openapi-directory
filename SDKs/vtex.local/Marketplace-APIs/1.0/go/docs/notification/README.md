# Notification

### Available Operations

* [InventoryNotification](#inventorynotification) - Notify marketplace of inventory update
* [PriceNotification](#pricenotification) - Notify marketplace of price update

## InventoryNotification

This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs. 

There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.

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
    res, err := s.Notification.InventoryNotification(ctx, operations.InventoryNotificationRequest{
        Accept: "voluptatum",
        ContentType: "iusto",
        AccountName: "excepturi",
        Environment: "nisi",
        SellerID: "recusandae",
        SkuID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PriceNotification

This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs. 

There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.

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
    res, err := s.Notification.PriceNotification(ctx, operations.PriceNotificationRequest{
        Accept: "ab",
        ContentType: "quis",
        AccountName: "veritatis",
        Environment: "deserunt",
        SellerID: "perferendis",
        SkuID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
