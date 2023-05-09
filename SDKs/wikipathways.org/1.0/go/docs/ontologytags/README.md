# OntologyTags

### Available Operations

* [GetGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [GetSaveOntologyTag](#getsaveontologytag) - saveOntologyTag

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
    res, err := s.OntologyTags.GetGetPathwaysByOntologyTerm(ctx, operations.GetGetPathwaysByOntologyTermRequest{
        Format: operations.GetGetPathwaysByOntologyTermFormatEnumDump.ToPointer(),
        Term: "excepturi",
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
    res, err := s.OntologyTags.GetGetPathwaysByParentOntologyTerm(ctx, operations.GetGetPathwaysByParentOntologyTermRequest{
        Format: operations.GetGetPathwaysByParentOntologyTermFormatEnumPdf.ToPointer(),
        Term: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRemoveOntologyTag

removeOntologyTag

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
    res, err := s.OntologyTags.GetRemoveOntologyTag(ctx, operations.GetRemoveOntologyTagRequest{
        Auth: "praesentium",
        Format: operations.GetRemoveOntologyTagFormatEnumDump.ToPointer(),
        PwID: "voluptates",
        TermID: "quasi",
        User: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSaveOntologyTag

saveOntologyTag

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
    res, err := s.OntologyTags.GetSaveOntologyTag(ctx, operations.GetSaveOntologyTagRequest{
        Auth: "sint",
        Format: operations.GetSaveOntologyTagFormatEnumJSON.ToPointer(),
        PwID: "itaque",
        Term: "incidunt",
        TermID: "enim",
        User: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
