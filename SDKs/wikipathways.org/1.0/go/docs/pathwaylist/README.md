# PathwayList

### Available Operations

* [GetGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetListPathways](#getlistpathways) - listPathways

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
    res, err := s.PathwayList.GetGetCurationTagsByName(ctx, operations.GetGetCurationTagsByNameRequest{
        Format: operations.GetGetCurationTagsByNameFormatEnumDump.ToPointer(),
        TagName: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathwaysByOntologyTerm

getPathwaysByOntologyTerm

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
    res, err := s.PathwayList.GetGetPathwaysByOntologyTerm(ctx, operations.GetGetPathwaysByOntologyTermRequest{
        Format: operations.GetGetPathwaysByOntologyTermFormatEnumJSON.ToPointer(),
        Term: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathwaysByParentOntologyTerm

getPathwaysByParentOntologyTerm

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
    res, err := s.PathwayList.GetGetPathwaysByParentOntologyTerm(ctx, operations.GetGetPathwaysByParentOntologyTermRequest{
        Format: operations.GetGetPathwaysByParentOntologyTermFormatEnumJpg.ToPointer(),
        Term: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetListPathways

listPathways

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
    res, err := s.PathwayList.GetListPathways(ctx, operations.GetListPathwaysRequest{
        Format: operations.GetListPathwaysFormatEnumJSON.ToPointer(),
        Organism: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
