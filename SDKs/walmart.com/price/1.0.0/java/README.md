# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [prices](docs/prices/README.md)

* [createStrategy](docs/prices/README.md#createstrategy) - Create Repricer Strategy
* [deleteStrategy](docs/prices/README.md#deletestrategy) - Delete Repricer Strategy
* [getRepricerFeed](docs/prices/README.md#getrepricerfeed) - Assign/Unassign items to/from Repricer Strategy
* [getStrategies](docs/prices/README.md#getstrategies) - List of Repricer Strategies
* [optCapProgramInPrice](docs/prices/README.md#optcapprograminprice) - Set up CAP SKU All
* [priceBulkUploads](docs/prices/README.md#pricebulkuploads) - Update bulk prices (Multiple)
* [updatePrice](docs/prices/README.md#updateprice) - Update a price
* [updateStrategy](docs/prices/README.md#updatestrategy) - Update Repricer Strategy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
