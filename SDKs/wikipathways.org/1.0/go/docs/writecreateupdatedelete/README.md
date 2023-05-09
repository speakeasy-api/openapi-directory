# WriteCreateUpdateDelete

### Available Operations

* [GetRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [GetSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [GetSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [GetUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [PostCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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
    res, err := s.WriteCreateUpdateDelete.GetRemoveOntologyTag(ctx, operations.GetRemoveOntologyTagRequest{
        Auth: "laborum",
        Format: operations.GetRemoveOntologyTagFormatEnumPdf.ToPointer(),
        PwID: "non",
        TermID: "occaecati",
        User: "enim",
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
    res, err := s.WriteCreateUpdateDelete.GetSaveCurationTag(ctx, operations.GetSaveCurationTagRequest{
        Auth: "accusamus",
        Format: operations.GetSaveCurationTagFormatEnumPdf.ToPointer(),
        PwID: "quidem",
        Revision: 588465,
        TagName: "nam",
        Text: "id",
        Username: "Jewell.Lesch64",
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
    res, err := s.WriteCreateUpdateDelete.GetSaveOntologyTag(ctx, operations.GetSaveOntologyTagRequest{
        Auth: "nisi",
        Format: operations.GetSaveOntologyTagFormatEnumHTML.ToPointer(),
        PwID: "natus",
        Term: "omnis",
        TermID: "molestiae",
        User: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUpdatePathway

updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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
    res, err := s.WriteCreateUpdateDelete.GetUpdatePathway(ctx, operations.GetUpdatePathwayRequest{
        Auth: "nihil",
        Description: "magnam",
        Format: operations.GetUpdatePathwayFormatEnumJpg.ToPointer(),
        Gpml: "id",
        PwID: "labore",
        Revision: 290077,
        Username: "Geraldine.Mosciski87",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCreatePathway

createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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
    res, err := s.WriteCreateUpdateDelete.PostCreatePathway(ctx, operations.PostCreatePathwayRequest{
        Auth: "aspernatur",
        Format: operations.PostCreatePathwayFormatEnumJSON.ToPointer(),
        Gpml: "magnam",
        Username: "Audrey_Marks",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
