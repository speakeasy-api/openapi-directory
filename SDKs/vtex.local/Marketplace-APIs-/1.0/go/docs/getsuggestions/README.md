# GetSuggestions

## Overview

Search and filter all suggestions using specific criteria

### Available Operations

* [GetSuggestion](#getsuggestion) - Get SKU Suggestion by ID
* [Getsuggestions](#getsuggestions) - Get all SKU suggestions

## GetSuggestion

This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

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
    res, err := s.GetSuggestions.GetSuggestion(ctx, operations.GetSuggestionRequest{
        Accept: "nulla",
        ContentType: "corrupti",
        AccountName: "illum",
        SellerID: "vel",
        SellerSkuID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getsuggestions

This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

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
    res, err := s.GetSuggestions.Getsuggestions(ctx, operations.GetsuggestionsRequest{
        Accept: "deserunt",
        ContentType: "suscipit",
        From: sdk.Int(437587),
        To: sdk.Int(297534),
        AccountName: "debitis",
        Hasmapping: sdk.String("true"),
        Matcherid: sdk.String("ipsa"),
        Q: sdk.String("delectus"),
        Seller: sdk.String("tempora"),
        Status: sdk.String("accepted"),
        Type: sdk.String("new"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
