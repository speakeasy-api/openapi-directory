# PricesLegacyV1

### Available Operations

* [DeletebyskuID](#deletebyskuid) - Delete Price by SKU Id
* [Getallpaged](#getallpaged) - Get all paged prices
* [Pricebycontext](#pricebycontext) - Get Price by context
* [PricebyskuID](#pricebyskuid) - Get Price by SKU ID
* [PricebyskuIdandtradePolicy](#pricebyskuidandtradepolicy) - Get Price by SKU ID and Trade Policy
* [Saveprice](#saveprice) - Save Price

## DeletebyskuID

Delete all prices from an SKU. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

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
    res, err := s.PricesLegacyV1.DeletebyskuID(ctx, operations.DeletebyskuIDRequest{
        Accept: "libero",
        ContentType: "aut",
        An: "{{accountName}}",
        SkuID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getallpaged

Get all paged prices. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

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
    res, err := s.PricesLegacyV1.Getallpaged(ctx, operations.GetallpagedRequest{
        Accept: "deleniti",
        ContentType: "impedit",
        An: "{{accountName}}",
        Page: "aliquam",
        PageSize: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Pricebycontext

Get price by context. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PricesLegacyV1.Pricebycontext(ctx, operations.PricebycontextRequest{
        Accept: "accusamus",
        ContentType: "inventore",
        PricebycontextRequest: shared.PricebycontextRequest{
            ID: 250622,
            ItemID: 89603,
            SalesChannel: 677412,
            SellerID: "laborum",
            ValidFrom: "placeat",
            ValidTo: "velit",
        },
        An: "{{accountName}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PricebyskuID

Price by SKU ID              
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)

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
    res, err := s.PricesLegacyV1.PricebyskuID(ctx, operations.PricebyskuIDRequest{
        Accept: "eum",
        ContentType: "autem",
        An: "{{accountName}}",
        SkuID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PricebyskuIdandtradePolicy

Retrieve price by SKU ID and Trade Policy. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

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
    res, err := s.PricesLegacyV1.PricebyskuIdandtradePolicy(ctx, operations.PricebyskuIdandtradePolicyRequest{
        Accept: "quas",
        ContentType: "assumenda",
        An: "{{accountName}}",
        SkuID: "nulla",
        TradePolicy: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Saveprice

Save price. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PricesLegacyV1.Saveprice(ctx, operations.SavepriceRequest{
        Accept: "libero",
        ContentType: "quasi",
        RequestBody: []shared.SavepriceRequest{
            shared.SavepriceRequest{
                ItemID: 256139,
                ListPrice: 131482,
                Price: 591935,
                SalesChannel: 55374,
                SellerID: 476477,
                ValidFrom: "magnam",
                ValidTo: "odio",
            },
            shared.SavepriceRequest{
                ItemID: 262118,
                ListPrice: 458515,
                Price: 456141,
                SalesChannel: 524593,
                SellerID: 683282,
                ValidFrom: "reprehenderit",
                ValidTo: "quidem",
            },
        },
        An: "{{accountName}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
