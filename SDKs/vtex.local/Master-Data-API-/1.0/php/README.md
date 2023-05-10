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
use \OpenAPI\OpenAPI\Models\Operations\CreateNewCustomerAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdateAddressRequests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewCustomerAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = 'schema';
    $request->createUpdateAddressRequests = new CreateUpdateAddressRequests();
    $request->createUpdateAddressRequests->addressName = 'My house';
    $request->createUpdateAddressRequests->addressType = 'residential';
    $request->createUpdateAddressRequests->city = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->complement = '3rd floor';
    $request->createUpdateAddressRequests->country = 'BRA';
    $request->createUpdateAddressRequests->neighborhood = 'Botafogo';
    $request->createUpdateAddressRequests->number = '300';
    $request->createUpdateAddressRequests->postalCode = '12345-000';
    $request->createUpdateAddressRequests->receiverName = 'Clark Kent.';
    $request->createUpdateAddressRequests->reference = 'Grey building';
    $request->createUpdateAddressRequests->state = 'Rio de Janeiro';
    $request->createUpdateAddressRequests->street = 'Praia de Botafogo';
    $request->createUpdateAddressRequests->userId = '7e03m794-a33a-11e9-84rt6-0adfa64s5a8e';

    $response = $sdk->addresses->createNewCustomerAddress($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addresses](docs/addresses/README.md)

* [createNewCustomerAddress](docs/addresses/README.md#createnewcustomeraddress) - Create new customer address
* [deleteCustomerAddress](docs/addresses/README.md#deletecustomeraddress) - Delete customer address
* [updateCustomerAddress](docs/addresses/README.md#updatecustomeraddress) - Update customer address

### [clusters](docs/clusters/README.md)

* [validatedocumentbyclusters](docs/clusters/README.md#validatedocumentbyclusters) - Validate document by clusters

### [customerProfiles](docs/customerprofiles/README.md)

* [createNewCustomerProfilev2](docs/customerprofiles/README.md#createnewcustomerprofilev2) - Create new customer profile
* [deleteCustomerProfile](docs/customerprofiles/README.md#deletecustomerprofile) - Delete customer profile
* [updateCustomerProfile](docs/customerprofiles/README.md#updatecustomerprofile) - Update customer profile

### [documents](docs/documents/README.md)

* [createnewdocument](docs/documents/README.md#createnewdocument) - Create new document
* [createorupdatepartialdocument](docs/documents/README.md#createorupdatepartialdocument) - Create partial document
* [deletedocument](docs/documents/README.md#deletedocument) - Delete document
* [getdocument](docs/documents/README.md#getdocument) - Get document
* [updateentiredocument](docs/documents/README.md#updateentiredocument) - Update entire document
* [updatepartialdocument](docs/documents/README.md#updatepartialdocument) - Update partial document

### [indices](docs/indices/README.md)

* [deleteindexbyname](docs/indices/README.md#deleteindexbyname) - Delete index by name
* [getindexbyname](docs/indices/README.md#getindexbyname) - Get index by name
* [getindices](docs/indices/README.md#getindices) - Get indices
* [putindices](docs/indices/README.md#putindices) - Put indices

### [schemas](docs/schemas/README.md)

* [deleteschemabyname](docs/schemas/README.md#deleteschemabyname) - Delete schema by name
* [getschemabyname](docs/schemas/README.md#getschemabyname) - Get schema by name
* [getschemas](docs/schemas/README.md#getschemas) - Get schemas
* [saveschemabyname](docs/schemas/README.md#saveschemabyname) - Save schema by name

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
