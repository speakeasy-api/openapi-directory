# Offers

### Available Operations

* [GetAPICatalogSystemPubProductsOffersProductID](#getapicatalogsystempubproductsoffersproductid) - Search Product offers
* [GetAPICatalogSystemPubProductsOffersProductIDSkuSkuID](#getapicatalogsystempubproductsoffersproductidskuskuid) - Search SKU offers

## GetAPICatalogSystemPubProductsOffersProductID

Retrieves existing offers of a specific product.

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
    res, err := s.Offers.GetAPICatalogSystemPubProductsOffersProductID(ctx, operations.GetAPICatalogSystemPubProductsOffersProductIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: "3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPICatalogSystemPubProductsOffersProductID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetAPICatalogSystemPubProductsOffersProductIDSkuSkuID

Retrieves existing offers of a specific SKU.

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
    res, err := s.Offers.GetAPICatalogSystemPubProductsOffersProductIDSkuSkuID(ctx, operations.GetAPICatalogSystemPubProductsOffersProductIDSkuSkuIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: "3",
        SkuID: "5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPICatalogSystemPubProductsOffersProductIDSkuSkuID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
