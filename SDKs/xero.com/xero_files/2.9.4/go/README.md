# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/xero.com/xero_files/2.9.4/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Files.CreateFileAssociation(ctx, operations.CreateFileAssociationRequest{
        Association: &shared.Association{
            FileID: sdk.String("89bd9d8d-69a6-474e-8f46-7cc8796ed151"),
            ObjectGroup: shared.ObjectGroupEnumOverpayment.ToPointer(),
            ObjectID: sdk.String("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
            ObjectType: shared.ObjectTypeEnumCurrent.ToPointer(),
        },
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "esse",
    }, operations.CreateFileAssociationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Association != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Files](docs/files/README.md)

* [CreateFileAssociation](docs/files/README.md#createfileassociation) - Creates a new file association
* [CreateFolder](docs/files/README.md#createfolder) - Creates a new folder
* [DeleteFile](docs/files/README.md#deletefile) - Deletes a specific file
* [DeleteFileAssociation](docs/files/README.md#deletefileassociation) - Deletes an existing file association
* [DeleteFolder](docs/files/README.md#deletefolder) - Deletes a folder
* [GetAssociationsByObject](docs/files/README.md#getassociationsbyobject) - Retrieves an association object using a unique object ID
* [GetFile](docs/files/README.md#getfile) - Retrieves a file by a unique file ID
* [GetFileAssociations](docs/files/README.md#getfileassociations) - Retrieves a specific file associations
* [GetFileContent](docs/files/README.md#getfilecontent) - Retrieves the content of a specific file
* [GetFiles](docs/files/README.md#getfiles) - Retrieves files
* [GetFolder](docs/files/README.md#getfolder) - Retrieves specific folder by using a unique folder ID
* [GetFolders](docs/files/README.md#getfolders) - Retrieves folders
* [GetInbox](docs/files/README.md#getinbox) - Retrieves inbox folder
* [UpdateFile](docs/files/README.md#updatefile) - Update a file
* [UpdateFolder](docs/files/README.md#updatefolder) - Updates an existing folder
* [UploadFile](docs/files/README.md#uploadfile) - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
