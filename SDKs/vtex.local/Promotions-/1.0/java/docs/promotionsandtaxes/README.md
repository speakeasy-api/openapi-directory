# promotionsAndTaxes

### Available Operations

* [archivePromotion](#archivepromotion) - Archive Promotion or Tax
* [createOrUpdateCalculatorConfiguration](#createorupdatecalculatorconfiguration) - Create or Update Promotion or Tax
* [getAllBenefits](#getallbenefits) - Get All Promotions
* [getAllTaxes](#getalltaxes) - Get All Taxes
* [getArchivedPromotions](#getarchivedpromotions) - List Archived Promotions
* [getArchivedTaxes](#getarchivedtaxes) - List Archived Taxes
* [getCalculatorConfigurationById](#getcalculatorconfigurationbyid) - Get Promotion or Tax by ID
* [unarchivePromotion](#unarchivepromotion) - Unarchive Promotion or Tax
* [postApiRnbPvtImportCalculatorConfiguration](#postapirnbpvtimportcalculatorconfiguration) - Create Multiple SKU Promotion
* [putApiRnbPvtImportCalculatorConfigurationPromotionId](#putapirnbpvtimportcalculatorconfigurationpromotionid) - Update Multiple SKU Promotion

## archivePromotion

Archives a Promotion or Tax by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchivePromotionRequest;
import org.openapis.openapi.models.operations.ArchivePromotionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "consequatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ArchivePromotionRequest req = new ArchivePromotionRequest("quasi", "et", "d8a1cd2e-b667-4054-b3ae-b79124c7218e");            

            ArchivePromotionResponse res = sdk.promotionsAndTaxes.archivePromotion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrUpdateCalculatorConfiguration

Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequest;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyCollections;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyProducts;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodySkusGift;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges;
import org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrUpdateCalculatorConfigurationRequest req = new CreateOrUpdateCalculatorConfigurationRequest("occaecati", "suscipit",                 new CreateOrUpdateCalculatorConfigurationRequestBody() {{
                                absoluteShippingDiscountValue = 2415.57;
                                accumulateWithManualPrice = false;
                                activateGiftsMultiplier = false;
                                activeDaysOfWeek = new String[]{{
                                    add("Monday"),
                                }};
                                affiliates = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates() {{
                                        id = "1";
                                        name = "Amazon";
                                    }}),
                                }};
                                applyToAllShippings = false;
                                areSalesChannelIdsExclusive = false;
                                beginDateUtc = "2020-05-01T18:47:15.89Z";
                                brands = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyBrands() {{
                                        id = "1";
                                        name = "Brand (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyBrands() {{
                                        id = "1";
                                        name = "Brand (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyBrands() {{
                                        id = "1";
                                        name = "Brand (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyBrands() {{
                                        id = "1";
                                        name = "Brand (1)";
                                    }}),
                                }};
                                brandsAreInclusive = true;
                                campaigns = new Object[]{{
                                    add("necessitatibus"),
                                    add("ipsa"),
                                    add("tempora"),
                                    add("nihil"),
                                }};
                                cardIssuers = new Object[]{{
                                    add("dicta"),
                                    add("iusto"),
                                }};
                                categories = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCategories() {{
                                        id = "1";
                                        name = "Vinhos Tintos (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCategories() {{
                                        id = "1";
                                        name = "Vinhos Tintos (1)";
                                    }}),
                                }};
                                categoriesAreInclusive = true;
                                clusterExpressions = new String[]{{
                                    add("birthday=true"),
                                    add("birthday=true"),
                                    add("birthday=true"),
                                }};
                                collections = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyCollections[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCollections() {{
                                        id = "1";
                                        name = "Collection (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCollections() {{
                                        id = "1";
                                        name = "Collection (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCollections() {{
                                        id = "1";
                                        name = "Collection (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyCollections() {{
                                        id = "1";
                                        name = "Collection (1)";
                                    }}),
                                }};
                                collections1BuyTogether = new String[]{{
                                    add("1"),
                                    add("1"),
                                    add("1"),
                                    add("1"),
                                }};
                                collections2BuyTogether = new Object[]{{
                                    add("architecto"),
                                    add("fugiat"),
                                }};
                                collectionsIsInclusive = false;
                                compareListPriceAndPrice = false;
                                conditionsIds = new String[]{{
                                    add("1"),
                                }};
                                coupon = new Object[]{{
                                    add("odio"),
                                }};
                                cumulative = false;
                                daysAgoOfPurchases = 271252L;
                                description = "Description of the promotion.";
                                disableDeal = false;
                                discountType = "percentual";
                                enableBuyTogetherPerSku = false;
                                endDateUtc = "2020-05-01T18:47:15.89Z";
                                firstBuyIsProfileOptimistic = false;
                                giftListTypes = new String[]{{
                                    add("Gift SKU"),
                                    add("Gift SKU"),
                                }};
                                idCalculatorConfiguration = "ba087fa9-8587-44b3-8ef1-ade8d053e9e9";
                                idSeller = "1";
                                idSellerIsInclusive = false;
                                idsSalesChannel = new String[]{{
                                    add("Principal"),
                                    add("Principal"),
                                }};
                                installment = 235263L;
                                isActive = true;
                                isArchived = false;
                                isDifferentListPriceAndPrice = false;
                                isFeatured = true;
                                isFirstBuy = false;
                                isMinMaxInstallments = false;
                                isSlaSelected = false;
                                itemMaxPrice = 3998.12;
                                itemMinPrice = 588.7;
                                lastModified = "2021-02-23T20:58:38.7963862Z";
                                listSku1BuyTogether = new Object[]{{
                                    add("sunt"),
                                    add("nostrum"),
                                    add("fugiat"),
                                }};
                                listSku2BuyTogether = new Object[]{{
                                    add("aliquid"),
                                    add("officia"),
                                    add("suscipit"),
                                }};
                                marketingTags = new String[]{{
                                    add("MKT1"),
                                    add("MKT1"),
                                }};
                                marketingTagsAreNotInclusive = false;
                                maxInstallment = 21973L;
                                maxNumberOfAffectedItems = 431760L;
                                maxNumberOfAffectedItemsGroupKey = "perCart";
                                maxPricesPerItems = new Object[]{{
                                    add("iste"),
                                    add("id"),
                                }};
                                maxUsage = 70042L;
                                maxUsagePerClient = 625358L;
                                maximumUnitPriceDiscount = 8224.07;
                                merchants = new Object[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("libero"),
                                    add("ad"),
                                }};
                                minInstallment = 536923L;
                                minimumQuantityBuyTogether = 316220L;
                                multipleUsePerClient = false;
                                name = "Promoção Social Seller";
                                newOffset = -3;
                                nominalDiscountValue = 1104.77;
                                nominalRewardValue = 8333.16;
                                nominalShippingDiscountValue = 4050.36;
                                nominalTax = 7758.03;
                                offset = -3L;
                                orderStatusRewardValue = "invoiced";
                                origin = "marketplace";
                                paymentsMethods = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods() {{
                                        id = "2";
                                        name = "Visa (2)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods() {{
                                        id = "2";
                                        name = "Visa (2)";
                                    }}),
                                }};
                                paymentsRules = new Object[]{{
                                    add("ad"),
                                    add("expedita"),
                                }};
                                percentualDiscountValue = 10;
                                percentualDiscountValueList = new Double[]{{
                                    add(10),
                                }};
                                percentualDiscountValueList1 = 5615.77;
                                percentualDiscountValueList2 = 7372.54;
                                percentualRewardValue = 3996.6;
                                percentualShippingDiscountValue = 1097.84;
                                percentualTax = 5308.6;
                                products = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyProducts[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyProducts() {{
                                        id = "1";
                                        name = "Vinho (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyProducts() {{
                                        id = "1";
                                        name = "Vinho (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyProducts() {{
                                        id = "1";
                                        name = "Vinho (1)";
                                    }}),
                                }};
                                productsAreInclusive = true;
                                productsSpecifications = new Object[]{{
                                    add("rerum"),
                                }};
                                quantityToAffectBuyTogether = 665678L;
                                rebatePercentualDiscountValue = 6347.86;
                                restrictionsBins = new String[]{{
                                    add("1234"),
                                }};
                                shippingPercentualTax = 9591.43;
                                shouldDistributeDiscountAmongMatchedItems = false;
                                skus = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodySkus() {{
                                        id = "1";
                                        name = "Vinho tinto (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodySkus() {{
                                        id = "1";
                                        name = "Vinho tinto (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodySkus() {{
                                        id = "1";
                                        name = "Vinho tinto (1)";
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodySkus() {{
                                        id = "1";
                                        name = "Vinho tinto (1)";
                                    }}),
                                }};
                                skusAreInclusive = true;
                                skusGift = new CreateOrUpdateCalculatorConfigurationRequestBodySkusGift() {{
                                    gifts = new Object[]{{
                                        add("fuga"),
                                    }};
                                    quantitySelectable = 867168L;
                                }};;
                                slasIds = new String[]{{
                                    add("Express"),
                                    add("Express"),
                                    add("Express"),
                                    add("Express"),
                                }};
                                stores = new Object[]{{
                                    add("alias"),
                                }};
                                storesAreInclusive = false;
                                totalValueCeling = 5349.17;
                                totalValueFloor = 9372.19;
                                totalValueIncludeAllItems = false;
                                totalValueMode = "IncludeMatchedItems";
                                totalValuePurchase = 4042.44;
                                type = "regular";
                                useNewProgressiveAlgorithm = false;
                                utmCampaign = "testSource";
                                utmSource = "testSource";
                                zipCodeRanges = new org.openapis.openapi.models.operations.CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges[]{{
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges() {{
                                        inclusive = false;
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges() {{
                                        inclusive = false;
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges() {{
                                        inclusive = false;
                                    }}),
                                    add(new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges() {{
                                        inclusive = false;
                                    }}),
                                }};
                            }};);            

            CreateOrUpdateCalculatorConfigurationResponse res = sdk.promotionsAndTaxes.createOrUpdateCalculatorConfiguration(req);

            if (res.createOrUpdateCalculatorConfiguration200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllBenefits

Retrieves all promotions from an account. 

> 📘 Onboarding guide 
>
> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllBenefitsRequest;
import org.openapis.openapi.models.operations.GetAllBenefitsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem", "minus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllBenefitsRequest req = new GetAllBenefitsRequest("nemo", "asperiores");            

            GetAllBenefitsResponse res = sdk.promotionsAndTaxes.getAllBenefits(req);

            if (res.getAllBenefits200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllTaxes

Retrieves all taxes from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllTaxesRequest;
import org.openapis.openapi.models.operations.GetAllTaxesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione", "ullam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllTaxesRequest req = new GetAllTaxesRequest("perferendis", "illum");            

            GetAllTaxesResponse res = sdk.promotionsAndTaxes.getAllTaxes(req);

            if (res.getAllTaxes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArchivedPromotions

Lists all archived promotions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArchivedPromotionsRequest;
import org.openapis.openapi.models.operations.GetArchivedPromotionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArchivedPromotionsRequest req = new GetArchivedPromotionsRequest("quibusdam", "nam");            

            GetArchivedPromotionsResponse res = sdk.promotionsAndTaxes.getArchivedPromotions(req);

            if (res.getArchivedPromotions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArchivedTaxes

Lists all archived taxes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArchivedTaxesRequest;
import org.openapis.openapi.models.operations.GetArchivedTaxesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "culpa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArchivedTaxesRequest req = new GetArchivedTaxesRequest("dolor", "aliquam");            

            GetArchivedTaxesResponse res = sdk.promotionsAndTaxes.getArchivedTaxes(req);

            if (res.getArchivedTaxes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalculatorConfigurationById

Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalculatorConfigurationByIdRequest;
import org.openapis.openapi.models.operations.GetCalculatorConfigurationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore", "deleniti") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalculatorConfigurationByIdRequest req = new GetCalculatorConfigurationByIdRequest("veritatis", "tempora", "d8a1cd2e-b667-4054-b3ae-b79124c7218e");            

            GetCalculatorConfigurationByIdResponse res = sdk.promotionsAndTaxes.getCalculatorConfigurationById(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchivePromotion

Unarchives a Promotion or Tax by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchivePromotionRequest;
import org.openapis.openapi.models.operations.UnarchivePromotionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "consequatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnarchivePromotionRequest req = new UnarchivePromotionRequest("architecto", "sit", "d8a1cd2e-b667-4054-b3ae-b79124c7218e");            

            UnarchivePromotionResponse res = sdk.promotionsAndTaxes.unarchivePromotion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiRnbPvtImportCalculatorConfiguration

Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect. 
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiRnbPvtImportCalculatorConfigurationRequest;
import org.openapis.openapi.models.operations.PostApiRnbPvtImportCalculatorConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "fugit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiRnbPvtImportCalculatorConfigurationRequest req = new PostApiRnbPvtImportCalculatorConfigurationRequest("ab", "text/csv", false, "Test", "2020-08-18T16:30:00+3:00", "2020-08-18T16:00:00+3:00") {{
                requestBody = "laudantium".getBytes();
                xVTEXClusterExpression = "cluster_name=true";
                xVTEXClusterOperator = "any";
                xVTEXCumulative = false;
            }};            

            PostApiRnbPvtImportCalculatorConfigurationResponse res = sdk.promotionsAndTaxes.postApiRnbPvtImportCalculatorConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiRnbPvtImportCalculatorConfigurationPromotionId

Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.  
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest;
import org.openapis.openapi.models.operations.PutApiRnbPvtImportCalculatorConfigurationPromotionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "dolor") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest req = new PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest("fugiat", "text/csv", false, "Test", "2020-08-18T16:30:00+3:00", "2020-08-18T16:00:00+3:00", "dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9") {{
                requestBody = "ipsam".getBytes();
                xVTEXClusterExpression = "cluster_name=true";
                xVTEXClusterOperator = "any";
                xVTEXCumulative = false;
            }};            

            PutApiRnbPvtImportCalculatorConfigurationPromotionIdResponse res = sdk.promotionsAndTaxes.putApiRnbPvtImportCalculatorConfigurationPromotionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
