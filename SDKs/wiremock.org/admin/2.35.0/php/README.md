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

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->nearMisses->getAdminRequestsUnmatchedNearMisses();

    if ($response->getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [nearMisses](docs/nearmisses/README.md)

* [getAdminRequestsUnmatchedNearMisses](docs/nearmisses/README.md#getadminrequestsunmatchednearmisses) - Retrieve near-misses for all unmatched requests
* [postAdminNearMissesRequest](docs/nearmisses/README.md#postadminnearmissesrequest) - Find near misses matching specific request
* [postAdminNearMissesRequestPattern](docs/nearmisses/README.md#postadminnearmissesrequestpattern) - Find near misses matching request pattern

### [recordings](docs/recordings/README.md)

* [getAdminRecordingsStatus](docs/recordings/README.md#getadminrecordingsstatus) - Get recording status
* [postAdminRecordingsSnapshot](docs/recordings/README.md#postadminrecordingssnapshot) - Take a snapshot recording
* [postAdminRecordingsStart](docs/recordings/README.md#postadminrecordingsstart) - Start recording
* [postAdminRecordingsStop](docs/recordings/README.md#postadminrecordingsstop) - Stop recording

### [requests](docs/requests/README.md)

* [deleteAdminRequests](docs/requests/README.md#deleteadminrequests) - Delete all requests in journal
* [deleteAdminRequestsRequestId](docs/requests/README.md#deleteadminrequestsrequestid) - Delete request by ID
* [getAdminRequests](docs/requests/README.md#getadminrequests) - Get all requests in journal
* [getAdminRequestsUnmatched](docs/requests/README.md#getadminrequestsunmatched) - Find unmatched requests
* [getAdminRequestsRequestId](docs/requests/README.md#getadminrequestsrequestid) - Get request by ID
* [postAdminRequestsCount](docs/requests/README.md#postadminrequestscount) - Count requests by criteria
* [postAdminRequestsFind](docs/requests/README.md#postadminrequestsfind) - Find requests by criteria
* [postAdminRequestsRemove](docs/requests/README.md#postadminrequestsremove) - Remove requests by criteria
* [postAdminRequestsRemoveByMetadata](docs/requests/README.md#postadminrequestsremovebymetadata) - Delete requests mappings matching metadata
* [~~postAdminRequestsReset~~](docs/requests/README.md#postadminrequestsreset) - Empty the request journal :warning: **Deprecated**

### [scenarios](docs/scenarios/README.md)

* [getAdminScenarios](docs/scenarios/README.md#getadminscenarios) - Get all scenarios
* [postAdminScenariosReset](docs/scenarios/README.md#postadminscenariosreset) - Reset the state of all scenarios

### [stubMappings](docs/stubmappings/README.md)

* [deleteAdminMappings](docs/stubmappings/README.md#deleteadminmappings) - Delete all stub mappings
* [deleteAdminMappingsStubMappingId](docs/stubmappings/README.md#deleteadminmappingsstubmappingid) - Delete a stub mapping
* [getAdminMappings](docs/stubmappings/README.md#getadminmappings) - Get all stub mappings
* [getAdminMappingsStubMappingId](docs/stubmappings/README.md#getadminmappingsstubmappingid) - Get stub mapping by ID
* [postAdminMappings](docs/stubmappings/README.md#postadminmappings) - Create a new stub mapping
* [postAdminMappingsFindByMetadata](docs/stubmappings/README.md#postadminmappingsfindbymetadata) - Find stubs by matching on their metadata
* [postAdminMappingsImport](docs/stubmappings/README.md#postadminmappingsimport) - Import stub mappings
* [postAdminMappingsRemoveByMetadata](docs/stubmappings/README.md#postadminmappingsremovebymetadata) - Delete stub mappings matching metadata
* [postAdminMappingsReset](docs/stubmappings/README.md#postadminmappingsreset) - Reset stub mappings
* [postAdminMappingsSave](docs/stubmappings/README.md#postadminmappingssave) - Persist stub mappings
* [putAdminMappingsStubMappingId](docs/stubmappings/README.md#putadminmappingsstubmappingid) - Update a stub mapping

### [system](docs/system/README.md)

* [postAdminReset](docs/system/README.md#postadminreset) - Reset mappings and request journal
* [postAdminSettings](docs/system/README.md#postadminsettings) - Update global settings
* [postAdminShutdown](docs/system/README.md#postadminshutdown) - Shutdown the WireMock server
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
