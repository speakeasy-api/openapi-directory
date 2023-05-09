# campaignAudiences

### Available Operations

* [getcampaignaudiences](#getcampaignaudiences) - Get all campaign audiences
* [getcampaignconfiguration](#getcampaignconfiguration) - Get campaign audience configuration
* [setcampaignconfiguration](#setcampaignconfiguration) - Create campaign audience

## getcampaignaudiences

Retrieves a list of all campaign audiences and their respective configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcampaignaudiencesRequest;
import org.openapis.openapi.models.operations.GetcampaignaudiencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "beatae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetcampaignaudiencesRequest req = new GetcampaignaudiencesRequest("dignissimos", "application/json");            

            GetcampaignaudiencesResponse res = sdk.campaignAudiences.getcampaignaudiences(req);

            if (res.getcampaignaudiences200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getcampaignconfiguration

Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcampaignconfigurationRequest;
import org.openapis.openapi.models.operations.GetcampaignconfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a", "debitis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetcampaignconfigurationRequest req = new GetcampaignconfigurationRequest("consectetur", "corporis", "dd270d06-1ed1-47fc-b04e-a2431121b5a4");            

            GetcampaignconfigurationResponse res = sdk.campaignAudiences.getcampaignconfiguration(req);

            if (res.getcampaignconfiguration200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setcampaignconfiguration

Creates a new campaign audience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequest;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBody;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyLastModified;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurations;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus;
import org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges;
import org.openapis.openapi.models.operations.SetcampaignconfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "laboriosam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetcampaignconfigurationRequest req = new SetcampaignconfigurationRequest("ipsa", "voluptates",                 new SetcampaignconfigurationRequestBody() {{
                                beginDateUtc = "2020-05-01T21:30:00Z";
                                endDateUtc = "2020-05-02T01:30:00Z";
                                id = "dd270d06-1ed1-47fc-b04e-a2431121b5a4";
                                isActive = true;
                                isAndOperator = true;
                                isArchived = false;
                                lastModified = new SetcampaignconfigurationRequestBodyLastModified() {{
                                    dateUtc = "2020-05-01T21:22:01.807398Z";
                                    user = "email@email.com";
                                }};;
                                name = "Interna";
                                targetConfigurations = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurations[]{{
                                    add(new SetcampaignconfigurationRequestBodyTargetConfigurations() {{
                                        affiliates = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                        }};
                                        areSalesChannelIdsExclusive = false;
                                        brands = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                        }};
                                        brandsAreInclusive = true;
                                        campaigns = new Object[]{{
                                            add("tempora"),
                                            add("aspernatur"),
                                            add("voluptas"),
                                        }};
                                        cardIssuers = new Object[]{{
                                            add("voluptas"),
                                            add("minima"),
                                        }};
                                        categories = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
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
                                        clusterOperator = "adipisci";
                                        collections = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                        }};
                                        collections1BuyTogether = new String[]{{
                                            add("1"),
                                        }};
                                        collections2BuyTogether = new Object[]{{
                                            add("in"),
                                            add("dolore"),
                                            add("aliquam"),
                                        }};
                                        collectionsIsInclusive = true;
                                        compareListPriceAndPrice = false;
                                        coupon = new Object[]{{
                                            add("temporibus"),
                                            add("ullam"),
                                            add("adipisci"),
                                            add("cum"),
                                        }};
                                        daysAgoOfPurchases = 502389L;
                                        enableBuyTogetherPerSku = false;
                                        featured = false;
                                        firstBuyIsProfileOptimistic = false;
                                        giftListTypes = new String[]{{
                                            add("Wishlist"),
                                            add("Wishlist"),
                                            add("Wishlist"),
                                        }};
                                        id = "77ae1e4c-a216-4b15-a4a3-ae64ec298988";
                                        idSellerIsInclusive = false;
                                        idsSalesChannel = new String[]{{
                                            add("Principal"),
                                            add("Principal"),
                                            add("Principal"),
                                            add("Principal"),
                                        }};
                                        installment = 201517L;
                                        isDifferentListPriceAndPrice = false;
                                        isFirstBuy = false;
                                        isMinMaxInstallments = false;
                                        isSlaSelected = false;
                                        itemMaxPrice = 6339.98;
                                        itemMinPrice = 5485.19;
                                        listBrand1BuyTogether = new Object[]{{
                                            add("totam"),
                                            add("hic"),
                                            add("exercitationem"),
                                            add("nobis"),
                                        }};
                                        listCategory1BuyTogether = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                        }};
                                        listSku1BuyTogether = new Object[]{{
                                            add("sed"),
                                            add("reiciendis"),
                                            add("explicabo"),
                                        }};
                                        listSku2BuyTogether = new Object[]{{
                                            add("facilis"),
                                            add("voluptate"),
                                            add("expedita"),
                                            add("ab"),
                                        }};
                                        marketingTags = new String[]{{
                                            add("MKT1"),
                                            add("MKT1"),
                                            add("MKT1"),
                                        }};
                                        marketingTagsAreNotInclusive = false;
                                        maxInstallment = 292794L;
                                        maxUsage = 671907L;
                                        maxUsagePerClient = 152354L;
                                        merchants = new Object[]{{
                                            add("commodi"),
                                            add("quidem"),
                                        }};
                                        minInstallment = 131289L;
                                        minimumQuantityBuyTogether = 1L;
                                        multipleUsePerClient = false;
                                        name = "Social Sellers";
                                        origin = "Marketplace";
                                        paymentsMethods = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                        }};
                                        paymentsRules = new Object[]{{
                                            add("architecto"),
                                            add("suscipit"),
                                            add("sapiente"),
                                        }};
                                        percentualDiscountValueList = new Double[]{{
                                            add(724.34),
                                            add(9677.95),
                                            add(193),
                                            add(5468.85),
                                        }};
                                        products = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                        }};
                                        productsAreInclusive = true;
                                        productsSpecifications = new Object[]{{
                                            add("sed"),
                                            add("provident"),
                                        }};
                                        quantityToAffectBuyTogether = 258702L;
                                        restrictionsBins = new String[]{{
                                            add("1234"),
                                            add("1234"),
                                            add("1234"),
                                            add("1234"),
                                        }};
                                        shouldDistributeDiscountAmongMatchedItems = false;
                                        skus = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsSkus() {{
                                                id = "1";
                                                name = "Vinho tinto (1)";
                                            }}),
                                        }};
                                        skusAreInclusive = true;
                                        slasIds = new String[]{{
                                            add("Express"),
                                            add("Express"),
                                        }};
                                        stores = new Object[]{{
                                            add("quos"),
                                            add("voluptatibus"),
                                            add("tempora"),
                                        }};
                                        storesAreInclusive = false;
                                        totalValueCeling = 2730.09;
                                        totalValueFloor = 40;
                                        totalValueIncludeAllItems = false;
                                        totalValueMode = "IncludeMatchedItems";
                                        totalValuePurchase = 4554.44;
                                        useNewProgressiveAlgorithm = false;
                                        zipCodeRanges = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                        }};
                                    }}),
                                    add(new SetcampaignconfigurationRequestBodyTargetConfigurations() {{
                                        affiliates = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                        }};
                                        areSalesChannelIdsExclusive = false;
                                        brands = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                        }};
                                        brandsAreInclusive = true;
                                        campaigns = new Object[]{{
                                            add("officiis"),
                                        }};
                                        cardIssuers = new Object[]{{
                                            add("facilis"),
                                            add("quaerat"),
                                            add("incidunt"),
                                        }};
                                        categories = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                        }};
                                        categoriesAreInclusive = true;
                                        clusterExpressions = new String[]{{
                                            add("birthday=true"),
                                            add("birthday=true"),
                                            add("birthday=true"),
                                            add("birthday=true"),
                                        }};
                                        clusterOperator = "rem";
                                        collections = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
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
                                            add("veniam"),
                                            add("minima"),
                                            add("recusandae"),
                                        }};
                                        collectionsIsInclusive = true;
                                        compareListPriceAndPrice = false;
                                        coupon = new Object[]{{
                                            add("nulla"),
                                            add("magni"),
                                            add("aperiam"),
                                            add("saepe"),
                                        }};
                                        daysAgoOfPurchases = 253642L;
                                        enableBuyTogetherPerSku = false;
                                        featured = false;
                                        firstBuyIsProfileOptimistic = false;
                                        giftListTypes = new String[]{{
                                            add("Wishlist"),
                                            add("Wishlist"),
                                        }};
                                        id = "77ae1e4c-a216-4b15-a4a3-ae64ec298988";
                                        idSellerIsInclusive = false;
                                        idsSalesChannel = new String[]{{
                                            add("Principal"),
                                            add("Principal"),
                                        }};
                                        installment = 889234L;
                                        isDifferentListPriceAndPrice = false;
                                        isFirstBuy = false;
                                        isMinMaxInstallments = false;
                                        isSlaSelected = false;
                                        itemMaxPrice = 1046.27;
                                        itemMinPrice = 5124.52;
                                        listBrand1BuyTogether = new Object[]{{
                                            add("praesentium"),
                                            add("cum"),
                                        }};
                                        listCategory1BuyTogether = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                        }};
                                        listSku1BuyTogether = new Object[]{{
                                            add("voluptatum"),
                                            add("error"),
                                            add("hic"),
                                        }};
                                        listSku2BuyTogether = new Object[]{{
                                            add("debitis"),
                                            add("neque"),
                                            add("dolorum"),
                                        }};
                                        marketingTags = new String[]{{
                                            add("MKT1"),
                                            add("MKT1"),
                                        }};
                                        marketingTagsAreNotInclusive = false;
                                        maxInstallment = 639028L;
                                        maxUsage = 676243L;
                                        maxUsagePerClient = 548361L;
                                        merchants = new Object[]{{
                                            add("tempora"),
                                            add("atque"),
                                            add("fugit"),
                                            add("ut"),
                                        }};
                                        minInstallment = 856303L;
                                        minimumQuantityBuyTogether = 1L;
                                        multipleUsePerClient = false;
                                        name = "Social Sellers";
                                        origin = "Marketplace";
                                        paymentsMethods = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                        }};
                                        paymentsRules = new Object[]{{
                                            add("expedita"),
                                            add("magnam"),
                                            add("consequatur"),
                                        }};
                                        percentualDiscountValueList = new Double[]{{
                                            add(3726.79),
                                            add(245.27),
                                        }};
                                        products = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                        }};
                                        productsAreInclusive = true;
                                        productsSpecifications = new Object[]{{
                                            add("repudiandae"),
                                            add("corporis"),
                                            add("et"),
                                        }};
                                        quantityToAffectBuyTogether = 502710L;
                                        restrictionsBins = new String[]{{
                                            add("1234"),
                                            add("1234"),
                                        }};
                                        shouldDistributeDiscountAmongMatchedItems = false;
                                        skus = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsSkus() {{
                                                id = "1";
                                                name = "Vinho tinto (1)";
                                            }}),
                                        }};
                                        skusAreInclusive = true;
                                        slasIds = new String[]{{
                                            add("Express"),
                                        }};
                                        stores = new Object[]{{
                                            add("nostrum"),
                                            add("saepe"),
                                        }};
                                        storesAreInclusive = false;
                                        totalValueCeling = 6222.31;
                                        totalValueFloor = 40;
                                        totalValueIncludeAllItems = false;
                                        totalValueMode = "IncludeMatchedItems";
                                        totalValuePurchase = 85.11;
                                        useNewProgressiveAlgorithm = false;
                                        zipCodeRanges = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                        }};
                                    }}),
                                    add(new SetcampaignconfigurationRequestBodyTargetConfigurations() {{
                                        affiliates = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates() {{
                                                id = "1";
                                                name = "Amazon";
                                            }}),
                                        }};
                                        areSalesChannelIdsExclusive = false;
                                        brands = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsBrands() {{
                                                id = "1";
                                                name = "Brand (1)";
                                            }}),
                                        }};
                                        brandsAreInclusive = true;
                                        campaigns = new Object[]{{
                                            add("dicta"),
                                            add("architecto"),
                                            add("occaecati"),
                                        }};
                                        cardIssuers = new Object[]{{
                                            add("quidem"),
                                            add("atque"),
                                        }};
                                        categories = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCategories() {{
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
                                        clusterOperator = "tenetur";
                                        collections = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsCollections() {{
                                                id = "1";
                                                name = "Collection (1)";
                                            }}),
                                        }};
                                        collections1BuyTogether = new String[]{{
                                            add("1"),
                                        }};
                                        collections2BuyTogether = new Object[]{{
                                            add("deserunt"),
                                        }};
                                        collectionsIsInclusive = true;
                                        compareListPriceAndPrice = false;
                                        coupon = new Object[]{{
                                            add("unde"),
                                            add("reiciendis"),
                                        }};
                                        daysAgoOfPurchases = 588740L;
                                        enableBuyTogetherPerSku = false;
                                        featured = false;
                                        firstBuyIsProfileOptimistic = false;
                                        giftListTypes = new String[]{{
                                            add("Wishlist"),
                                            add("Wishlist"),
                                            add("Wishlist"),
                                            add("Wishlist"),
                                        }};
                                        id = "77ae1e4c-a216-4b15-a4a3-ae64ec298988";
                                        idSellerIsInclusive = false;
                                        idsSalesChannel = new String[]{{
                                            add("Principal"),
                                            add("Principal"),
                                            add("Principal"),
                                            add("Principal"),
                                        }};
                                        installment = 914791L;
                                        isDifferentListPriceAndPrice = false;
                                        isFirstBuy = false;
                                        isMinMaxInstallments = false;
                                        isSlaSelected = false;
                                        itemMaxPrice = 168.71;
                                        itemMinPrice = 6672.85;
                                        listBrand1BuyTogether = new Object[]{{
                                            add("reprehenderit"),
                                            add("facere"),
                                            add("fuga"),
                                        }};
                                        listCategory1BuyTogether = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether() {{
                                                id = "1";
                                                name = "Vinhos Tintos (1)";
                                            }}),
                                        }};
                                        listSku1BuyTogether = new Object[]{{
                                            add("veniam"),
                                            add("voluptatem"),
                                            add("quisquam"),
                                        }};
                                        listSku2BuyTogether = new Object[]{{
                                            add("quasi"),
                                            add("atque"),
                                            add("reprehenderit"),
                                            add("asperiores"),
                                        }};
                                        marketingTags = new String[]{{
                                            add("MKT1"),
                                            add("MKT1"),
                                            add("MKT1"),
                                        }};
                                        marketingTagsAreNotInclusive = false;
                                        maxInstallment = 383103L;
                                        maxUsage = 693957L;
                                        maxUsagePerClient = 806670L;
                                        merchants = new Object[]{{
                                            add("esse"),
                                        }};
                                        minInstallment = 227759L;
                                        minimumQuantityBuyTogether = 1L;
                                        multipleUsePerClient = false;
                                        name = "Social Sellers";
                                        origin = "Marketplace";
                                        paymentsMethods = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods() {{
                                                id = "2";
                                                name = "Visa (2)";
                                            }}),
                                        }};
                                        paymentsRules = new Object[]{{
                                            add("atque"),
                                            add("error"),
                                        }};
                                        percentualDiscountValueList = new Double[]{{
                                            add(8869.61),
                                            add(8801.07),
                                            add(6188.26),
                                            add(3283.03),
                                        }};
                                        products = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsProducts() {{
                                                id = "1";
                                                name = "Vinho (1)";
                                            }}),
                                        }};
                                        productsAreInclusive = true;
                                        productsSpecifications = new Object[]{{
                                            add("maiores"),
                                            add("corrupti"),
                                        }};
                                        quantityToAffectBuyTogether = 871786L;
                                        restrictionsBins = new String[]{{
                                            add("1234"),
                                            add("1234"),
                                            add("1234"),
                                        }};
                                        shouldDistributeDiscountAmongMatchedItems = false;
                                        skus = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsSkus() {{
                                                id = "1";
                                                name = "Vinho tinto (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsSkus() {{
                                                id = "1";
                                                name = "Vinho tinto (1)";
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsSkus() {{
                                                id = "1";
                                                name = "Vinho tinto (1)";
                                            }}),
                                        }};
                                        skusAreInclusive = true;
                                        slasIds = new String[]{{
                                            add("Express"),
                                            add("Express"),
                                        }};
                                        stores = new Object[]{{
                                            add("atque"),
                                            add("atque"),
                                            add("sunt"),
                                            add("recusandae"),
                                        }};
                                        storesAreInclusive = false;
                                        totalValueCeling = 6806.97;
                                        totalValueFloor = 40;
                                        totalValueIncludeAllItems = false;
                                        totalValueMode = "IncludeMatchedItems";
                                        totalValuePurchase = 8298.98;
                                        useNewProgressiveAlgorithm = false;
                                        zipCodeRanges = new org.openapis.openapi.models.operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges[]{{
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                            add(new SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges() {{
                                                inclusive = false;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};);            

            SetcampaignconfigurationResponse res = sdk.campaignAudiences.setcampaignconfiguration(req);

            if (res.setcampaignconfiguration200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
