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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveattachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveattachmentRequest();
    $request->acronym = 'corrupti';
    $request->field = 'provident';
    $request->fileName = 'distinctio';
    $request->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';

    $response = $sdk->attachments->retrieveattachment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attachments](docs/attachments/README.md)

* [retrieveattachment](docs/attachments/README.md#retrieveattachment) - Retrieve attachment
* [saveattachment](docs/attachments/README.md#saveattachment) - Save attachment

### [clusters](docs/clusters/README.md)

* [validateDocumentbyClusters](docs/clusters/README.md#validatedocumentbyclusters) - Validate Document by Clusters

### [dataEntities](docs/dataentities/README.md)

* [getdataentitystructure](docs/dataentities/README.md#getdataentitystructure) - Get data entity structure
* [listdataentities](docs/dataentities/README.md#listdataentities) - List data entities

### [documents](docs/documents/README.md)

* [createnewdocument](docs/documents/README.md#createnewdocument) - Create new document
* [createorupdateentiredocument](docs/documents/README.md#createorupdateentiredocument) - Create or update entire document
* [createorupdatepartialdocument](docs/documents/README.md#createorupdatepartialdocument) - Create or update partial document
* [deletedocument](docs/documents/README.md#deletedocument) - Delete document
* [getdocument](docs/documents/README.md#getdocument) - Get document
* [updateentiredocument](docs/documents/README.md#updateentiredocument) - Update entire document
* [updatepartialdocument](docs/documents/README.md#updatepartialdocument) - Update partial document

### [score](docs/score/README.md)

* [deletescorebyfield](docs/score/README.md#deletescorebyfield) - Delete score by field
* [putscorebyfield](docs/score/README.md#putscorebyfield) - Put score by field
* [putscores](docs/score/README.md#putscores) - Put scores

### [scroll](docs/scroll/README.md)

* [scrolldocuments](docs/scroll/README.md#scrolldocuments) - Scroll documents

### [search](docs/search/README.md)

* [searchdocuments](docs/search/README.md#searchdocuments) - Search documents

### [versions](docs/versions/README.md)

* [getversion](docs/versions/README.md#getversion) - Get version
* [listversions](docs/versions/README.md#listversions) - List versions
* [putversion](docs/versions/README.md#putversion) - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
