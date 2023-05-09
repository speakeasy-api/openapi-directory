# PathwayInformation

### Available Operations

* [GetGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetGetPathway](#getgetpathway) - getPathway
* [GetGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

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
    res, err := s.PathwayInformation.GetGetCurationTags(ctx, operations.GetGetCurationTagsRequest{
        Format: operations.GetGetCurationTagsFormatEnumPdf.ToPointer(),
        PwID: "explicabo",
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
    res, err := s.PathwayInformation.GetGetOntologyTermsByPathway(ctx, operations.GetGetOntologyTermsByPathwayRequest{
        Format: operations.GetGetOntologyTermsByPathwayFormatEnumDump.ToPointer(),
        PwID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathway

getPathway

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
    res, err := s.PathwayInformation.GetGetPathway(ctx, operations.GetGetPathwayRequest{
        Format: operations.GetGetPathwayFormatEnumPdf.ToPointer(),
        PwID: "labore",
        Revision: sdk.Int64(264730),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathwayInfo

getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

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
    res, err := s.PathwayInformation.GetGetPathwayInfo(ctx, operations.GetGetPathwayInfoRequest{
        Format: operations.GetGetPathwayInfoFormatEnumXML.ToPointer(),
        PwID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
