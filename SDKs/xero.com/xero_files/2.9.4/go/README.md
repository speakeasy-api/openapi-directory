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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateFileAssociationRequest{
        Association: &shared.Association{
            FileID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
            ObjectGroup: "Overpayment",
            ObjectID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            ObjectType: "Current",
        },
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "esse",
    }

    ctx := context.Background()
    res, err := s.Files.CreateFileAssociation(ctx, req, operations.CreateFileAssociationSecurity{
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


### Files

* `CreateFileAssociation` - Creates a new file association
* `CreateFolder` - Creates a new folder
* `DeleteFile` - Deletes a specific file
* `DeleteFileAssociation` - Deletes an existing file association
* `DeleteFolder` - Deletes a folder
* `GetAssociationsByObject` - Retrieves an association object using a unique object ID
* `GetFile` - Retrieves a file by a unique file ID
* `GetFileAssociations` - Retrieves a specific file associations
* `GetFileContent` - Retrieves the content of a specific file
* `GetFiles` - Retrieves files
* `GetFolder` - Retrieves specific folder by using a unique folder ID
* `GetFolders` - Retrieves folders
* `GetInbox` - Retrieves inbox folder
* `UpdateFile` - Update a file
* `UpdateFolder` - Updates an existing folder
* `UploadFile` - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
