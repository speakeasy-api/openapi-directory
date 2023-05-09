# SKUBindings

### Available Operations

* [ActivateSKUBinding](#activateskubinding) - Activate SKU Binding
* [Bindtoanothersku](#bindtoanothersku) - Bind a seller's SKU to another SKU
* [ChangeNotification](#changenotification) - Change Notification with SKU ID
* [DeactivateSKUBinding](#deactivateskubinding) - Deactivate SKU Binding
* [DeleteSKUsellerassociation](#deleteskusellerassociation) - Remove a seller's SKU Binding
* [GetSKUseller](#getskuseller) - Get details of a seller's SKU
* [GetallbySellerID](#getallbysellerid) - Get all SKU Bindings by Seller ID
* [GetbySkuID](#getbyskuid) - Get SKU Bindings by SKU ID
* [Getpagedadmin](#getpagedadmin) - Get SKU Bindings information
* [GetpagedbySellerID](#getpagedbysellerid) - Get paged SKU Bindings by Seller ID
* [InsertSKUBinding](#insertskubinding) - Insert SKU Binding
* [PostSkuBindingPvtSkusellerChangenotificationSellerIDSellerSkuID](#postskubindingpvtskusellerchangenotificationselleridsellerskuid) - Change Notification with Seller ID and Seller SKU ID

## ActivateSKUBinding

Changes the status of an SKU Binding to active, setting `isActive` to `true`.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.

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
    res, err := s.SKUBindings.ActivateSKUBinding(ctx, operations.ActivateSKUBindingRequest{
        Accept: "distinctio",
        ContentType: "quibusdam",
        SellerID: "vtxkfj7352",
        SkuSellerID: "71",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Bindtoanothersku

Associates a seller's SKU to another marketplace SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Request body example

```json
{
    "StockKeepingUnitId": 1
}
```

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
    res, err := s.SKUBindings.Bindtoanothersku(ctx, operations.BindtoanotherskuRequest{
        Accept: "unde",
        ContentType: "nulla",
        RequestBody: &operations.BindtoanotherskuRequestBody{
            StockKeepingUnitID: 1,
        },
        SellerID: "101",
        SellerSkuID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeNotification

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

The body of the request should be empty.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.

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
    res, err := s.SKUBindings.ChangeNotification(ctx, operations.ChangeNotificationRequest{
        Accept: "corrupti",
        ContentType: "illum",
        SkuID: "10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeactivateSKUBinding

Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.

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
    res, err := s.SKUBindings.DeactivateSKUBinding(ctx, operations.DeactivateSKUBindingRequest{
        Accept: "vel",
        ContentType: "error",
        SellerID: "vtxkfj7352",
        SkuSellerID: "71",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSKUsellerassociation

Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.

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
    res, err := s.SKUBindings.DeleteSKUsellerassociation(ctx, operations.DeleteSKUsellerassociationRequest{
        Accept: "deserunt",
        ContentType: "suscipit",
        SellerID: "vtxkfj7352",
        SellerSkuID: "71",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSKUseller

Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Response body example

```json
{
    "IsPersisted": true,
    "IsRemoved": false,
    "SkuSellerId": 102,
    "UpdateDate": "2021-04-12T20:06:59.413Z",
    "RequestedUpdateDate": null,
    "SellerStockKeepingUnitId": "71",
    "SellerId": "vtxkfj7352",
    "StockKeepingUnitId": 1,
    "IsActive": true
}
```

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
    res, err := s.SKUBindings.GetSKUseller(ctx, operations.GetSKUsellerRequest{
        Accept: "iure",
        ContentType: "magnam",
        SellerID: "101",
        SellerSkuID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSKUseller200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetallbySellerID

Retrieves a list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.

## Response body example

```json
[
    {
        "SellerStockKeepingUnitId": "24",
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null,
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "IsActive": true
    }
]
```

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
    res, err := s.SKUBindings.GetallbySellerID(ctx, operations.GetallbySellerIDRequest{
        Accept: "debitis",
        ContentType: "ipsa",
        SellerID: "vtxkfj7352",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetallbySellerID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetbySkuID

Retrieves SKU Bindings details by SKU ID.

## Response body example

```json
[
    {
        "Id": 48,
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 1,
        "SellerSkuId": "42",
        "IsActive": true,
        "LastUpdateDate": "2020-10-21T19:13:00.657",
        "SalesPolicy": 0
    }
]
```

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
    res, err := s.SKUBindings.GetbySkuID(ctx, operations.GetbySkuIDRequest{
        Accept: "delectus",
        ContentType: "tempora",
        SkuID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetbySkuID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Getpagedadmin

Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.

## Response body example

```json
[
    {
        "IsPersisted": true,
        "IsRemoved": false,
        "SkuSellerId": 1,
        "UpdateDate": "2019-12-04T01:56:00.673Z",
        "RequestedUpdateDate": null,
        "SellerStockKeepingUnitId": "12",
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 25,
        "IsActive": true
    }
]
```

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
    res, err := s.SKUBindings.Getpagedadmin(ctx, operations.GetpagedadminRequest{
        Accept: "suscipit",
        ContentType: "molestiae",
        IsActive: sdk.Bool(true),
        SellerID: sdk.String("vtxkfj7352"),
        SellerSkuID: sdk.String("71"),
        Size: sdk.String("1"),
        SkuID: sdk.String("1"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getpagedadmin200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetpagedbySellerID

Retrieves a paged list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.

## Response body example

```json
[
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "SellerStockKeepingUnitId": "24",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    },
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 14,
        "SellerStockKeepingUnitId": "60",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    }
]
```

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
    res, err := s.SKUBindings.GetpagedbySellerID(ctx, operations.GetpagedbySellerIDRequest{
        Accept: "minus",
        ContentType: "placeat",
        Page: "1",
        SellerID: "vtxkfj7352",
        Size: "2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetpagedbySellerID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## InsertSKUBinding

Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.

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
    res, err := s.SKUBindings.InsertSKUBinding(ctx, operations.InsertSKUBindingRequest{
        Accept: "voluptatum",
        ContentType: "iusto",
        RequestBody: operations.InsertSKUBindingRequestBody{
            IsActive: false,
            SellerID: "excepturi",
            SellerStockKeepingUnitID: "nisi",
            StockKeepingUnitID: 925597,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSkuBindingPvtSkusellerChangenotificationSellerIDSellerSkuID

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.

Both information are passed through the request URL. The body of the request should be empty.
 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.

## Example

Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.

In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.

```
https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
```

## Response codes

The following response codes are possible for this request.
* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
* 403: Failure in the authentication.
* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
* 429: Failure due to too many requests.

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
    res, err := s.SKUBindings.PostSkuBindingPvtSkusellerChangenotificationSellerIDSellerSkuID(ctx, operations.PostSkuBindingPvtSkusellerChangenotificationSellerIDSellerSkuIDRequest{
        Accept: "temporibus",
        ContentType: "ab",
        SellerID: "101",
        SellerSkuID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
