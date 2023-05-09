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