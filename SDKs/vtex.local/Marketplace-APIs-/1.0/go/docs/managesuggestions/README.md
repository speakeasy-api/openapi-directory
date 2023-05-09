# ManageSuggestions

## Overview

Send or delete SKU suggestions from the seller to marketplace

### Available Operations

* [DeleteSuggestion](#deletesuggestion) - Delete SKU Suggestion
* [SaveSuggestion](#savesuggestion) - Send SKU Suggestion

## DeleteSuggestion

This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.

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
    res, err := s.ManageSuggestions.DeleteSuggestion(ctx, operations.DeleteSuggestionRequest{
        Accept: "quis",
        ContentType: "veritatis",
        AccountName: "deserunt",
        SellerID: "perferendis",
        SellerSkuID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SaveSuggestion

This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.

Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.

In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below. 

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
    res, err := s.ManageSuggestions.SaveSuggestion(ctx, operations.SaveSuggestionRequest{
        Accept: "application/vnd.vtex.suggestion.v0+json",
        ContentType: "repellendus",
        SaveSuggestionRequest: shared.SaveSuggestionRequest{
            AvailableQuantity: 957156,
            BrandName: "quo",
            CategoryFullPath: "odit",
            Ean: "at",
            Height: 870088,
            Images: []shared.Image{
                shared.Image{
                    ImageName: "molestiae",
                    ImageURL: "quod",
                },
                shared.Image{
                    ImageName: "quod",
                    ImageURL: "esse",
                },
                shared.Image{
                    ImageName: "totam",
                    ImageURL: "porro",
                },
                shared.Image{
                    ImageName: "dolorum",
                    ImageURL: "dicta",
                },
            },
            Length: 720633,
            MeasurementUnit: sdk.String("officia"),
            Pricing: shared.SaveSuggestionRequestPricing{
                Currency: sdk.String("occaecati"),
                CurrencySymbol: sdk.String("fugit"),
                SalePrice: sdk.Int(537373),
            },
            ProductDescription: "hic",
            ProductID: "optio",
            ProductName: "totam",
            ProductSpecifications: []shared.ProductSpecification{
                shared.ProductSpecification{
                    FieldName: sdk.String("commodi"),
                    FieldValues: []string{
                        "modi",
                        "qui",
                    },
                },
            },
            RefID: "impedit",
            SellerID: "cum",
            SellerStockKeepingUnitID: sdk.Int(456150),
            SkuName: "ipsum",
            SkuSpecifications: []shared.SkuSpecification{
                shared.SkuSpecification{
                    FieldName: sdk.String("aspernatur"),
                    FieldValues: []string{
                        "ad",
                    },
                },
                shared.SkuSpecification{
                    FieldName: sdk.String("natus"),
                    FieldValues: []string{
                        "iste",
                    },
                },
                shared.SkuSpecification{
                    FieldName: sdk.String("dolor"),
                    FieldValues: []string{
                        "laboriosam",
                        "hic",
                        "saepe",
                    },
                },
            },
            UnitMultiplier: sdk.Int(681820),
            Weight: 449950,
            Width: 359508,
        },
        AccountName: "iste",
        SellerID: "iure",
        SellerSkuID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
