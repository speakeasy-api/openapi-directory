# Facets

### Available Operations

* [Facetscategory](#facetscategory) - Search by Store Facets
* [GetAPICatalogSystemPubFacetsCategoryCategoryID](#getapicatalogsystempubfacetscategorycategoryid) - Get Category Facets

## Facetscategory

Retrieves products by store facets. 
>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Response body example:

```json
{
	"Departments": [
  	{
    	"Quantity": 2,
      "Position": null,
      "Name": "Beers Beers Mesmo",
      "Link": "/Beers-Beers-Mesmo/1?map=c,b",
      "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
      "Map": "c",
      "Value": "Beers-Beers-Mesmo"
     },
     {
     	"Quantity": 2,
      "Position": null,
      "Name": "Merch Integration Category ||",
      "Link": "/Merch-Integration-Category-||/1?map=c,b",
      "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
      "Map": "c",
      "Value": "Merch-Integration-Category-||"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Jogos",
      "Link": "/Jogos/1?map=c,b",
      "LinkEncoded": "/Jogos/1?map=c,b",
      "Map": "c",
      "Value": "Jogos"
     },
     {
      "Quantity": 3,
      "Position": null,
      "Name": "189",
      "Link": "/189/1?map=c,b",
      "LinkEncoded": "/189/1?map=c,b",
      "Map": "c",
      "Value": "189"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Tests",
      "Link": "/Tests/1?map=c,b",
      "LinkEncoded": "/Tests/1?map=c,b",
      "Map": "c",
      "Value": "Tests"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Accessories",
      "Link": "/Accessories/1?map=c,b",
      "LinkEncoded": "/Accessories/1?map=c,b",
      "Map": "c",
      "Value": "Accessories"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Bars",
      "Link": "/Bars/1?map=c,b",
      "LinkEncoded": "/Bars/1?map=c,b",
      "Map": "c",
      "Value": "Bars"
     },
     {
      "Quantity": 5,
      "Position": null,
      "Name": "Categoria Teste Timeout",
      "Link": "/Categoria-Teste-Timeout/1?map=c,b",
      "LinkEncoded": "/Categoria-Teste-Timeout/1?map=c,b",
      "Map": "c",
      "Value": "Categoria-Teste-Timeout"
     }
    ],
    "Brands": [
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Merch XP",
      "Link": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Merch-XP?map=c,c,b,b",
      "Map": "b",
      "Value": "Merch-XP"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Zé",
      "Link": "/1/1234600/1/Ze?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Ze?map=c,c,b,b",
      "Map": "b",
      "Value": "Ze"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Odin",
      "Link": "/1/1234600/1/Odin?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Odin?map=c,c,b,b",
      "Map": "b",
      "Value": "Odin"
     },
     {
      "Quantity": 2,
      "Position": null,
      "Name": "Hoegaarden",
      "Link": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
      "Map": "b",
      "Value": "Hoegaarden"
     },
     {
      "Quantity": 1,
      "Position": null,
      "Name": "Teste marcas",
      "Link": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "LinkEncoded": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
      "Map": "b",
      "Value": "Teste-marcas"
     },
     {
       "Quantity": 1,
       "Position": null,
       "Name": "Bitmap Bureau",
       "Link": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
       "LinkEncoded": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
       "Map": "b",
       "Value": "Bitmap-Bureau"
     },
      {
        "Quantity": 1,
        "Position": null,
        "Name": "Sega",
        "Link": "/1/1234600/1/Sega?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Sega?map=c,c,b,b",
        "Map": "b",
        "Value": "Sega"
      },
      {
        "Quantity": 3,
        "Position": null,
        "Name": "Technogym",
        "Link": "/1/1234600/1/Technogym?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Technogym?map=c,c,b,b",
        "Map": "b",
        "Value": "Technogym"
      },
      {
        "Quantity": 3,
        "Position": null,
        "Name": "Aptany",
        "Link": "/1/1234600/1/Aptany?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Aptany?map=c,c,b,b",
        "Map": "b",
        "Value": "Aptany"
      },
      {
        "Quantity": 1,
        "Position": null,
        "Name": "Tectoy",
        "Link": "/1/1234600/1/Tectoy?map=c,c,b,b",
        "LinkEncoded": "/1/1234600/1/Tectoy?map=c,c,b,b",
        "Map": "b",
        "Value": "Tectoy"
      }
    ],
      "SpecificationFilters": {},
        "CategoriesTrees": [
          {
            "Id": 1,
            "Quantity": 4,
            "Position": null,
            "Name": "Beers Beers Mesmo",
            "Link": "/Beers-Beers-Mesmo/1?map=c,b",
            "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
            "Map": "c",
            "Value": "Beers-Beers-Mesmo",
            "Children": [
              {
                "Id": 2,
                "Quantity": 1,
                "Position": null,
                "Name": "Lager Beers",
                "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                "Map": "c",
                "Value": "Lager-Beers",
                "Children": []
              }
            ]
          },
          {
            "Id": 1234571,
            "Quantity": 2,
            "Position": null,
            "Name": "Jogos",
            "Link": "/Jogos/1?map=c,b",
            "LinkEncoded": "/Jogos/1?map=c,b",
            "Map": "c",
            "Value": "Jogos",
            "Children": []
          },
          {
            "Id": 1234579,
            "Quantity": 3,
            "Position": null,
            "Name": "189",
            "Link": "/189/1?map=c,b",
            "LinkEncoded": "/189/1?map=c,b",
            "Map": "c",
            "Value": "189",
            "Children": []
          },
          {
            "Id": 1234587,
            "Quantity": 1,
            "Position": null,
            "Name": "Tests",
            "Link": "/Tests/1?map=c,b",
            "LinkEncoded": "/Tests/1?map=c,b",
            "Map": "c",
            "Value": "Tests",
            "Children": []
          },
          {
            "Id": 1234595,
            "Quantity": 1,
            "Position": null,
            "Name": "Accessories",
            "Link": "/Accessories/1?map=c,b",
            "LinkEncoded": "/Accessories/1?map=c,b",
            "Map": "c",
            "Value": "Accessories",
            "Children": [
              {
                "Id": 1234596,
                "Quantity": 1,
                "Position": null,
                "Name": "Foam rollers",
                "Link": "/Accessories/Foam-rollers/1?map=c,c,b",
                "LinkEncoded": "/Accessories/Foam-rollers/1?map=c,c,b",
                "Map": "c",
                "Value": "Foam-rollers",
                "Children": []
              }
            ]
          },
          {
            "Id": 1234597,
            "Quantity": 2,
            "Position": null,
            "Name": "Bars",
            "Link": "/Bars/1?map=c,b",
            "LinkEncoded": "/Bars/1?map=c,b",
            "Map": "c",
            "Value": "Bars",
            "Children": [
              {
                "Id": 1234598,
                "Quantity": 1,
                "Position": null,
                "Name": "Training Bars",
                "Link": "/Bars/Training-Bars/1?map=c,c,b",
                "LinkEncoded": "/Bars/Training-Bars/1?map=c,c,b",
                "Map": "c",
                "Value": "Training-Bars",
                "Children": []
              },
              {
                "Id": 1234599,
                "Quantity": 1,
                "Position": null,
                "Name": "Curl Bars",
                "Link": "/Bars/Curl-Bars/1?map=c,c,b",
                "LinkEncoded": "/Bars/Curl-Bars/1?map=c,c,b",
                "Map": "c",
                "Value": "Curl-Bars",
                "Children": []
              }
            ]
          },
          {
            "Id": 15,
            "Quantity": 1,
            "Position": null,
            "Name": "Coronas",
            "Link": "/Coronas/1?map=c,b",
            "LinkEncoded": "/Coronas/1?map=c,b",
            "Map": "c",
            "Value": "Coronas",
            "Children": [
              {
                "Id": 13,
                "Quantity": 1,
                "Position": null,
                "Name": "não tem limite!",
                "Link": "/Coronas/nao-tem-limite-/1?map=c,c,b",
                "LinkEncoded": "/Coronas/nao-tem-limite-/1?map=c,c,b",
                "Map": "c",
                "Value": "nao-tem-limite-",
                "Children": []
              }
            ]
          },
          {
            "Id": 4,
            "Quantity": 4,
            "Position": null,
            "Name": "Merch Integration Category ||",
            "Link": "/Merch-Integration-Category-||/1?map=c,b",
            "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
            "Map": "c",
            "Value": "Merch-Integration-Category-||",
            "Children": []
          }
        ],
          "PriceRanges": [],
            "Summary": {
              "Departments": {
                "DisplayedItems": 8,
                  "TotalItems": 8
              },
                "CategoriesTrees": {
                  "DisplayedItems": 13,
                    "TotalItems": 13
                },
                  "Brands": {
                    "DisplayedItems": 10,
                      "TotalItems": 10
                  },
                    "PriceRanges": {
                      "DisplayedItems": 0,
                        "TotalItems": 0
                    },
                      "SpecificationFilters": {}
            }
}
```

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
    res, err := s.Facets.Facetscategory(ctx, operations.FacetscategoryRequest{
        Accept: "application/json",
        ContentType: "application/json",
        From: sdk.String("1"),
        To: sdk.String("50"),
        Map: "c",
        Term: "2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Facetscategory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAPICatalogSystemPubFacetsCategoryCategoryID

Retrieves the names and IDs of the categories facets. 
>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Response body example:

```json
[
	[
    {
      "Name":"Tamanho Global",
      "Id":45
		},
		{
      "Name":"Percentuals",
      "Id":25
		}
	]
]
```

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
    res, err := s.Facets.GetAPICatalogSystemPubFacetsCategoryCategoryID(ctx, operations.GetAPICatalogSystemPubFacetsCategoryCategoryIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        From: sdk.String("1"),
        To: sdk.String("50"),
        CategoryID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPICatalogSystemPubFacetsCategoryCategoryID200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
