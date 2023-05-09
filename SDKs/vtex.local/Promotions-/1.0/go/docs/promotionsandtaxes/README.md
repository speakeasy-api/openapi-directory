# PromotionsAndTaxes

### Available Operations

* [ArchivePromotion](#archivepromotion) - Archive Promotion or Tax
* [CreateOrUpdateCalculatorConfiguration](#createorupdatecalculatorconfiguration) - Create or Update Promotion or Tax
* [GetAllBenefits](#getallbenefits) - Get All Promotions
* [GetAllTaxes](#getalltaxes) - Get All Taxes
* [GetArchivedPromotions](#getarchivedpromotions) - List Archived Promotions
* [GetArchivedTaxes](#getarchivedtaxes) - List Archived Taxes
* [GetCalculatorConfigurationByID](#getcalculatorconfigurationbyid) - Get Promotion or Tax by ID
* [UnarchivePromotion](#unarchivepromotion) - Unarchive Promotion or Tax
* [PostAPIRnbPvtImportCalculatorConfiguration](#postapirnbpvtimportcalculatorconfiguration) - Create Multiple SKU Promotion
* [PutAPIRnbPvtImportCalculatorConfigurationPromotionID](#putapirnbpvtimportcalculatorconfigurationpromotionid) - Update Multiple SKU Promotion

## ArchivePromotion

Archives a Promotion or Tax by its ID.

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
    res, err := s.PromotionsAndTaxes.ArchivePromotion(ctx, operations.ArchivePromotionRequest{
        Accept: "fugiat",
        ContentType: "ut",
        IDCalculatorConfiguration: "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateOrUpdateCalculatorConfiguration

Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.

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
    res, err := s.PromotionsAndTaxes.CreateOrUpdateCalculatorConfiguration(ctx, operations.CreateOrUpdateCalculatorConfigurationRequest{
        Accept: "eum",
        ContentType: "suscipit",
        RequestBody: operations.CreateOrUpdateCalculatorConfigurationRequestBody{
            AbsoluteShippingDiscountValue: sdk.Float64(8268.71),
            AccumulateWithManualPrice: sdk.Bool(false),
            ActivateGiftsMultiplier: sdk.Bool(false),
            ActiveDaysOfWeek: []string{
                "Monday",
            },
            Affiliates: []CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates{
                    ID: sdk.String("1"),
                    Name: sdk.String("Amazon"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates{
                    ID: sdk.String("1"),
                    Name: sdk.String("Amazon"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates{
                    ID: sdk.String("1"),
                    Name: sdk.String("Amazon"),
                },
            },
            ApplyToAllShippings: sdk.Bool(false),
            AreSalesChannelIdsExclusive: sdk.Bool(false),
            BeginDateUtc: sdk.String("2020-05-01T18:47:15.89Z"),
            Brands: []CreateOrUpdateCalculatorConfigurationRequestBodyBrands{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands{
                    ID: sdk.String("1"),
                    Name: sdk.String("Brand (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands{
                    ID: sdk.String("1"),
                    Name: sdk.String("Brand (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands{
                    ID: sdk.String("1"),
                    Name: sdk.String("Brand (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyBrands{
                    ID: sdk.String("1"),
                    Name: sdk.String("Brand (1)"),
                },
            },
            BrandsAreInclusive: sdk.Bool(true),
            Campaigns: []interface{}{
                "ipsa",
            },
            CardIssuers: []interface{}{
                "quidem",
                "neque",
                "quo",
            },
            Categories: []CreateOrUpdateCalculatorConfigurationRequestBodyCategories{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinhos Tintos (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinhos Tintos (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinhos Tintos (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCategories{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinhos Tintos (1)"),
                },
            },
            CategoriesAreInclusive: sdk.Bool(true),
            ClusterExpressions: []string{
                "birthday=true",
                "birthday=true",
                "birthday=true",
                "birthday=true",
            },
            Collections: []CreateOrUpdateCalculatorConfigurationRequestBodyCollections{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCollections{
                    ID: sdk.String("1"),
                    Name: sdk.String("Collection (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCollections{
                    ID: sdk.String("1"),
                    Name: sdk.String("Collection (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyCollections{
                    ID: sdk.String("1"),
                    Name: sdk.String("Collection (1)"),
                },
            },
            Collections1BuyTogether: []string{
                "1",
                "1",
            },
            Collections2BuyTogether: []interface{}{
                "voluptas",
            },
            CollectionsIsInclusive: sdk.Bool(false),
            CompareListPriceAndPrice: sdk.Bool(false),
            ConditionsIds: []string{
                "1",
            },
            Coupon: []interface{}{
                "consequatur",
                "tempora",
                "debitis",
            },
            Cumulative: sdk.Bool(false),
            DaysAgoOfPurchases: sdk.Int64(370853),
            Description: sdk.String("Description of the promotion."),
            DisableDeal: sdk.Bool(false),
            DiscountType: sdk.String("percentual"),
            EnableBuyTogetherPerSku: sdk.Bool(false),
            EndDateUtc: sdk.String("2020-05-01T18:47:15.89Z"),
            FirstBuyIsProfileOptimistic: sdk.Bool(false),
            GiftListTypes: []string{
                "Gift SKU",
            },
            IDCalculatorConfiguration: sdk.String("ba087fa9-8587-44b3-8ef1-ade8d053e9e9"),
            IDSeller: sdk.String("1"),
            IDSellerIsInclusive: sdk.Bool(false),
            IdsSalesChannel: []string{
                "Principal",
            },
            Installment: sdk.Int64(779192),
            IsActive: sdk.Bool(true),
            IsArchived: sdk.Bool(false),
            IsDifferentListPriceAndPrice: sdk.Bool(false),
            IsFeatured: sdk.Bool(true),
            IsFirstBuy: sdk.Bool(false),
            IsMinMaxInstallments: sdk.Bool(false),
            IsSLASelected: sdk.Bool(false),
            ItemMaxPrice: sdk.Float64(4598.56),
            ItemMinPrice: sdk.Float64(9251.64),
            LastModified: sdk.String("2021-02-23T20:58:38.7963862Z"),
            ListSku1BuyTogether: []interface{}{
                "distinctio",
            },
            ListSku2BuyTogether: []interface{}{
                "dignissimos",
                "inventore",
                "nihil",
                "totam",
            },
            MarketingTags: []string{
                "MKT1",
                "MKT1",
                "MKT1",
                "MKT1",
            },
            MarketingTagsAreNotInclusive: sdk.Bool(false),
            MaxInstallment: sdk.Int64(306810),
            MaxNumberOfAffectedItems: sdk.Int64(488410),
            MaxNumberOfAffectedItemsGroupKey: sdk.String("perCart"),
            MaxPricesPerItems: []interface{}{
                "commodi",
                "sapiente",
                "dolores",
            },
            MaxUsage: sdk.Int64(645570),
            MaxUsagePerClient: sdk.Int64(475289),
            MaximumUnitPriceDiscount: sdk.Float64(353.62),
            Merchants: []interface{}{
                "eum",
                "quas",
                "praesentium",
                "consequuntur",
            },
            MinInstallment: sdk.Int64(536178),
            MinimumQuantityBuyTogether: sdk.Int64(143829),
            MultipleUsePerClient: sdk.Bool(false),
            Name: sdk.String("Promoção Social Seller"),
            NewOffset: sdk.Float64(-3),
            NominalDiscountValue: sdk.Float64(6813.93),
            NominalRewardValue: sdk.Float64(6494.63),
            NominalShippingDiscountValue: sdk.Float64(2775.96),
            NominalTax: sdk.Float64(5392.24),
            Offset: sdk.Int64(-3),
            OrderStatusRewardValue: sdk.String("invoiced"),
            Origin: sdk.String("marketplace"),
            PaymentsMethods: []CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods{
                    ID: sdk.String("2"),
                    Name: sdk.String("Visa (2)"),
                },
            },
            PaymentsRules: []interface{}{
                "nisi",
                "fugit",
            },
            PercentualDiscountValue: sdk.Float64(10),
            PercentualDiscountValueList: []float64{
                10,
                10,
                10,
                10,
            },
            PercentualDiscountValueList1: sdk.Float64(1598.7),
            PercentualDiscountValueList2: sdk.Float64(1871.31),
            PercentualRewardValue: sdk.Float64(1294.12),
            PercentualShippingDiscountValue: sdk.Float64(9039.84),
            PercentualTax: sdk.Float64(5789.22),
            Products: []CreateOrUpdateCalculatorConfigurationRequestBodyProducts{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyProducts{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyProducts{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyProducts{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho (1)"),
                },
            },
            ProductsAreInclusive: sdk.Bool(true),
            ProductsSpecifications: []interface{}{
                "esse",
            },
            QuantityToAffectBuyTogether: sdk.Int64(910545),
            RebatePercentualDiscountValue: sdk.Float64(8820.42),
            RestrictionsBins: []string{
                "1234",
            },
            ShippingPercentualTax: sdk.Float64(4586.04),
            ShouldDistributeDiscountAmongMatchedItems: sdk.Bool(false),
            Skus: []CreateOrUpdateCalculatorConfigurationRequestBodySkus{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho tinto (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho tinto (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho tinto (1)"),
                },
                operations.CreateOrUpdateCalculatorConfigurationRequestBodySkus{
                    ID: sdk.String("1"),
                    Name: sdk.String("Vinho tinto (1)"),
                },
            },
            SkusAreInclusive: sdk.Bool(true),
            SkusGift: &operations.CreateOrUpdateCalculatorConfigurationRequestBodySkusGift{
                Gifts: []interface{}{
                    "vero",
                    "aliquid",
                    "quasi",
                },
                QuantitySelectable: sdk.Int64(904045),
            },
            SlasIds: []string{
                "Express",
                "Express",
            },
            Stores: []interface{}{
                "molestiae",
                "rerum",
                "occaecati",
            },
            StoresAreInclusive: sdk.Bool(false),
            TotalValueCeling: sdk.Float64(3277.2),
            TotalValueFloor: sdk.Float64(7162.44),
            TotalValueIncludeAllItems: sdk.Bool(false),
            TotalValueMode: sdk.String("IncludeMatchedItems"),
            TotalValuePurchase: sdk.Float64(7567.79),
            Type: sdk.String("regular"),
            UseNewProgressiveAlgorithm: sdk.Bool(false),
            UtmCampaign: sdk.String("testSource"),
            UtmSource: sdk.String("testSource"),
            ZipCodeRanges: []CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges{
                operations.CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges{
                    Inclusive: sdk.Bool(false),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrUpdateCalculatorConfiguration200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllBenefits

Retrieves all promotions from an account. 

> 📘 Onboarding guide 
>
> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.



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
    res, err := s.PromotionsAndTaxes.GetAllBenefits(ctx, operations.GetAllBenefitsRequest{
        Accept: "culpa",
        ContentType: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllBenefits200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAllTaxes

Retrieves all taxes from an account.

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
    res, err := s.PromotionsAndTaxes.GetAllTaxes(ctx, operations.GetAllTaxesRequest{
        Accept: "adipisci",
        ContentType: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllTaxes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetArchivedPromotions

Lists all archived promotions.

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
    res, err := s.PromotionsAndTaxes.GetArchivedPromotions(ctx, operations.GetArchivedPromotionsRequest{
        Accept: "consequuntur",
        ContentType: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArchivedPromotions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetArchivedTaxes

Lists all archived taxes.

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
    res, err := s.PromotionsAndTaxes.GetArchivedTaxes(ctx, operations.GetArchivedTaxesRequest{
        Accept: "minus",
        ContentType: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArchivedTaxes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCalculatorConfigurationByID

Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.

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
    res, err := s.PromotionsAndTaxes.GetCalculatorConfigurationByID(ctx, operations.GetCalculatorConfigurationByIDRequest{
        Accept: "sapiente",
        ContentType: "consectetur",
        IDCalculatorConfiguration: "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UnarchivePromotion

Unarchives a Promotion or Tax by its ID.

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
    res, err := s.PromotionsAndTaxes.UnarchivePromotion(ctx, operations.UnarchivePromotionRequest{
        Accept: "esse",
        ContentType: "blanditiis",
        IDCalculatorConfiguration: "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIRnbPvtImportCalculatorConfiguration

Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect. 
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

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
    res, err := s.PromotionsAndTaxes.PostAPIRnbPvtImportCalculatorConfiguration(ctx, operations.PostAPIRnbPvtImportCalculatorConfigurationRequest{
        Accept: "provident",
        ContentType: "text/csv",
        RequestBody: []byte("a"),
        XVTEXAccumulateWithManualPrices: false,
        XVTEXCalculatorName: "Test",
        XVTEXClusterExpression: sdk.String("cluster_name=true"),
        XVTEXClusterOperator: sdk.String("any"),
        XVTEXCumulative: sdk.Bool(false),
        XVTEXEndDate: "2020-08-18T16:30:00+3:00",
        XVTEXStartDate: "2020-08-18T16:00:00+3:00",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAPIRnbPvtImportCalculatorConfigurationPromotionID

Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.  
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

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
    res, err := s.PromotionsAndTaxes.PutAPIRnbPvtImportCalculatorConfigurationPromotionID(ctx, operations.PutAPIRnbPvtImportCalculatorConfigurationPromotionIDRequest{
        Accept: "nulla",
        ContentType: "text/csv",
        RequestBody: []byte("quas"),
        XVTEXAccumulateWithManualPrices: false,
        XVTEXCalculatorName: "Test",
        XVTEXClusterExpression: sdk.String("cluster_name=true"),
        XVTEXClusterOperator: sdk.String("any"),
        XVTEXCumulative: sdk.Bool(false),
        XVTEXEndDate: "2020-08-18T16:30:00+3:00",
        XVTEXStartDate: "2020-08-18T16:00:00+3:00",
        PromotionID: "dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
