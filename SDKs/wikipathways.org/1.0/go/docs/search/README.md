# Search

### Available Operations

* [GetFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [GetFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [GetFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [GetFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [GetRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.

## GetFindInteractions

findInteractionsFind interactions defined in WikiPathways pathways.

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
    res, err := s.Search.GetFindInteractions(ctx, operations.GetFindInteractionsRequest{
        Format: operations.GetFindInteractionsFormatEnumJpg.ToPointer(),
        Query: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFindPathwaysByLiterature

findPathwaysByLiterature

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
    res, err := s.Search.GetFindPathwaysByLiterature(ctx, operations.GetFindPathwaysByLiteratureRequest{
        Format: operations.GetFindPathwaysByLiteratureFormatEnumXML.ToPointer(),
        Query: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFindPathwaysByText

findPathwaysByText

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
    res, err := s.Search.GetFindPathwaysByText(ctx, operations.GetFindPathwaysByTextRequest{
        Format: operations.GetFindPathwaysByTextFormatEnumJpg.ToPointer(),
        Query: "labore",
        Species: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFindPathwaysByXref

findPathwaysByXref

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
    res, err := s.Search.GetFindPathwaysByXref(ctx, operations.GetFindPathwaysByXrefRequest{
        Codes: []interface{}{
            "non",
            "eligendi",
        },
        Format: operations.GetFindPathwaysByXrefFormatEnumDump.ToPointer(),
        Ids: []interface{}{
            "provident",
            "necessitatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRemoveCurationTag

removeCurationTagRemove a curation tag from a pathway.

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
    res, err := s.Search.GetRemoveCurationTag(ctx, operations.GetRemoveCurationTagRequest{
        Auth: "sint",
        Format: operations.GetRemoveCurationTagFormatEnumDump.ToPointer(),
        PwID: "dolor",
        TagName: "debitis",
        Username: "Veda.Parisian",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
