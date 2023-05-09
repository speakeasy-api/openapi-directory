# PortfolioTemplates

## Overview

A portfolio template captures how an investor’s cash (once transferred to a pot) should be automatically invested by the system. A portfolio template consists of a set of investment products and the ratios in which these products must be bought, once cleared cash is available to invest. 

For example, a portfolio template ‘PT1’ has the following template

Investment Product | Ratio
-------------------|-------
Investment Product A | 20%
Investment Product B | 30%
Investment Product C | 50%

If GBP 100 is transferred to a pot linked to Portfolio template PT1, the following buy orders will be triggered

* BUY Investment Product A for GBP 20
* BUY Investment Product B for GBP 30
* BUY Investment Product C for GBP 50

### Portfolio Creation

Portfolio Templates can be created by the Wealth Manger (generic set of portfolio templates created in WealthOS and a single template will be assigned to an Investor’s pot based on suitability - e.g. robo advisory) 

<!-- If a Portfolio template is created by an investor then the request must have `owner : "investor"` and `investor_id` populated with the relevant investor ID.  -->

The ratios of investment products within a portfolio template must add up to a 100% - if this is not the case, the system will reject the portfolio creation or update. 

Once cleared cash is available in a pot, the system can be instructed to trigger investment product buy requests based on the portfolio template linked to the pot. 



### Available Operations

* [CreatePortfolioTemplate](#createportfoliotemplate) - Create new Portfolio Template
* [GetAllPortfolioTemplates](#getallportfoliotemplates) - Get all the Portfolio templates
* [GetPortfolioTemplate](#getportfoliotemplate) - Retrive existing Portfolio template
* [UpdatePortfolioTemplate](#updateportfoliotemplate) - Update existing Portfolio template

## CreatePortfolioTemplate

Create new Portfolio Template

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
    res, err := s.PortfolioTemplates.CreatePortfolioTemplate(ctx, operations.CreatePortfolioTemplateRequest{
        RequestBody: operations.CreatePortfolioTemplateRequestBodyInput{
            PortfolioName: "odio",
            Ratios: []CreatePortfolioTemplateRequestBodyRatios{
                operations.CreatePortfolioTemplateRequestBodyRatios{
                    InvestmentProductID: "ullam",
                    Ratio: "nam",
                },
            },
        },
        XAPIKey: "hic",
    }, operations.CreatePortfolioTemplateSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortfolioTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllPortfolioTemplates

Get all the portfolio templates

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
    res, err := s.PortfolioTemplates.GetAllPortfolioTemplates(ctx, operations.GetAllPortfolioTemplatesRequest{
        XAPIKey: "voluptatem",
    }, operations.GetAllPortfolioTemplatesSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllPortfolioTemplates200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPortfolioTemplate

Retrive existing Portfolio template

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
    res, err := s.PortfolioTemplates.GetPortfolioTemplate(ctx, operations.GetPortfolioTemplateRequest{
        PortfolioTemplateID: "cumque",
        XAPIKey: "soluta",
    }, operations.GetPortfolioTemplateSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolioTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatePortfolioTemplate

Update existing Portfolio template

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
    res, err := s.PortfolioTemplates.UpdatePortfolioTemplate(ctx, operations.UpdatePortfolioTemplateRequest{
        RequestBody: operations.UpdatePortfolioTemplateRequestBody{
            PortfolioName: sdk.String("nobis"),
            Ratios: []UpdatePortfolioTemplateRequestBodyRatios{
                operations.UpdatePortfolioTemplateRequestBodyRatios{
                    InvestmentProductID: "saepe",
                    Ratio: "ipsum",
                },
            },
            ReferenceVersion: 1,
        },
        PortfolioTemplateID: "veritatis",
        XAPIKey: "nobis",
    }, operations.UpdatePortfolioTemplateSecurity{
        APISecretKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortfolioTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
