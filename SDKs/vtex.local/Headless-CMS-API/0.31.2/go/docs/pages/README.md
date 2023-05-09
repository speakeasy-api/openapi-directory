# Pages

### Available Operations

* [GetAllContentTypes](#getallcontenttypes) - Get all Content Types
* [GetCMSpage](#getcmspage) - Get CMS page
* [GetPagesbyContentType](#getpagesbycontenttype) - Get all CMS pages by Content Type

## GetAllContentTypes

Gets data from all Content Types.

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
    res, err := s.Pages.GetAllContentTypes(ctx, operations.GetAllContentTypesRequest{
        BuilderID: "faststore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllContentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCMSpage

Gets all data from a given page.

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
    res, err := s.Pages.GetCMSpage(ctx, operations.GetCMSpageRequest{
        BuilderID: "faststore",
        ContentType: "plp",
        DocumentID: "5af643b5-9a6d-48f2-9b34-919dd762c908",
        ReleaseID: sdk.String("6196c277c6dce15f9709a2a7"),
        VersionID: sdk.String("e7263fc8-bc68-4052-9e25-dd5a2572d3bb"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCMSpage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPagesbyContentType

Gets data from all pages of a given Content Type.

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
    res, err := s.Pages.GetPagesbyContentType(ctx, operations.GetPagesbyContentTypeRequest{
        BuilderID: "faststore",
        ContentType: "plp",
        FiltersField: sdk.String("published"),
        ReleaseID: sdk.String("6196c277c6dce15f9709a2a7"),
        VersionID: sdk.String("e7263fc8-bc68-4052-9e25-dd5a2572d3bb"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPagesbyContentType200ApplicationJSONObject != nil {
        // handle response
    }
}
```
