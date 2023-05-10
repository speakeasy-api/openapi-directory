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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Association;
use \OpenAPI\OpenAPI\Models\Shared\ObjectGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileAssociationRequest();
    $request->association = new Association();
    $request->association->fileId = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->association->objectGroup = ObjectGroupEnum::OVERPAYMENT;
    $request->association->objectId = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->association->objectType = ObjectTypeEnum::CURRENT;
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'esse';

    $requestSecurity = new CreateFileAssociationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->createFileAssociation($request, $requestSecurity);

    if ($response->association !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [files](docs/files/README.md)

* [createFileAssociation](docs/files/README.md#createfileassociation) - Creates a new file association
* [createFolder](docs/files/README.md#createfolder) - Creates a new folder
* [deleteFile](docs/files/README.md#deletefile) - Deletes a specific file
* [deleteFileAssociation](docs/files/README.md#deletefileassociation) - Deletes an existing file association
* [deleteFolder](docs/files/README.md#deletefolder) - Deletes a folder
* [getAssociationsByObject](docs/files/README.md#getassociationsbyobject) - Retrieves an association object using a unique object ID
* [getFile](docs/files/README.md#getfile) - Retrieves a file by a unique file ID
* [getFileAssociations](docs/files/README.md#getfileassociations) - Retrieves a specific file associations
* [getFileContent](docs/files/README.md#getfilecontent) - Retrieves the content of a specific file
* [getFiles](docs/files/README.md#getfiles) - Retrieves files
* [getFolder](docs/files/README.md#getfolder) - Retrieves specific folder by using a unique folder ID
* [getFolders](docs/files/README.md#getfolders) - Retrieves folders
* [getInbox](docs/files/README.md#getinbox) - Retrieves inbox folder
* [updateFile](docs/files/README.md#updatefile) - Update a file
* [updateFolder](docs/files/README.md#updatefolder) - Updates an existing folder
* [uploadFile](docs/files/README.md#uploadfile) - Uploads a File
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
