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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPricingConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPricingConfigRequest();
    $request->accept = 'application/json';
    $request->contentType = 'iusto';

    $response = $sdk->pricingConfiguration->getPricingConfig($request);

    if ($response->pricingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPricingv2StatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPricingv2StatusRequest();
    $request->accept = 'application/json';
    $request->contentType = 'excepturi';

    $response = $sdk->pricingConfiguration->getPricingv2Status($request);

    if ($response->getPricingv2Status200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
