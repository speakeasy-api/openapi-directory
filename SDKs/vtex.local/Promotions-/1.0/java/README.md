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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesResponse;
import org.openapis.openapi.models.shared.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.shared.Param;
import org.openapis.openapi.models.shared.Item;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculatediscountsandtaxesBundlesRequest req = new CalculatediscountsandtaxesBundlesRequest() {{
                accept = "corrupti";
                calculatediscountsandtaxesBundlesRequest = new CalculatediscountsandtaxesBundlesRequest() {{
                    isShoppingCart = false;
                    items = new org.openapis.openapi.models.shared.Item[]{{
                        add(new Item() {{
                            id = "distinctio";
                            index = 844266;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                            measurementUnit = "vel";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "deserunt";
                                    value = "suscipit";
                                }}),
                                add(new Param() {{
                                    name = "iure";
                                    value = "magnam";
                                }}),
                                add(new Param() {{
                                    name = "debitis";
                                    value = "ipsa";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }};
                            priceTags = new String[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                            productSpecifications = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                            quantity = 648172;
                            sellerId = "perferendis";
                            unitMultiplier = 368241;
                        }}),
                        add(new Item() {{
                            id = "repellendus";
                            index = 957156;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }};
                            measurementUnit = "molestiae";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "quod";
                                    value = "esse";
                                }}),
                                add(new Param() {{
                                    name = "totam";
                                    value = "porro";
                                }}),
                                add(new Param() {{
                                    name = "dolorum";
                                    value = "dicta";
                                }}),
                                add(new Param() {{
                                    name = "nam";
                                    value = "officia";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                            priceTags = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            productSpecifications = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                            quantity = 736918;
                            sellerId = "esse";
                            unitMultiplier = 216550;
                        }}),
                        add(new Item() {{
                            id = "excepturi";
                            index = 135218;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("ad"),
                            }};
                            measurementUnit = "natus";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "iste";
                                    value = "dolor";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("laboriosam"),
                                add("hic"),
                                add("saepe"),
                            }};
                            priceTags = new String[]{{
                                add("in"),
                                add("corporis"),
                                add("iste"),
                            }};
                            productSpecifications = new String[]{{
                                add("saepe"),
                                add("quidem"),
                            }};
                            quantity = 99280;
                            sellerId = "ipsa";
                            unitMultiplier = 969810;
                        }}),
                    }};
                    origin = "est";
                    params = new org.openapis.openapi.models.shared.Param[]{{
                        add(new Param() {{
                            name = "laborum";
                            value = "dolores";
                        }}),
                        add(new Param() {{
                            name = "dolorem";
                            value = "corporis";
                        }}),
                        add(new Param() {{
                            name = "explicabo";
                            value = "nobis";
                        }}),
                    }};
                    profileId = "enim";
                    salesChannel = "omnis";
                }};
                contentType = "nemo";
            }}            

            CalculatediscountsandtaxesBundlesResponse res = sdk.bundles.calculatediscountsandtaxesBundles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
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
