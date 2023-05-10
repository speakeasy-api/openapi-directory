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
use \OpenAPI\OpenAPI\Models\Operations\CalculatediscountsandtaxesBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalculatediscountsandtaxesBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Param;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculatediscountsandtaxesBundlesRequest();
    $request->accept = 'corrupti';
    $request->calculatediscountsandtaxesBundlesRequest = new CalculatediscountsandtaxesBundlesRequest();
    $request->calculatediscountsandtaxesBundlesRequest->isShoppingCart = false;
    $request->calculatediscountsandtaxesBundlesRequest->items = [
        new Item(),
        new Item(),
        new Item(),
    ];
    $request->calculatediscountsandtaxesBundlesRequest->origin = 'distinctio';
    $request->calculatediscountsandtaxesBundlesRequest->params = [
        new Param(),
        new Param(),
        new Param(),
        new Param(),
    ];
    $request->calculatediscountsandtaxesBundlesRequest->profileId = 'unde';
    $request->calculatediscountsandtaxesBundlesRequest->salesChannel = 'nulla';
    $request->contentType = 'corrupti';

    $response = $sdk->bundles->calculatediscountsandtaxesBundles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bundles](docs/bundles/README.md)

* [calculatediscountsandtaxesBundles](docs/bundles/README.md#calculatediscountsandtaxesbundles) - Calculate discounts and taxes (Bundles)

### [campaignAudiences](docs/campaignaudiences/README.md)

* [getcampaignaudiences](docs/campaignaudiences/README.md#getcampaignaudiences) - Get all campaign audiences
* [getcampaignconfiguration](docs/campaignaudiences/README.md#getcampaignconfiguration) - Get campaign audience configuration
* [setcampaignconfiguration](docs/campaignaudiences/README.md#setcampaignconfiguration) - Create campaign audience

### [coupons](docs/coupons/README.md)

* [archivebycouponcode](docs/coupons/README.md#archivebycouponcode) - Archive coupon by coupon code
* [getall](docs/coupons/README.md#getall) - Get all coupons
* [getarchivedbycouponcode](docs/coupons/README.md#getarchivedbycouponcode) - Get archived coupon by coupon code
* [getbycouponcode](docs/coupons/README.md#getbycouponcode) - Get coupon by coupon code
* [getusage](docs/coupons/README.md#getusage) - Get coupon usage
* [massiveGeneration](docs/coupons/README.md#massivegeneration) - Coupon Massive Generation
* [unarchivebycouponcode](docs/coupons/README.md#unarchivebycouponcode) - Unarchive coupon by coupon code
* [update](docs/coupons/README.md#update) - Update coupon
* [postApiRnbPvtCoupon](docs/coupons/README.md#postapirnbpvtcoupon) - Create coupon
* [postApiRnbPvtMultipleCoupons](docs/coupons/README.md#postapirnbpvtmultiplecoupons) - Create multiple coupons

### [notifications](docs/notifications/README.md)

* [usagenotification](docs/notifications/README.md#usagenotification) - Usage notification

### [pricesLegacyV1](docs/priceslegacyv1/README.md)

* [deletebyskuId](docs/priceslegacyv1/README.md#deletebyskuid) - Delete Price by SKU Id
* [getallpaged](docs/priceslegacyv1/README.md#getallpaged) - Get all paged prices
* [pricebycontext](docs/priceslegacyv1/README.md#pricebycontext) - Get Price by context
* [pricebyskuId](docs/priceslegacyv1/README.md#pricebyskuid) - Get Price by SKU ID
* [pricebyskuIdandtradePolicy](docs/priceslegacyv1/README.md#pricebyskuidandtradepolicy) - Get Price by SKU ID and Trade Policy
* [saveprice](docs/priceslegacyv1/README.md#saveprice) - Save Price

### [promotionsAndTaxes](docs/promotionsandtaxes/README.md)

* [archivePromotion](docs/promotionsandtaxes/README.md#archivepromotion) - Archive Promotion or Tax
* [createOrUpdateCalculatorConfiguration](docs/promotionsandtaxes/README.md#createorupdatecalculatorconfiguration) - Create or Update Promotion or Tax
* [getAllBenefits](docs/promotionsandtaxes/README.md#getallbenefits) - Get All Promotions
* [getAllTaxes](docs/promotionsandtaxes/README.md#getalltaxes) - Get All Taxes
* [getArchivedPromotions](docs/promotionsandtaxes/README.md#getarchivedpromotions) - List Archived Promotions
* [getArchivedTaxes](docs/promotionsandtaxes/README.md#getarchivedtaxes) - List Archived Taxes
* [getCalculatorConfigurationById](docs/promotionsandtaxes/README.md#getcalculatorconfigurationbyid) - Get Promotion or Tax by ID
* [unarchivePromotion](docs/promotionsandtaxes/README.md#unarchivepromotion) - Unarchive Promotion or Tax
* [postApiRnbPvtImportCalculatorConfiguration](docs/promotionsandtaxes/README.md#postapirnbpvtimportcalculatorconfiguration) - Create Multiple SKU Promotion
* [putApiRnbPvtImportCalculatorConfigurationPromotionId](docs/promotionsandtaxes/README.md#putapirnbpvtimportcalculatorconfigurationpromotionid) - Update Multiple SKU Promotion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
