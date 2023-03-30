# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Promotions-/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CalculatediscountsandtaxesBundlesRequest{
        Headers: operations.CalculatediscountsandtaxesBundlesHeaders{
            Accept: "unde",
            ContentType: "deserunt",
        },
        Request: shared.CalculatediscountsandtaxesBundlesRequest{
            IsShoppingCart: false,
            Items: []shared.Item{
                shared.Item{
                    ID: "nulla",
                    Index: 602763,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "perspiciatis",
                        "nulla",
                        "nihil",
                        "fuga",
                    },
                    MeasurementUnit: "facilis",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "iusto",
                            Value: "ullam",
                        },
                        shared.Param{
                            Name: "saepe",
                            Value: "inventore",
                        },
                    },
                    PriceSheet: []string{
                        "enim",
                        "eum",
                        "voluptatum",
                        "autem",
                    },
                    PriceTags: []string{
                        "non",
                        "deleniti",
                        "similique",
                        "reprehenderit",
                    },
                    ProductSpecifications: []string{
                        "quo",
                        "quasi",
                        "laboriosam",
                        "dicta",
                    },
                    Quantity: 648172,
                    SellerID: "voluptatem",
                    UnitMultiplier: 368241,
                },
                shared.Item{
                    ID: "fugiat",
                    Index: 957156,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "eos",
                        "accusamus",
                        "accusamus",
                        "reiciendis",
                    },
                    MeasurementUnit: "rem",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "et",
                            Value: "praesentium",
                        },
                        shared.Param{
                            Name: "occaecati",
                            Value: "dolor",
                        },
                        shared.Param{
                            Name: "soluta",
                            Value: "sed",
                        },
                        shared.Param{
                            Name: "quisquam",
                            Value: "rerum",
                        },
                    },
                    PriceSheet: []string{
                        "qui",
                        "sed",
                        "rerum",
                    },
                    PriceTags: []string{
                        "occaecati",
                        "odit",
                        "esse",
                        "rem",
                    },
                    ProductSpecifications: []string{
                        "amet",
                        "est",
                    },
                    Quantity: 736918,
                    SellerID: "blanditiis",
                    UnitMultiplier: 216550,
                },
                shared.Item{
                    ID: "similique",
                    Index: 135218,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "quia",
                    },
                    MeasurementUnit: "et",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "laborum",
                            Value: "modi",
                        },
                    },
                    PriceSheet: []string{
                        "iure",
                        "earum",
                        "ut",
                    },
                    PriceTags: []string{
                        "qui",
                        "ea",
                        "laborum",
                    },
                    ProductSpecifications: []string{
                        "ut",
                        "optio",
                    },
                    Quantity: 99280,
                    SellerID: "inventore",
                    UnitMultiplier: 969810,
                },
            },
            Origin: "libero",
            Params: []shared.Param{
                shared.Param{
                    Name: "libero",
                    Value: "ipsum",
                },
                shared.Param{
                    Name: "non",
                    Value: "ea",
                },
                shared.Param{
                    Name: "magni",
                    Value: "placeat",
                },
            },
            ProfileID: "ipsam",
            SalesChannel: "est",
        },
    }

    ctx := context.Background()
    res, err := s.Bundles.CalculatediscountsandtaxesBundles(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Bundles

* `CalculatediscountsandtaxesBundles` - Calculate discounts and taxes (Bundles)

### CampaignAudiences

* `Getcampaignaudiences` - Get all campaign audiences
* `Getcampaignconfiguration` - Get campaign audience configuration
* `Setcampaignconfiguration` - Create campaign audience

### Coupons

* `Archivebycouponcode` - Archive coupon by coupon code
* `Getall` - Get all coupons
* `Getarchivedbycouponcode` - Get archived coupon by coupon code
* `Getbycouponcode` - Get coupon by coupon code
* `Getusage` - Get coupon usage
* `MassiveGeneration` - Coupon Massive Generation
* `Unarchivebycouponcode` - Unarchive coupon by coupon code
* `Update` - Update coupon
* `PostAPIRnbPvtCoupon` - Create coupon
* `PostAPIRnbPvtMultipleCoupons` - Create multiple coupons

### Notifications

* `Usagenotification` - Usage notification

### PricesLegacyV1

* `DeletebyskuID` - Delete Price by SKU Id
* `Getallpaged` - Get all paged prices
* `Pricebycontext` - Get Price by context
* `PricebyskuID` - Get Price by SKU ID
* `PricebyskuIdandtradePolicy` - Get Price by SKU ID and Trade Policy
* `Saveprice` - Save Price

### PromotionsAndTaxes

* `ArchivePromotion` - Archive Promotion or Tax
* `CreateOrUpdateCalculatorConfiguration` - Create or Update Promotion or Tax
* `GetAllBenefits` - Get All Promotions
* `GetAllTaxes` - Get All Taxes
* `GetArchivedPromotions` - List Archived Promotions
* `GetArchivedTaxes` - List Archived Taxes
* `GetCalculatorConfigurationByID` - Get Promotion or Tax by ID
* `UnarchivePromotion` - Unarchive Promotion or Tax
* `PostAPIRnbPvtImportCalculatorConfiguration` - Create Multiple SKU Promotion
* `PutAPIRnbPvtImportCalculatorConfigurationPromotionID` - Update Multiple SKU Promotion
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
