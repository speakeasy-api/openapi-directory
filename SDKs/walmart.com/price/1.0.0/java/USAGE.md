<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStrategyRequest;
import org.openapis.openapi.models.operations.CreateStrategyRequestBody;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategies;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnum;
import org.openapis.openapi.models.operations.CreateStrategyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateStrategyRequest req = new CreateStrategyRequest(                new CreateStrategyRequestBody() {{
                                enableRepricerForPromotion = true;
                                enabled = true;
                                repricerStrategy = "Buy Box Strategy For testing";
                                strategies = new org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategies[]{{
                                    add(new CreateStrategyRequestBodyStrategies() {{
                                        adjustmentType = CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum.PERCENTAGE;
                                        adjustmentValue = 1.2;
                                        strategyType = CreateStrategyRequestBodyStrategiesStrategyTypeEnum.COMPETITIVE_PRICE;
                                    }}),
                                    add(new CreateStrategyRequestBodyStrategies() {{
                                        adjustmentType = CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum.PERCENTAGE;
                                        adjustmentValue = 1.2;
                                        strategyType = CreateStrategyRequestBodyStrategiesStrategyTypeEnum.EXTERNAL_PRICE;
                                    }}),
                                    add(new CreateStrategyRequestBodyStrategies() {{
                                        adjustmentType = CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum.PERCENTAGE;
                                        adjustmentValue = 1.2;
                                        strategyType = CreateStrategyRequestBodyStrategiesStrategyTypeEnum.EXTERNAL_PRICE;
                                    }}),
                                }};
                            }};, "illum", "vel", "error") {{
                wmConsumerChannelType = "deserunt";
            }};            

            CreateStrategyResponse res = sdk.prices.createStrategy(req);

            if (res.createStrategy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->