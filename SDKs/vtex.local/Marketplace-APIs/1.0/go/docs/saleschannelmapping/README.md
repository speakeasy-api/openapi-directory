# SalesChannelMapping

## Overview

Mapping between a marketplace's sales channel and a seller's affiliate.

### Available Operations

* [RetrieveMapping](#retrievemapping) - Get Sales Channel Mapping Data
* [UpsertMapping](#upsertmapping) - Upsert Sales Channel Mapping

## RetrieveMapping

Retrieves information about the mapping between marketplace's sales channels and a specific seller.

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
    res, err := s.SalesChannelMapping.RetrieveMapping(ctx, operations.RetrieveMappingRequest{
        Accept: "repellendus",
        ContentType: "sapiente",
        AccountName: "quo",
        An: "odit",
        Environment: "at",
        SellerID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveMapping200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpsertMapping

This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.

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
    res, err := s.SalesChannelMapping.UpsertMapping(ctx, operations.UpsertMappingRequest{
        Accept: "maiores",
        ContentType: "molestiae",
        RequestBody: []shared.UpsertMappingRequest{
            shared.UpsertMappingRequest{
                MarketplaceSalesChannel: 800911,
                SellerChannel: "esse",
            },
            shared.UpsertMappingRequest{
                MarketplaceSalesChannel: 520478,
                SellerChannel: "porro",
            },
            shared.UpsertMappingRequest{
                MarketplaceSalesChannel: 678880,
                SellerChannel: "dicta",
            },
            shared.UpsertMappingRequest{
                MarketplaceSalesChannel: 720633,
                SellerChannel: "officia",
            },
        },
        AccountName: "occaecati",
        An: "fugit",
        Environment: "deleniti",
        SellerID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertMapping200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
