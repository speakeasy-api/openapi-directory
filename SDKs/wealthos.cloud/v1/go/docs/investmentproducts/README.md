# InvestmentProducts

## Overview

Investment products  (e.g. mutual funds, ETFs, stocks etc.) are bought and sold by the investor (or by the wealth manager on the investor’s behalf). 

The Investment Products endpoint returns all the investment products that are offered by the wealth manager, as well as the current market price. The wealth manager must specify the universe of supported investment products via the WealthOS Admin UI. 

### Available Operations

* [GetConfiguredInvestmentProductPrices](#getconfiguredinvestmentproductprices) - Get Current Prices of all Investment Products
* [GetConfiguredInvestmentProducts](#getconfiguredinvestmentproducts) - Get Configured Investment Products
* [GetInvestmentProduct](#getinvestmentproduct) - Get details of a given Investment Product
* [GetInvestmentProductPrice](#getinvestmentproductprice) - Get Current Price of an Investment Product

## GetConfiguredInvestmentProductPrices

Returns current prices of all the investment products configured for this tenancy

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvestmentProducts.GetConfiguredInvestmentProductPrices(ctx, operations.GetConfiguredInvestmentProductPricesRequest{
        PageNumber: sdk.String("nihil"),
        PageSize: sdk.String("praesentium"),
        Status: operations.GetConfiguredInvestmentProductPricesStatusEnumInactive.ToPointer(),
        XAPIKey: "ipsa",
    }, operations.GetConfiguredInvestmentProductPricesSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredInvestmentProductPrices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConfiguredInvestmentProducts

Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvestmentProducts.GetConfiguredInvestmentProducts(ctx, operations.GetConfiguredInvestmentProductsRequest{
        PageNumber: sdk.String("omnis"),
        PageSize: sdk.String("voluptate"),
        Status: operations.GetConfiguredInvestmentProductsStatusEnumInactive.ToPointer(),
        XAPIKey: "perferendis",
    }, operations.GetConfiguredInvestmentProductsSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredInvestmentProducts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetInvestmentProduct

Returns the requested investment product

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvestmentProducts.GetInvestmentProduct(ctx, operations.GetInvestmentProductRequest{
        CategoryID: operations.GetInvestmentProductCategoryIDEnumFunds,
        InvestmentProductID: "doloremque",
        XAPIKey: "reprehenderit",
    }, operations.GetInvestmentProductSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvestmentProduct200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetInvestmentProductPrice

Returns current price of the requested investment product

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InvestmentProducts.GetInvestmentProductPrice(ctx, operations.GetInvestmentProductPriceRequest{
        CategoryID: operations.GetInvestmentProductPriceCategoryIDEnumFunds,
        InvestmentProductID: "ut",
        XAPIKey: "maiores",
    }, operations.GetInvestmentProductPriceSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvestmentProductPrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
