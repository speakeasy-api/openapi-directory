# GetVersions

## Overview

Search and filter all versions of suggestions, using specific criteria

### Available Operations

* [GetSuggestionbyversion](#getsuggestionbyversion) - Get Version by ID
* [GetVersions](#getversions) - Get all Versions

## GetSuggestionbyversion

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.

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
    res, err := s.GetVersions.GetSuggestionbyversion(ctx, operations.GetSuggestionbyversionRequest{
        Accept: "suscipit",
        ContentType: "molestiae",
        AccountName: "minus",
        SellerID: "placeat",
        Sellerskuid: "voluptatum",
        Version: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVersions

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes. 

The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.

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
    res, err := s.GetVersions.GetVersions(ctx, operations.GetVersionsRequest{
        Accept: "excepturi",
        ContentType: "nisi",
        AccountName: "recusandae",
        SellerID: "temporibus",
        Sellerskuid: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
