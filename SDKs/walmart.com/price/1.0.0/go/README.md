# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/walmart.com/price/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    AdjustmentType: operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnumPercentage.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnumCompetitivePrice.ToPointer(),
                },
                operations.CreateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnumPercentage.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnumExternalPrice.ToPointer(),
                },
                operations.CreateStrategyRequestBodyStrategies{
                    AdjustmentType: operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnumPercentage.ToPointer(),
                    AdjustmentValue: sdk.Float64(1.2),
                    StrategyType: operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnumExternalPrice.ToPointer(),
                },
            },
        },
        WmConsumerChannelType: sdk.String("illum"),
        WmQosCorrelationID: "vel",
        WmSecAccessToken: "error",
        WmSvcName: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStrategy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Prices](docs/prices/README.md)

* [CreateStrategy](docs/prices/README.md#createstrategy) - Create Repricer Strategy
* [DeleteStrategy](docs/prices/README.md#deletestrategy) - Delete Repricer Strategy
* [GetRepricerFeed](docs/prices/README.md#getrepricerfeed) - Assign/Unassign items to/from Repricer Strategy
* [GetStrategies](docs/prices/README.md#getstrategies) - List of Repricer Strategies
* [OptCapProgramInPrice](docs/prices/README.md#optcapprograminprice) - Set up CAP SKU All
* [PriceBulkUploads](docs/prices/README.md#pricebulkuploads) - Update bulk prices (Multiple)
* [UpdatePrice](docs/prices/README.md#updateprice) - Update a price
* [UpdateStrategy](docs/prices/README.md#updatestrategy) - Update Repricer Strategy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
