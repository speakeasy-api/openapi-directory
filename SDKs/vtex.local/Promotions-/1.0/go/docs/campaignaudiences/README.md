# CampaignAudiences

### Available Operations

* [Getcampaignaudiences](#getcampaignaudiences) - Get all campaign audiences
* [Getcampaignconfiguration](#getcampaignconfiguration) - Get campaign audience configuration
* [Setcampaignconfiguration](#setcampaignconfiguration) - Create campaign audience

## Getcampaignaudiences

Retrieves a list of all campaign audiences and their respective configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CampaignAudiences.Getcampaignaudiences(ctx, operations.GetcampaignaudiencesRequest{
        Accept: "consequuntur",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcampaignaudiences200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Getcampaignconfiguration

Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CampaignAudiences.Getcampaignconfiguration(ctx, operations.GetcampaignconfigurationRequest{
        Accept: "blanditiis",
        ContentType: "error",
        CampaignID: "dd270d06-1ed1-47fc-b04e-a2431121b5a4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcampaignconfiguration200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Setcampaignconfiguration

Creates a new campaign audience.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CampaignAudiences.Setcampaignconfiguration(ctx, operations.SetcampaignconfigurationRequest{
        Accept: "eaque",
        ContentType: "occaecati",
        RequestBody: operations.SetcampaignconfigurationRequestBody{
            BeginDateUtc: sdk.String("2020-05-01T21:30:00Z"),
            EndDateUtc: sdk.String("2020-05-02T01:30:00Z"),
            ID: sdk.String("dd270d06-1ed1-47fc-b04e-a2431121b5a4"),
            IsActive: sdk.Bool(true),
            IsAndOperator: sdk.Bool(true),
            IsArchived: sdk.Bool(false),
            LastModified: &operations.SetcampaignconfigurationRequestBodyLastModified{
                DateUtc: sdk.String("2020-05-01T21:22:01.807398Z"),
                User: sdk.String("email@email.com"),
            },
            Name: sdk.String("Interna"),
            TargetConfigurations: []SetcampaignconfigurationRequestBodyTargetConfigurations{
                operations.SetcampaignconfigurationRequestBodyTargetConfigurations{
                    Affiliates: []SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                    },
                    AreSalesChannelIdsExclusive: sdk.Bool(false),
                    Brands: []SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                    },
                    BrandsAreInclusive: sdk.Bool(true),
                    Campaigns: []interface{}{
                        "modi",
                        "iste",
                        "dolorum",
                        "deleniti",
                    },
                    CardIssuers: []interface{}{
                        "provident",
                        "nobis",
                        "libero",
                        "delectus",
                    },
                    Categories: []SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    CategoriesAreInclusive: sdk.Bool(true),
                    ClusterExpressions: []string{
                        "birthday=true",
                        "birthday=true",
                        "birthday=true",
                    },
                    ClusterOperator: sdk.String("aliquid"),
                    Collections: []SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                    },
                    Collections1BuyTogether: []string{
                        "1",
                    },
                    Collections2BuyTogether: []interface{}{
                        "qui",
                    },
                    CollectionsIsInclusive: sdk.Bool(true),
                    CompareListPriceAndPrice: sdk.Bool(false),
                    Coupon: []interface{}{
                        "hic",
                    },
                    DaysAgoOfPurchases: sdk.Int64(569574),
                    EnableBuyTogetherPerSku: sdk.Bool(false),
                    Featured: sdk.Bool(false),
                    FirstBuyIsProfileOptimistic: sdk.Bool(false),
                    GiftListTypes: []string{
                        "Wishlist",
                        "Wishlist",
                        "Wishlist",
                    },
                    ID: sdk.String("77ae1e4c-a216-4b15-a4a3-ae64ec298988"),
                    IDSellerIsInclusive: sdk.Bool(false),
                    IdsSalesChannel: []string{
                        "Principal",
                        "Principal",
                    },
                    Installment: sdk.Int64(490459),
                    IsDifferentListPriceAndPrice: sdk.Bool(false),
                    IsFirstBuy: sdk.Bool(false),
                    IsMinMaxInstallments: sdk.Bool(false),
                    IsSLASelected: sdk.Bool(false),
                    ItemMaxPrice: sdk.Float64(9702.37),
                    ItemMinPrice: sdk.Float64(2274.14),
                    ListBrand1BuyTogether: []interface{}{
                        "numquam",
                        "veritatis",
                        "ipsa",
                    },
                    ListCategory1BuyTogether: []SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    ListSku1BuyTogether: []interface{}{
                        "odio",
                        "quaerat",
                    },
                    ListSku2BuyTogether: []interface{}{
                        "quidem",
                        "voluptatibus",
                        "voluptas",
                        "natus",
                    },
                    MarketingTags: []string{
                        "MKT1",
                    },
                    MarketingTagsAreNotInclusive: sdk.Bool(false),
                    MaxInstallment: sdk.Int64(542499),
                    MaxUsage: sdk.Int64(24678),
                    MaxUsagePerClient: sdk.Int64(854614),
                    Merchants: []interface{}{
                        "soluta",
                    },
                    MinInstallment: sdk.Int64(679393),
                    MinimumQuantityBuyTogether: sdk.Int64(1),
                    MultipleUsePerClient: sdk.Bool(false),
                    Name: sdk.String("Social Sellers"),
                    Origin: sdk.String("Marketplace"),
                    PaymentsMethods: []SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                    },
                    PaymentsRules: []interface{}{
                        "dolorum",
                        "deleniti",
                    },
                    PercentualDiscountValueList: []float64{
                        8966.72,
                        7146.97,
                        9903.39,
                    },
                    Products: []SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                    },
                    ProductsAreInclusive: sdk.Bool(true),
                    ProductsSpecifications: []interface{}{
                        "voluptate",
                    },
                    QuantityToAffectBuyTogether: sdk.Int64(663078),
                    RestrictionsBins: []string{
                        "1234",
                        "1234",
                        "1234",
                        "1234",
                    },
                    ShouldDistributeDiscountAmongMatchedItems: sdk.Bool(false),
                    Skus: []SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho tinto (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho tinto (1)"),
                        },
                    },
                    SkusAreInclusive: sdk.Bool(true),
                    SlasIds: []string{
                        "Express",
                    },
                    Stores: []interface{}{
                        "amet",
                    },
                    StoresAreInclusive: sdk.Bool(false),
                    TotalValueCeling: sdk.Float64(7583.79),
                    TotalValueFloor: sdk.Float64(40),
                    TotalValueIncludeAllItems: sdk.Bool(false),
                    TotalValueMode: sdk.String("IncludeMatchedItems"),
                    TotalValuePurchase: sdk.Float64(8815.86),
                    UseNewProgressiveAlgorithm: sdk.Bool(false),
                    ZipCodeRanges: []SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                    },
                },
                operations.SetcampaignconfigurationRequestBodyTargetConfigurations{
                    Affiliates: []SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                    },
                    AreSalesChannelIdsExclusive: sdk.Bool(false),
                    Brands: []SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                    },
                    BrandsAreInclusive: sdk.Bool(true),
                    Campaigns: []interface{}{
                        "provident",
                        "minima",
                        "repellendus",
                    },
                    CardIssuers: []interface{}{
                        "similique",
                        "alias",
                        "at",
                    },
                    Categories: []SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    CategoriesAreInclusive: sdk.Bool(true),
                    ClusterExpressions: []string{
                        "birthday=true",
                        "birthday=true",
                    },
                    ClusterOperator: sdk.String("vel"),
                    Collections: []SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                    },
                    Collections1BuyTogether: []string{
                        "1",
                        "1",
                        "1",
                        "1",
                    },
                    Collections2BuyTogether: []interface{}{
                        "dolorum",
                    },
                    CollectionsIsInclusive: sdk.Bool(true),
                    CompareListPriceAndPrice: sdk.Bool(false),
                    Coupon: []interface{}{
                        "esse",
                        "harum",
                        "iusto",
                        "ipsum",
                    },
                    DaysAgoOfPurchases: sdk.Int64(788740),
                    EnableBuyTogetherPerSku: sdk.Bool(false),
                    Featured: sdk.Bool(false),
                    FirstBuyIsProfileOptimistic: sdk.Bool(false),
                    GiftListTypes: []string{
                        "Wishlist",
                        "Wishlist",
                        "Wishlist",
                        "Wishlist",
                    },
                    ID: sdk.String("77ae1e4c-a216-4b15-a4a3-ae64ec298988"),
                    IDSellerIsInclusive: sdk.Bool(false),
                    IdsSalesChannel: []string{
                        "Principal",
                    },
                    Installment: sdk.Int64(730856),
                    IsDifferentListPriceAndPrice: sdk.Bool(false),
                    IsFirstBuy: sdk.Bool(false),
                    IsMinMaxInstallments: sdk.Bool(false),
                    IsSLASelected: sdk.Bool(false),
                    ItemMaxPrice: sdk.Float64(8802.98),
                    ItemMinPrice: sdk.Float64(2539.41),
                    ListBrand1BuyTogether: []interface{}{
                        "dolorem",
                        "sapiente",
                    },
                    ListCategory1BuyTogether: []SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    ListSku1BuyTogether: []interface{}{
                        "sit",
                        "expedita",
                    },
                    ListSku2BuyTogether: []interface{}{
                        "sed",
                    },
                    MarketingTags: []string{
                        "MKT1",
                        "MKT1",
                    },
                    MarketingTagsAreNotInclusive: sdk.Bool(false),
                    MaxInstallment: sdk.Int64(730442),
                    MaxUsage: sdk.Int64(374170),
                    MaxUsagePerClient: sdk.Int64(646265),
                    Merchants: []interface{}{
                        "ipsum",
                        "incidunt",
                    },
                    MinInstallment: sdk.Int64(186458),
                    MinimumQuantityBuyTogether: sdk.Int64(1),
                    MultipleUsePerClient: sdk.Bool(false),
                    Name: sdk.String("Social Sellers"),
                    Origin: sdk.String("Marketplace"),
                    PaymentsMethods: []SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                    },
                    PaymentsRules: []interface{}{
                        "pariatur",
                        "soluta",
                        "dicta",
                        "laborum",
                    },
                    PercentualDiscountValueList: []float64{
                        2768.94,
                        1320.68,
                        1749.09,
                    },
                    Products: []SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                    },
                    ProductsAreInclusive: sdk.Bool(true),
                    ProductsSpecifications: []interface{}{
                        "aliquid",
                        "quam",
                        "molestias",
                    },
                    QuantityToAffectBuyTogether: sdk.Int64(840429),
                    RestrictionsBins: []string{
                        "1234",
                    },
                    ShouldDistributeDiscountAmongMatchedItems: sdk.Bool(false),
                    Skus: []SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho tinto (1)"),
                        },
                    },
                    SkusAreInclusive: sdk.Bool(true),
                    SlasIds: []string{
                        "Express",
                    },
                    Stores: []interface{}{
                        "odio",
                    },
                    StoresAreInclusive: sdk.Bool(false),
                    TotalValueCeling: sdk.Float64(1248.33),
                    TotalValueFloor: sdk.Float64(40),
                    TotalValueIncludeAllItems: sdk.Bool(false),
                    TotalValueMode: sdk.String("IncludeMatchedItems"),
                    TotalValuePurchase: sdk.Float64(3556.13),
                    UseNewProgressiveAlgorithm: sdk.Bool(false),
                    ZipCodeRanges: []SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                    },
                },
                operations.SetcampaignconfigurationRequestBodyTargetConfigurations{
                    Affiliates: []SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates{
                            ID: sdk.String("1"),
                            Name: sdk.String("Amazon"),
                        },
                    },
                    AreSalesChannelIdsExclusive: sdk.Bool(false),
                    Brands: []SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsBrands{
                            ID: sdk.String("1"),
                            Name: sdk.String("Brand (1)"),
                        },
                    },
                    BrandsAreInclusive: sdk.Bool(true),
                    Campaigns: []interface{}{
                        "soluta",
                        "nobis",
                        "et",
                        "saepe",
                    },
                    CardIssuers: []interface{}{
                        "veritatis",
                    },
                    Categories: []SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCategories{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    CategoriesAreInclusive: sdk.Bool(true),
                    ClusterExpressions: []string{
                        "birthday=true",
                        "birthday=true",
                        "birthday=true",
                    },
                    ClusterOperator: sdk.String("tempore"),
                    Collections: []SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsCollections{
                            ID: sdk.String("1"),
                            Name: sdk.String("Collection (1)"),
                        },
                    },
                    Collections1BuyTogether: []string{
                        "1",
                    },
                    Collections2BuyTogether: []interface{}{
                        "dolorem",
                        "dolore",
                        "labore",
                        "adipisci",
                    },
                    CollectionsIsInclusive: sdk.Bool(true),
                    CompareListPriceAndPrice: sdk.Bool(false),
                    Coupon: []interface{}{
                        "architecto",
                        "quae",
                        "aut",
                    },
                    DaysAgoOfPurchases: sdk.Int64(555649),
                    EnableBuyTogetherPerSku: sdk.Bool(false),
                    Featured: sdk.Bool(false),
                    FirstBuyIsProfileOptimistic: sdk.Bool(false),
                    GiftListTypes: []string{
                        "Wishlist",
                        "Wishlist",
                        "Wishlist",
                        "Wishlist",
                    },
                    ID: sdk.String("77ae1e4c-a216-4b15-a4a3-ae64ec298988"),
                    IDSellerIsInclusive: sdk.Bool(false),
                    IdsSalesChannel: []string{
                        "Principal",
                    },
                    Installment: sdk.Int64(669917),
                    IsDifferentListPriceAndPrice: sdk.Bool(false),
                    IsFirstBuy: sdk.Bool(false),
                    IsMinMaxInstallments: sdk.Bool(false),
                    IsSLASelected: sdk.Bool(false),
                    ItemMaxPrice: sdk.Float64(8330.38),
                    ItemMinPrice: sdk.Float64(7851.53),
                    ListBrand1BuyTogether: []interface{}{
                        "ut",
                        "facilis",
                        "cupiditate",
                        "qui",
                    },
                    ListCategory1BuyTogether: []SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinhos Tintos (1)"),
                        },
                    },
                    ListSku1BuyTogether: []interface{}{
                        "odio",
                        "occaecati",
                        "voluptatibus",
                    },
                    ListSku2BuyTogether: []interface{}{
                        "vero",
                        "omnis",
                        "quis",
                        "ipsum",
                    },
                    MarketingTags: []string{
                        "MKT1",
                        "MKT1",
                        "MKT1",
                        "MKT1",
                    },
                    MarketingTagsAreNotInclusive: sdk.Bool(false),
                    MaxInstallment: sdk.Int64(455169),
                    MaxUsage: sdk.Int64(231701),
                    MaxUsagePerClient: sdk.Int64(878870),
                    Merchants: []interface{}{
                        "dignissimos",
                        "hic",
                        "distinctio",
                        "quod",
                    },
                    MinInstallment: sdk.Int64(486160),
                    MinimumQuantityBuyTogether: sdk.Int64(1),
                    MultipleUsePerClient: sdk.Bool(false),
                    Name: sdk.String("Social Sellers"),
                    Origin: sdk.String("Marketplace"),
                    PaymentsMethods: []SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods{
                            ID: sdk.String("2"),
                            Name: sdk.String("Visa (2)"),
                        },
                    },
                    PaymentsRules: []interface{}{
                        "vero",
                        "ducimus",
                        "dolore",
                    },
                    PercentualDiscountValueList: []float64{
                        8489.44,
                        1943.42,
                        6178.77,
                        7733.26,
                    },
                    Products: []SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsProducts{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho (1)"),
                        },
                    },
                    ProductsAreInclusive: sdk.Bool(true),
                    ProductsSpecifications: []interface{}{
                        "exercitationem",
                        "nulla",
                        "fugit",
                        "porro",
                    },
                    QuantityToAffectBuyTogether: sdk.Int64(981830),
                    RestrictionsBins: []string{
                        "1234",
                        "1234",
                        "1234",
                        "1234",
                    },
                    ShouldDistributeDiscountAmongMatchedItems: sdk.Bool(false),
                    Skus: []SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho tinto (1)"),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsSkus{
                            ID: sdk.String("1"),
                            Name: sdk.String("Vinho tinto (1)"),
                        },
                    },
                    SkusAreInclusive: sdk.Bool(true),
                    SlasIds: []string{
                        "Express",
                        "Express",
                        "Express",
                        "Express",
                    },
                    Stores: []interface{}{
                        "alias",
                        "officia",
                    },
                    StoresAreInclusive: sdk.Bool(false),
                    TotalValueCeling: sdk.Float64(2694.79),
                    TotalValueFloor: sdk.Float64(40),
                    TotalValueIncludeAllItems: sdk.Bool(false),
                    TotalValueMode: sdk.String("IncludeMatchedItems"),
                    TotalValuePurchase: sdk.Float64(3685.84),
                    UseNewProgressiveAlgorithm: sdk.Bool(false),
                    ZipCodeRanges: []SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                        operations.SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges{
                            Inclusive: sdk.Bool(false),
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Setcampaignconfiguration200ApplicationJSONObject != nil {
        // handle response
    }
}
```
