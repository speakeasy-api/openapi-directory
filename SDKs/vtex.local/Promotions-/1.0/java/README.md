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
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesResponse;
import org.openapis.openapi.models.shared.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Param;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculatediscountsandtaxesBundlesRequest req = new CalculatediscountsandtaxesBundlesRequest("distinctio",                 new CalculatediscountsandtaxesBundlesRequest(false,                 new org.openapis.openapi.models.shared.Item[]{{
                                                add(new Item("est", 653140, false,                 new String[]{{
                                                                    add("dolores"),
                                                                    add("dolorem"),
                                                                    add("corporis"),
                                                                }}, "explicabo",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("iure", "culpa") {{
                                                                        name = "Guadalupe Hickle";
                                                                        value = "accusantium";
                                                                    }}),
                                                                    add(new Param("consequuntur", "repellat") {{
                                                                        name = "Darrin Brakus";
                                                                        value = "culpa";
                                                                    }}),
                                                                    add(new Param("velit", "error") {{
                                                                        name = "Tracy Fritsch";
                                                                        value = "molestiae";
                                                                    }}),
                                                                    add(new Param("odit", "quo") {{
                                                                        name = "Beatrice Brown";
                                                                        value = "enim";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("tenetur"),
                                                                }},                 new String[]{{
                                                                    add("id"),
                                                                    add("possimus"),
                                                                }},                 new String[]{{
                                                                    add("quasi"),
                                                                }}, 622846, "temporibus", 673660) {{
                                                    id = "9d8d69a6-74e0-4f46-bcc8-796ed151a05d";
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
                                                        add(new Param("nam", "officia") {{
                                                            name = "Erik Lebsack";
                                                            value = "dicta";
                                                        }}),
                                                        add(new Param("beatae", "commodi") {{
                                                            name = "Wayne Lind";
                                                            value = "totam";
                                                        }}),
                                                        add(new Param("ipsum", "excepturi") {{
                                                            name = "Pauline Dibbert";
                                                            value = "esse";
                                                        }}),
                                                        add(new Param("dolor", "natus") {{
                                                            name = "Dorothy Hane";
                                                            value = "iste";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
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
                                                add(new Item("ipsam", 4695, false,                 new String[]{{
                                                                    add("dolorum"),
                                                                }}, "excepturi",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("eligendi", "sint") {{
                                                                        name = "Geoffrey Green";
                                                                        value = "non";
                                                                    }}),
                                                                    add(new Param("debitis", "a") {{
                                                                        name = "Sherri Tremblay";
                                                                        value = "dolor";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("in"),
                                                                    add("in"),
                                                                    add("illum"),
                                                                }},                 new String[]{{
                                                                    add("rerum"),
                                                                    add("dicta"),
                                                                    add("magnam"),
                                                                    add("cumque"),
                                                                }},                 new String[]{{
                                                                    add("ea"),
                                                                    add("aliquid"),
                                                                    add("laborum"),
                                                                    add("accusamus"),
                                                                }}, 249796, "occaecati", 313218) {{
                                                    id = "1ffe78f0-97b0-4074-b154-71b5e6e13b99";
                                                    index = 865103;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("praesentium"),
                                                        add("rem"),
                                                    }};
                                                    measurementUnit = "voluptates";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("consequatur", "est") {{
                                                            name = "Kirk Boehm";
                                                            value = "enim";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("explicabo"),
                                                        add("deserunt"),
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("modi"),
                                                        add("qui"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("cupiditate"),
                                                        add("quos"),
                                                    }};
                                                    quantity = 20107;
                                                    sellerId = "magni";
                                                    unitMultiplier = 828940;
                                                }}),
                                                add(new Item("nihil", 998848, false,                 new String[]{{
                                                                    add("sed"),
                                                                    add("saepe"),
                                                                    add("pariatur"),
                                                                    add("accusantium"),
                                                                }}, "consequuntur",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("maxime", "ea") {{
                                                                        name = "Victor Casper";
                                                                        value = "pariatur";
                                                                    }}),
                                                                    add(new Param("ipsam", "voluptate") {{
                                                                        name = "Mr. Harry Jaskolski";
                                                                        value = "quidem";
                                                                    }}),
                                                                    add(new Param("perferendis", "fugiat") {{
                                                                        name = "Candice Beatty";
                                                                        value = "voluptatibus";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("aut"),
                                                                }},                 new String[]{{
                                                                    add("corporis"),
                                                                    add("hic"),
                                                                    add("libero"),
                                                                    add("nobis"),
                                                                }},                 new String[]{{
                                                                    add("quis"),
                                                                }}, 521037, "dignissimos", 54338) {{
                                                    id = "efb9ba88-f3a6-4699-b074-ba4469b6e214";
                                                    index = 92373;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("ullam"),
                                                        add("provident"),
                                                        add("quos"),
                                                    }};
                                                    measurementUnit = "sint";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("necessitatibus", "odit") {{
                                                            name = "Abel O'Hara";
                                                            value = "dolor";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("quasi"),
                                                        add("iure"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("debitis"),
                                                        add("eius"),
                                                        add("maxime"),
                                                        add("deleniti"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("in"),
                                                        add("architecto"),
                                                        add("architecto"),
                                                    }};
                                                    quantity = 919483;
                                                    sellerId = "ullam";
                                                    unitMultiplier = 714242;
                                                }}),
                                                add(new Item("quidem", 976405, false,                 new String[]{{
                                                                    add("natus"),
                                                                    add("eos"),
                                                                }}, "atque",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("dolorum", "deleniti") {{
                                                                        name = "Stephen Roberts";
                                                                        value = "voluptate";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("necessitatibus"),
                                                                    add("distinctio"),
                                                                    add("asperiores"),
                                                                }},                 new String[]{{
                                                                    add("ipsum"),
                                                                    add("voluptate"),
                                                                }},                 new String[]{{
                                                                    add("saepe"),
                                                                    add("eius"),
                                                                    add("aspernatur"),
                                                                }}, 20651, "amet", 758379) {{
                                                    id = "53202c73-d5fe-49b9-8c28-909b3fe49a8d";
                                                    index = 589910;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("libero"),
                                                        add("delectus"),
                                                        add("quaerat"),
                                                        add("quos"),
                                                    }};
                                                    measurementUnit = "aliquid";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("cum", "voluptate") {{
                                                            name = "Rosa Dibbert";
                                                            value = "excepturi";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("reiciendis"),
                                                        add("amet"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("numquam"),
                                                        add("veritatis"),
                                                        add("ipsa"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("iure"),
                                                    }};
                                                    quantity = 487838;
                                                    sellerId = "quaerat";
                                                    unitMultiplier = 881005;
                                                }}),
                                            }}, "accusamus",                 new org.openapis.openapi.models.shared.Param[]{{
                                                add(new Param("totam", "similique") {{
                                                    name = "Sam Oberbrunner";
                                                    value = "repellendus";
                                                }}),
                                                add(new Param("officiis", "qui") {{
                                                    name = "Cristina Hahn";
                                                    value = "quod";
                                                }}),
                                            }}, "dolorum", "a");, "esse");            

            CalculatediscountsandtaxesBundlesResponse res = sdk.bundles.calculatediscountsandtaxesBundles(req);

            if (res.statusCode == 200) {
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
