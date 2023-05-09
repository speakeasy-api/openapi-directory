# History

### Available Operations

* [GetGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [GetGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

## GetGetCurationTagHistory

getCurationTagHistory

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.GetGetCurationTagHistory(ctx, operations.GetGetCurationTagHistoryRequest{
        Format: operations.GetGetCurationTagHistoryFormatEnumJpg.ToPointer(),
        PwID: "enim",
        Timestamp: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathwayHistory

getPathwayHistoryGet the revision history of a pathway.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.GetGetPathwayHistory(ctx, operations.GetGetPathwayHistoryRequest{
        Format: operations.GetGetPathwayHistoryFormatEnumHTML.ToPointer(),
        PwID: "repudiandae",
        Timestamp: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetRecentChanges

getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.History.GetGetRecentChanges(ctx, operations.GetGetRecentChangesRequest{
        Format: operations.GetGetRecentChangesFormatEnumXML.ToPointer(),
        Timestamp: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
