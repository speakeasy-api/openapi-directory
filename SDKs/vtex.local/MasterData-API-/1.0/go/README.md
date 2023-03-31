# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/MasterData-API-/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.RetrieveattachmentRequest{
        Acronym: "corrupti",
        Field: "provident",
        FileName: "distinctio",
        ID: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.Attachments.Retrieveattachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Attachments

* `Retrieveattachment` - Retrieve attachment
* `Saveattachment` - Save attachment

### Clusters

* `ValidateDocumentbyClusters` - Validate Document by Clusters

### DataEntities

* `Getdataentitystructure` - Get data entity structure
* `Listdataentities` - List data entities

### Documents

* `Createnewdocument` - Create new document
* `Createorupdateentiredocument` - Create or update entire document
* `Createorupdatepartialdocument` - Create or update partial document
* `Deletedocument` - Delete document
* `Getdocument` - Get document
* `Updateentiredocument` - Update entire document
* `Updatepartialdocument` - Update partial document

### Score

* `Deletescorebyfield` - Delete score by field
* `Putscorebyfield` - Put score by field
* `Putscores` - Put scores

### Scroll

* `Scrolldocuments` - Scroll documents

### Search

* `Searchdocuments` - Search documents

### Versions

* `Getversion` - Get version
* `Listversions` - List versions
* `Putversion` - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
