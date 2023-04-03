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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bundles

* `calculatediscountsandtaxesBundles` - Calculate discounts and taxes (Bundles)

### campaignAudiences

* `getcampaignaudiences` - Get all campaign audiences
* `getcampaignconfiguration` - Get campaign audience configuration
* `setcampaignconfiguration` - Create campaign audience

### coupons

* `archivebycouponcode` - Archive coupon by coupon code
* `getall` - Get all coupons
* `getarchivedbycouponcode` - Get archived coupon by coupon code
* `getbycouponcode` - Get coupon by coupon code
* `getusage` - Get coupon usage
* `massiveGeneration` - Coupon Massive Generation
* `unarchivebycouponcode` - Unarchive coupon by coupon code
* `update` - Update coupon
* `postApiRnbPvtCoupon` - Create coupon
* `postApiRnbPvtMultipleCoupons` - Create multiple coupons

### notifications

* `usagenotification` - Usage notification

### pricesLegacyV1

* `deletebyskuId` - Delete Price by SKU Id
* `getallpaged` - Get all paged prices
* `pricebycontext` - Get Price by context
* `pricebyskuId` - Get Price by SKU ID
* `pricebyskuIdandtradePolicy` - Get Price by SKU ID and Trade Policy
* `saveprice` - Save Price

### promotionsAndTaxes

* `archivePromotion` - Archive Promotion or Tax
* `createOrUpdateCalculatorConfiguration` - Create or Update Promotion or Tax
* `getAllBenefits` - Get All Promotions
* `getAllTaxes` - Get All Taxes
* `getArchivedPromotions` - List Archived Promotions
* `getArchivedTaxes` - List Archived Taxes
* `getCalculatorConfigurationById` - Get Promotion or Tax by ID
* `unarchivePromotion` - Unarchive Promotion or Tax
* `postApiRnbPvtImportCalculatorConfiguration` - Create Multiple SKU Promotion
* `putApiRnbPvtImportCalculatorConfigurationPromotionId` - Update Multiple SKU Promotion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
