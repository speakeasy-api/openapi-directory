# PriceTables

### Available Operations

* [Getrulesforapricetable](#getrulesforapricetable) - Get rules for a price table
* [Listpricetables](#listpricetables) - List price tables
* [Getallpricetablesandrules](#getallpricetablesandrules) - Get all price tables and their rules
* [PutPricingPipelineCatalogPriceTableID](#putpricingpipelinecatalogpricetableid) - Update rules for a price table

## Getrulesforapricetable

This method will retrieve the rules from a specific Price Table.

## Response body example

```json
{
    "tradePolicyId": "b2c",
    "rules": [{
        "id": 0,
        "context": {
            "categories": {},
            "brands": {
                "2000009": "Whiskas"
            },
            "stockStatuses": null,
            "internalCategories": null,
            "markupRange": null,
            "dateRange": null
        },
        "percentualModifier": 15
    }]
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
    res, err := s.PriceTables.Getrulesforapricetable(ctx, operations.GetrulesforapricetableRequest{
        Accept: "application/json",
        ContentType: "provident",
        PriceTableID: "b2c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getrulesforapricetable200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listpricetables

This method will list all price tables.

## Response body example

```json
[
    "1",
    "2",
    "3",
    "b2c",
    "b2b",
    "gold"
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
    res, err := s.PriceTables.Listpricetables(ctx, operations.ListpricetablesRequest{
        Accept: "application/json",
        ContentType: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listpricetables200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## Getallpricetablesandrules

This method will retrieve all price tables and their rules.

## Response body example

```json
[
    {
        "tradePolicyId": "2",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {},
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 20
            }
        ]
    },
    {
        "tradePolicyId": "b2c",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {
                        "2000009": "Whiskas"
                    },
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 15
            }
        ]
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
    res, err := s.PriceTables.Getallpricetablesandrules(ctx, operations.GetallpricetablesandrulesRequest{
        Accept: "application/json",
        ContentType: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getallpricetablesandrules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## PutPricingPipelineCatalogPriceTableID

This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.

## Request body example

```json
{
    "rules": [
          {
               "id": 1,
               "context": {
                    "categories": {
                         "Category ID": "1",
                         "Category Name": "Alimentação"
                    },
                    "brands": {
                         "Brand ID": "2000002",
                         "Brand Name": "Whiskas"
                    },
                    "markupRange": {
                         "from": 0,
                         "to": 200
                    },
                    "dateRange": {
                         "from": "2022-01-23T19:00:00.000Z",
                         "to": "2023-10-26T00:00:00.000Z"
                    }
               },
               "percentualModifier": 0
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
    res, err := s.PriceTables.PutPricingPipelineCatalogPriceTableID(ctx, operations.PutPricingPipelineCatalogPriceTableIDRequest{
        Accept: "application/json",
        ContentType: "unde",
        RequestBody: &operations.PutPricingPipelineCatalogPriceTableIDRequestBody{
            Rules: []PutPricingPipelineCatalogPriceTableIDRequestBodyRules{
                operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRules{
                    Context: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContext{
                        Brands: map[string]string{
                            "illum": "421",
                            "vel": "421",
                            "error": "421",
                        },
                        Categories: map[string]string{
                            "suscipit": "209",
                            "iure": "209",
                            "magnam": "209",
                        },
                        DateRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextDateRange{
                            From: "2019-10-23T19:00:00.000Z",
                            To: "2019-10-26T00:00:00.000Z",
                        },
                        InternalCategories: map[string]interface{}{
                            "ipsa": "delectus",
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        MarkupRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextMarkupRange{
                            From: 479977,
                            To: 200,
                        },
                        StockStatuses: map[string]interface{}{
                            "nisi": "recusandae",
                            "temporibus": "ab",
                            "quis": "veritatis",
                        },
                    },
                    ID: 648172,
                    PercentualModifier: 202.18,
                },
                operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRules{
                    Context: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContext{
                        Brands: map[string]string{
                            "repellendus": "421",
                            "sapiente": "421",
                        },
                        Categories: map[string]string{
                            "odit": "209",
                            "at": "209",
                            "at": "209",
                            "maiores": "209",
                        },
                        DateRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextDateRange{
                            From: "2019-10-23T19:00:00.000Z",
                            To: "2019-10-26T00:00:00.000Z",
                        },
                        InternalCategories: map[string]interface{}{
                            "quod": "quod",
                            "esse": "totam",
                        },
                        MarkupRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextMarkupRange{
                            From: 780529,
                            To: 200,
                        },
                        StockStatuses: map[string]interface{}{
                            "dicta": "nam",
                            "officia": "occaecati",
                            "fugit": "deleniti",
                        },
                    },
                    ID: 944669,
                    PercentualModifier: 7586.16,
                },
                operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRules{
                    Context: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContext{
                        Brands: map[string]string{
                            "beatae": "421",
                            "commodi": "421",
                            "molestiae": "421",
                        },
                        Categories: map[string]string{
                            "qui": "209",
                            "impedit": "209",
                        },
                        DateRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextDateRange{
                            From: "2019-10-23T19:00:00.000Z",
                            To: "2019-10-26T00:00:00.000Z",
                        },
                        InternalCategories: map[string]interface{}{
                            "esse": "ipsum",
                            "excepturi": "aspernatur",
                            "perferendis": "ad",
                        },
                        MarkupRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextMarkupRange{
                            From: 617636,
                            To: 200,
                        },
                        StockStatuses: map[string]interface{}{
                            "iste": "dolor",
                        },
                    },
                    ID: 616934,
                    PercentualModifier: 3864.89,
                },
                operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRules{
                    Context: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContext{
                        Brands: map[string]string{
                            "saepe": "421",
                            "fuga": "421",
                            "in": "421",
                            "corporis": "421",
                        },
                        Categories: map[string]string{
                            "iure": "209",
                            "saepe": "209",
                            "quidem": "209",
                        },
                        DateRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextDateRange{
                            From: "2019-10-23T19:00:00.000Z",
                            To: "2019-10-26T00:00:00.000Z",
                        },
                        InternalCategories: map[string]interface{}{
                            "ipsa": "reiciendis",
                        },
                        MarkupRange: operations.PutPricingPipelineCatalogPriceTableIDRequestBodyRulesContextMarkupRange{
                            From: 666767,
                            To: 200,
                        },
                        StockStatuses: map[string]interface{}{
                            "laborum": "dolores",
                            "dolorem": "corporis",
                            "explicabo": "nobis",
                        },
                    },
                    ID: 315428,
                    PercentualModifier: 6078.31,
                },
            },
        },
        PriceTableID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
