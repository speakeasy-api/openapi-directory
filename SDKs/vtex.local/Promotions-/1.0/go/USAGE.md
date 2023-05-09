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