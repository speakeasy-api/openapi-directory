# AllFunctions

### Available Operations

* [GetFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [GetFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [GetFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [GetFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [GetGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [GetGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetGetPathway](#getgetpathway) - getPathway
* [GetGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [GetGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [GetGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* [GetGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* [GetGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [GetGetXrefList](#getgetxreflist) - getXrefList
* [GetListOrganisms](#getlistorganisms) - listOrganisms
* [GetListPathways](#getlistpathways) - listPathways
* [GetLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* [GetRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.
* [GetRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [GetSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [GetSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [GetUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [PostCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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
    res, err := s.AllFunctions.GetFindInteractions(ctx, operations.GetFindInteractionsRequest{
        Format: operations.GetFindInteractionsFormatEnumJpg.ToPointer(),
        Query: "quibusdam",
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
    res, err := s.AllFunctions.GetFindPathwaysByLiterature(ctx, operations.GetFindPathwaysByLiteratureRequest{
        Format: operations.GetFindPathwaysByLiteratureFormatEnumDump.ToPointer(),
        Query: "nulla",
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
    res, err := s.AllFunctions.GetFindPathwaysByText(ctx, operations.GetFindPathwaysByTextRequest{
        Format: operations.GetFindPathwaysByTextFormatEnumDump.ToPointer(),
        Query: "illum",
        Species: sdk.String("vel"),
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
    res, err := s.AllFunctions.GetFindPathwaysByXref(ctx, operations.GetFindPathwaysByXrefRequest{
        Codes: []interface{}{
            "deserunt",
            "suscipit",
            "iure",
        },
        Format: operations.GetFindPathwaysByXrefFormatEnumXML.ToPointer(),
        Ids: []interface{}{
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
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
    res, err := s.AllFunctions.GetGetColoredPathway(ctx, operations.GetGetColoredPathwayRequest{
        Color: []interface{}{
            "minus",
            "placeat",
        },
        FileType: "voluptatum",
        Format: operations.GetGetColoredPathwayFormatEnumHTML.ToPointer(),
        GraphID: []interface{}{
            "nisi",
            "recusandae",
            "temporibus",
        },
        PwID: "ab",
        Revision: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

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
    res, err := s.AllFunctions.GetGetCurationTagHistory(ctx, operations.GetGetCurationTagHistoryRequest{
        Format: operations.GetGetCurationTagHistoryFormatEnumJSON.ToPointer(),
        PwID: "deserunt",
        Timestamp: sdk.String("perferendis"),
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
    res, err := s.AllFunctions.GetGetCurationTags(ctx, operations.GetGetCurationTagsRequest{
        Format: operations.GetGetCurationTagsFormatEnumHTML.ToPointer(),
        PwID: "repellendus",
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
    res, err := s.AllFunctions.GetGetCurationTagsByName(ctx, operations.GetGetCurationTagsByNameRequest{
        Format: operations.GetGetCurationTagsByNameFormatEnumPdf.ToPointer(),
        TagName: "quo",
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
    res, err := s.AllFunctions.GetGetOntologyTermsByPathway(ctx, operations.GetGetOntologyTermsByPathwayRequest{
        Format: operations.GetGetOntologyTermsByPathwayFormatEnumJSON.ToPointer(),
        PwID: "at",
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
    res, err := s.AllFunctions.GetGetPathway(ctx, operations.GetGetPathwayRequest{
        Format: operations.GetGetPathwayFormatEnumPdf.ToPointer(),
        PwID: "maiores",
        Revision: sdk.Int64(473608),
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
    res, err := s.AllFunctions.GetGetPathwayAs(ctx, operations.GetGetPathwayAsRequest{
        FileType: "quod",
        Format: operations.GetGetPathwayAsFormatEnumJpg.ToPointer(),
        PwID: "esse",
        Revision: sdk.Int64(520478),
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
    res, err := s.AllFunctions.GetGetPathwayHistory(ctx, operations.GetGetPathwayHistoryRequest{
        Format: operations.GetGetPathwayHistoryFormatEnumJpg.ToPointer(),
        PwID: "dolorum",
        Timestamp: "dicta",
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
    res, err := s.AllFunctions.GetGetPathwayInfo(ctx, operations.GetGetPathwayInfoRequest{
        Format: operations.GetGetPathwayInfoFormatEnumJpg.ToPointer(),
        PwID: "officia",
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
    res, err := s.AllFunctions.GetGetPathwaysByOntologyTerm(ctx, operations.GetGetPathwaysByOntologyTermRequest{
        Format: operations.GetGetPathwaysByOntologyTermFormatEnumDump.ToPointer(),
        Term: "fugit",
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
    res, err := s.AllFunctions.GetGetPathwaysByParentOntologyTerm(ctx, operations.GetGetPathwaysByParentOntologyTermRequest{
        Format: operations.GetGetPathwaysByParentOntologyTermFormatEnumDump.ToPointer(),
        Term: "hic",
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
    res, err := s.AllFunctions.GetGetRecentChanges(ctx, operations.GetGetRecentChangesRequest{
        Format: operations.GetGetRecentChangesFormatEnumJpg.ToPointer(),
        Timestamp: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetUserByOrcid

getUserByOrcid

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
    res, err := s.AllFunctions.GetGetUserByOrcid(ctx, operations.GetGetUserByOrcidRequest{
        Format: operations.GetGetUserByOrcidFormatEnumJSON.ToPointer(),
        Orcid: "commodi",
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
    res, err := s.AllFunctions.GetGetXrefList(ctx, operations.GetGetXrefListRequest{
        Code: "molestiae",
        Format: operations.GetGetXrefListFormatEnumXML.ToPointer(),
        PwID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetListOrganisms

listOrganisms

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
    res, err := s.AllFunctions.GetListOrganisms(ctx, operations.GetListOrganismsRequest{
        Format: operations.GetListOrganismsFormatEnumJpg.ToPointer(),
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
    res, err := s.AllFunctions.GetListPathways(ctx, operations.GetListPathwaysRequest{
        Format: operations.GetListPathwaysFormatEnumJpg.ToPointer(),
        Organism: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

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
    res, err := s.AllFunctions.GetLogin(ctx, operations.GetLoginRequest{
        Format: operations.GetLoginFormatEnumXML.ToPointer(),
        Name: "Brandon Auer",
        Pass: "sed",
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
    res, err := s.AllFunctions.GetRemoveCurationTag(ctx, operations.GetRemoveCurationTagRequest{
        Auth: "iste",
        Format: operations.GetRemoveCurationTagFormatEnumXML.ToPointer(),
        PwID: "natus",
        TagName: "laboriosam",
        Username: "Tyra.Turcotte35",
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
    res, err := s.AllFunctions.GetRemoveOntologyTag(ctx, operations.GetRemoveOntologyTagRequest{
        Auth: "iste",
        Format: operations.GetRemoveOntologyTagFormatEnumHTML.ToPointer(),
        PwID: "saepe",
        TermID: "quidem",
        User: "architecto",
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
    res, err := s.AllFunctions.GetSaveCurationTag(ctx, operations.GetSaveCurationTagRequest{
        Auth: "ipsa",
        Format: operations.GetSaveCurationTagFormatEnumPdf.ToPointer(),
        PwID: "est",
        Revision: 653140,
        TagName: "laborum",
        Text: "dolores",
        Username: "Corrine75",
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
    res, err := s.AllFunctions.GetSaveOntologyTag(ctx, operations.GetSaveOntologyTagRequest{
        Auth: "enim",
        Format: operations.GetSaveOntologyTagFormatEnumDump.ToPointer(),
        PwID: "nemo",
        Term: "minima",
        TermID: "excepturi",
        User: "accusantium",
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
    res, err := s.AllFunctions.GetUpdatePathway(ctx, operations.GetUpdatePathwayRequest{
        Auth: "iure",
        Description: "culpa",
        Format: operations.GetUpdatePathwayFormatEnumPdf.ToPointer(),
        Gpml: "sapiente",
        PwID: "architecto",
        Revision: 652790,
        Username: "Cordie99",
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
    res, err := s.AllFunctions.PostCreatePathway(ctx, operations.PostCreatePathwayRequest{
        Auth: "mollitia",
        Format: operations.PostCreatePathwayFormatEnumDump.ToPointer(),
        Gpml: "numquam",
        Username: "Harvey.Konopelski",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
