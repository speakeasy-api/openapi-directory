# pricingConfiguration

### Available Operations

* [getPricingConfig](#getpricingconfig) - Get Pricing Configuration
* [getPricingv2Status](#getpricingv2status) - Get Pricing v2 Status

## getPricingConfig

Retrieves Pricing Configuration.
## Response body example

```json
{
    "hasMigrated": true,
    "migrationStatus": "Completed",
    "defaultMarkup": 100,
    "priceVariation": {
        "upperLimit": null,
        "lowerLimit": null
    },
    "minimumMarkups": {
        "1": 100,
        "2": 90
    },
    "tradePolicyConfigs": [],
    "sellersToOverride": [],
    "hasPriceInheritance": false,
    "priceInheritance": "never",
    "hasOptionalBasePrice": false,
    "blockAccount": false,
    "blockedRoutes": null,
    "priceTableSelectionStrategy": "first",
    "priceTableLimit": null
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPricingConfigRequest;
import org.openapis.openapi.models.operations.GetPricingConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPricingConfigRequest req = new GetPricingConfigRequest("application/json", "distinctio");            

            GetPricingConfigResponse res = sdk.pricingConfiguration.getPricingConfig(req);

            if (res.pricingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPricingv2Status

Retrieves Pricing v2 Status. 
## Response body example

```json
{
    "isActive": true,
    "hasMigrated": true
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPricingv2StatusRequest;
import org.openapis.openapi.models.operations.GetPricingv2StatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "labore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPricingv2StatusRequest req = new GetPricingv2StatusRequest("application/json", "labore");            

            GetPricingv2StatusResponse res = sdk.pricingConfiguration.getPricingv2Status(req);

            if (res.getPricingv2Status200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
