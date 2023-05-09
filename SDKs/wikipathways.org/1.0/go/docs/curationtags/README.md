# CurationTags

### Available Operations

* [GetGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetSaveCurationTag](#getsavecurationtag) - saveCurationTag

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
    res, err := s.CurationTags.GetGetCurationTagHistory(ctx, operations.GetGetCurationTagHistoryRequest{
        Format: operations.GetGetCurationTagHistoryFormatEnumDump.ToPointer(),
        PwID: "quia",
        Timestamp: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetCurationTags

getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

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
    res, err := s.CurationTags.GetGetCurationTags(ctx, operations.GetGetCurationTagsRequest{
        Format: operations.GetGetCurationTagsFormatEnumJSON.ToPointer(),
        PwID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetCurationTagsByName

getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

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
    res, err := s.CurationTags.GetGetCurationTagsByName(ctx, operations.GetGetCurationTagsByNameRequest{
        Format: operations.GetGetCurationTagsByNameFormatEnumDump.ToPointer(),
        TagName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetOntologyTermsByPathway

getOntologyTermsByPathway

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
    res, err := s.CurationTags.GetGetOntologyTermsByPathway(ctx, operations.GetGetOntologyTermsByPathwayRequest{
        Format: operations.GetGetOntologyTermsByPathwayFormatEnumJSON.ToPointer(),
        PwID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSaveCurationTag

saveCurationTag

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
    res, err := s.CurationTags.GetSaveCurationTag(ctx, operations.GetSaveCurationTagRequest{
        Auth: "sequi",
        Format: operations.GetSaveCurationTagFormatEnumPdf.ToPointer(),
        PwID: "ipsam",
        Revision: 662527,
        TagName: "possimus",
        Text: "aut",
        Username: "Avery_Mueller9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
