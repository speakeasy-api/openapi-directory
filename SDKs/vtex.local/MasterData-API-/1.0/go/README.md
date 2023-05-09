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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.Retrieveattachment(ctx, operations.RetrieveattachmentRequest{
        Acronym: "corrupti",
        Field: "provident",
        FileName: "distinctio",
        ID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
    })
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


### [Attachments](docs/attachments/README.md)

* [Retrieveattachment](docs/attachments/README.md#retrieveattachment) - Retrieve attachment
* [Saveattachment](docs/attachments/README.md#saveattachment) - Save attachment

### [Clusters](docs/clusters/README.md)

* [ValidateDocumentbyClusters](docs/clusters/README.md#validatedocumentbyclusters) - Validate Document by Clusters

### [DataEntities](docs/dataentities/README.md)

* [Getdataentitystructure](docs/dataentities/README.md#getdataentitystructure) - Get data entity structure
* [Listdataentities](docs/dataentities/README.md#listdataentities) - List data entities

### [Documents](docs/documents/README.md)

* [Createnewdocument](docs/documents/README.md#createnewdocument) - Create new document
* [Createorupdateentiredocument](docs/documents/README.md#createorupdateentiredocument) - Create or update entire document
* [Createorupdatepartialdocument](docs/documents/README.md#createorupdatepartialdocument) - Create or update partial document
* [Deletedocument](docs/documents/README.md#deletedocument) - Delete document
* [Getdocument](docs/documents/README.md#getdocument) - Get document
* [Updateentiredocument](docs/documents/README.md#updateentiredocument) - Update entire document
* [Updatepartialdocument](docs/documents/README.md#updatepartialdocument) - Update partial document

### [Score](docs/score/README.md)

* [Deletescorebyfield](docs/score/README.md#deletescorebyfield) - Delete score by field
* [Putscorebyfield](docs/score/README.md#putscorebyfield) - Put score by field
* [Putscores](docs/score/README.md#putscores) - Put scores

### [Scroll](docs/scroll/README.md)

* [Scrolldocuments](docs/scroll/README.md#scrolldocuments) - Scroll documents

### [Search](docs/search/README.md)

* [Searchdocuments](docs/search/README.md#searchdocuments) - Search documents

### [Versions](docs/versions/README.md)

* [Getversion](docs/versions/README.md#getversion) - Get version
* [Listversions](docs/versions/README.md#listversions) - List versions
* [Putversion](docs/versions/README.md#putversion) - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
