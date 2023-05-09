# MatchedOffers

### Available Operations

* [GetProductoffers](#getproductoffers) - Get Matched Offer's Data by Product ID
* [GetSKUoffers](#getskuoffers) - Get Matched Offer's Data by SKU ID
* [Getofferslist](#getofferslist) - Get Matched Offers List

## GetProductoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

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
    res, err := s.MatchedOffers.GetProductoffers(ctx, operations.GetProductoffersRequest{
        Accept: "nulla",
        ContentType: "corrupti",
        AccountName: "illum",
        Environment: "vel",
        ProductID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSKUoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

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
    res, err := s.MatchedOffers.GetSKUoffers(ctx, operations.GetSKUoffersRequest{
        Accept: "deserunt",
        ContentType: "suscipit",
        AccountName: "iure",
        Environment: "magnam",
        ProductID: "debitis",
        SkuID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getofferslist

Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

 This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog. 

It is possible to filter the search through the following parameters: 

- rows 
- sort 

- start 

- fq

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
    res, err := s.MatchedOffers.Getofferslist(ctx, operations.GetofferslistRequest{
        Accept: "delectus",
        ContentType: "tempora",
        AccountName: "suscipit",
        Environment: "molestiae",
        Fq: sdk.String("skuId:172"),
        Rows: sdk.Int64(791725),
        Sort: sdk.String("availability,desc"),
        Start: sdk.Int64(812169),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMatchedOffersResponses != nil {
        // handle response
    }
}
```
