# Search

## Overview

The `search` API is intended to query a collection of documents.	

### Available Operations

* [Searchdocuments](#searchdocuments) - Search documents

## Searchdocuments

Search documents by the query parameters described below.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

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
    res, err := s.Search.Searchdocuments(ctx, operations.SearchdocumentsRequest{
        Accept: "provident",
        ContentType: "minima",
        RESTRange: "repellendus",
        Fields: sdk.String("totam"),
        Keyword: sdk.String("similique"),
        Schema: sdk.String("alias"),
        Sort: sdk.String("at"),
        Where: sdk.String("quaerat"),
        Acronym: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
