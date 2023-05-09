# Bundles

### Available Operations

* [CalculatediscountsandtaxesBundles](#calculatediscountsandtaxesbundles) - Calculate discounts and taxes (Bundles)

## CalculatediscountsandtaxesBundles

Calculate discounts and taxes

### Example Usage

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
        Accept: "occaecati",
        CalculatediscountsandtaxesBundlesRequest: shared.CalculatediscountsandtaxesBundlesRequest{
            IsShoppingCart: false,
            Items: []shared.Item{
                shared.Item{
                    ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
                    Index: 92373,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "ullam",
                        "provident",
                        "quos",
                    },
                    MeasurementUnit: "sint",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "Abel O'Hara",
                            Value: "dolor",
                        },
                    },
                    PriceSheet: []string{
                        "odit",
                        "nemo",
                        "quasi",
                        "iure",
                    },
                    PriceTags: []string{
                        "debitis",
                        "eius",
                        "maxime",
                        "deleniti",
                    },
                    ProductSpecifications: []string{
                        "in",
                        "architecto",
                        "architecto",
                    },
                    Quantity: 919483,
                    SellerID: "ullam",
                    UnitMultiplier: 714242,
                },
                shared.Item{
                    ID: "7fd2ed02-8921-4cdd-8692-601fb576b0d5",
                    Index: 975522,
                    IsGift: false,
                    LogisticsInfos: []string{
                        "fugiat",
                    },
                    MeasurementUnit: "amet",
                    Params: []shared.Param{
                        shared.Param{
                            Name: "Lewis Welch",
                            Value: "dolores",
                        },
                    },
                    PriceSheet: []string{
                        "totam",
                        "dignissimos",
                    },
                    PriceTags: []string{
                        "quis",
                    },
                    ProductSpecifications: []string{
                        "eos",
                    },
                    Quantity: 18521,
                    SellerID: "dolores",
                    UnitMultiplier: 793698,
                },
            },
            Origin: "quam",
            Params: []shared.Param{
                shared.Param{
                    Name: "Dean Welch",
                    Value: "facilis",
                },
            },
            ProfileID: "perspiciatis",
            SalesChannel: "voluptatem",
        },
        ContentType: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
