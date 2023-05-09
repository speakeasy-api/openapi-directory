# PricingConfiguration

### Available Operations

* [GetPricingConfig](#getpricingconfig) - Get Pricing Configuration
* [GetPricingv2Status](#getpricingv2status) - Get Pricing v2 Status

## GetPricingConfig

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
    res, err := s.PricingConfiguration.GetPricingConfig(ctx, operations.GetPricingConfigRequest{
        Accept: "application/json",
        ContentType: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingConfiguration != nil {
        // handle response
    }
}
```

## GetPricingv2Status

Retrieves Pricing v2 Status. 
## Response body example

```json
{
    "isActive": true,
    "hasMigrated": true
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
    res, err := s.PricingConfiguration.GetPricingv2Status(ctx, operations.GetPricingv2StatusRequest{
        Accept: "application/json",
        ContentType: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPricingv2Status200ApplicationJSONObject != nil {
        // handle response
    }
}
```
