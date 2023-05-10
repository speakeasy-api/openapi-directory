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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetrulesforapricetableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetrulesforapricetableRequest();
    $request->accept = 'application/json';
    $request->contentType = 'corrupti';
    $request->priceTableId = 'b2c';

    $response = $sdk->priceTables->getrulesforapricetable($request);

    if ($response->getrulesforapricetable200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [priceTables](docs/pricetables/README.md)

* [getrulesforapricetable](docs/pricetables/README.md#getrulesforapricetable) - Get rules for a price table
* [listpricetables](docs/pricetables/README.md#listpricetables) - List price tables
* [getallpricetablesandrules](docs/pricetables/README.md#getallpricetablesandrules) - Get all price tables and their rules
* [putPricingPipelineCatalogPriceTableId](docs/pricetables/README.md#putpricingpipelinecatalogpricetableid) - Update rules for a price table

### [pricesAndFixedPrices](docs/pricesandfixedprices/README.md)

* [createUpdatePriceOrFixedPrice](docs/pricesandfixedprices/README.md#createupdatepriceorfixedprice) - Create or Update Base Price or Fixed Prices
* [deletePrice](docs/pricesandfixedprices/README.md#deleteprice) - Delete Price
* [deletefixedpricesonapricetableortradepolicy](docs/pricesandfixedprices/README.md#deletefixedpricesonapricetableortradepolicy) - Delete Fixed Prices on a price table or trade policy
* [getComputedPricebypricetable](docs/pricesandfixedprices/README.md#getcomputedpricebypricetable) - Get Computed Price by price table or trade policy
* [getFixedPrices](docs/pricesandfixedprices/README.md#getfixedprices) - Get Fixed Prices
* [getFixedPricesonapricetable](docs/pricesandfixedprices/README.md#getfixedpricesonapricetable) - Get Fixed Prices on a price table or trade policy
* [getPrice](docs/pricesandfixedprices/README.md#getprice) - Get Price
* [createorupdatefixedpricesonpricetableortradepolicy](docs/pricesandfixedprices/README.md#createorupdatefixedpricesonpricetableortradepolicy) - Create or Update Fixed Prices on a price table or trade policy

### [pricingConfiguration](docs/pricingconfiguration/README.md)

* [getPricingConfig](docs/pricingconfiguration/README.md#getpricingconfig) - Get Pricing Configuration
* [getPricingv2Status](docs/pricingconfiguration/README.md#getpricingv2status) - Get Pricing v2 Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
