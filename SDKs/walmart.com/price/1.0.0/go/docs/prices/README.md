# Prices

### Available Operations

* [CreateStrategy](#createstrategy) - Create Repricer Strategy
* [DeleteStrategy](#deletestrategy) - Delete Repricer Strategy
* [GetRepricerFeed](#getrepricerfeed) - Assign/Unassign items to/from Repricer Strategy
* [GetStrategies](#getstrategies) - List of Repricer Strategies
* [OptCapProgramInPrice](#optcapprograminprice) - Set up CAP SKU All
* [PriceBulkUploads](#pricebulkuploads) - Update bulk prices (Multiple)
* [UpdatePrice](#updateprice) - Update a price
* [UpdateStrategy](#updatestrategy) - Update Repricer Strategy

## CreateStrategy

Creates a new strategy for the seller

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
    res, err := s.Prices.CreateStrategy(ctx, operations.CreateStrategyRequest{
        RequestBody: operations.CreateStrategyRequestBody{
            EnableRepricerForPromotion: sdk.Bool(true),
            Enabled: sdk.Bool(true),
            RepricerStrategy: sdk.String("Buy Box Strategy For testing"),
            Strategies: []CreateStrategyRequestBodyStrategies{
                operations.CreateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnumUnit.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnumBuyBoxPrice.ToPointer(),
                },
                operations.CreateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnumPercentage.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnumBuyBoxPrice.ToPointer(),
                },
            },
        },
        WmConsumerChannelType: sdk.String("delectus"),
        WmQosCorrelationID: "tempora",
        WmSecAccessToken: "suscipit",
        WmSvcName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStrategy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteStrategy

Deletes the strategy

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
    res, err := s.Prices.DeleteStrategy(ctx, operations.DeleteStrategyRequest{
        WmConsumerChannelType: sdk.String("minus"),
        WmQosCorrelationID: "placeat",
        WmSecAccessToken: "voluptatum",
        WmSvcName: "iusto",
        StrategyCollectionID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStrategy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRepricerFeed

Add/Remove one or more items from a strategy

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
    res, err := s.Prices.GetRepricerFeed(ctx, operations.GetRepricerFeedRequest{
        RequestBody: operations.GetRepricerFeedRequestBody{
            Item: []GetRepricerFeedRequestBodyItem{
                operations.GetRepricerFeedRequestBodyItem{
                    Strategy: &operations.GetRepricerFeedRequestBodyItemStrategy{
                        MaximumSellerAllowedPrice: sdk.Float64(8),
                        MinimumSellerAllowedPrice: sdk.Float64(7.2),
                        RepricerStrategy: sdk.String("Match Competitive Price"),
                        Sku: sdk.String("06068064605122shoe"),
                    },
                },
                operations.GetRepricerFeedRequestBodyItem{
                    Strategy: &operations.GetRepricerFeedRequestBodyItemStrategy{
                        MaximumSellerAllowedPrice: sdk.Float64(8),
                        MinimumSellerAllowedPrice: sdk.Float64(7.2),
                        RepricerStrategy: sdk.String("Match Competitive Price"),
                        Sku: sdk.String("06068064605122shoe"),
                    },
                },
            },
            ItemFeedHeader: &operations.GetRepricerFeedRequestBodyItemFeedHeader{
                Locale: sdk.String("en"),
                Mart: sdk.String("WALMART_US"),
                ProcessMode: sdk.String("REPLACE"),
                SellingChannel: sdk.String("repricerstrategy"),
                Subset: sdk.String("EXTERNAL"),
                Version: sdk.String("1.0"),
            },
        },
        WmConsumerChannelType: sdk.String("recusandae"),
        WmQosCorrelationID: "temporibus",
        WmSecAccessToken: "ab",
        WmSvcName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepricerFeed200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetStrategies

Get the list of strategies

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
    res, err := s.Prices.GetStrategies(ctx, operations.GetStrategiesRequest{
        WmConsumerChannelType: sdk.String("veritatis"),
        WmQosCorrelationID: "deserunt",
        WmSecAccessToken: "perferendis",
        WmSvcName: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStrategies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OptCapProgramInPrice

This API helps Sellers to completely opt-in or opt-out from CAP program.

If the subsidyEnrolled value = "true", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.

If the subsidyEnrolled value = "false", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.

View Guide
</doc/us/mp/us-mp-price/#1290>

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
    res, err := s.Prices.OptCapProgramInPrice(ctx, operations.OptCapProgramInPriceRequest{
        RequestBody: operations.OptCapProgramInPriceRequestBody{
            SubsidyEnrolled: sdk.Bool(false),
            SubsidyPreference: sdk.Bool(false),
        },
        WmConsumerChannelType: sdk.String("repellendus"),
        WmQosCorrelationID: "sapiente",
        WmSecAccessToken: "quo",
        WmSvcName: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OptCapProgramInPrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PriceBulkUploads

Updates prices in bulk.

In one Feed you can update up to 10,000 items in bulk. To ensure optimal Feed processing time, we recommend sending no more than 1000 items in one Feed and keeping the Feed sizes below 10 MB.

The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:

The timestamp used to determine precedence is passed in the request headers. All price updates in the feed are considered to have the same timestamp. The timestamp in the XML file is used only for auditing.
You can send a single SKU multiple times in one Feed. If a SKU is repeated in a Feed, the price will be set for that SKU on Walmart.com, but there is no guarantee as to which SKU's price within that feed will be used.
This API should be used in preference to the update a price. It should be called no sooner than 24 hours after a new item is set up and a wpid (Walmart Part ID) is available. Thereafter, the bulk price update has an service level agreement (SLA) of 15 minutes.

After the update is submitted, wait for at least five minutes before verifying whether the bulk price update was successful. Individual SKU price update success or failure is only available after the entire feed is processed.

If a SKU's price update fails (for example, multiple price updates were sent for the same SKU in a single feed), an error will be returned.

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
    res, err := s.Prices.PriceBulkUploads(ctx, operations.PriceBulkUploadsRequest{
        RequestBody: operations.PriceBulkUploadsRequestBody{
            File: operations.PriceBulkUploadsRequestBodyFile{
                Content: []byte("at"),
                File: "at",
            },
        },
        WmConsumerChannelType: sdk.String("maiores"),
        WmQosCorrelationID: "molestiae",
        WmSecAccessToken: "quod",
        WmSvcName: "quod",
        FeedType: operations.PriceBulkUploadsFeedTypeEnumPrice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PriceBulkUploads200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatePrice

Updates the regular price for a given item.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Prices.UpdatePrice(ctx, operations.UpdatePriceRequest{
        RequestBody: operations.UpdatePriceRequestBody{
            Definitions: map[string]interface{}{
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            OfferID: sdk.String("fugit"),
            Pricing: []UpdatePriceRequestBodyPricing{
                operations.UpdatePriceRequestBodyPricing{
                    ComparisonPrice: &operations.UpdatePriceRequestBodyPricingComparisonPrice{
                        Amount: sdk.Float64(9446.69),
                        Currency: operations.UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumCad.ToPointer(),
                    },
                    ComparisonPriceType: operations.UpdatePriceRequestBodyPricingComparisonPriceTypeEnumBase.ToPointer(),
                    CurrentPrice: operations.UpdatePriceRequestBodyPricingCurrentPrice{
                        Amount: sdk.Float64(5218.48),
                        Currency: operations.UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnumUsd.ToPointer(),
                    },
                    CurrentPriceType: operations.UpdatePriceRequestBodyPricingCurrentPriceTypeEnumReduced,
                    EffectiveDate: types.MustTimeFromString("2022-09-26T10:29:33.503Z"),
                    ExpirationDate: types.MustTimeFromString("2022-03-24T09:42:46.236Z"),
                    PriceDisplayCodes: operations.UpdatePriceRequestBodyPricingPriceDisplayCodesEnumCheckout.ToPointer(),
                    ProcessMode: operations.UpdatePriceRequestBodyPricingProcessModeEnumUpsert.ToPointer(),
                    PromoID: sdk.String("ipsum"),
                },
                operations.UpdatePriceRequestBodyPricing{
                    ComparisonPrice: &operations.UpdatePriceRequestBodyPricingComparisonPrice{
                        Amount: sdk.Float64(5684.34),
                        Currency: operations.UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumUsd.ToPointer(),
                    },
                    ComparisonPriceType: operations.UpdatePriceRequestBodyPricingComparisonPriceTypeEnumBase.ToPointer(),
                    CurrentPrice: operations.UpdatePriceRequestBodyPricingCurrentPrice{
                        Amount: sdk.Float64(187.89),
                        Currency: operations.UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnumUsd.ToPointer(),
                    },
                    CurrentPriceType: operations.UpdatePriceRequestBodyPricingCurrentPriceTypeEnumReduced,
                    EffectiveDate: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
                    ExpirationDate: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
                    PriceDisplayCodes: operations.UpdatePriceRequestBodyPricingPriceDisplayCodesEnumCart.ToPointer(),
                    ProcessMode: operations.UpdatePriceRequestBodyPricingProcessModeEnumDelete.ToPointer(),
                    PromoID: sdk.String("saepe"),
                },
                operations.UpdatePriceRequestBodyPricing{
                    ComparisonPrice: &operations.UpdatePriceRequestBodyPricingComparisonPrice{
                        Amount: sdk.Float64(6818.2),
                        Currency: operations.UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnumUsd.ToPointer(),
                    },
                    ComparisonPriceType: operations.UpdatePriceRequestBodyPricingComparisonPriceTypeEnumBase.ToPointer(),
                    CurrentPrice: operations.UpdatePriceRequestBodyPricingCurrentPrice{
                        Amount: sdk.Float64(3595.08),
                        Currency: operations.UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnumCad.ToPointer(),
                    },
                    CurrentPriceType: operations.UpdatePriceRequestBodyPricingCurrentPriceTypeEnumReduced,
                    EffectiveDate: types.MustTimeFromString("2020-11-28T02:15:07.561Z"),
                    ExpirationDate: types.MustTimeFromString("2022-12-10T00:25:28.749Z"),
                    PriceDisplayCodes: operations.UpdatePriceRequestBodyPricingPriceDisplayCodesEnumCheckout.ToPointer(),
                    ProcessMode: operations.UpdatePriceRequestBodyPricingProcessModeEnumDelete.ToPointer(),
                    PromoID: sdk.String("mollitia"),
                },
            },
            ReplaceAll: operations.UpdatePriceRequestBodyReplaceAllEnumFalse.ToPointer(),
            Sku: "dolores",
        },
        WmConsumerChannelType: sdk.String("dolorem"),
        WmQosCorrelationID: "corporis",
        WmSecAccessToken: "explicabo",
        WmSvcName: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateStrategy

Updates the existing strategy

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
    res, err := s.Prices.UpdateStrategy(ctx, operations.UpdateStrategyRequest{
        RequestBody: operations.UpdateStrategyRequestBody{
            EnableRepricerForPromotion: sdk.Bool(true),
            Enabled: sdk.Bool(true),
            RepricerStrategy: sdk.String("Buy Box Strategy For testing"),
            Strategies: []UpdateStrategyRequestBodyStrategies{
                operations.UpdateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.UpdateStrategyRequestBodyStrategiesAdjustmentTypeEnumPercentage.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.UpdateStrategyRequestBodyStrategiesStrategyTypeEnumExternalPrice.ToPointer(),
                },
                operations.UpdateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.UpdateStrategyRequestBodyStrategiesAdjustmentTypeEnumUnit.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.UpdateStrategyRequestBodyStrategiesStrategyTypeEnumExternalPrice.ToPointer(),
                },
            },
        },
        WmConsumerChannelType: sdk.String("accusantium"),
        WmQosCorrelationID: "iure",
        WmSecAccessToken: "culpa",
        WmSvcName: "doloribus",
        StrategyCollectionID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStrategy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
