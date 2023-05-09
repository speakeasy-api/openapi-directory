# PricesAndFixedPrices

### Available Operations

* [CreateUpdatePriceOrFixedPrice](#createupdatepriceorfixedprice) - Create or Update Base Price or Fixed Prices
* [DeletePrice](#deleteprice) - Delete Price
* [Deletefixedpricesonapricetableortradepolicy](#deletefixedpricesonapricetableortradepolicy) - Delete Fixed Prices on a price table or trade policy
* [GetComputedPricebypricetable](#getcomputedpricebypricetable) - Get Computed Price by price table or trade policy
* [GetFixedPrices](#getfixedprices) - Get Fixed Prices
* [GetFixedPricesonapricetable](#getfixedpricesonapricetable) - Get Fixed Prices on a price table or trade policy
* [GetPrice](#getprice) - Get Price
* [Createorupdatefixedpricesonpricetableortradepolicy](#createorupdatefixedpricesonpricetableortradepolicy) - Create or Update Fixed Prices on a price table or trade policy

## CreateUpdatePriceOrFixedPrice

Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.

 <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>

```json
{
    "markup": 30,
    "basePrice": 100,
    "listPrice": 35,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 31,
            "listPrice": 32,
            "minQuantity": 1,
            "dateRange": {
                "from": "2022-05-21T22:00:00Z",
                "to": "2023-05-28T22:00:00Z"
            }
        },
        {
            "tradePolicyId": "1",
            "value": 31.5,
            "listPrice": 33,
            "minQuantity": 2
        }
    ]
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
    res, err := s.PricesAndFixedPrices.CreateUpdatePriceOrFixedPrice(ctx, operations.CreateUpdatePriceOrFixedPriceRequest{
        Accept: "application/json",
        ContentType: "minima",
        RequestBody: &operations.CreateUpdatePriceOrFixedPriceRequestBody{
            BasePrice: 5701.97,
            CostPrice: sdk.Float64(384.25),
            FixedPrices: []CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices{
                operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices{
                    DateRange: &operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange{
                        From: "2021-12-30T22:00:00-03:00",
                        To: "2021-12-30T22:00:00-03:00",
                    },
                    ListPrice: sdk.Float64(50.5),
                    MinQuantity: 2,
                    TradePolicyID: "1",
                    Value: 50.5,
                },
                operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices{
                    DateRange: &operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange{
                        From: "2021-12-30T22:00:00-03:00",
                        To: "2021-12-30T22:00:00-03:00",
                    },
                    ListPrice: sdk.Float64(50.5),
                    MinQuantity: 2,
                    TradePolicyID: "1",
                    Value: 50.5,
                },
            },
            ListPrice: 6342.74,
            Markup: 988374,
        },
        ItemID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePrice

Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.

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
    res, err := s.PricesAndFixedPrices.DeletePrice(ctx, operations.DeletePriceRequest{
        Accept: "sapiente",
        ContentType: "architecto",
        ItemID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Deletefixedpricesonapricetableortradepolicy

Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.

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
    res, err := s.PricesAndFixedPrices.Deletefixedpricesonapricetableortradepolicy(ctx, operations.DeletefixedpricesonapricetableortradepolicyRequest{
        Accept: "application/json",
        ContentType: "mollitia",
        ItemID: 1,
        PriceTableID: "gold",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetComputedPricebypricetable

Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy. 

## Response body example

```json
{
    "tradePolicyId": "1",
    "listPrice": 30,
    "costPrice": 76.92,
    "sellingPrice": 18.9,
    "priceValidUntil": "2018-12-20T18:12:14Z"
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
    res, err := s.PricesAndFixedPrices.GetComputedPricebypricetable(ctx, operations.GetComputedPricebypricetableRequest{
        Accept: "application/json",
        ContentType: "dolorem",
        BrandID: 3,
        CategoryIds: 1,
        ItemID: 1,
        PriceTableID: "gold",
        Quantity: 2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcomputedprice != nil {
        // handle response
    }
}
```

## GetFixedPrices

The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.

 The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.

 Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).

 Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).

 ## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
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
    res, err := s.PricesAndFixedPrices.GetFixedPrices(ctx, operations.GetFixedPricesRequest{
        Accept: "application/json",
        ContentType: "culpa",
        ItemID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FixedPrices != nil {
        // handle response
    }
}
```

## GetFixedPricesonapricetable

Retrieves all Fixed Prices on a price table or trade policy. 

## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-04:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1
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
    res, err := s.PricesAndFixedPrices.GetFixedPricesonapricetable(ctx, operations.GetFixedPricesonapricetableRequest{
        Accept: "application/json",
        ContentType: "consequuntur",
        ItemID: 1,
        PriceTableID: "gold",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FixedPrices != nil {
        // handle response
    }
}
```

## GetPrice

Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.

 ## Response body example

```json
{
    "itemId": "1",
    "listPrice": 50,
    "costPrice": 90,
    "markup": 30,
    "basePrice": 117,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 50.5,
            "listPrice": 50.5,
            "minQuantity": 2,
            "dateRange": {
                "from": "2021-12-31T01:00:00Z",
                "to": "2022-12-31T01:00:00Z"
            }
        },
        {
            "tradePolicyId": "2",
            "value": 30,
            "listPrice": 50,
            "minQuantity": 2
        }
    ]
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
    res, err := s.PricesAndFixedPrices.GetPrice(ctx, operations.GetPriceRequest{
        Accept: "application/json",
        ContentType: "repellat",
        ItemID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getprice != nil {
        // handle response
    }
}
```

## Createorupdatefixedpricesonpricetableortradepolicy

Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.

 ## Request body example

```json
[
  {
    "value": 50.5,
    "listPrice": 50.5,
    "minQuantity": 2,
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    }
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
    res, err := s.PricesAndFixedPrices.Createorupdatefixedpricesonpricetableortradepolicy(ctx, operations.CreateorupdatefixedpricesonpricetableortradepolicyRequest{
        Accept: "mollitia",
        ContentType: "occaecati",
        RequestBody: []CreateorupdatefixedpricesonpricetableortradepolicyRequestBody{
            operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBody{
                DateRange: &operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange{
                    From: "2021-12-30T22:00:00-03:00",
                    To: "2021-12-30T22:00:00-04:00",
                },
                ListPrice: sdk.Float64(50.5),
                MinQuantity: 2,
                Value: 50.5,
            },
            operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBody{
                DateRange: &operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange{
                    From: "2021-12-30T22:00:00-03:00",
                    To: "2021-12-30T22:00:00-04:00",
                },
                ListPrice: sdk.Float64(50.5),
                MinQuantity: 2,
                Value: 50.5,
            },
        },
        ItemID: 1,
        PriceTableID: "priceTableA",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
