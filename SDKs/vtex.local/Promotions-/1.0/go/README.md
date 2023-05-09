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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bundles.CalculatediscountsandtaxesBundles(ctx, operations.CalculatediscountsandtaxesBundlesRequest{
        Accept: "corrupti",
        CalculatediscountsandtaxesBundlesRequest: shared.CalculatediscountsandtaxesBundlesRequest{
            IsShoppingCart: false,
            Items: []shared.Item{
                shared.Item{
                    ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
                    Index: 368241,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "sapiente",
                        "quo",
                        "odit",
                        "at",
                    },
                    MeasurementUnit: "at",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "Bernadette Schmidt",
                            Value: "porro",
                        },
                        shared.Param{
                            Name: "Samuel Reichel",
                            Value: "fugit",
                        },
                        shared.Param{
                            Name: "Irvin Rosenbaum III",
                            Value: "molestiae",
                        },
                        shared.Param{
                            Name: "Norma Ryan",
                            Value: "ipsum",
                        },
                    },
                    PriceSheet: []string{
                        "aspernatur",
                        "perferendis",
                        "ad",
                    },
                    PriceTags: []string{
                        "sed",
                        "iste",
                        "dolor",
                    },
                    ProductSpecifications: []string{
                        "laboriosam",
                        "hic",
                        "saepe",
                    },
                    Quantity: 681820,
                    SellerID: "in",
                    UnitMultiplier: 359508,
                },
                shared.Item{
                    ID: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
                    Index: 653108,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "numquam",
                        "commodi",
                        "quam",
                    },
                    MeasurementUnit: "molestiae",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "Miss Eugene Hauck",
                            Value: "enim",
                        },
                    },
                    PriceSheet: []string{
                        "quo",
                    },
                    PriceTags: []string{
                        "tenetur",
                    },
                    ProductSpecifications: []string{
                        "id",
                        "possimus",
                    },
                    Quantity: 13571,
                    SellerID: "quasi",
                    UnitMultiplier: 622846,
                },
                shared.Item{
                    ID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
                    Index: 565189,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "pariatur",
                        "modi",
                        "praesentium",
                    },
                    MeasurementUnit: "rem",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "Dr. Casey Mayer",
                            Value: "enim",
                        },
                        shared.Param{
                            Name: "Monique Spinka",
                            Value: "distinctio",
                        },
                        shared.Param{
                            Name: "Francisco Gleason",
                            Value: "cupiditate",
                        },
                        shared.Param{
                            Name: "Christopher Cummerata",
                            Value: "alias",
                        },
                    },
                    PriceSheet: []string{
                        "dolorum",
                    },
                    PriceTags: []string{
                        "tempora",
                        "facilis",
                        "tempore",
                    },
                    ProductSpecifications: []string{
                        "delectus",
                        "eum",
                    },
                    Quantity: 248753,
                    SellerID: "eligendi",
                    UnitMultiplier: 576157,
                },
            },
            Origin: "aliquid",
            Params: []shared.Param{
                shared.Param{
                    Name: "Perry Nikolaus",
                    Value: "a",
                },
                shared.Param{
                    Name: "Arnold Kirlin",
                    Value: "rerum",
                },
                shared.Param{
                    Name: "Valerie Runolfsson",
                    Value: "aliquid",
                },
            },
            ProfileID: "laborum",
            SalesChannel: "accusamus",
        },
        ContentType: "non",
    })
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
## Available Resources and Operations


### [Bundles](docs/bundles/README.md)

* [CalculatediscountsandtaxesBundles](docs/bundles/README.md#calculatediscountsandtaxesbundles) - Calculate discounts and taxes (Bundles)

### [CampaignAudiences](docs/campaignaudiences/README.md)

* [Getcampaignaudiences](docs/campaignaudiences/README.md#getcampaignaudiences) - Get all campaign audiences
* [Getcampaignconfiguration](docs/campaignaudiences/README.md#getcampaignconfiguration) - Get campaign audience configuration
* [Setcampaignconfiguration](docs/campaignaudiences/README.md#setcampaignconfiguration) - Create campaign audience

### [Coupons](docs/coupons/README.md)

* [Archivebycouponcode](docs/coupons/README.md#archivebycouponcode) - Archive coupon by coupon code
* [Getall](docs/coupons/README.md#getall) - Get all coupons
* [Getarchivedbycouponcode](docs/coupons/README.md#getarchivedbycouponcode) - Get archived coupon by coupon code
* [Getbycouponcode](docs/coupons/README.md#getbycouponcode) - Get coupon by coupon code
* [Getusage](docs/coupons/README.md#getusage) - Get coupon usage
* [MassiveGeneration](docs/coupons/README.md#massivegeneration) - Coupon Massive Generation
* [Unarchivebycouponcode](docs/coupons/README.md#unarchivebycouponcode) - Unarchive coupon by coupon code
* [Update](docs/coupons/README.md#update) - Update coupon
* [PostAPIRnbPvtCoupon](docs/coupons/README.md#postapirnbpvtcoupon) - Create coupon
* [PostAPIRnbPvtMultipleCoupons](docs/coupons/README.md#postapirnbpvtmultiplecoupons) - Create multiple coupons

### [Notifications](docs/notifications/README.md)

* [Usagenotification](docs/notifications/README.md#usagenotification) - Usage notification

### [PricesLegacyV1](docs/priceslegacyv1/README.md)

* [DeletebyskuID](docs/priceslegacyv1/README.md#deletebyskuid) - Delete Price by SKU Id
* [Getallpaged](docs/priceslegacyv1/README.md#getallpaged) - Get all paged prices
* [Pricebycontext](docs/priceslegacyv1/README.md#pricebycontext) - Get Price by context
* [PricebyskuID](docs/priceslegacyv1/README.md#pricebyskuid) - Get Price by SKU ID
* [PricebyskuIdandtradePolicy](docs/priceslegacyv1/README.md#pricebyskuidandtradepolicy) - Get Price by SKU ID and Trade Policy
* [Saveprice](docs/priceslegacyv1/README.md#saveprice) - Save Price

### [PromotionsAndTaxes](docs/promotionsandtaxes/README.md)

* [ArchivePromotion](docs/promotionsandtaxes/README.md#archivepromotion) - Archive Promotion or Tax
* [CreateOrUpdateCalculatorConfiguration](docs/promotionsandtaxes/README.md#createorupdatecalculatorconfiguration) - Create or Update Promotion or Tax
* [GetAllBenefits](docs/promotionsandtaxes/README.md#getallbenefits) - Get All Promotions
* [GetAllTaxes](docs/promotionsandtaxes/README.md#getalltaxes) - Get All Taxes
* [GetArchivedPromotions](docs/promotionsandtaxes/README.md#getarchivedpromotions) - List Archived Promotions
* [GetArchivedTaxes](docs/promotionsandtaxes/README.md#getarchivedtaxes) - List Archived Taxes
* [GetCalculatorConfigurationByID](docs/promotionsandtaxes/README.md#getcalculatorconfigurationbyid) - Get Promotion or Tax by ID
* [UnarchivePromotion](docs/promotionsandtaxes/README.md#unarchivepromotion) - Unarchive Promotion or Tax
* [PostAPIRnbPvtImportCalculatorConfiguration](docs/promotionsandtaxes/README.md#postapirnbpvtimportcalculatorconfiguration) - Create Multiple SKU Promotion
* [PutAPIRnbPvtImportCalculatorConfigurationPromotionID](docs/promotionsandtaxes/README.md#putapirnbpvtimportcalculatorconfigurationpromotionid) - Update Multiple SKU Promotion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
