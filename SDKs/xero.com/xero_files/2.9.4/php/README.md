# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### files

* `createFileAssociation` - Creates a new file association
* `createFolder` - Creates a new folder
* `deleteFile` - Deletes a specific file
* `deleteFileAssociation` - Deletes an existing file association
* `deleteFolder` - Deletes a folder
* `getAssociationsByObject` - Retrieves an association object using a unique object ID
* `getFile` - Retrieves a file by a unique file ID
* `getFileAssociations` - Retrieves a specific file associations
* `getFileContent` - Retrieves the content of a specific file
* `getFiles` - Retrieves files
* `getFolder` - Retrieves specific folder by using a unique folder ID
* `getFolders` - Retrieves folders
* `getInbox` - Retrieves inbox folder
* `updateFile` - Update a file
* `updateFolder` - Updates an existing folder
* `uploadFile` - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
