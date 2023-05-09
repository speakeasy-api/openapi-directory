# MatchReceivedSKUs

## Overview

Match SKU suggestions received in the marketplace

### Available Operations

* [Match](#match) - Match Received SKUs individually
* [MatchMultiple](#matchmultiple) - Match Multiple Received SKUs

## Match

All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `itemMatch`: associate the received SKU to an existing SKU. 

3. `productMatch`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU. 

5. `pending`: the received SKU requires attention. 

6. `incomplete`: the received SKU is lacking information to be matched. 

7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

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
    res, err := s.MatchReceivedSKUs.Match(ctx, operations.MatchRequest{
        Accept: "quidem",
        ContentType: "architecto",
        MatchRequest: shared.MatchRequest{
            MatchType: "ipsa",
            MatcherID: "reiciendis",
            Product: &shared.Product{
                BrandID: 666767,
                CategoryID: 653140,
                Description: "laborum",
                Name: "Connie Herzog",
                Specifications: "enim",
            },
            ProductRef: sdk.String("omnis"),
            Score: "nemo",
            Sku: &shared.Sku{
                Eans: []string{
                    "excepturi",
                    "accusantium",
                },
                Height: 438601,
                Images: []interface{}{
                    "doloribus",
                    "sapiente",
                    "architecto",
                },
                Length: 652790,
                MeasurementUnit: "dolorem",
                Name: "Carlos Ziemann",
                RefID: "numquam",
                Specifications: shared.Specifications{
                    Embalagem: "commodi",
                },
                UnitMultiplier: 466311,
                Weight: 474697,
                Width: 244425,
            },
            SkuRef: sdk.String("error"),
        },
        AccountName: "quia",
        Matchid: "quis",
        SellerID: "vitae",
        Sellerskuid: "laborum",
        Version: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MatchMultiple

This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.

Through the `actionName` attribute you can select the operation you want to apply to the received SKU. 

Actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `skuassociation`: associate the received SKU to an existing SKU. 

3. `productassociation`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU.

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
    res, err := s.MatchReceivedSKUs.MatchMultiple(ctx, operations.MatchMultipleRequest{
        Accept: "enim",
        ContentType: "odit",
        RequestBody: [][]interface{}{
            []interface{}{
                "tenetur",
            },
            []interface{}{
                "id",
                "possimus",
            },
            []interface{}{
                "quasi",
            },
            []interface{}{
                "temporibus",
                "laborum",
                "quasi",
            },
        },
        AccountName: "reiciendis",
        ActionName: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
