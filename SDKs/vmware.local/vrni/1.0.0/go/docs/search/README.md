# Search

## Overview

Search APIs

### Available Operations

* [SearchEntities](#searchentities) - Search entities

## SearchEntities

Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
list of entity ids that matches the search criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchEntities(ctx, shared.SearchRequest{
        Cursor: sdk.String("vero"),
        EntityType: shared.AllEntityTypeEnumBaseService.ToPointer(),
        Filter: sdk.String("quas"),
        Size: sdk.Int(98578),
        SortBy: &shared.SortByClause{
            Field: sdk.String("architecto"),
            Order: shared.SortByClauseOrderEnumDesc.ToPointer(),
        },
        TimeRange: &shared.TimeRange{
            EndTime: sdk.Int64(483501),
            StartTime: sdk.Int64(854800),
        },
    }, operations.SearchEntitiesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```
