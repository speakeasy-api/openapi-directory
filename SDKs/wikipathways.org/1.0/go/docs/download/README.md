# Download

### Available Operations

* [GetGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [GetGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [GetGetXrefList](#getgetxreflist) - getXrefList

## GetGetColoredPathway

getColoredPathwayGet a colored image version of the pathway.

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
    res, err := s.Download.GetGetColoredPathway(ctx, operations.GetGetColoredPathwayRequest{
        Color: []interface{}{
            "voluptatibus",
            "vero",
            "nihil",
            "praesentium",
        },
        FileType: "voluptatibus",
        Format: operations.GetGetColoredPathwayFormatEnumJSON.ToPointer(),
        GraphID: []interface{}{
            "voluptate",
            "cum",
            "perferendis",
        },
        PwID: "doloremque",
        Revision: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetPathwayAs

getPathwayAsDownload a pathway in the specified file format.

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
    res, err := s.Download.GetGetPathwayAs(ctx, operations.GetGetPathwayAsRequest{
        FileType: "ut",
        Format: operations.GetGetPathwayAsFormatEnumPdf.ToPointer(),
        PwID: "dicta",
        Revision: sdk.Int64(359444),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetXrefList

getXrefList

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
    res, err := s.Download.GetGetXrefList(ctx, operations.GetGetXrefListRequest{
        Code: "dolore",
        Format: operations.GetGetXrefListFormatEnumHTML.ToPointer(),
        PwID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
