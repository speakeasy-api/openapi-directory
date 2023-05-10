# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategies;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesStrategyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStrategyRequest();
    $request->requestBody = new CreateStrategyRequestBody();
    $request->requestBody->enableRepricerForPromotion = true;
    $request->requestBody->enabled = true;
    $request->requestBody->repricerStrategy = 'Buy Box Strategy For testing';
    $request->requestBody->strategies = [
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
    ];
    $request->wmConsumerChannelType = 'provident';
    $request->wmQosCorrelationId = 'distinctio';
    $request->wmSecAccessToken = 'quibusdam';
    $request->wmSvcName = 'unde';

    $response = $sdk->prices->createStrategy($request);

    if ($response->createStrategy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
