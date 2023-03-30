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
            Accept: "corrupti",
            ContentType: "provident",
        },
        Request: shared.CalculatediscountsandtaxesBundlesRequest{
            IsShoppingCart: false,
            Items: []shared.Item{
                shared.Item{
                    ID: "quibusdam",
                    Index: 602763,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "corrupti",
                        "illum",
                        "vel",
                        "error",
                    },
                    MeasurementUnit: "deserunt",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "iure",
                            Value: "magnam",
                        },
                        shared.Param{
                            Name: "debitis",
                            Value: "ipsa",
                        },
                    },
                    PriceSheet: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                    PriceTags: []string{
                        "voluptatum",
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    ProductSpecifications: []string{
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    },
                    Quantity: 648172,
                    SellerID: "perferendis",
                    UnitMultiplier: 368241,
                },
                shared.Item{
                    ID: "repellendus",
                    Index: 957156,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "odit",
                        "at",
                        "at",
                        "maiores",
                    },
                    MeasurementUnit: "molestiae",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "quod",
                            Value: "esse",
                        },
                        shared.Param{
                            Name: "totam",
                            Value: "porro",
                        },
                        shared.Param{
                            Name: "dolorum",
                            Value: "dicta",
                        },
                        shared.Param{
                            Name: "nam",
                            Value: "officia",
                        },
                    },
                    PriceSheet: []string{
                        "fugit",
                        "deleniti",
                        "hic",
                    },
                    PriceTags: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    ProductSpecifications: []string{
                        "qui",
                        "impedit",
                    },
                    Quantity: 736918,
                    SellerID: "esse",
                    UnitMultiplier: 216550,
                },
                shared.Item{
                    ID: "excepturi",
                    Index: 135218,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "ad",
                    },
                    MeasurementUnit: "natus",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "iste",
                            Value: "dolor",
                        },
                    },
                    PriceSheet: []string{
                        "laboriosam",
                        "hic",
                        "saepe",
                    },
                    PriceTags: []string{
                        "in",
                        "corporis",
                        "iste",
                    },
                    ProductSpecifications: []string{
                        "saepe",
                        "quidem",
                    },
                    Quantity: 99280,
                    SellerID: "ipsa",
                    UnitMultiplier: 969810,
                },
            },
            Origin: "est",
            Params: []shared.Param{
                shared.Param{
                    Name: "laborum",
                    Value: "dolores",
                },
                shared.Param{
                    Name: "dolorem",
                    Value: "corporis",
                },
                shared.Param{
                    Name: "explicabo",
                    Value: "nobis",
                },
            },
            ProfileID: "enim",
            SalesChannel: "omnis",
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