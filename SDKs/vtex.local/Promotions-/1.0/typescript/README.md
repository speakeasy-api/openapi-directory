# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Promotions-/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Promotions-/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CalculatediscountsandtaxesBundlesRequest,
  CalculatediscountsandtaxesBundlesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CalculatediscountsandtaxesBundlesRequest = {
  accept: "corrupti",
  calculatediscountsandtaxesBundlesRequest: {
    isShoppingCart: false,
    items: [
      {
        id: "distinctio",
        index: 844266,
        isGift: false,
        logisticsInfos: [
          "nulla",
          "corrupti",
          "illum",
        ],
        measurementUnit: "vel",
        params: [
          {
            name: "deserunt",
            value: "suscipit",
          },
          {
            name: "iure",
            value: "magnam",
          },
          {
            name: "debitis",
            value: "ipsa",
          },
        ],
        priceSheet: [
          "tempora",
          "suscipit",
          "molestiae",
          "minus",
        ],
        priceTags: [
          "voluptatum",
          "iusto",
          "excepturi",
          "nisi",
        ],
        productSpecifications: [
          "temporibus",
          "ab",
          "quis",
          "veritatis",
        ],
        quantity: 648172,
        sellerId: "perferendis",
        unitMultiplier: 368241,
      },
      {
        id: "repellendus",
        index: 957156,
        isGift: false,
        logisticsInfos: [
          "odit",
          "at",
          "at",
          "maiores",
        ],
        measurementUnit: "molestiae",
        params: [
          {
            name: "quod",
            value: "esse",
          },
          {
            name: "totam",
            value: "porro",
          },
          {
            name: "dolorum",
            value: "dicta",
          },
          {
            name: "nam",
            value: "officia",
          },
        ],
        priceSheet: [
          "fugit",
          "deleniti",
          "hic",
        ],
        priceTags: [
          "totam",
          "beatae",
          "commodi",
          "molestiae",
        ],
        productSpecifications: [
          "qui",
          "impedit",
        ],
        quantity: 736918,
        sellerId: "esse",
        unitMultiplier: 216550,
      },
      {
        id: "excepturi",
        index: 135218,
        isGift: false,
        logisticsInfos: [
          "ad",
        ],
        measurementUnit: "natus",
        params: [
          {
            name: "iste",
            value: "dolor",
          },
        ],
        priceSheet: [
          "laboriosam",
          "hic",
          "saepe",
        ],
        priceTags: [
          "in",
          "corporis",
          "iste",
        ],
        productSpecifications: [
          "saepe",
          "quidem",
        ],
        quantity: 99280,
        sellerId: "ipsa",
        unitMultiplier: 969810,
      },
    ],
    origin: "est",
    params: [
      {
        name: "laborum",
        value: "dolores",
      },
      {
        name: "dolorem",
        value: "corporis",
      },
      {
        name: "explicabo",
        value: "nobis",
      },
    ],
    profileId: "enim",
    salesChannel: "omnis",
  },
  contentType: "nemo",
};

sdk.bundles.calculatediscountsandtaxesBundles(req).then((res: CalculatediscountsandtaxesBundlesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

